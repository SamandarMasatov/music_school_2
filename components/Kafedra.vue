<script setup>
import { ref, onMounted } from "vue";
import { useKafedraStore } from "~/stores/useKafedraStore";

// Swiper komponentlari va uslublarni import qilish
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const homeStore = useKafedraStore();

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
  <div class="sports">
    <div class="sports_text">
      <h1 class="page_title">Kafedralar</h1>
    </div>
    <div v-if="homeStore.error" class="error">{{ homeStore.error }}</div>
    <div class="sports_card">
      <ClientOnly>
        <Swiper
          :modules="[Navigation, Pagination]"
          navigation
          pagination
          :loop="true"
          class="mySwiper"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }"
        >
          <SwiperSlide v-for="item in homeStore.home" :key="item._id">
            <div class="sports_cards">
              <div class="sports_cards_img">
                <img :src="`https://api.tjst.uz/${item.image[0]}`" />
              </div>
              <div class="sport_cards_text">
                <h2>{{ item.title.uz }}</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped lang="css">
.btns_prev_next {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  background-color: red;
  z-index: 2;
  width: 95%;
  height: 0px;
  display: flex;
  justify-content: space-between;
}
.prev,
.next {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.5);
}
.prev i {
  color: white !important;
}
.next i {
  color: white !important;
}
@media (max-width: 769px) {
  .btns_prev_next {
    width: 90%;
  }
}
</style>
