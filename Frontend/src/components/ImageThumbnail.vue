<template>
    <button class="border-2 border-black m-2 w-32 h-52">
        <img :src="props.imagePath" class="object-cover h-full w-full">
    </button> 
</template>

<script setup lang="ts">
const props = defineProps(['imagePath'])
console.log(props.imagePath)
</script>

<style scoped>
</style>