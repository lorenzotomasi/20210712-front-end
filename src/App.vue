<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  padding-top: 4.5rem;
}

.primary-color {
  color: #145e8c;
}

.success-color {
  color: #41a63a;
}

.bg-primary-color {
  background-color: #145e8c;
  color: #fff;
}

.btn-primary-color-outline {
  border-color: #145e8c;
  color: #145e8c;
}

.btn-primary-color-outline:hover {
  background-color: #145e8c;
  color: white;
}
.btn a {
  text-decoration: none;
  color: #fff;
}
</style>
