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
        class="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center"
      >
        <FloatingParticles />
        <p
          class="animate-fade-up opacity-0 font-display text-sm tracking-[0.5em] text-rose-glow/60 uppercase italic"
        >
          today
        </p>
        <h1
          class="animate-fade-up opacity-0 delay-100 font-display mt-6 text-7xl font-light text-cream md:text-9xl"
        >
          Happy Anniversary
        </h1>
        <p
          class="animate-fade-up opacity-0 delay-200 font-display mt-8 text-xl font-light text-cream/40 italic md:text-2xl"
        >
          {{ currentDateStr }}
        </p>
        <div class="animate-fade-up opacity-0 delay-300 mt-16 flex gap-3">
          <span class="text-3xl">❤️</span>
        </div>
      </div>

      <div
        v-else
        key="countdown"
        class="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center"
      >
        <p
          class="animate-fade-up opacity-0 font-display mb-6 text-sm tracking-[0.5em] text-cream/25 uppercase italic"
        >
          next anniversary
        </p>

        <h1
          class="animate-fade-up opacity-0 delay-100 font-display mb-16 text-5xl font-light text-cream md:text-7xl"
        >
          {{ targetDateStr }}
        </h1>

        <div
          class="animate-fade-up opacity-0 delay-200 flex items-end justify-center gap-2 md:gap-6"
        >
          <template
            v-for="(unit, i) in units"
            :key="unit"
          >
            <span
              v-if="i > 0"
              class="animate-tick font-code mb-6 text-3xl font-light text-cream/15 md:mb-10 md:text-5xl"
            >
              :
            </span>

            <div class="flex flex-col items-center gap-3">
              <span
                class="font-code min-w-[2ch] text-center text-7xl font-light tabular-nums text-cream md:text-[7.5rem] lg:text-[9rem]"
              >
                {{ String(remaining[unit]).padStart(2, '0') }}
              </span>
              <span
                class="font-display text-xs tracking-[0.35em] text-cream/25 uppercase italic"
              >
                {{ unit }}
              </span>
            </div>
          </template>
        </div>

        <div class="animate-fade-up opacity-0 delay-300 mx-auto mt-16 h-16 w-px bg-cream/8" />

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
