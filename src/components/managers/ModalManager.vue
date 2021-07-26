<template>
  <div>
    <!-- Main Youtube -->
    <div v-if="mainYoutubeModalStatus">
      <div
      class="backdrop"
      ></div>
      <div
      @click="closeModal()"
      class="video-viewer">
         <youtube
         style="width:960px; height:540px;"
         class="youtube"
         :video-id="videoId"
         :player-vars="playerVars"
         ref="youtube" />
      </div>
    </div>

    <!-- Home Mobile Menu -->
      <div v-if="homeMobileMenuModalStatus">
        <!-- backdrop -->
        <div class="backdrop"></div>
        <!-- body -->
        <div class="home-mobile-menu">
          <div class="home-mobile-menu-header">
            <div class="home-mobile-menu-title">CHeKT Menu</div>
            <div @click="closeModal()" class="home-mobile-menu-close">
              <MyIcon v-bind:color="'var(--gray-high)'" v-bind:icon="'close'" v-bind:width="32" />
            </div>
          </div>
          <div class="home-mobile-menu-body">
            <div class="home-mobile-menu-whychekt">💙 Why CHeKT</div>
            <div class="home-mobile-menu-enterprise">💰 Enterprise</div>
            <div class="home-mobile-menu-support">🤹🏽‍♀️ Support</div>
            <div class="home-mobile-menu-partners">👨‍👨‍👦‍👦 Partners</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import MyIcon from '@/components/MyIcon'
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'HelloWorld',
  components: {
    MyIcon,
  },
  data () {
    return {
      videoId: 'C7rOsLZVL9o',
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    playerVars() {
      return {
        //controls: 0,
        // player3: Object,
        rel: 0,
        autoplay: 1,
        enablejsapi: 1,
        fs: 0,
        // playsinline: 1,
        ivLoadPolicy2: 1,
        //playlist: this.videoId,
        muted: 1,
        //loop: 1,
        start: this.start,
        end: this.end,
      };
    },
    mainYoutubeModalStatus: function () {
      return this.$store.getters.mainYoutubeModalStatus
    },
    homeMobileMenuModalStatus: function () {
      return this.$store.getters.homeMobileMenuModalStatus
    },
  },
  created: function () {
  },
  mounted: function () {
    // this.setYoutubeSize()
  },
  methods: {
    // setYoutubeSize() {
    //   this.player.setSize(960, 540)
    // },
    closeModal: function () {
      this.$store.commit('HOME_MOBILE_MENU_MODAL_STATUS', false)
      var bodyEl = document.getElementsByTagName("BODY")[0];
      bodyEl.style.overflow = "auto";
    },
  }
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  background-color: var(--backdrop);
  width: 100%;
  height: 100%;
  z-index: 9998;
  animation-name: fadein;
  animation-duration: .5s;
}
.video-viewer {
  height: 100%;
  width: 100%;
  top:0;right:0;bottom:0;left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  animation-name: smallerin;
  animation-duration: .5s;
  animation-delay: .1s;
}

  /* Home Mobile Menu */

.home-mobile-menu {
  top:0;right:0;bottom:0;left:0;
  margin: 20px;
  position: fixed;
  z-index: 9999;
  background-color: var(--white);
  border-radius: 20px;
  padding: 30px;
}
.home-mobile-menu-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home-mobile-menu-title {
  font-size: 28px;
  font-weight: 700;
}
.home-mobile-menu-close {
  cursor: pointer;
}
.home-mobile-menu-body {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin-top: 120px;
}
.home-mobile-menu-body > div {
  margin-top: 50px;
  cursor: pointer;
  color: var(--gray-high)
}
.home-mobile-menu-body > div:hover{
  color: var(--primary)
}
/* ANIMATION */

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes smallerin {
  from {
    opacity: 0;
    transform: scale(1.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
