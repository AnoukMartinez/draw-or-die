<template>
  <div class="flex flex-col w-full items-center">
    <div class="text-2xl font-bold mb-4">
      {{ username }}
    </div>

    <ProfileCalendar />
  </div>
</template>

<script setup lang="ts">
import ProfileCalendar from '../components/ProfileCalendar.vue';

const username = "Nathaniel" // TODO Database Query
</script>

<style scoped>
</style>