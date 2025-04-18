import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
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
          const cachedString = localStorage.getItem("team");
          if (cachedString) {
            cachedData = JSON.parse(cachedString);
          }
        }

        // API orqali ma'lumotlarni olish
        const serverData = await $fetch<Array<any>>(
          "https://api.tjst.uz/api/team/filter_kafedra"
        );

        // Server va LocalStorage ma'lumotlarini taqqoslash
        const isDataEqual =
          cachedData &&
          JSON.stringify(cachedData) === JSON.stringify(serverData);

        if (!isDataEqual) {
          // Faqat ma'lumotlar farqli bo'lsa, LocalStorage'ni yangilash
          this.home = serverData;

          if (process.client) {
            localStorage.setItem("team", JSON.stringify(serverData));
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
