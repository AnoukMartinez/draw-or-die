<template>
    <div class="border-2">
        <div class="flex flex-col">
            <label for="file">Upload a Drawing ^^</label>
            <input type="file" id="file" name="files" multiple @change="handleFileChange" />
        </div>
        <div>
            <button @click="submitArtwork">Submit</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedFiles = ref<File[]>([]);

const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
        selectedFiles.value = Array.from(input.files);
    }
};

const submitArtwork = async () => {
    const formData = new FormData();
    selectedFiles.value.forEach(file => {
        formData.append('files', file);  // Make sure to append with the correct field name
    });

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
</script>
