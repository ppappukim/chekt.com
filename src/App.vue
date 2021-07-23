<template>
  <div id="app">
    <ModalManager/>
    <router-view/>

  </div>
</template>

<script>
import ModalManager from '@/components/managers/ModalManager'
export default {
  components: {
    ModalManager
  },
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  --primary: #1E88E5;
  --primary-shade: #1a78ca;
  --primary-tint: #3594e8;

  --secondary: #FF7F16;
  --secondary-shade: #e07013;
  --secondary-tint: #ff8c2d;
  
  --success: #1EA675;
  --success-shade: #1A9267;
  --success-tint: #35AF83;

  --warning: #EB6E00;
  --warning-shade: #cf6100;
  --warning-tint: #ed7d1a;

  --danger: #CD3D64;
  --danger-shade: #b43658;
  --danger-tint: #d25074;

  --gray-high: #212121;
  --gray-mideum: #666666;
  --gray-low: #9E9E9E;

  --blue-gray-higher: #55647B;
  --blue-gray-high: #8792A2;
  --blue-gray-mideum: #E3E8EE;
  --blue-gray-low: #F2F6F9;
  --blue-gray-lower: #F7FAFC;

  --border: rgba(0, 0, 0, 0.1);
  
  --white: #ffffff;
  --black: #000000;

  --backdrop: rgba(0, 0, 0, 0.6);

}
</style>



