<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-center"> Quasar App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <MyLink
          v-for="link in essentialLinks"
          :key="link.titre"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MyLink from "components/MyLinks.vue";
const linksList = [
  {
    titre: "Home",
    caption: "go to home page",
    icon: "home",
    link: "/home",
  },
  {
    titre: "Presence",
    caption: "go to presence page",
    icon: "man",
    link: "/presence",
  },
  {
    titre: "New vue",
    caption: "go to new vue page",
    icon: "check",
    link: "/newVue",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    MyLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
