import { fdu } from '@pyyupsk/fdu'
import { computed, onUnmounted, ref, shallowRef, watch } from 'vue'

const ANNIVERSARY_DAY = 21

export function useCountdown() {
  const now = ref(fdu())

  const isAnniversary = computed(() => now.value.date() === ANNIVERSARY_DAY)

  // Only recompute when year or month changes, not every second
  const target = shallowRef(computeTarget(now.value))
  watch(
    () => `${now.value.year()}-${now.value.month()}`,
    () => { target.value = computeTarget(now.value) },
  )

  const remaining = computed(() => {
    if (isAnniversary.value) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const ms = target.value.valueOf() - now.value.valueOf()
    return {
      days: Math.floor(ms / 86_400_000),
      hours: Math.floor((ms % 86_400_000) / 3_600_000),
      minutes: Math.floor((ms % 3_600_000) / 60_000),
      seconds: Math.floor((ms % 60_000) / 1_000),
    }
  })

  const targetDateStr = computed(() => target.value.format('LL'))
  const currentDateStr = computed(() => now.value.format('LL'))

  const timer = setInterval(() => {
    now.value = fdu()
  }, 1_000)

  onUnmounted(() => clearInterval(timer))

  return { currentDateStr, isAnniversary, remaining, targetDateStr }
}

function computeTarget(now: ReturnType<typeof fdu>) {
  const y = now.year()
  const m = now.month()
  if (now.date() <= ANNIVERSARY_DAY) {
    return fdu(new Date(y, m, ANNIVERSARY_DAY, 0, 0, 0))
  }
  return fdu(new Date(y, m + 1, ANNIVERSARY_DAY, 0, 0, 0))
}
