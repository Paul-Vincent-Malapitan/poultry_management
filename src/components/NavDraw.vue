<template>
    <v-card>
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-container>
          <v-row justify="start">
            <v-col>
              <v-toolbar-title class="mr-4" style="color: white;">Your Dashboard</v-toolbar-title>
            </v-col>
          </v-row>
        </v-container>
  
        <v-spacer></v-spacer>
  
        <v-container>
          <v-row justify="center">
            <v-tabs v-model="tab" align-tabs="center">
              <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </v-row>
        </v-container>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-window v-model="tab">
              <v-window-item v-for="item in items" :key="item" :value="item">
                <!-- Display dynamic components below based on the selected option -->
                <component :is="getComponent(item)"></component>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  import UserManagement from "@/views/UserManagement"; // Adjust the path based on your project structure
  import BranchManagement from "@/views/BranchManagement";
  import InventoryManagement from "@/views/InventoryManagement";
  
  export default {
    data() {
      return {
        tab: null,
        items: ['User Management', 'Branch Management', 'Inventory Management'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      };
    },
    methods: {
      getComponent(item) {
        // Map the item to the corresponding component
        switch (item) {
          case 'User Management':
            return UserManagement;
          case 'Branch Management':
            return BranchManagement;
          case 'Inventory Management':
            return InventoryManagement;
          default:
            return null;
        }
      },
    },
  };
  </script>
  