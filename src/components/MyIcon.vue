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
