<template>
    <div class="w-fit mx-auto flex flex-col items-center space-y-3">
        <p class="text-2xl">Der Button unter mir wurde {{ count }} mal geklickt!</p>
        <button class="rounded-lg bg-gray-400 px-2 py-1 text-gray-800" @click="increment">Klick mich!</button>
        <p v-if="count % 2 === 0">(Gerade Zahl)</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function increment() {
    count.value++;
}
</script>
