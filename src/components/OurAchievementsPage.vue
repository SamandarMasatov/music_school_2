<template>
  <div>
    <!-- Our_Achievements Start -->
    <section id="Our_Achievements_page">
      <div class="row m-0 Archievements_content">
        <div class="col-12 p-0 Achivements_card">
          <img
            src="/img/background_03.jpg"
            alt="background_03"
            class="img-fluid"
          />
        </div>
        <!-- Achivements_card End -->
        <div class="Archivements_title">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <h1><span>Bizning</span> yutuqlarimiz</h1>
              <p>Raqamlarda ajoyib gollar</p>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-center pt-5">
              <div class="col-6 col-md-3 text-center pt-4">
                <h2 class="number">1035</h2>
                <p>Jonli voqealar</p>
              </div>
              <div class="col-6 col-md-3 text-center pt-4">
                <h2 class="number">765</h2>
                <p>Baxtli talabalar</p>
              </div>
              <div class="col-6 col-md-3 text-center pt-4">
                <h2 class="number">17</h2>
                <p>Musiqa mukofotlari</p>
              </div>
              <div class="col-6 col-md-3 text-center pt-4">
                <h2 class="number">5050</h2>
                <p>Broken needles</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Archivements_title End -->
      </div>
    </section>
    <!---- Our_Achievements End ---->
  </div>
</template>

<!-- Script -->
<script>
export default {
  mounted () {
    $(".number").counterUp({time:3000});
  }
};
</script>

<!-- Style -->
<style>
</style>
