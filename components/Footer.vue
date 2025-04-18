<script setup>
import { ref, onMounted } from "vue";
import { useContactStore } from "~/stores/useContactStore";

const homeStore = useContactStore();

const loadHome = async () => {
  try {
    await homeStore.fetchHome();
  } catch (error) {
    console.error("Xatolik:", homeStore.error);
  }
};

// Sahifa yuklanishi bilan ma'lumotlarni yuklash
onMounted(() => {
  loadHome();
});
</script>

<template>
  <div class="footer_bg">
    <div class="footer">
      <div class="footer_in">
        <div class="footer_compus">
          <div class="footer_text">
            <h4>Havolalar</h4>
            <ul class="footer_ul">
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>Bosh sahifa</p></a
                >
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>Biz haqimizda</p></a
                >
              </li>
              <li>
                <a href=""
                  ><i class="fa-solid fa-angle-right"></i>
                  <p>Kafedralar</p></a
                >
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>O'qituvchilar</p></a
                >
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>Media</p></a
                >
              </li>
              <li>
                <a href=""
                  ><i class="fa-solid fa-angle-right"></i>
                  <p>Aloqa</p></a
                >
              </li>
            </ul>
          </div>
          <div class="footer_text">
            <h4>Texnikum</h4>
            <ul class="footer_ul">
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>Texnikum nizomi</p></a
                >
              </li>
              <li>
                <a href=""
                  ><i class="fa-solid fa-angle-right"></i>
                  <p>Texnikum tarixi</p></a
                >
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>Texnikum tadbirlari</p></a
                >
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-angle-right"></i>
                  <p>Yangiliklari</p></a
                >
              </li>
              <li>
                <a href=""
                  ><i class="fa-solid fa-angle-right"></i>
                  <p>E'lonlar</p></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18013.850621293233!2d67.26091194169658!3d37.23087381867517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f352f1e227a5aa7%3A0x23cc6ca948fe7c5a!2z0KLQtdGA0LzQuNC3INCQ0LHRgyDQkNC70Lgg0LjQsdC9INCh0LjQvdC-INC90L7QvNC40LTQsNCz0Lgg0LbQsNC80L7QsNGCINGB0LDQsNC70L7QvNCw0YLQu9C40LPQuCDRgtC10YXQvdC40LrRg9C80Lg!5e0!3m2!1sru!2s!4v1737478042334!5m2!1sru!2s"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <!--==============================footer school =======================-->
    <div class="footer_school">
      <div class="footer_canyon">
        <div class="footer_position">
          <img src="/images/header_logo.png" />
        </div>
        <div class="footer_schooltext">
          <p>
            Mualliflik huquqi © 2025 Termiz Abu Ali Ibn Sino Nomidagi Jamoat
            Salomatligi Texnikumi,<br />
            Barcha huquqlar himoyalangan.
          </p>
        </div>
        <div class="footer_link">
          <ul v-for="item in homeStore.home" :key="item._id">
            <li>
              <a class="icon_link" :href="`${item.insta}`" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="icon_link" :href="`${item.tg}`" target="_blank"
                ><i class="fa-brands fa-telegram"></i
              ></a>
            </li>
            <li>
              <a class="icon_link" :href="`${item.facebook}`" target="_blank">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
