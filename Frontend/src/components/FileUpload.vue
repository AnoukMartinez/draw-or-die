<template>
    <div class="border-2">
        <div class="flex flex-col">
            <label for="file">Upload a Drawing ^^</label>
            <input type="file" id="file" name="files" @change="handleFileChange" />
        </div>
        <div>
            <button @click="uploadArtwork(testUserId, selectedFile)">Submit</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BECommImages } from '../backend_communication/images';

const selectedFile = ref<File>();
const testUserId = 1 // TODO: State Management
const beCommImages = new BECommImages()

const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
        selectedFile.value = Array.from(input.files)[0];
    }
};

const uploadArtwork = async (userId: number, selectedFile: File | undefined) => {
    if(!selectedFile) {
        return;
    }

    beCommImages.uploadArtwork(userId, selectedFile)
}

</script>
