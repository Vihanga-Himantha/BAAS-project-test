<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer"></q-btn>
        <q-toolbar-title>

          <router-link to="/" class="router-link">
            <q-btn flat dense color="white" label="My Quasar App" />
          </router-link>

        </q-toolbar-title>
        <q-btn flat dense round icon="brightness_6" @click="toggleDarkMode"></q-btn>

        <q-separator dark vertical />



        <q-separator dark vertical />
        <router-link to="/register" class="router-link">
          <q-btn stretch flat label="Register" />
        </router-link>


      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Dark } from 'quasar'



export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    toggleDarkMode () {
      Dark.set(!Dark.isActive)
    }
  }
}




</script>

<style>
/* Add any custom styles here */
</style>
