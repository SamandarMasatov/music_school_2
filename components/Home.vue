<script setup>
import { ref, onMounted } from "vue";
import { useHomeStore } from "~/stores/useHomeStore";

// Swiper komponentlari va uslublarni import qilish
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const homeStore = useHomeStore();

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
  <div class="home">
    <!-- Xatolikni ko'rsatish -->
    <div v-if="homeStore.error" class="error">{{ homeStore.error }}</div>

    <!-- Swiper slider -->
    <ClientOnly>
      <Swiper
        :modules="[Navigation, Pagination]"
        navigation
        pagination
        :loop="true"
        :slides-per-view="1"
        class="mySwiper"
      >
        <SwiperSlide v-for="item in homeStore.home" :key="item._id">
          <div
            class="home_slide_img"
            :style="`background-image: url(https://api.tjst.uz/${item.image[0]})`"
          >
            <!-- Matn qismi -->
            <div class="home_cover">
              <div class="home_text">
                <h2 class="home_title">{{ item.title.uz }}</h2>
                <NuxtLink :to="`/details/${item._id}`" class="home_btn">
                  <span>Batafsil</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
.home_slide_img {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.home_cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.home_text {
  max-width: 740px;
  color: white;
  text-align: center;
  padding: 0 20px;
}
.home_title {
  text-transform: uppercase;
  font-size: 40px;
}
.home_btn {
  width: 150px;
  height: 50px;
  background-color: #2eca7f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border-radius: 5px;
}
.home_btn span {
  color: #fff !important;
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
