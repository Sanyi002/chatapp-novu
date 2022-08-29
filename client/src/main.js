import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Provide Socket.io on app level
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:8080");
app.provide("socket", socket);

app.mount("#app");
