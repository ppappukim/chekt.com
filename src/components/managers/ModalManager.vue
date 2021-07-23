<template>
  <div>
    <transition name="fade">
    <div v-if="modalStatus" class="modal-1">
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
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'HelloWorld',
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
    modalStatus: function () {
      return this.$store.getters.modalStatus
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
      this.$store.commit('MODAL_STATUS', false)
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
  /* height: 100%;
  width: 100%; */
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

/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */

</style>
