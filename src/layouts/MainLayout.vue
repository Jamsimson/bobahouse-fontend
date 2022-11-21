<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <!-- left side of nav bar -->
        <q-toolbar-title>
          <!-- Logo Boba House -->
          <q-avatar>
            <img src="MilkTea-2.png" />
          </q-avatar>
          <!-- Boba House name -->
          BOBA HOUSE
        </q-toolbar-title>
        <!-- Right site of navbar: username and cart -->
        <div v-for="user in user" :key="user">@Minisong</div>
        <q-item>
          <q-item-section flex-center>
            <q-btn round icon="shopping_bag">
              <q-badge floating color="red" rounded>3</q-badge>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item-label header> Menu Boba House </q-item-label>
        <!-- Menu icon  -->
        <q-item clickable v-ripple @click="$router.push('/')">
          <q-item-section avatar>
            <q-icon color="dark" name="home" />
          </q-item-section>
          <q-item-section>Menu</q-item-section>
        </q-item>
        <!-- Cart icon -->
        <q-item clickable v-ripple @click="$router.push('/payment')">
          <q-item-section avatar>
            <q-icon color="dark" name="shopping_bag" />
          </q-item-section>
          <q-item-section>Cart</q-item-section>
        </q-item>
        <!-- Transaction -->
        <q-item clickable v-ripple @click="$router.push('/transaction')">
          <q-item-section avatar>
            <q-icon color="dark" name="blender" />
          </q-item-section>
          <q-item-section>Transaction</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "NavBarLayout",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {};
  },
};
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
q-drawer {
  background-color: #d6baff;
}
</style>
