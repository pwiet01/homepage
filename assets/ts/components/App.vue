<template>
    <div class="h-screen mx-auto -my-5 flex flex-col justify-center items-center space-y-12">
        <p class="text-3xl">Hier ensteht eine Website die vermutlich niemals fertig wird :D</p>
        <div class="flex flex-col items-center space-y-3">
            <p class="text-2xl">Der Button unter mir wurde schon {{ count >= 0 ? count : '...' }} mal geklickt!
            </p>
            <button class="rounded-lg bg-gray-400 px-2 py-1 text-gray-800" @click="increment">Klick mich!</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
    getUserCount, incrementUserCount
} from "../services/PageDataService";

const count = ref(-1);

async function increment() {
    await incrementUserCount();
    count.value = await getUserCount();
    console.log(count.value);

}

onMounted(async () => {
    count.value = await getUserCount();
});
</script>
