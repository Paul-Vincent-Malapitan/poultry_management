<template>
    <v-container>
      <v-form @submit.prevent="createUser">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="user.name" label="Name" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="user.email" label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="user.contact" label="Contact" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="user.password" label="Password" type="password" required></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Create User</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          contact: '',
          password: ''
        }
      };
    },
    methods: {
      createUser() {
        // You can implement the logic to create the user account here
        console.log('Creating user:', this.user);
        
        // After creating the user, you may want to reset the form
        this.resetForm();
      },
      resetForm() {
        this.user = {
          name: '',
          email: '',
          contact: '',
          password: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here if needed */
  </style>
  