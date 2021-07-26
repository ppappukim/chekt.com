<template>
  <div
  class="my-icon">
    <template v-if="icon === 'error'">
      <svg v-bind:style="{'fill': color, 'width': width + 'px'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'chekt-logo'">
      <svg v-bind:style="{'fill': color, 'width': width + 'px'}" viewBox="0 0 300 310" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.8009V78.8033C0 209.021 91.2214 297.804 149.98 310C208.762 297.804 300 209.021 300 78.8033V24.8009C300 24.8009 223.52 0 148.512 0C73.5268 0 0 24.8009 0 24.8009ZM138.251 113.38C141.887 111.924 145.843 111.114 149.993 111.114C167.573 111.114 181.826 125.509 181.826 143.257C181.826 161.006 167.573 175.397 149.993 175.397C132.414 175.397 118.158 161.006 118.158 143.257C118.158 141.475 118.313 139.716 118.583 138.001C121.084 139.693 124.087 140.669 127.31 140.669C135.997 140.669 143.045 133.564 143.045 124.779C143.045 120.302 141.204 116.268 138.251 113.38M71.5802 143.257C71.5802 186.913 106.752 222.427 149.993 222.427C186.557 222.427 217.36 197.027 225.995 162.788H252.749C243.653 211.691 201.042 248.814 149.993 248.814C92.3432 248.814 45.4425 201.464 45.4425 143.257C45.4425 85.0511 92.3432 37.6978 149.993 37.6978C201.467 37.6978 244.372 75.4472 252.971 124.962H226.292C218.093 90.1012 186.996 64.0877 149.993 64.0877C106.752 64.0877 71.5802 99.5985 71.5802 143.257Z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'chevron_right'">
      <svg v-bind:style="{'fill': color, 'width': width + 'px'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'menu'">
      <svg v-bind:style="{'fill': color, 'width': width + 'px'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'close'">
      <svg v-bind:style="{'fill': color, 'width': width + 'px'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
      </svg>
    </template>
    <!-- IMG SVG -->
    <template v-else-if="icon === 'whychekt-line'">
      <svg width="802" height="460" viewBox="0 0 802 460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.6" d="M288.643 405.35L224.637 443.488" stroke="url(#paint0_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.6" d="M66.3017 427.575L2.66137 388.828" stroke="url(#paint1_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.6" d="M626.695 83.0808L561.744 46.5834" stroke="url(#paint2_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.6" d="M307.011 46.1753L372.305 10.2993" stroke="url(#paint3_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.6" d="M161.691 186.859L96.3974 222.735" stroke="url(#paint4_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.3" d="M493.651 401.911L558.602 438.409" stroke="url(#paint5_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.3" d="M734.374 264.776L799.325 301.273" stroke="url(#paint6_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <path opacity="0.3" d="M521.286 268.825L587.195 234.097" stroke="url(#paint7_linear)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
      <defs>
      <linearGradient id="paint0_linear" x1="260.437" y1="381.013" x2="214.258" y2="434.533" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.38"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="74.4696" y1="391.228" x2="5.59983" y2="375.751" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.38"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="633.59" y1="46.4732" x2="564.226" y2="33.4078" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.38"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="334.349" y1="71.4786" x2="382.361" y2="19.6065" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.38"/>
      </linearGradient>
      <linearGradient id="paint4_linear" x1="134.354" y1="161.555" x2="86.3419" y2="213.427" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.38"/>
      </linearGradient>
      <linearGradient id="paint5_linear" x1="486.756" y1="438.519" x2="556.12" y2="451.584" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.6"/>
      </linearGradient>
      <linearGradient id="paint6_linear" x1="727.479" y1="301.384" x2="796.843" y2="314.449" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.6"/>
      </linearGradient>
      <linearGradient id="paint7_linear" x1="548.178" y1="294.6" x2="597.084" y2="243.575" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C8C8C8">
        <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
      </stop>
      <stop offset="1" stop-color="#979797" stop-opacity="0.6"/>
      </linearGradient>
      </defs>
      </svg>
    </template>
    <template v-else>
      <svg v-bind:style="{'fill': color, 'width': width + 'px'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  name: 'my-icon',
  props: {
    icon: {
      type: String,
      default: function () {
        return null
      }
    },
    width: {
      type: Number,
      default: function () {
        return 24
      }
    },
    color: {
      type: String,
      default: function () {
        return null
      }
    },
  }
}
</script>

<style scoped>

</style>
