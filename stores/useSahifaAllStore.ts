import { defineStore } from "pinia";

export const useSahifaAllStore = defineStore("sahifa_all", {
  state: () => ({
    home: [] as Array<any>, // Ma'lumotlarni saqlash uchun massiv
    error: null as string | null, // Xatolar uchun
  }),

  actions: {
    async fetchHome() {
      try {
        let cachedData: Array<any> | null = null;

        // Faqat client tarafda LocalStorage bilan ishlash
        if (process.client) {
          const cachedString = localStorage.getItem("sahifa_all");
          if (cachedString) {
            cachedData = JSON.parse(cachedString);
          }
        }

        // API orqali ma'lumotlarni olish
        const serverData = await $fetch<Array<any>>(
          "https://api.tjst.uz/api/drop_item/all"
        );

        // Server va LocalStorage ma'lumotlarini taqqoslash
        const isDataEqual =
          cachedData &&
          JSON.stringify(cachedData) === JSON.stringify(serverData);

        if (!isDataEqual) {
          // Faqat ma'lumotlar farqli bo'lsa, LocalStorage'ni yangilash
          this.home = serverData;

          if (process.client) {
            localStorage.setItem("sahifa_all", JSON.stringify(serverData));
          }
        } else if (cachedData) {
          // Agar ma'lumotlar bir xil bo'lsa, LocalStorage'dan yuklash
          this.home = cachedData;
        }

        return this.home;
      } catch (error: any) {
        this.error = error.message || "Ma'lumotlarni olishda xatolik yuz berdi";
        throw error;
      }
    },
  },
});
