import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/HomePage.vue'
import PortfolioPage from '../components/PortfolioPage.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: PortfolioPage
        }
    ]
})