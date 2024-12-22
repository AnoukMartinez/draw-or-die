<template>
  <div class="flex flex-col w-full items-center">
    <div class="text-2xl font-bold mb-4">
      {{ username }}
    </div>

    <div class="text-lg">Submitted Artwork</div>
    <div v-for="filepath in imageFilepaths">
        <ImageThumbnail :image-path="getImageUrl(filepath)"/>
    </div>

    <ProfileCalendar />
  </div>
</template>

<script setup lang="ts">
import ProfileCalendar from '../components/ProfileCalendar.vue';
import ImageThumbnail from '../components/ImageThumbnail.vue'
import { onMounted, ref } from 'vue';
import { BECommImages } from '../backend_communication/images';
const beCommImages = new BECommImages()
const imageFilepaths = ref<string[]>()

const getImageUrl = (fileName: string) => {
    return `http://localhost:3000/images/${fileName}`
}

const username = "Nathaniel" // TODO Database Query
const userId = 3 // TODO State Management

onMounted(async () => {
    await beCommImages.getAllArtworksByUser(userId).then((data) => {
        imageFilepaths.value = data
    })
})
</script>

<style scoped>
</style>