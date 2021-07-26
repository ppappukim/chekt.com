<template>
  <!-- why chekt = why -->
  <div class="why">
    <!-- header -->
    <div class="header">
      <div class="header-wrapper">
        <div class="header-whychekt">Why CHeKT</div>
        <div>The Bridge</div>
        <div>Camera Compatibility</div>
        <div>Integration</div>
        <div>Comparisons</div>
      </div>
    </div>
    <!-- section 1 -->   
    <div class="section-1">
      <div class="s1wrapper">
        <div class="s1-text">
          <div class="s1-title">
            <span v-bind:class="{ active: activeAnimationMainText }">Simple</span>
            <span v-bind:class="{ active: activeAnimationMainText }">Powerful</span>
            <span v-bind:class="{ active: activeAnimationMainText }">and Practical.</span>
          </div>
          <div v-bind:class="{ active: activeAnimationMainText }" class="s1-desc">
            The Visual Verification Bridge eliminates those challenges,
            giving the central station operator visual awareness and the client a powerful security solution.
          </div>
          <div v-bind:class="{ active: activeAnimationMainText }" class="s1-button">WATCH VIDEO</div>
        </div>
        <div class="s1-img" v-bind:class="{ active: activeAnimationMain }">
          <div class="s1-img-base"><img src="@/assets/whychekt-base.png"></div>
          <div class="s1-img-line"><MyIcon v-bind:icon="'whychekt-line'"/></div>
          <div class="s1-img-chip"><img src="@/assets/whychekt-chip.png"></div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import MyIcon from '@/components/MyIcon'
export default {
  name: 'why chekt',
  components: {
    MyIcon,
  },
  data () {
    return {
      activeAnimationMain: false,
      activeAnimationMainText: false
    }
  },
  mounted: function () {
    this.init()
  },
  methods:{
    init: async function () {
      await this.$tool.wait(200)
      this.activeAnimationMain = true
      this.activeAnimationMainText = true
    }
  }
}
</script>

<style scoped>
/* header */  
.header {
  background-color: var(--black);
  padding: 20px;
}
.header-wrapper {
  max-width: 1054px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.header-whychekt {
  font-size: 18px !important;
  margin-right: 45px !important;
}
.header-wrapper > div {
  color: var(--white);
  margin-right: 30px;
  font-size: 14px;
}

/* section 1 */  
.section-1 {
  background-color: var(--black);
}
.s1wrapper {
  max-width: 1054px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 200px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
}
.s1-text {
  z-index: 5;
  position: relative;
}
.s1-title {
  padding-top: 120px;
  color: var(--white);
  font-size: 60px;
  font-weight: 700;
  display: grid;
  line-height: 62px;
}
.s1-title > span, .s1-desc, .s1-button{
  opacity: 0;
}
.s1-title > span:nth-child(1) { transition-delay: .1s !important; transform: translateY(20px); }
.s1-title > span:nth-child(2) { transition-delay: .2s !important; transform: translateY(20px); }
.s1-title > span:nth-child(3) { transition-delay: .3s !important; transform: translateY(20px); }
.s1-desc { transition-delay: .4s !important; transform: translateY(20px); }
.s1-button { transition-delay: .5s !important; transform: translateY(20px); }

.s1-title > span.active, .s1-desc.active, .s1-button.active {
  transition: .4s opacity, .8s transform cubic-bezier(.07,.89,.79,.95), .8s;
  opacity: 1;
  transform: translateY(0);
}
.s1-desc {
  font-size: 22px;
  line-height: 30px;
  color: var(--white-medium);
  max-width: 450px;
  margin-top: 10px;
}
.s1-button {
  margin-top: 30px;
  font-size: 16px;
  padding: 15px 20px;
  background-color: var(--white);
  display: inline-block;
  color: var(--black);
  font-weight: 600;
  border-radius: 30px;
  transition: background-color .2s ease-out;
  cursor: pointer;
}
.s1-button:hover {
  background-color: #e4e4e4;
}
.s1-img {
  position: relative;
  width: 50%;
  margin-left: -250px;
  margin-top: -50px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;
}
.s1-img.active {
  opacity: 1;
  transform: translateY(0px);
}
.s1-img-base {
  position: absolute;
  z-index: 2;
}
.s1-img-base > img{
  max-width: 1262px;
}
.s1-img-line {
  position: relative;
  z-index: 1;
  top: 150px;
  left: 205px;
}
.s1-img-line > img { 
  max-width: 796px;
}
.s1-img-chip {
  z-index: 3;
  position: relative;
  top: -150px;
  left: 420px;
  animation-duration: 8s;
  animation-name: updown;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: 2s;
}
.s1-img-chip > img { 
  max-width: 388px;
}

/* ANIMATION */
@keyframes updown {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(50px);
  }
}
</style>
