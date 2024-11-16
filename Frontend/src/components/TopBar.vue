<script setup lang="ts">
</script>

<template>
  <nav class="flex flex-row bg-red-400 p-4 text-xl justify-between">
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="flex flex-row px-6 justify-between border-2">
      <RouterLink to="/submit">Submit</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
</style>
