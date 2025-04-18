import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => ({
    about: [] as Array<any>, // Ma'lumotlarni saqlash uchun massiv
    error: null as string | null, // Xatolar uchun
  }),

  actions: {
    async fetchAbout() {
      try {
        let cachedData: Array<any> | null = null;

        // LocalStorage'dagi ma'lumotlarni yuklash (faqat client tarafda)
        if (process.client) {
          const cachedString = localStorage.getItem("about");
          if (cachedString) {
            cachedData = JSON.parse(cachedString);
          }
        }

        // API orqali ma'lumotlarni olish
        const serverData = await $fetch<Array<any>>(
          "https://api.tjst.uz/api/about/all"
        );

        // Server ma'lumotlari va LocalStorage ma'lumotlarini taqqoslash
        const isDataEqual =
          cachedData &&
          JSON.stringify(cachedData) === JSON.stringify(serverData);

        if (!isDataEqual) {
          // Farq bo'lsa, yangi ma'lumotlarni o'rnatish va LocalStorage'ni yangilash
          this.about = serverData;

          if (process.client) {
            localStorage.setItem("about", JSON.stringify(serverData));
          }
        } else if (cachedData) {
          // Ma'lumotlar bir xil bo'lsa, LocalStorage'dagi ma'lumotlarni yuklash
          this.about = cachedData;
        }

        return this.about;
      } catch (error: any) {
        // Xatolikni qayd qilish
        this.error = error.message || "Ma'lumotlarni olishda xatolik yuz berdi";
        throw error;
      }
    },
  },
});
