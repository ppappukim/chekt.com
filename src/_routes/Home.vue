<template>
  <div>
    <!-- section-1 -->
    <div class="section-1">
      <div class="heading-group">
        <div class="title">
          <span v-bind:class="{ active: activeTextAnimation }" class="title-line">You can do</span>
          <span v-bind:class="{ active: activeTextAnimation }" class="title-line">with CHeKT</span>
          <span v-bind:class="{ active: activeTextAnimation }" class="title-line">
            <transition name="fade" mode="out-in">
              <span v-if="activeMainAnimationSmsText" key="sms" class="point-sms">visual alarm <br> Verification.</span>
              <span v-else-if="activeMainAnimationCameraText" key="camera" class="point-camera">Sensor detect <br> video event.</span>
              <span v-else-if="activeMainAnimationAiText" key="ai" class="point-ai">Human animal car <br> whatever.  </span>
              <span v-else-if="activeMainAnimationOperatorText" key="operator" class="point-operator">Monitoring <br> when you need. </span>
              <span v-else key="all" class="point-all">Anything <br> you dreamed. </span>
            </transition>
          </span>
        </div>
        <div v-bind:class="{ active: activeTextAnimation }" class="desc">
          Installing the Bridge is as simple as connecting zones to an alarm panel. Install the CHeKT Bridge and begin video verification with any alarm panel.
        </div>
        <div v-bind:class="{ active: activeTextAnimation }" class="watch-video-button">
          <div @click="clickModal()">WATCH VIDEO</div>
        </div>
      </div>
      <div class="main-img">
        <div class="main-background"><img src="@/assets/main.png" alt="chekt-image" style="width:1254px;"></div>
        <div v-bind:class="{ active: activeMainAnimationCamera }" class="main-camera"><img src="@/assets/main-camera.png" alt="chekt-image" style="width:180px;"></div>
        <div v-bind:class="{ active: activeMainAnimationAi }" class="main-ai"><img src="@/assets/main-ai.png" alt="chekt-image" style="width:180px;"></div>
        <div v-bind:class="{ active: activeMainAnimationSms }" class="main-sms"><img src="@/assets/main-sms.png" alt="chekt-image" style="width:180px;"></div>
        <div v-bind:class="{ active: activeMainAnimationOperator }" class="main-operator"><img src="@/assets/main-operator.png" alt="chekt-image" style="width:180px;"></div>
      </div>
      <!-- <div class="img-group">
        <div class="chekt-img">
          <div><img class="chekt-img-1" src="@/assets/chekt-img1-1.png" alt="chekt-image"></div>
        </div>
        <div class="chekt-img2">
          <div><img class="chekt-img-2" src="@/assets/chekt-img1-2.png" alt="chekt-image"></div>
        </div>
      </div> -->
    </div>

    <!-- section-2 -->
    <div class="section-2">
      <div class="optexbox">
        <div class="optex-img"><img src="@/assets/optex-img.png" class="optex-img-source"></div>
        <div class="optex-text">
          <div class="optex-text-title">CHeKT and OPTEX partner for global security solutions.</div>
          <div class="optex-text-desc">Visual-verification technology from CHeKT for global security.</div>
          <div>
            <div class="optex-text-action">VIEW MORE -></div>
            <!-- <MyIcon class="chevron-right" v-bind:color="var(--primary)'" v-bind:icon="'chevron_right'" v-bind:width="18" /> -->
          </div>
        </div>
      </div>
    </div>

    <!-- section-3 -->
    <div class="section-3">
      <div class="inte-textbox">
        <div class="inte-title">
          Works with all central station<br>
          automation software.
        </div>
        <div class="inte-desc">
          Because CHeKT cameras integrate into existing security panels and connect to the cloud, 
          you don’t need any additional hardware or software to monitor events from the CHeKT camera. 
        </div>
        <div class="inte-action">
          <div>SEE INTEGRATIONS -></div>
        </div>
      </div>
      <div class="inte-imgbox">
        <div class="inte-img">
          <div class="inte-img1"><img src="@/assets/inte-img1.png"></div>
          <div class="inte-img2"><img src="@/assets/inte-img2.png"></div>
          <div class="inte-img3"><img src="@/assets/inte-img3.png"></div>
          <div class="inte-img4"><img src="@/assets/inte-img4.png"></div>
          <div class="inte-img5"><img src="@/assets/inte-img5.png"></div>
          <div class="inte-img6"><img src="@/assets/inte-img6.png"></div>
          <div class="inte-img7"><img src="@/assets/inte-img7.png"></div>
          <div class="inte-img8"><img src="@/assets/inte-img8.png"></div> 
          <div class="inte-img9"><img src="@/assets/inte-img8.png"></div> 
        </div>
        <div class="inte-img">
          <div class="inte-img1"><img src="@/assets/inte-img1.png"></div>
          <div class="inte-img2"><img src="@/assets/inte-img2.png"></div>
          <div class="inte-img3"><img src="@/assets/inte-img3.png"></div>
          <div class="inte-img4"><img src="@/assets/inte-img4.png"></div>
          <div class="inte-img5"><img src="@/assets/inte-img5.png"></div>
          <div class="inte-img6"><img src="@/assets/inte-img6.png"></div>
          <div class="inte-img7"><img src="@/assets/inte-img7.png"></div>
          <div class="inte-img8"><img src="@/assets/inte-img8.png"></div> 
          <div class="inte-img9"><img src="@/assets/inte-img8.png"></div> 
        </div>
      </div>
    </div>

    <!-- section-4 -->
    <div class="section-4">
      <div class="operbox">
        <div class="oper-img"><img src="@/assets/person-head.png" class="oper-img-source"></div>
        <div class="oper-text">
          <div class="oper-text-title">Operators to seamlessly view alarm events and live video.</div>
          <div class="oper-text-desc">
            Improving end to end system performance for the Operator, Integrator and Consumer.
            Putting eyes on what has caused an alarm to occur without the need for any up front CS investment.
          </div>
        </div>
      </div>
    </div>

    <!-- section-5 -->
    <div class="section-5">
      <div class="app-text">
        <div class="app-text-title">Enduser can do anything with the App</div>
        <div class="app-text-desc">
          End users will love the automation, ease of access and alert notifications of the CHeKT cameras.
        </div>
        <div class="app-action-buttons">
          <div class="app-action-button">
            <img src="@/assets/logo-android.png" style="width:24px;">
            <div class="android-text">ANDROID</div>
          </div>
          <div class="app-action-button">
            <img src="@/assets/logo-apple.png" style="width:24px;">
            <div class="android-text">IOS</div>
          </div>
        </div>
      </div>
      <div class="app-img"><img src="@/assets/mobile.png" class="app-img-source"></div>
    </div>


  </div>
