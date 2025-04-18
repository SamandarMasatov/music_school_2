<script setup>
import { ref, onMounted } from "vue";
import { useContactStore } from "~/stores/useContactStore";

const homeStore = useContactStore();

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
  <div class="global_bg">
    <div class="contact">
      <div class="contact_input">
        <input type="text" placeholder="Ismingizni yozing" />
        <input type="number" placeholder="Telefon raqamingizni yozing" />
        <textarea name="message" placeholder="Savolingiz yozing"></textarea>
        <button class="contact_btn">Jo`natish</button>
      </div>

      <div class="contact_campus">
        <div class="cambus_text">
          <h1 class="page_title">Savolaringizni bizga yo'llang</h1>
        </div>
        <div class="contact_donors" v-for="item in homeStore.home" :key="item._id">
          <div class="contact_event">
            <ul>
              <li>
                <a :href="`tel:${item.phone}`">
                  <i class="fa-solid fa-phone-volume"></i>
                  <p class="contact_color">
                    {{ item.phone }}
                  </p></a
                >
              </li>
              <li>
                <a :href="`tel:${item.mail}`">
                  <i class="fa-solid fa-envelope"></i>
                  <p class="contact_color">{{ item.mail }}</p>
                </a>
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <p class="contact_color">
                  {{ item.location }}
                </p>
              </li>
            </ul>
          </div>
          <div class="contact_event">
            <ul>
              <li>
                <a :href="`${item.insta}`" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                  <p class="contact_color">Instagram</p></a
                >
              </li>
              <li>
                <a :href="`${item.tg}`" target="_blank">
                  <i class="fa-brands fa-telegram"></i>
                  <p class="contact_color">Telegram</p></a
                >
              </li>
              <li>
                <a :href="`${item.facebook}`" target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                  <p class="contact_color">Facebook</p></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ==================contact =================== */

.contact {
  max-width: 1296px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 100px 0;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.contact_input {
  padding: 40px;
  gap: 30px;
  box-shadow: 0px 0px 30px 10px rgba(22, 23, 26, 0.05);
  flex: 1 1 15rem;
  border-radius: 5px;
  background-color: #fff;
}

.contact_input input {
  width: 100%;
  border: 1px solid #d9d9d9;
  color: #b9b9ba;
  font-size: 16px;
  font-family: "Lexend", sans-serif;
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0;
}
.contact_btn {
  width: 100%;
  background-color: #2eca7f;
  color: #fff !important;
  transition: all 0.5s;
  font-size: 16px;
  font-family: "Lexend", sans-serif;
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: none;
}
.contact_btn:hover {
  background-color: #002147;
}
.contact_input textarea {
  width: 100%;
  border: 1px solid #d9d9d9;
  color: #b9b9ba;
  font-size: 16px;
  font-family: "Lexend", sans-serif;
  height: 200px;
  padding: 20px;
  border-radius: 5px;
}
.cambus_text p:nth-child(1) {
  color: #7a7a7a;
  text-transform: uppercase;
  font-size: 20px;
  font-family: "Lexend", sans-serif;
  padding-bottom: 30px;
}
.cambus_text h1 {
  margin-bottom: 30px;
  font-family: "Lexend", sans-serif;
}
.campus_subtext {
  color: #7a7a7a;
  font-size: 16px;
  font-family: "Lexend", sans-serif;
}
.contact_donors {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding-top: 30px;
}
.contact_event li,
a {
  display: flex;
  padding: 10px 0;
  gap: 15px;
  align-items: center;
}
.contact_event i {
  color: #2eca7f;
}
.contact_color {
  color: #002147;
  font-size: 16px;
  font-family: "Lexend", sans-serif;
}
/* ==============responsive================ */
@media (max-width: 1024px) {
  .contact {
    padding: 30px 15px;
  }
}

@media (max-width: 769px) {
  .contact {
    display: flex; /* Flexboxga o'zgartirish */
    flex-direction: column; /* Ustun shaklida joylashuv */
  }

  .contact_campus {
    order: 1; /* Bu tepada bo'ladi */
  }

  .contact_input {
    order: 2; /* Bu pastda bo'ladi */
  }
}

@media (max-width: 426px) {
  .contact_input input[data-v-bf7c7822] {
    font-size: 15px;
  }
  .contact_input textarea[data-v-bf7c7822] {
    font-size: 16px;
  }
  .contact_color {
    color: #002147;
    font-size: 15px;
    font-family: "Lexend", sans-serif;
  }
}
@media (max-width: 376px) {
  .contact_donors {
    display: grid;
    grid-template-columns: auto;
    justify-content: space-between;
    padding-top: 30px;
  }
  .cambus_text p:nth-child(1) {
    font-size: 17px;
  }
  .campus_subtext {
    color: #7a7a7a;
    font-size: 15px;
    font-family: "Lexend", sans-serif;
  }
  .contact_input {
    padding: 21px;
    gap: 30px;
    box-shadow: 0px 0px 30px 10px rgba(22, 23, 26, 0.05);
    flex: 1 1 15rem;
    border-radius: 5px;
  }
}
</style>
