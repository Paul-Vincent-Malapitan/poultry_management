<template>
    <v-app-bar :elevation="2"></v-app-bar>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Paul Vinzent"
              subtitle="paul.vinzent@gmail.com"
            ></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <v-list-item
              @click="loadComponent('UserManagement')"
              prepend-icon="mdi-account-group"
              title="User Management"
            ></v-list-item>
            <v-list-item
              @click="loadComponent('BranchManagement')"
              prepend-icon="mdi-domain"
              title="Branch Management"
            ></v-list-item>
            <v-list-item
              @click="loadComponent('InventoryManagement')"
              prepend-icon="mdi-archive"
              title="Inventory Management"
            ></v-list-item>
  
            <!-- Logout button in the navigation drawer -->
            <v-list-item @click="logout" prepend-icon="mdi-logout" title="Logout"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 800px;">
          <!-- Dynamic component rendering based on the selected option -->
          <component :is="selectedComponent"></component>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
  import UserManagement from "@/views/UserManagement"; // Adjust the path based on your project structure
  import BranchManagement from "@/views/BranchManagement";
  import InventoryManagement from "@/views/InventoryManagement";
  
  export default {
    data() {
      return {
        selectedComponent: null,
      };
    },
    methods: {
      logout() {
        // Add your logout logic here
        // For example, you might use a Vuex action to handle the logout process
      },
      loadComponent(componentName) {
        // Dynamically load the component based on the selected option
        switch (componentName) {
          case "UserManagement":
            this.selectedComponent = UserManagement;
            break;
          case "BranchManagement":
            this.selectedComponent = BranchManagement;
            break;
          case "InventoryManagement":
            this.selectedComponent = InventoryManagement;
            break;
          default:
            this.selectedComponent = null;
        }
      },
    },
  };
  </script>
  