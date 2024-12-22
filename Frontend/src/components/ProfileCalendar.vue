<template>
<div>
    {{ currentMonthString }} {{ currentYear }}
</div>
<div class="flex flex-row">
    <button @click="goToPreviousMonth" class="p-2 text-4xl font-bold">
        <
    </button>
    
    <div class="grid grid-cols-7 gap-2">
      <div v-for="weekday in weekdays" :key="weekday" class="text-center font-bold">
        {{ weekday }}
      </div>
    </div>

    <!-- TODO: Grid with leading and following empty days if needed (see wireframes) -->

    <button @click="goToNextMonth" class="p-2 text-4xl font-bold">
        >
    </button>
</div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentDate = ref(new Date());

const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonthString = computed(() =>
  currentDate.value.toLocaleString('default', { month: 'long' })
);

function daysInMonth () {
    const year = currentYear.value;
    const month = currentMonth.value + 1;
    return new Date(year, month, 0).getDate();
}

function goToNextMonth() {
    currentDate.value = new Date(
        currentYear.value,
        currentMonth.value + 1,
        1
    );
}

function goToPreviousMonth() {
    currentDate.value = new Date(
        currentYear.value,
        currentMonth.value - 1,
        1
    );
}
</script>

<style scoped>
</style>