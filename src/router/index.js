import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import artiste from '../views/artiste.vue'
import artisteadmin from '../views/artisteadmin.vue'
import catalogue from '../views/catalogue.vue'
import contact from '../views/contact.vue'
import connect from '../views/connect.vue'
import admin from '../views/admin.vue'
import adminevent from '../views/adminevent.vue'
import add from '../views/add.vue'
import addevent from '../views/addevent.vue'
import tableau from '../views/tableau.vue'
import tableauadmin from '../views/tableauadmin.vue'
import eventadmin from '../views/eventadmin.vue'
import success from '../views/success.vue'
import homeadmin from '../views/homeadmin.vue'
import evenement from '../views/evenement.vue'
import event from '../views/event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },  {
    path: '/homeadmin',
    name: 'homeadmin',
    component: homeadmin
  },
  {
    path: '/lartiste',
    name: 'artiste',
    component: artiste
  },
  {
    path: '/lartisteadmin',
    name: 'artisteadmin',
    component: artisteadmin
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: catalogue
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/connect',
    name: 'connect',
    component: connect
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },  
  {
    path: '/adminevent',
    name: 'adminevent',
    component: adminevent
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/addevent',
    name: 'addevent',
    component: addevent
  },
  {
    path: '/tableau',
    name: 'tableau',
    component: tableau
  },
  {
    path: '/tableauadmin',
    name: 'tableauadmin',
    component: tableauadmin
  },
  {
    path: '/eventadmin',
    name: 'eventadmin',
    component: eventadmin
  },
  {
    path: '/success',
    name: 'success',
    component: success
   },
   {
    path: '/evenement',
    name: 'evenemnt',
    component: evenement
   },
   {
    path: '/event',
    name: 'event',
    component: event
   },
   ]
const router = new VueRouter({
  routes
})

export default router
