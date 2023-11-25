<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-account-group" title="User Management" value="usermanagement"></v-list-item>
            <v-list-item prepend-icon="mdi-domain" title="Branch Management" value="branchmanagement"></v-list-item>
            <v-list-item prepend-icon="mdi-archive" title="Inventory Management" value="inventorymanagement"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 800px;"> <!-- Adjust the height here -->
          <!-- Your main content goes here -->
        </v-main>
      </v-layout>
    </v-card>
  </template>
  