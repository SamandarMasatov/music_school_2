<script setup lang="ts">
import { onMounted } from "vue";
import { useAboutStore } from "~/stores/useAboutStore";

const aboutStore = useAboutStore();

const loadAbout = async () => {
  try {
    await aboutStore.fetchAbout();
  } catch (error) {
    console.error("Xatolik:", aboutStore.error);
  }
};

// Sahifa yuklanganda faqat browserda bajariladi
onMounted(() => {
  loadAbout();
});
</script>

<template>
  <section class="about">
    <h1 class="about_title page_title">Biz haqimizda</h1>
    <div v-if="aboutStore.error">{{ aboutStore.error }}</div>
    <div class="about_wrap" v-for="item in aboutStore.about" :key="item._id">
      <img
        class="about_img"
        :src="`https://api.tjst.uz/${item.image[0]}`"
        alt="images 4"
      />
      <div class="about_text">
        <h2 class="clamp_title">{{ item.title.uz }}</h2>

        <p class="clamp" v-html="item.desc.uz"></p>
        <NuxtLink to="/about">
          <button class="about_btn">Batafsil</button></NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.clamp_title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  max-width: 615px;
  background-color: #f2f8f1;
  position: absolute;
  top: 10%;
  right: 0%;
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
</style>
