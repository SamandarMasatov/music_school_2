<template>
    <div>
      <!-- Navbarr start -->
      <Navbarr/>
      <div>
        <router-view></router-view>
      </div>
      <Footer />
    </div>
</template>

<!-- Script -->
<script>
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";

export default {
  components: {
    Navbarr,
    Footer
  }
};
</script>

<style></style>
