import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import MentionsLegalesView from '../pages/MentionsLegalesView.vue'
import HowView from '../pages/HowView.vue'

import PayView from '../pages/PayView.vue'

import LoginView from '../pages/Accounts/LoginView.vue'
import SignView from '../pages/Accounts/SignView.vue'

// MARKETPLACE
import MarketView from '../pages/MarketPlace/index.vue'

    // Ladybug
    import LadybugPresentView from '../pages/MarketPlace/Ladybug/index.vue' 
    import LadybugGenerateView from '../pages/MarketPlace/Ladybug/generate.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/about', name: 'about', component: AboutView},
    {path: '/how', name: 'how', component: HowView},
    {path: '/mentionslegales', name: 'mentionslegales', component: MentionsLegalesView},
    {path: '/pay', name: 'pay', component: PayView},

    {path: '/login', name: 'login', component: LoginView},
    {path: '/sign', name: 'sign', component: SignView},
    // {path: '/sign', name: 'sign', component: SignView}, -----> Configuration Profil

    {path: '/market', name: 'market', component: MarketView},

    {path: '/ladybugpresent', name: 'ladybugpresent', component: LadybugPresentView},
    {path: '/ladybuggenerate', name: 'ladybuggenerate', component: LadybugGenerateView},
  ]
})

export default router