</template>

<script>
import MyIcon from '@/components/MyIcon'
export default {
  name: 'home',
  components: {
    MyIcon,
  },
  data () {
    return {
      activeTextAnimation: false,
      activeMainAnimationCamera: false,
      activeMainAnimationSms: false,
      activeMainAnimationOperator: false,
      activeMainAnimationAi: false,

      activeMainAnimationCameraText: false,
      activeMainAnimationSmsText: false,
      activeMainAnimationOperatorText: false,
      activeMainAnimationAiText: false,
    }
  },
  created: async function () {
    window.addEventListener("scroll", this.handleScroll)
    this.$nextTick( async () => {
      await this.$tool.wait(200)
      this.init()
    })
  },
  mounted: function () {
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    init: function () {
      this.activeTextAnimation = true
      this.doMainAnimation()
    },
    clickModal: function() {
      this.$store.commit('MODAL_STATUS', true)
      var bodyEl = document.getElementsByTagName("BODY")[0];
      bodyEl.style.overflow = "hidden";
    },
    handleScroll: function (e) {
      console.log(e.target.documentElement.scrollTop);
      if (e.target.documentElement.scrollTop > 100) {
        this.$store.commit('HEADER_SCROLL_STATUS', true)
      }
      else this.$store.commit('HEADER_SCROLL_STATUS', false)
    },
    doMainAnimation: async function() {
      for (let i = 0; i < 1000; i++) { // 거의 무한이긴하지만 일정횟수가 지나면 애니메이션을 멈춤

        // SMS
        this.activeMainAnimationSms = true
        this.activeMainAnimationSmsText = true
        this.activeMainAnimationCameraText = false
        this.activeMainAnimationAiText = false
        this.activeMainAnimationOperatorText = false
        await this.$tool.wait(10000)

        // Camera
        this.activeMainAnimationCamera = true
        this.activeMainAnimationSmsText = false
        this.activeMainAnimationCameraText = true
        this.activeMainAnimationAiText = false
        this.activeMainAnimationOperatorText = false
        await this.$tool.wait(10000)

        // Operator
        this.activeMainAnimationOperator = true
        this.activeMainAnimationSmsText = false
        this.activeMainAnimationCameraText = false
        this.activeMainAnimationAiText = false
        this.activeMainAnimationOperatorText = true
        await this.$tool.wait(10000)

        // Ai
        this.activeMainAnimationAi = true
        this.activeMainAnimationSmsText = false
        this.activeMainAnimationCameraText = false
        this.activeMainAnimationAiText = true
        this.activeMainAnimationOperatorText = false
        await this.$tool.wait(10000)

        // ALL
        this.activeMainAnimationSms = false
        await this.$tool.wait(500)
        this.activeMainAnimationCamera = false
        await this.$tool.wait(400)
        this.activeMainAnimationOperator = false
        await this.$tool.wait(300)
        this.activeMainAnimationAi = false
        this.activeMainAnimationSmsText = false
        this.activeMainAnimationCameraText = false
        this.activeMainAnimationAiText = false
        this.activeMainAnimationOperatorText = false
        await this.$tool.wait(10000)
        
      }
    },
  }
}
</script>

