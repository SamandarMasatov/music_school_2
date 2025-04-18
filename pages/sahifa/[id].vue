<script setup>
import { ref, onMounted, computed } from "vue";
import { useSahifaAllStore } from "~/stores/useSahifaAllStore";
import { useRoute } from "vue-router"; // Route olish uchun

// Swiper komponentlari va uslublarni import qilish
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const homeStore = useSahifaAllStore();
const route = useRoute(); // Route ni olish

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

// Route params orqali id olish
const filterNews = computed(() =>
  homeStore.home.filter((item) => item._id === route.params.id)
);
</script>

<template>
  <div>
    <div class="header_bg"></div>
    <section class="about">
      <div v-if="homeStore.error">{{ homeStore.error }}</div>
      <div class="about_wrap" v-for="item in filterNews" :key="item._id">
        <!-- Carousel uchun -->
        <div class="about_carousel">
          <ClientOnly>
            <Swiper
              :modules="[Navigation, Pagination]"
              navigation
              pagination
              :loop="true"
              :slides-per-view="1"
              class="mySwiper"
            >
              <SwiperSlide v-for="slide in item.image" :key="slide">
                <img
                  class="about_slide_img"
                  :src="`https://api.tjst.uz/${slide}`"
                  alt="Slide image"
                />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>

        <!-- Matn qismi -->
        <div class="about_text">
          <h2>{{ item.title.uz }}</h2>
          <p v-html="item.desc.uz"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.header_bg {
  width: 100%;
  height: 100px;
  background-color: #002147;
}
.about_carousel {
  width: 100%;
  height: 60vh;
  position: relative;
}
.about_slide_img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}
.about {
  max-width: 1296px;
  margin: 30px auto;
  background-color: #ffffff;
  padding: 0 20px;
}
.about_title {
  text-align: center;
  font-family: "Lexend-VariableFont_wght";
  margin: 0px 0px 0px 20px;
  color: #212529;
}
.about_desc {
  text-align: center;
  font-family: "Lexend-VariableFont_wght";
  font-size: 17px;
  margin: 0px 142px;
  color: #7a7a7a;
}
.about_img {
  width: 759px;
  height: 524px;
  object-fit: cover;
  border-radius: 5px;
}
.about_wrap {
  margin-top: 50px;
  position: relative;
  z-index: 1;
}
.about_text {
  padding: 30px;
  max-width: 100%;
  background-color: #f2f8f1;
  /* position: absolute;
    top: 10%;
    right: 0%; */
  border-radius: 5px;
  z-index: 2;
}
.about_text span {
  font-family: "Lexend-VariableFont_wght";
  font-size: 20px;
  text-transform: uppercase;
  color: #7a7a7a;
  margin-bottom: 10px;
}
.about_text h2 {
  font-family: "Lexend", sans-serif;
  font-size: 28px;
  padding-bottom: 15px;
}
.about_text p {
  color: #7a7a7a;
  margin-bottom: 15px;
  line-height: 1.8;
  font-family: "Lexend-VariableFont_wght";
}
.about_btn {
  background-color: #2eca7f;
  padding: 20px 45px;
  color: white;
  display: inline-block;
  border-radius: 40px;
  position: relative;
  border: none;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .about_carousel {
    height: 40vh;
  }
  .about_slide_img {
    height: 40vh;
  }
  .about_text h2 {
    font-size: 20px;
    margin: 4px 0;
  }
  .about_img {
    width: 100%;
    height: 400px;
  }
  .about_text {
    position: static;
    max-width: 100%;
  }

  .about_text p {
    margin-bottom: 10px;
  }
  .about_text span {
    font-size: 15px;
  }
  .about_btn {
    padding: 10px 24px;
  }
}

@media (max-width: 427px) {
  .about_title {
    padding-top: 20px;
  }
  .about_text p {
    font-size: 12px;
  }
  .about_text {
    padding: 34px;
  }
  .about_text h2 {
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .about_text {
    padding: 20px;
  }
  .about_img {
    width: 100%;
  }
  .about_desc {
    font-size: 17px;
    margin: 15px 20px;
  }
}
@media (max-width: 376px) {
  .about_text {
    padding: 13px;
  }

  .about_desc {
    font-size: 17px;
    margin: 15px 0px;
  }
}
@media (max-width: 321px) {
  .about_text {
    padding: 12px;
  }
  .about_text h2 {
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 4px;
  }
  .about_btn {
    padding: 6px 10px;
  }
}
.btns_prev_next {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -58%);
  z-index: 2;
  width: 95%;
  height: 0px;
  display: flex;
  justify-content: space-between;
}
.prev,
.next {
  width: 55px;
  height: 55px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #2eca7f;
  font-size: 20px;
}
.prev i {
  color: white !important;
}
.next i {
  color: white !important;
}
@media (max-width: 769px) {
  .home_slide_img {
    height: 80vh;
  }
  .btns_prev_next {
    top: 42%;
    transform: translate(-50%, -42%);
  }
  .prev,
  .next {
    width: 45px;
    height: 45px;
    font-size: 16px;
  }
  .home_title {
    font-size: 30px;
  }
}
@media (max-width: 500px) {
  .home_title {
    font-size: 20px;
  }
  .home_btn {
    width: 130px;
    height: 40px;
  }
  .prev,
  .next {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}
</style>
