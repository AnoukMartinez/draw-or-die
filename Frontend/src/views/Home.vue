<template>
    <div class="text-xl mt-4">
        October
    </div>

    <div class="border-2 border-black mt-2">
        <div class="flex flex-row items-start">
            <div v-for="filepath in imageFilepaths">
                <ImageThumbnail :image-path="getImageUrl(filepath)"/>
            </div>
        </div>
    </div>

    <div class="text-xl mt-4">
        November
    </div>

    <div class="border-2 border-black mt-2">
        <div class="flex flex-row items-start">
            <div v-for="filepath in imageFilepaths">
                <ImageThumbnail :image-path="getImageUrl(filepath)"/>
            </div>
        </div>
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