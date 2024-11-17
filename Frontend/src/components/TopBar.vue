<template>
  <nav class="flex flex-row m-2 text-xl justify-between border-2 border-black">
    <div class="flex flex-row p-6 justify-between w-1/6">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/submit">Submit</RouterLink>
    </div>
    <div class="p-6">
      {{ formattedTime }}
    </div>
    <div class="p-6"> 
      <RouterLink to="/profile">Profile</RouterLink>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const secondsSinceLastSubmit = ref(0)
const formattedTime = computed(() => getCurrentTimerString(secondsSinceLastSubmit.value));
const increaseTimer = () => {
  return secondsSinceLastSubmit.value++;
}

function getCurrentTimerString(currentTimeInSeconds: number): string {
  const hours = Math.floor(currentTimeInSeconds / 3600);
  const minutes = Math.floor((currentTimeInSeconds % 3600) / 60);
  const seconds = currentTimeInSeconds % 60;

  const formatToString = (timeValue: number) => timeValue.toString().padStart(2, '0');

  return `${formatToString(hours)}:${formatToString(minutes)}:${formatToString(seconds)}`;
}

onMounted(() => {
// Hier muss noch irgendwo eine Backend Abfrage zum letzten Submit Datum abgefragt werden
  const lastSubmitTimestamp = 1731682243
  const currentTimeStamp = 1731783352 // Platzhalter Daten
  secondsSinceLastSubmit.value = currentTimeStamp - lastSubmitTimestamp

  setInterval(increaseTimer, 1000);
})
</script>

<style scoped>
</style>
