// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/responsive.css"],
  modules: ["nuxt-swiper", "@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"], // HMR uchun
  },
  generate: {
    routes: ["/news", "/about"], // Kerakli marshrutlarni qo'shing
  },
  ssr: true,
});
