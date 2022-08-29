import { defineStore } from "pinia";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    username: "test",
  }),
  getters: {
    username: (state) => state.username,
  },
  actions: {},
});
