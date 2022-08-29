<template>
  <div
    class="bg-gradient-to-br from-rose-100 to-teal-100 w-screen h-screen flex items-center justify-center flex-col"
  >
    <router-view />
  </div>
</template>

<script setup>
import { inject } from "vue";

const socket = inject("socket");
console.log("socket:", socket);
</script>