<style scoped>

/* section-1 */
/*************/

.section-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
.heading-group {
  margin-top: 120px;
  max-width: 1054px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.title {
  font-size: 60px;
  color: var(--gray-high);
  font-weight: 800;
  line-height: 62px;
  display: grid;
}
.desc {
  margin-top: 20px;
  font-size: 22px;
  color: var(--blue-gray-higher);
  line-height: 30px;
  margin-right: 50px;
  max-width: 50%;
  opacity: 0;
}
.watch-video-button {
  opacity: 0;
}
.watch-video-button > div {
  margin-top: 30px;
  font-size: 16px;
  padding: 15px 20px;
  background-color: var(--primary);
  display: inline-block;
  color: var(--white);
  font-weight: 600;
  border-radius: 30px;
  transition: background-color .2s ease-out;
}
.watch-video-button > div:hover {
  background-color: var(--primary-shade);
  cursor: pointer;
}
.point-sms {
  color: #ED4E53;
  text-decoration: solid underline #ed4e5333 6px;
}
.point-camera {
  color: #FF7D3B;
  text-decoration: solid underline #ff7c3b3a 6px;
}
.point-ai {
  color: #5C72FC;
  text-decoration: solid underline #5c71fc30 6px;
}
.point-operator {
  color: #1EA675;
  text-decoration: solid underline #1ea67430 6px;
}
.point-all {
  color: var(--gray-high);
  text-decoration: solid underline #00000030 6px;
}
.main-img {
  position: absolute;
  width: 100%;
  left: 20%;
}
.main-background {
  position: relative;
}
.main-camera {
  position: relative;
  top: -620px;
  left: 620px;
  filter: drop-shadow(0px 100px 50px rgba(0, 0, 0, 0.2));
  transition: 2s transform;
  z-index: 2;
}
.main-ai {
  position: relative;
  top: -810px;
  left: 730px;
  filter: drop-shadow(0px 100px 50px rgba(0, 0, 0, 0.2));
  transition: 2s transform;
  z-index: 4;
}
.main-sms {
  position: relative;
  top: -790px;
  left: 730px;
  filter: drop-shadow(0px 100px 50px rgba(0, 0, 0, 0.2));
  transition: 2s transform;
  z-index: 1;
}
.main-operator {
  position: relative;
  top: -980px;
  left: 840px;
  filter: drop-shadow(0px 100px 50px rgba(0, 0, 0, 0.2));
  transition: 2s transform;
  z-index: 3;
}

.main-camera > img,
.main-ai > img,
.main-sms > img,
.main-operator > img {
  transform: scale(1);
  transition: 2s transform;
}
/* .img-group {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.chekt-img {
  animation:spin 100s linear infinite; 
  overflow: hidden;
}
.chekt-img-1 {
  width: 100%;
}
.chekt-img-2 {
  width: 100%;
}
.chekt-img2 {
  position: absolute;
} */

/* section-2 */
/*************/

.section-2 {
  margin-top: 250px;
  position: relative;
  max-width: 1054px;
  margin-left: auto;
  margin-right: auto;
}
.optexbox {
  display: flex;
  flex-direction: row;
  height: 280px;
  width: 100%;
}
.optex-img {
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #F8FAFC 0%, #CCEFFF 100%);
  width: 100%;
  border-radius: 20px 0 0 20px;
  }
.optex-img-source {
  max-width: 320px;
  width: 100%;
  position: absolute;
  top: -30px;
}
.optex-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F8FAFC;
  width: 100%;
  border-radius: 0 20px 20px 0;
}
.optex-text-title{
  padding-left: 40px;
  padding-right: 20px;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: var(--gray-higher);
}
.optex-text-desc{
  padding-left: 40px;
  padding-right: 20px;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: var(--blue-gray-high);
  margin-top: 10px;
}
.optex-text-action{
  padding-left: 40px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  color: var(--primary);
  margin-top: 20px;
  cursor: pointer;
}
.optex-text-action:hover{
  color: var(--gray-high);
  transition: color .3s ease-out;
}
.chevron-right {
  display: flex;
  justify-content: center;
}


