<template>
  <div>
    <!-- Testimonials Start -->
    <section id="Testimonials_page">
      <div class="container">
        <div class="row Testimonial_title justify-content-center">
          <div class="col-12 text-center">
            <h1>Izohlar</h1>
            <p>Sharhlar bilan tanishing...</p>
          </div>
        </div>
        <div class="mySwiper d-flex justify-content-center testimonial">
          <div class="col-12 testi_content swiper-wrapper">
            <!-- 1 -->
            <div class="slide swiper-slide">
              <img src="/img/student_03.jpg" alt="student_11" />
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi.
              </p>
              <span class="fs-2">
                <i class="bi bi-quote"></i>
              </span>
              <div class="details">
                <span class="namee">Marine Lotter</span>
                <span class="job">Grafik Dizayn</span>
              </div>
            </div>
            <!-- 2 -->
            <div class="slide swiper-slide">
              <img src="/img/student_04.jpg" alt="student_11" />
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi.
              </p>
              <span class="fs-2">
                <i class="bi bi-quote"></i>
              </span>
              <div class="details">
                <span class="namee">Marine Lotter</span>
                <span class="job">Grafik moushing</span>
              </div>
            </div>
            <!-- 3 -->
            <div class="slide swiper-slide">
              <img src="/img/student_05.jpg" alt="student_05" />
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi.
              </p>
              <span class="fs-2">
                <i class="bi bi-quote"></i>
              </span>
              <div class="details">
                <span class="namee">Marine Lotter</span>
                <span class="job">Grafik moushing</span>
              </div>
            </div>
            <!-- 4 -->
            <div class="slide swiper-slide">
              <img src="/img/student_06.jpg" alt="student_11" />
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi.
              </p>
              <span class="fs-2">
                <i class="bi bi-quote"></i>
              </span>
              <div class="details">
                <span class="namee">John Doe</span>
                <span class="job">Marketolog</span>
              </div>
            </div>
          </div>
          <div class="swiper-button-next nav-btnn"></div>
          <div class="swiper-button-prev nav-btnn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <!-- Testimonials End -->
  </div>
</template>

<!-- Script -->
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    // ------- Swipper Slayderlar -----------
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<!-- Style -->
<style></style>
