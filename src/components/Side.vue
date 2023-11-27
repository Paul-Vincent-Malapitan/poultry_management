<template>
    <v-navigation-drawer app color="green accent-3" dark>
      <v-list-item class="px-2 py-5">
        <v-list-item-content class="text-capitalize" align="center">
          <v-icon x-large class="pr-2">mdi-hamburger</v-icon> AAE POS
        </v-list-item-content>
      </v-list-item>
  
      <v-list shaped>
        <v-list-item-group v-model="selectedItem" color="grey lighten-5">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route" align="center">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { icon: 'mdi-shipping-fast', text: 'OVERVIEW', route: '/overview' },
        { icon: 'mdi-food', text: 'MENU', route: '/menu' },
        { icon: 'mdi-currency-usd', text: 'TRANSACTION', route: '/transaction' },
        { icon: 'mdi-calendar', text: 'CALENDAR', route: '/calendar' },
        { icon: 'mdi-cogs', text: 'TESTIMONIALS', route: '/testimonials' },
        { icon: 'mdi-help-circle', text: 'FAQ', route: '/faq' },
      ],
    }),
  };
  </script>
  