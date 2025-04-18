<script setup>
import { ref, onMounted } from "vue";
import { useGalleryStore } from "~/stores/useGalleryStore";
import { useVideoStore } from "~/stores/useVideoStore";

// Swiper komponentlari va uslublarni import qilish
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const homeStore = useGalleryStore();
const videoStore = useVideoStore();

const loadHome = async () => {
  try {
    await homeStore.fetchHome();
  } catch (error) {
    console.error("Xatolik:", homeStore.error);
  }
};
const loadVideo = async () => {
  try {
    await videoStore.fetchHome();
  } catch (error) {
    console.error("Xatolik:", videoStore.error);
  }
};

// Sahifa yuklanishi bilan ma'lumotlarni yuklash
onMounted(() => {
  loadHome();
  loadVideo();
});

const tabActive = ref(true);

const videoActive = () => {
  tabActive.value = false;
};
const galleryActive = () => {
  tabActive.value = true;
};
</script>

<template>
  <div class="galeria">
    <div class="galeria_title">
      <div class="gallery_free_element"></div>
      <h1 class="page_title">Media</h1>
      <div class="gallery_btns">
        <button
          :class="tabActive == false ? 'gallery_btn_active' : ''"
          @click="videoActive"
        >
          Video
        </button>
        <button
          :class="tabActive == true ? 'gallery_btn_active' : ''"
          @click="galleryActive"
        >
          Rasmlar
        </button>
      </div>
    </div>
    <!-- Video cards -->
    <div class="video_cards" :class="tabActive == false ? 'd_block' : ''">
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
            823: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }"
        >
          <SwiperSlide v-for="item in videoStore.home" :key="item._id">
            <div class="galeria_card">
              <iframe
                width="100%"
                height="400"
                :src="item.video"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
    <!-- Gallery cards -->
    <div class="galeria_cards" :class="tabActive == true ? 'd_block' : ''">
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
            823: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }"
        >
          <SwiperSlide v-for="item in homeStore.home" :key="item._id">
            <div class="galeria_card">
              <img
                class="galeria_card_img"
                :src="`https://api.tjst.uz/${item.image[0]}`"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.d_block {
  display: none;
}
.galeria {
  width: 100%;
  height: 300px;
  background-color: #002147;
  position: relative;
  margin-top: 100px;
  margin-bottom: 300px;
}
.galeria_title {
  padding-top: 30px;
  display: flex;
  padding: 20px 20px;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.gallery_free_element {
  flex: 1;
}
.galeria_title h1 {
  text-align: center;
  color: #fff;
  font-family: "Lexend", sans-serif;
  flex: 1;
}
.gallery_btns {
  display: flex;
  justify-content: end;
  gap: 5px;
  flex: 1;
}
.gallery_btns button {
  width: 90px;
  height: 40px;
  border: none;
  outline: none;
  border: 2px solid #2eca7f;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-size: 16px;
}
.gallery_btns button:nth-child(1) {
  border-top-right-radius: 15px;
}
.gallery_btns button:nth-child(2) {
  border-top-left-radius: 15px;
}
.gallery_btn_active {
  background-color: #2eca7f !important;
}

.video_cards {
  width: 100%;
  margin-top: 30px;
  position: relative;
  display: none;
}
.galeria_cards {
  display: none;
  width: 100%;
  margin-top: 30px;
  position: relative;
}
.d_block {
  display: block !important;
}
.galeria_card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.galeria_card_img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.btns_prev_next {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
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