/* section-2 */
/*************/
.section-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  position: relative;
}
.inte-textbox {
  padding-left: 20px;
  padding-right: 20px;
}
.inte-title {
  font-weight: 800;
  font-size: 42px;
  line-height: 45px;
  text-align: center;
  color: var(--gray-high);
}
.inte-desc {
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: var(--blue-gray-higher);
  max-width: 720px;
  text-align: center;
  margin-top: 20px;
}
.inte-action {
  margin-top: 30px;
  text-align: center;
}
.inte-action > div {
  font-weight: 600;
  font-size: 18px;
  color: var(--primary);
  cursor: pointer;
  display: inline-block;
}
.inte-action > div:hover {
  color: var(--gray-high);
  transition: color .3s ease-out;
}
.inte-imgbox {
  width: 100%;
  overflow:hidden;
  display: flex;
  flex-direction: row;
}
.inte-img {
  display: flex;
  flex-direction: row;
  margin-top: 120px;
  overflow:visible;
  animation:wave 50s linear infinite; /* animation */
}
.inte-img > div {
  position: relative;
}
.inte-img1 {
  animation:wave1 5s infinite;
  animation-direction: alternate;
  margin-top: 70px;
}
.inte-img2 {
  animation:wave2 10s infinite;
  animation-direction: alternate;
  margin-left: 70px;
}
.inte-img3 {
  animation:wave3 5s infinite;
  animation-delay: 2s;
  animation-direction: alternate;
  margin-left: -70px;
}
.inte-img4 {
  animation:wave4 5s infinite;
  animation-direction: alternate;
  margin-left: 100px;
  margin-top: 70px;
}
.inte-img5 {
  animation-delay: 1s;
  animation:wave5 5s infinite;
  animation-direction: alternate;
  margin-left: 100px;
}
.inte-img6 {
  animation:wave6 10s infinite;
  animation-direction: alternate;
}
.inte-img7 {
  animation-delay: 3s;
  animation:wave7 5s infinite;
  animation-direction: alternate;
  margin-left: 100px;
}
.inte-img8 {
  animation:wave8 5s infinite;
  animation-direction: alternate;
  margin-left: 120px;
  margin-top: 100px;
}
.inte-img9 {
  opacity: 0;
}

/* section-4 */
/*************/

.section-4 {
  margin-top: 150px;
  background: linear-gradient(180deg, #002038 0%, #001321 100%);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 150px;
  padding-bottom: 150px;
}
.operbox {
  max-width: 1054px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.oper-img {
  width: 100%;
  text-align: center;
  padding-right: 20px;
}
.oper-img-source {
  width: 100%;
  max-width: 400px;
}
.oper-text {
  padding-left: 20px;
  width: 100%;
}
.oper-text-title {
  max-width: 500px;
  font-size: 42px;
  font-weight: 700;
  color: var(--white);
  line-height: 45px;
}
.oper-text-desc {
  margin-top: 10px;
  max-width: 500px;
  font-size: 22px;
  color: var(--white);
  line-height: 30px;
  opacity: .6;
}

/* section-5 */
/*************/
.section-5 {
  max-width: 1054px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
.app-text {
  padding-right: 30px;
}
.app-img {
  padding-left: 30px;
}
.app-img-source {
  max-width: 100%;
}
.app-text-title {
  font-weight: 800;
  font-size: 42px;
  line-height: 45px;
  color: var(--gray-high);
}
.app-text-desc {
  margin-top: 10px;
  font-size: 22px;
  line-height: 30px;
  color: var(--blue-gray-higher);
}
.app-action-buttons {
  margin-top: 20px;
  display: flex;
}
.app-action-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px var(--blue-gray-high);
  padding: 10px 20px;
  border-radius: 10px;
  margin-right: 20px;
  cursor: pointer;
}
.app-action-button:hover {
  box-shadow: 0px 0px 10px #E3E8EE;
  transition: box-shadow .3s ease;
}
.android-text {
  margin-left: 10px;
  font-weight: 700;
}


/* ANIMATIONS */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10000px);
}

