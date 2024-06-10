// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import CoinIcon from './components/CoinIcon.vue';
import ReferralSection from './components/ReferralSection.vue';
import SocialMediaTasks from './components/SocialMediaTasks.vue';
import DashBoard from './components/DashBoard.vue';

const routes = [
  {
    path: '/coin-icon',
    name: 'CoinIcon',
    component: CoinIcon
  },
  {
    path: '/referral-section',
    name: 'ReferralSection',
    component: ReferralSection
  },
  {
    path: '/socialmedia-tasks',
    name: 'SocialMediaTasks',
    component: SocialMediaTasks
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  // Add more routes for other views/components as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
