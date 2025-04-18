<script setup>
import { onMounted, ref } from "vue";
import { useSahifaStore } from "~/stores/useSahifaStore";

const headerRef = ref(null);
const headerMenuRef = ref(null);
const headerSearchRef = ref(null);
const burgerRef = ref(null);
const isTelefonActive = ref(false);
const isCoverActive = ref(false);

const homeStore = useSahifaStore();

const loadHome = async () => {
  try {
    await homeStore.fetchHome();
  } catch (error) {
    console.error("Xatolik:", homeStore.error);
  }
};

// Function to open telefon
const openTelefon = () => {
  isTelefonActive.value = true;
  isCoverActive.value = true;
};
// Function to close telefon
const closeTelefon = () => {
  isTelefonActive.value = false;
  isCoverActive.value = false;
};

onMounted(() => {
  loadHome();
  window.addEventListener("scroll", () => {
    if (headerRef.value) {
      headerRef.value.classList.toggle("active_bg", window.scrollY > 50);
    }
    if (headerMenuRef.value) {
      headerMenuRef.value.classList.toggle("active_li", window.scrollY > 50);
    }
    if (burgerRef.value) {
      burgerRef.value.classList.toggle("burger_active", window.scrollY > 50);
    }
  });
});
</script>
<template>
  <div>
    <div
      :class="['cover', { cover_active: isCoverActive }]"
      @click="closeTelefon"
    ></div>
    <!-- ================telefon========== -->
    <div :class="['telefon', { active: isTelefonActive }]">
      <div class="telefon_header">
        <div class="telefon_img">
          <img src="/images/header_logo.png" />
        </div>
        <div class="telefon_close" @click="closeTelefon">
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- =============menu============== -->

      <div class="telefon_menu">
        <ul>
          <li class="telefon_select">
            <p>
              <NuxtLink to="/"><span>Bosh sahifa</span></NuxtLink>
              <!-- <i class="icon fa-solid fa-chevron-down"></i> -->
            </p>
          </li>
          <li class="telefon_select">
            <p>
              <NuxtLink to="/news"><span>Yangiliklar</span></NuxtLink>
              <!-- <i class="icon fa-solid fa-chevron-down"></i> -->
            </p>
          </li>
          <li class="telefon_select" v-for="item in homeStore.home" :key="item">
            <p>
              <span>{{ item.drop_title.uz }}</span>
              <i class="icon fa-solid fa-chevron-down"></i>
            </p>

            <div class="telefon_cust">
              <ul class="telefon_options">
                <li v-for="key in item.drop_items" :key="key">
                  <NuxtLink style="color: black" :to="`/sahifa/${key._id}`">{{
                    key.title.uz
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </li>

          <li class="telefon_select"><p>Aloqa</p></li>
        </ul>
      </div>

      <div class="telefon_contact">
        <!-- <h4>Contact Info</h4>
        <ul>
          <li>
            <i class="telofon_icon fa-solid fa-envelope"></i>
            <span>contact@Clgunme.edu</span>
          </li>
          <li>
            <i class="telofon_icon fa-solid fa-clock"></i>
            <span> Mon - Fri: 9:00 - 18:00</span>
          </li>
          <li>
            <i class="telofon_icon fa-brands fa-facebook-f"></i>
            <i class="telofon_icon fa-brands fa-square-instagram"></i>
            <i class="telofon_icon fa-brands fa-linkedin"></i>
          </li>
          <li></li>
        </ul> -->
      </div>
      <a href="https://prof-emis.edu.uz/" target="_blank" class="telefon_btn">
        <button>PROF-EMIS</button>
      </a>
    </div>
    <!-- ======================header================== -->
    <header ref="headerRef" class="header">
      <div class="header_in">
        <!-- =================header img================== -->
        <div class="header_logo">
          <NuxtLink to="/">
            <img src="/images/header_logo.png" />
          </NuxtLink>
        </div>
        <div class="header_df">
          <!--===============   header menu   ============== -->
          <div ref="headerMenuRef" class="header_menu">
            <ul>
              <li>
                <NuxtLink to="/"
                  >Bosh sahifa
                  <!-- <i class="icon fa-solid fa-chevron-down"></i> -->
                </NuxtLink>

                <!-- <div class="custom_select">
                  <ul class="options">
                    <li>Home One</li>
                    <li>Home Two</li>
                    <li>Home Three</li>
                  </ul>
                </div> -->
              </li>
              <li><NuxtLink to="/news">Yangiliklar</NuxtLink></li>
              <li
                class="header_drob"
                v-for="item in homeStore.home"
                :key="item"
              >
                <a href=""
                  >{{ item.drop_title.uz }}
                  <i class="icon fa-solid fa-chevron-down"></i>
                </a>
                <div class="custom_select">
                  <ul class="options">
                    <li v-for="key in item.drop_items" :key="key">
                      <NuxtLink
                        style="color: black"
                        :to="`/sahifa/${key._id}`"
                        >{{ key.title.uz }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <!-- <li class="header_drob">
                <a href="">
                  Tuzilma
                  <i class="icon fa-solid fa-chevron-down"></i>
                </a>
                <div class="custom_select">
                  <ul class="options">
                    <li>
                      Rahbariyat
                      <i class="icon fa-solid fa-chevron-down"></i>
                    </li>
                    <li>Termiz JST strukturasi</li>
                  </ul>
                </div>
              </li>
              <li class="header_drob">
                <a href="">
                  Kafedralar<i class="icon fa-solid fa-chevron-down"></i>
                </a>
                <div class="custom_select">
                  <ul class="options">
                    <li>Umum kasbiy fanlar kafedrasi</li>
                    <li>Birinchi maxsus klinik fanlar</li>
                    <li>Ikkinchi maxsus klinik fanlar</li>
                  </ul>
                </div>
              </li>
              <li class="header_drob">
                <a href=""
                  >Media<i class="icon fa-solid fa-chevron-down"></i
                ></a>
                <div class="custom_select">
                  <ul class="options">
                    <li>Galeriya</li>
                    <li>Video</li>
                  </ul>
                </div>
              </li> -->

              <li><a href="">Aloqa</a></li>
            </ul>
          </div>

          <!-- ===============header  btn ========-->
          <a
            href="https://prof-emis.edu.uz/"
            target="_blank"
            class="header_btn"
          >
            <button>PROF-EMIS</button>
          </a>

          <!-- =============header search ============ -->
          <!-- <div class="header_search">
            <i class="header_search fa-solid fa-magnifying-glass"></i>
          </div> -->
          <div ref="burgerRef" class="burger" @click="openTelefon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