/* SECTION 1 */
.heading-group > .title > span:nth-child(1) {
  transition-delay: .1s;
  transform: translateY(20px);
}
.heading-group > .title > span:nth-child(2) {
  transition-delay: .2s;
  transform: translateY(20px);
}
.heading-group > .title > span:nth-child(3) {
  transition-delay: .3s;
  transform: translateY(20px);
}
.heading-group > .title > span:nth-child(4) {
  transition-delay: .4s;
  transform: translateY(20px);
}
.heading-group .desc {
  transition-delay: .5s !important;
  transform: translateY(20px);
}
.heading-group .desc {
  transition-delay: .5s !important;
  transform: translateY(20px);
}

.heading-group .watch-video-button {
  transition-delay: .6s !important;
  transform: translateY(20px);
}

.heading-group > .title > span:nth-child(1).active,
.heading-group > .title > span:nth-child(2).active,
.heading-group > .title > span:nth-child(3).active {
  transform: translateY(0px);
}

.title-line {
  opacity: 0;
}

.title-line.active {
  transition: .4s opacity, .8s transform cubic-bezier(.07,.89,.79,.95), .8s;
  opacity: 1;
  transform: translateY(0);
}
.heading-group .desc.active {
  transition: .4s opacity, .8s transform cubic-bezier(.07,.89,.79,.95), .8s;
  opacity: 1;
  transform: translateY(0);
}
.heading-group .watch-video-button.active {
  transition: .4s opacity, .8s transform cubic-bezier(.07,.89,.79,.95), .8s;
  opacity: 1;
  transform: translateY(0);
}

.main-camera.active > img,
.main-ai.active > img,
.main-sms.active > img,
.main-operator.active > img {
  transform: scale(2);
}
.main-camera.active {
  transform: translate3d(110px, 120px, 0);
}
.main-ai.active {
  transform: translate3d( 0px, 80px, 0);
}
.main-sms.active {
  transform: translateY(100px);
}
.main-operator.active {
  transform: translate3d( -110px, 60px, 0);
}

@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

@keyframes wave{
  0% { transform: translateX(0%); } 
  100% { transform: translateX(-100%); }
}
@keyframes wave1{
  0% { transform: translateY(20px); } 
  100% { transform: translateY(-50px); }
}
@keyframes wave2{
  0% { transform: translateY(30px); } 
  100% { transform: translateY(-70px); }
}
@keyframes wave3{
  0% { transform: translateY(10px); }
  100% { transform: translateY(-60px); }
}
@keyframes wave4{
  0% { transform: translateY(20px); }
  100% { transform: translateY(-20px); }
}
@keyframes wave5{
  0% { transform: translateY(10px); }
  100% { transform: translateY(-10px); }
}
@keyframes wave6{
  0% { transform: translateY(20px); }
  100% { transform: translateY(-50px); }
}
@keyframes wave7{
  0% { transform: translateY(40px); }
  100% { transform: translateY(-30px); }
}
@keyframes wave8{
  0% { transform: translateY(20px); }
  100% { transform: translateY(-50px); }
}

/* SCREEN */

@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 1054px) {

}

@media screen and (max-width: 750px) {

  /* section-1 */
  .img-group {
     display: none;
  }
  .main-img .main-camera,
  .main-img .main-camera,
  .main-img .main-camera,
  .main-img .main-camera {
    display: none;
  }

  /* section-2 */
  .optexbox {
    flex-direction: column;
    height: auto;
  }
  .optex-img {
    top: 30px;
    border-radius: 0px;
  }
  .optex-img-source {
    position: relative;
    margin-block-end: -30px;
  }
  .optex-text {
    padding-top: 30px;
    padding-bottom: 50px;
    width: 100%;
    border-radius: 0px;
  }
  .optex-text-title {
    padding-left: 20px;
  }
  .optex-text-desc {
    padding-left: 20px;
  }
  .optex-text-action {
    padding-left: 20px;
  }

  /* section-4 */
  .operbox {
    flex-direction: column;
  }
  .oper-text {
    padding-top: 50px;
    padding-left: 0px;
  }
  /* section-5 */
  .section-5 {
    flex-direction: column-reverse;
  }
  .app-img {
    width: 70%;
    padding-bottom: 100px;
  }
}


</style>
