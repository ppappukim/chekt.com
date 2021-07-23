<template>
  <div class="body">
    <Header class="headerCom" v-bind:class="{show:headerScrolled}"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/_routes/Header'
import Footer from '@/_routes/Footer'
export default {
  components: {
    Header,
    Footer,
  },
  name: 'Root',
  data () {
    return {
      
    }
  },
  computed: {
    headerScrolled: function () {
      return this.$store.getters.headerScrolled
    },
  },
  methods: {
  }
}
</script>

<style scoped>
.headerCom {
  /* transform: translateY(-100%); */
}
.video {
  position: fixed;
}
.headerCom.show {
  transform: translateY(100%);
  transition: transform .3s cubic-bezier(.075,.82,.165,1);
  position: sticky;
  z-index: 99;
  top: -65px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 7%);
}

/* ANIMATIONS */
</style>
