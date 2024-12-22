<template>
    <div v-for="filepath in imageFilepaths">
        <ImageThumbnail :image-path="getImageUrl(filepath)"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BECommImages } from '../backend_communication/images';
import ImageThumbnail from '../components/ImageThumbnail.vue'
const beCommImages = new BECommImages()
const imageFilepaths = ref<string[]>()

const getImageUrl = (fileName: string) => {
    return `http://localhost:3000/images/${fileName}`
}

onMounted(async () => {
    await beCommImages.getAllArtworks().then((data) => {
        imageFilepaths.value = data
    })
})
</script>

<style scoped>
</style>