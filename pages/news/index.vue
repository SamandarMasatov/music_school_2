<script setup>
import { ref, onMounted } from "vue";
import { useNewsStore } from "~/stores/useNewsStore";

const homeStore = useNewsStore();

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
const mainNews = computed(() =>
  homeStore.home.filter((item) => item.asosiy == 1)
);

const otherNews = computed(() =>
  homeStore.home.filter((item) => item.asosiy != 1)
);
</script>

<template>
  <div>
    <div class="header_bg"></div>
    <div class="global_bg">
      <div class="news">
        <div class="news_title">
          <h1 class="page_title">Yangiliklar</h1>
        </div>

        <NuxtLink
          class="news_feature"
          v-for="item in mainNews"
          :key="item._id"
          :to="`/news/${item._id}`"
        >
          <div class="news_feature_img">
            <img :src="`https://api.tjst.uz/${item.image[0]}`" />
          </div>
          <div class="news_feature_text">
            <div class="news_other_btn">
              <button>Eng so'ngi yangilik</button>
              <a href="">
                <i class="news_square fa-solid fa-up-right-from-square"></i
              ></a>
            </div>
            <div class="news_feature_subtext">
              <h2>{{ item.title.uz }}</h2>
              <p class="news_data">28.01.2024</p>
              <p class="news_data" v-html="item.desc.uz"></p>
            </div>
          </div>
        </NuxtLink>
        <!-- News Other -->
        <div class="news_other">
          <!-- 1 -->
          <NuxtLink
            class="news_other_card"
            v-for="item in otherNews"
            :key="item._id"
            :to="`/news/${item._id}`"
          >
            <div class="news_other_img">
              <img :src="`https://api.tjst.uz/${item.image[0]}`" />
            </div>
            <div class="news_other_text">
              <div class="news_other_btn">
                <button>Yangilik</button>
                <a href="">
                  <i class="news_square fa-solid fa-up-right-from-square"></i
                ></a>
              </div>
              <div class="news_other_title">
                <h2>{{ item.title.uz }}</h2>
                <p class="news_other_data">28.01.2024</p>
                <p class="news_other_data" v-html="item.desc.uz"></p>
              </div>
            </div>
          </NuxtLink> 
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header_bg {
  width: 100%;
  height: 100px;
  background-color: #002147;
}
</style>
