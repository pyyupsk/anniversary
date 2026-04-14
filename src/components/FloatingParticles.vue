<script setup lang="ts">
type Particle = {
  delay: string
  drift: string
  duration: string
  left: string
  size: string
  symbol: string
}

const particles: Particle[] = [
  { delay: '0s', drift: '15px', duration: '5.2s', left: '7%', size: '18px', symbol: '❤️' },
  { delay: '1.4s', drift: '-10px', duration: '6.1s', left: '15%', size: '10px', symbol: '✨' },
  { delay: '0.7s', drift: '8px', duration: '4.8s', left: '25%', size: '12px', symbol: '❤️' },
  { delay: '2.1s', drift: '-18px', duration: '5.6s', left: '35%', size: '8px', symbol: '✨' },
  { delay: '0.3s', drift: '12px', duration: '7.0s', left: '42%', size: '20px', symbol: '❤️' },
  { delay: '1.8s', drift: '-8px', duration: '5.3s', left: '52%', size: '9px', symbol: '✨' },
  { delay: '0.9s', drift: '20px', duration: '6.4s', left: '60%', size: '14px', symbol: '❤️' },
  { delay: '2.5s', drift: '-15px', duration: '4.9s', left: '68%', size: '11px', symbol: '✨' },
  { delay: '1.1s', drift: '10px', duration: '5.8s', left: '76%', size: '16px', symbol: '❤️' },
  { delay: '0.5s', drift: '-12px', duration: '6.7s', left: '84%', size: '7px', symbol: '✨' },
  { delay: '1.7s', drift: '6px', duration: '5.1s', left: '91%', size: '13px', symbol: '❤️' },
  { delay: '3.2s', drift: '14px', duration: '6.0s', left: '12%', size: '10px', symbol: '✨' },
  { delay: '2.8s', drift: '-20px', duration: '7.2s', left: '48%', size: '22px', symbol: '❤️' },
  { delay: '3.7s', drift: '9px', duration: '5.5s', left: '72%', size: '8px', symbol: '✨' },
  { delay: '4.1s', drift: '-7px', duration: '6.3s', left: '30%', size: '15px', symbol: '❤️' },
]
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <span
      v-for="(p, i) in particles"
      :key="i"
      class="animate-float absolute bottom-0 select-none leading-none"
      :style="{
        left: p.left,
        fontSize: p.size,
        animationDelay: p.delay,
        animationDuration: p.duration,
        '--drift': p.drift,
      }"
    >{{ p.symbol }}</span>
  </div>
</template>
