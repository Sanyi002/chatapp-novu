<template>
  <h1
    class="mt-2 mb-6 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
  >
    🙋‍♂️ Sign in to chat
  </h1>
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-[400px]"
    @submit="handleSubmit"
  >
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Your username
      </label>
      <input
        v-model="username"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Your username"
        required
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        @click="handleSubmit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useChatStore } from "@/stores/chat";

const username = ref("");

const handleSubmit = (e) => {
  e.preventDefault();
  useChatStore.username = username;
};
</script>
