<script setup lang="ts">
import { useCountdown } from './composables/useCountdown'

const { currentDateStr, isAnniversary, remaining, targetDateStr } = useCountdown()

const units = ['days', 'hours', 'minutes', 'seconds'] as const
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-ink">
    <div class="grain" />

    <div
      class="animate-glow pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-rose-glow blur-[120px]"
    />
    <div
      class="animate-glow delay-300 pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-glow blur-[100px]"
    />

    <Transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="isAnniversary"
        key="anniversary"
        class="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-8"
      >
        <FloatingParticles />
        <p
          class="animate-fade-up opacity-0 font-display text-sm tracking-[0.5em] text-rose-glow/60 uppercase italic"
        >
          today
        </p>
        <h1
          class="animate-fade-up opacity-0 delay-100 font-display mt-6 font-light text-cream"
          style="font-size: clamp(2.5rem, 10vw, 9rem)"
        >
          Happy Anniversary
        </h1>
        <p
          class="animate-fade-up opacity-0 delay-200 font-display mt-8 font-light text-cream/40 italic"
          style="font-size: clamp(1rem, 3vw, 1.5rem)"
        >
          {{ currentDateStr }}
        </p>
        <div class="animate-fade-up opacity-0 delay-300 mt-10 flex gap-3 sm:mt-16">
          <span class="text-3xl">❤️</span>
        </div>
      </div>

      <div
        v-else
        key="countdown"
        class="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-8"
      >
        <p
          class="animate-fade-up opacity-0 font-display mb-4 text-sm tracking-[0.5em] text-cream/25 uppercase italic sm:mb-6"
        >
          next anniversary
        </p>

        <h1
          class="animate-fade-up opacity-0 delay-100 font-display mb-8 font-light text-cream sm:mb-16"
          style="font-size: clamp(1.75rem, 6vw, 4.5rem)"
        >
          {{ targetDateStr }}
        </h1>

        <div
          class="animate-fade-up opacity-0 delay-200 flex items-end justify-center gap-1 sm:gap-4 md:gap-6"
        >
          <template
            v-for="(unit, i) in units"
            :key="unit"
          >
            <span
              v-if="i > 0"
              class="animate-tick font-code font-light text-cream/15"
              style="font-size: clamp(1.5rem, 5vw, 3rem); margin-bottom: clamp(1rem, 3vw, 2.5rem)"
            >
              :
            </span>

            <div class="flex flex-col items-center gap-2 sm:gap-3">
              <span
                class="font-code min-w-[2ch] text-center font-light tabular-nums text-cream"
                style="font-size: clamp(2.5rem, 12vw, 9rem)"
              >
                {{ String(remaining[unit]).padStart(2, '0') }}
              </span>
              <span
                class="font-display text-[0.6rem] tracking-[0.35em] text-cream/25 uppercase italic sm:text-xs"
              >
                {{ unit }}
              </span>
            </div>
          </template>
        </div>

        <div class="animate-fade-up opacity-0 delay-300 mx-auto mt-10 h-12 w-px bg-cream/8 sm:mt-16 sm:h-16" />

        <p
          class="animate-fade-up opacity-0 delay-400 font-display mt-6 text-sm text-cream/20 italic"
        >
          {{ currentDateStr }}
        </p>
      </div>
    </Transition>

    <!-- Footer -->
    <footer class="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
      <a
        href="https://github.com/pyyupsk/anniversary"
        target="_blank"
        rel="noopener noreferrer"
        class="font-display text-xs tracking-[0.3em] text-cream/15 uppercase italic transition-colors hover:text-cream/40"
      >
        open source
      </a>
    </footer>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
