import { createRouter, createWebHistory } from 'vue-router'

import calabiyauCalculator from '../views/calabiyau-calculator.vue'

const routes = [
  { path: '/', component: calabiyauCalculator },
];

// 🔥 核心修复：给 createWebHistory 添加和 vite 一致的 base 路径
export default createRouter({
  history: createWebHistory('/calabiyauify-names/'),
  routes
})