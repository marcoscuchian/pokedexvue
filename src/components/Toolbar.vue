<template>
       <v-toolbar color="white" app>
      <v-icon size="50px" color="error" @click="showDrawer()">mdi-pokeball</v-icon>
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col md="3">
            <v-toolbar-title>
              <h1>P O K E D E X</h1>
            </v-toolbar-title>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
</template>
<script>
import { mapState, mapMutations,mapActions } from 'vuex'
export default {
    name:"Toolbar",
    computed:{
      ...mapState(['drawer'])
    },
      methods:{
      ...mapMutations(['showDrawer'])
  }



}
</script>