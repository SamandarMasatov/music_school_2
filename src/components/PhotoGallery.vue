<template>
    <div>
        <!-- Photo-Gallery page Start -->
        <section id="Photo_Gallery">
            <div class="swiper mySwiper2">
            <div class="swiper-wrapper swipper_wrapper2">
                <!-- 1 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_old_tomoni.png" />
                </div>
                <!-- 2 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/background_05.jpg" />
                </div>
                <!-- 3 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_old_tomoni2.png" />
                </div>
                <!-- 4 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_Faesi.png" />
                </div>
                <!-- 5 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_Ichki_zali.png" />
                </div>
                <!-- 6 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_Konsert_zali.png" />
                </div>
                <!-- 7 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_Xor-zali.png" />
                </div>
                <!-- 8 -->
                <div class="swiper-slide swipper_slide2">
                    <img src="/img/Binoning_Tasviriy_sanat_xonasi.png" />
                </div>
                <!-- 9 -->
                <div class="swiper-slide swipper_slide2">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <!-- 10 -->
                <div class="swiper-slide swipper_slide2">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center photo_gallery_title ">
                    <div class="col-10 d-block text-center">
                        <h1>Fotogalereya</h1>
                        <p class="ps-0 ps-md-4">
                        So'nggi fotosuratlar
                        </p>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev swipper_btn2 text-warning"></div>
            <div class="swiper-button-next swipper_btn1 text-warning"></div>
            <div class="swiper-pagination"></div>
            </div>
        </section>
        <!-- Photo-Gallery page End -->
    </div>
</template>

<!-- Script -->
<script>
export default {
    mounted() {
        // ------------- Swipper 2 -------------
        var swiper = new Swiper(".mySwiper2", {
            spaceBetween: 300,
            loop: true,
            crossFade: true,
            autoplay: {
                delay: 5000,
            },
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });
    }
};
</script>

<!-- Style -->
<style></style>