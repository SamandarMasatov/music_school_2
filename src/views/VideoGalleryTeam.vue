<template>
    <div class="videoo_page">
        <div class="row Video_Gallery_title justify-content-center">
            <div class="col-12 text-center">
                <h2>Video Gallery</h2>
                <p>Videolar bilan tanishing...</p>
            </div>
        </div>
        <div class="containerr">
            <div class="main_video">
                <div class="video ">
                    <video src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" controls muted autoplay></video>
                    <h3 class="videoo_title">01. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nesciunt nostrum.</h3>
                    <!-- <h3 class="videoo_title">01. Qurbonova Durdona-dutor-o'qtuvchisi tadbir jarayonidan</h3> -->
                </div>
            </div>
            <div class="videoo_list">
                <div class="vidd active">
                    <video src="/video/Forest-43528.mp4" muted></video>
                    <h3 class="videoo_title"><b>02.</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                </div>
                <div class="vidd">
                    <video src="/video\Nature-15886.mp4" muted></video>
                    <h3 class="videoo_title"><b>03.</b> Lorem ipsum dolor sit amet.</h3>
                </div>
                <div class="vidd">
                    <video src="https://pixabay.com/videos/download/video-31377_tiny.mp4?attachment" muted></video>
                    <h3 class="videoo_title"><b>04.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus. </h3>
                </div>
                <div class="vidd">
                    <video src="/video/Nature-35264.mp4" muted></video>
                    <h3 class="videoo_title"><b>05.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>
                <div class="vidd">
                    <video src="https://pixabay.com/videos/download/video-41758_source.mp4?attachment" muted></video>
                    <h3 class="videoo_title"><b>06.</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, optio.</h3>
                    <!-- <h3 class="videoo_title"><b>06.</b> Qurbonova Durdona-dutor-o'qtuvchisi tadbir jarayonidan</h3> -->
                </div>
                <div class="vidd">
                    <video src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" muted></video>
                    <h3 class="videoo_title"><b>07.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.</h3>
                    <!-- <h3 class="videoo_title"><b>07.</b> Qurbonova Durdona-dutor-o'qtuvchisi tadbir jarayonidan</h3> -->
                </div>
                <div class="vidd">
                    <video src="/video/Boat-9533.mp4" muted></video>
                    <h3 class="videoo_title"><b>08.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.</h3>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <router-link class="team_link" to="/">Asosiy sahifa</router-link>
        </div>
    </div>
</template>

<!-- Script -->
<script>
export default {
    mounted() {
        let listVideo = document.querySelectorAll('.videoo_list .vidd');
        let mainVideo = document.querySelector('.main_video video');
        let videoTitle = document.querySelector('.main_video .videoo_title')

        listVideo.forEach(video => {
        video.onclick = () => {
            listVideo.forEach(vidd => vidd.classList.remove('active'));
            video.classList.add ('active');
            if(video.classList.contains ('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
                let text = video.children[1].innerHTML;
                videoTitle.innerHTML = text;
            }
        }
        })
    },
}
</script>

<!-- Style -->
<style scoped>
    /* BU yangi Video Gallery Style uchun */
    .videoo_page{
        background-color: #131a28;
    }
.Video_Gallery_title {
  font-size: 40px;
  text-align: center;
  margin: 0;
  padding-top: 150px;
  /* background-color: #131a28; */
}
.Video_Gallery_title h2 {
  color: #d2f21b;
  letter-spacing: 1px;
}
.Video_Gallery_title p {
  color: #fff;
  font-size: 18px;
}
.containerr {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
  align-items: flex-start;
  padding: 5px 5%;
  background-color: #131a28;
}
.containerr .main_video {
  padding-top: 100px;
  background-color: rgb(235, 236, 238);
  border-radius: 5px;
  padding: 10px;
}
.containerr .main_video video {
  width: 100%;
  padding-top: 100px;
  height: 434px;
  border-radius: 5px;
}
.containerr .main_video .videoo_title {
  color: #333;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  /* padding-left: 15px; */
}

.containerr .videoo_list {
  background-color: #fff;
  border-radius: 5px;
  height: 524px;
  overflow-y: scroll;
}
.containerr .videoo_list::-webkit-scrollbar {
  width: 7px;
}
.containerr .videoo_list::-webkit-scrollbar-track {
  background-color: #ccc;
  border-radius: 50px;
}
.containerr .videoo_list::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 50px;
}
.containerr .videoo_list .vidd video {
  width: 100px;
  height: 70px;
  border-radius: 5px;
}
.containerr .videoo_list .vidd {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #f7f7f7;
  border-radius: 5px;
  margin: 15px 10px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.containerr .videoo_list .vidd:hover {
  background-color: rgb(221, 219, 219);
}
.containerr .videoo_list .vidd.active {
  background-color: #3f6ed3;
}
.containerr .videoo_list .vidd.active .videoo_title {
  color: #fff;
}
.containerr .videoo_list .vidd .videoo_title {
  color: #333;
  font-size: 16px;
}

/* Btn link start */
.videoo_page .team_link {
  padding: 10px 30px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 0.7s ease;
  font-style: normal;
  font-weight: 500;
  font-family: roboto, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  background-color: #d2d224;
  border-radius: 5px;
  margin-top: 50px;
}
.videoo_page .team_link:hover {
  border: 1px solid #d2f21b;
  background-color: transparent;
  color: #3f6ed3;
}
/* Btn link start */

@media (max-width: 991px) {
  .containerr {
      grid-template-columns: 1.5fr 1fr;
      padding: 10px;
  }
}
@media (max-width: 768px) {
  .containerr {
      grid-template-columns: 1fr;
  }
}
/* BU yangi Video Gallery Style end */
</style>