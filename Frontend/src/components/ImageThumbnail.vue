<template>
    <img :src="props.imagePath" class="w-1/6 mt-2">
</template>

<script setup lang="ts">
const props = defineProps(['imagePath'])
console.log(props.imagePath)
</script>

<style scoped>
</style>