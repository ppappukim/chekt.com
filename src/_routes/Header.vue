<template>
  <div class="header">
    <!-- <div class="logo"><img src="@/assets/logo.png" alt="logo" style="height:100%;"></div> -->
    <a href="/">
      <div class="logo" @mouseover="hoverLogo()" @mouseleave="hoverLeaveLogo()"><MyIcon v-bind:color="logoColor" v-bind:icon="'chekt-logo'" v-bind:width="32" /></div>
    </a>
    <div class="menus">
      <div class="menu">
        <div @click="onClickMenu('whychekt')">Why CHeKT</div>
        <div @click="onClickMenu('enterprise')">Enterprise</div>
        <div @click="onClickMenu('support')">Support</div>
        <div @click="onClickMenu('partners')">Partners</div>
      </div>
      <div class="menu-button">Contact Us</div>
    </div>
    <div class="menus-mobile">
      <div @click="openMenuModal()" class="menu-button-mobile">
        <MyIcon v-bind:color="'var(--gray-high)'" v-bind:icon="'menu'" v-bind:width="32" />
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/components/MyIcon'
export default {
  name: 'Header',
  components: {
    MyIcon,
  },
  data () {
    return {
      logoColor: 'var(--gray-high)',
    }
  },
  methods:{
    hoverLogo: function () {
      this.logoColor = 'var(--primary)'
    },
    hoverLeaveLogo: function () {
      this.logoColor = 'var(--gray-high)'
    },
    handleScroll: function () {
    },
    openMenuModal: function () {
      this.$store.commit('HOME_MOBILE_MENU_MODAL_STATUS', true)
      var bodyEl = document.getElementsByTagName("BODY")[0];
      bodyEl.style.overflow = "hidden";
    },
    onClickMenu: function (menu) {
      switch (menu) {
        case 'whychekt':
        this.$router.push({path: `/whychekt`}) 
          break;
        case 'enterprise':
          this.$router.push({path: `/enterprise`}) 
          break
       case 'support':
         this.$router.push({path: `/support`}) 
          break
       case 'partners':
         this.$router.push({path: `/partners`}) 
          break
        default:
          alert('You cannot go to Menu. please try again')
          break;
      }
      
    }
  }
}
</script>

<style scoped>
.header {
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
  background: rgba(255,255,255,.9);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  width: 100%;
}
.logo {
  margin-left: 20px;
  cursor: pointer;
}
.menus {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
.menus-mobile {
  display: none;
  margin-right: 20px;
}
.menu {
  font-size: 14px;
  color: var(--blue-gray-higher);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.menu div {
  margin-left: 30px;
}
.menu div:hover {
  color: var(--black);
  transition: color .2s ease-out;
  cursor: pointer;
}
.menu-button {
  font-size: 14px;
  font-weight: 500;
  margin-left: 30px;
  background-color: var(--primary);
  color: var(--white);
  padding: 10px 15px;
  border-radius: 10px;
}
.menu-button:hover {
  cursor: pointer;
  transition: background-color .2s ease-out;
  background-color: var(--primary-shade);
}
.menu-button-mobile {
  cursor: pointer;
}

/* screen */

@media screen and (max-width: 750px) {
  .menus {
    display: none;
  }
  .menus-mobile {
    display: block;
  }

}

</style>
