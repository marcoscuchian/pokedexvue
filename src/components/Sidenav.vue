<template>
  <div >
    <v-navigation-drawer fixed permanent expand-on-hover dark class="">
      <v-list >
        <v-list-item class="px-2 pl-0">
            <v-img  
                 src="../assets/img/perfil.png"></v-img>
          <v-list-item-avatar>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content class="pl-6 infoPers"> 
            <v-list-item-title class="infoPers">Marcos Ariel Cuchian</v-list-item-title>
            <v-list-item-subtitle>marcoscuchian@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense class=" pl-0 itemIcon">
              <v-list-item v-for="item in items" :key="item.title" block class="pl-0">
          <v-btn :href="item.href" block class="itemIcon">
            <v-list-item-icon>
              <v-icon class="itemIcon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="itemTitle">{{ item.title }}</v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Sidenav",

  data: () => ({
    items: [
      {
        title: "GitHub",
        icon: "mdi-github",
        href: "https://github.com/marcoscuchian"
      },
      {
        title: "Linkedin",
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/feed/"
      },
      {
        title: "Instagram",
        icon: "mdi-instagram",
        href: "https://www.instagram.com/marcoscuchian/"
      }
    ]
  })
};
</script>
<style scoped>
.itemTitle {
  font-size: 20px !important;
}
.itemIcon {
  font-size: 35px !important;
  background: rgba(245, 222, 179, 0) !important;
  border: none !important;
  padding: 0px 3px 0px !important;
  box-shadow: none !important;
  
}
.infoPers{
  font-size: 20px !important;

}
</style>