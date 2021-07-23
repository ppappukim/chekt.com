
const ToolPlugin = {
  install (Vue) {
    let tool = {
      wait: function (time) {
        return new Promise(resolve => {
          setTimeout(() => { resolve() }, time)
        })
      },
      getCodecFromMP4: async function (blob) {
        let enc = new TextDecoder('utf-8')
        let arrBuffer = await new Response(blob).arrayBuffer()
        let byteArray = new Int8Array(arrBuffer)
        let items1 = enc.decode(byteArray).trim().split('moov')
        if (items1.length < 2) return null
        let items2 = items1[1].split('stsd')
        if (items2.length < 2) return null
        let videoBlock0 = items2[1]
        if (videoBlock0.length < 16) return null
        let codec = videoBlock0.slice(12, 16)
        if (codec === 'avc1') codec = 'h264'
        return codec
      },
      downloadObjectURL: function (objectURL, filename) {
        let link = document.createElement('a')
        link.href = objectURL
        link.download = filename + ''
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      },
      getBase64FromObjectURL: async function (objectURL) {
        const blob = await fetch(objectURL).then(r => r.blob())
        const base64data = await this.readAsDataURL(blob)
        return base64data
      },
      readAsDataURL: function (file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader()
          reader.onloadend = () => {
            const base64data = reader.result
            resolve(base64data)
          }
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
      },
      getTimeDiffFromNow: function (timestamp) {
        let now = new Date()
        let diff = Math.round((now.getTime() - timestamp) / 1000)
        let text = null
        let text4 = null
        let textDetail = null
        if (diff < 60) {
          text = '1m'
          text4 = '_0001m'
          textDetail = diff + 's'
        } else if (diff < 60 * 60) {
          let mDiff = Math.round(diff / 60)
          text = mDiff + 'm'
          if (mDiff < 100) text4 = '_00' + mDiff + 'm'
          if (mDiff < 10) text4 = '_000' + mDiff + 'm'
          textDetail = text
        } else if (diff < 60 * 60 * 24) {
          let hDiff = Math.round(diff / 60 / 60)
          text = hDiff + 'h'
          if (hDiff < 100) text4 = '__00' + hDiff + 'h'
          if (hDiff < 10) text4 = '__000' + hDiff + 'h'
          textDetail = text
        } else {
          let dDiff = Math.round(diff / 60 / 60 / 24)
          text = dDiff + 'd'
          if (dDiff < 1000) text4 = '___0' + dDiff + 'd'
          if (dDiff < 100) text4 = '___00' + dDiff + 'd'
          if (dDiff < 10) text4 = '___000' + dDiff + 'd'
          textDetail = text
        }
        return {
          text: text,
          text4: text4,
          textDetail: textDetail,
          diffInSec: diff
        }
      },
      setCookie: function (cname, cvalue, date) {
        let domain = this.getCookieDomainForCurrentDomain()
        if (!date) {
          let now = new Date()
          now.setFullYear(now.getFullYear() + 5)
          date = now.toUTCString()
        }
        document.cookie = encodeURIComponent(cname) + '=' + encodeURIComponent(cvalue) + ';expires=' + date + ';domain=' + domain + ';path=/'
      },
      getCookie: function (cname) {
        let name = encodeURIComponent(cname) + '='
        let cookie = document.cookie
        let ca = cookie.split(';')
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i]
          while (c.charAt(0) === ' ') {
            c = c.substring(1)
          }
          if (c.indexOf(name) === 0) {
            let cookieToReturn = decodeURIComponent(c.substring(name.length, c.length))
            if (cookieToReturn === 'undefined') return undefined
            else if (cookieToReturn === 'null') return null
            else if (cookieToReturn === 'NaN') return NaN
            else return cookieToReturn
          }
        }
        return ''
      },
      deleteCookie: function (cname) {
        this.setCookie(cname, 'meaning_less_string', 'Thu, 01 Jan 1970 00:00:01 GMT')
      },
      getCookieDomainForCurrentDomain: function () {
        let temp = window.location.hostname.split('.')
        if (temp.length > 1) {
          return '.' + temp[+temp.length - 2] + '.' + temp[+temp.length - 1]
        } else {
          return temp[0]
        }
      },
      getClosestNumberFromArray: function (targetNumber, targetArray) {
        let closestNumber = targetArray.reduce((prev, curr) => {
          return (Math.abs(+curr - +targetNumber) < Math.abs(+prev - +targetNumber) ? +curr : +prev)
        })
        return closestNumber
      },
      playTts: function (text) {
        if ('speechSynthesis' in window) {
          let msg = new SpeechSynthesisUtterance(text)
          let voiceName = 'Google US English'
          msg.voice = window['speechSynthesis'].getVoices().filter(voice => { return voice.name === voiceName })[0]
          window['speechSynthesis'].speak(msg)
        } else {
          // this.$logger.warn('TTS is not supported')
        }
      },
      cancelTts: function () {
        if ('speechSynthesis' in window) {
          window['speechSynthesis'].cancel()
        } else {
          // this.$logger.warn('TTS is not supported')
        }
      },
      redirectToUrl: function (url) {
        // similar behavior as an HTTP redirect
        window.location.replace(url)
      },
      decodeJwtToken: function (str) {
        return jwtDecode(str)
      },
      encodeToBase64: function (str) {
        return window.btoa(str)
      },
      decodeFromBase64: function (base64Str) {
        return window.atob(base64Str)
      },
      encodeToBase64Url: function (str) {
        let base64Str = this.encodeToBase64(str)
        var base64Url = base64Str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
        return base64Url
      },
      decodeFromBase64Url: function (base64Url) {
        if (!base64Url) return ''
        if (base64Url.length % 4 === 2) base64Url = base64Url + '=='
        if (base64Url.length % 4 === 3) base64Url = base64Url + '='
        let base64Str = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        let str = this.decodeFromBase64(base64Str)
        return str
      },
      newObject: function (src) {
        return JSON.parse(JSON.stringify(src))
      },
      createUUID4: function () {
        // return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        let uuid = ''
        for (let ii = 0; ii < 32; ii += 1) {
          switch (ii) {
            case 8:
            case 20:
              uuid += '-'
              uuid += (Math.random() * 16 | 0).toString(16)
              break
            case 12:
              uuid += '-'
              uuid += '4'
              break
            case 16:
              uuid += '-'
              uuid += (Math.random() * 4 | 8).toString(16)
              break
            default:
              uuid += (Math.random() * 16 | 0).toString(16)
          }
        }
        return uuid
      },
      copyTextToClipboard: function (text) {
        let textArea = document.createElement('textarea')
        textArea.style.position = 'fixed'
        textArea.style.top = 0
        textArea.style.left = 0
        textArea.style.width = '2em'
        textArea.style.height = '2em'
        textArea.style.padding = 0
        textArea.style.border = 'none'
        textArea.style.outline = 'none'
        textArea.style.boxShadow = 'none'
        textArea.style.background = 'transparent'
        textArea.style.opacity = 0
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          alert('"' + text + '" is successfully copied to your clipboard.')
        } catch (err) {
          alert('Oops, unable to copy text: ' + err)
        }
        document.body.removeChild(textArea)
      },
      makePhoneCall: function (phoneNumber) {
        window.location.href = 'tel:' + phoneNumber
      },
      sendEmail: function (emailAddress) {
        window.location.href = 'mailto:' + emailAddress
      },
      openMap: function (lat, lng) {
        let url = 'http://maps.apple.com/?q=' + lat + ',' + lng
        this.openNewTab(url)
      },
      openNewTab: function (url) {
        let win = window.open(url, '_blank')
        if (win) {
          // Browser has allowed it to be opened
          win.focus()
        } else {
          // Browser has blocked it
          alert('Please allow popups for this website')
        }
      },
      capitalizeFirstLetter: function (string) {
        string = string.toLowerCase()
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      getTimeStringForIOS: function (timestamp) {
        return moment(timestamp).format('h' + '\uA789' + 'mm' + '\uA789' + 'ss' + 'A')
      },
      getUtcOffset: function (timezone) {
        return momentTimezone().tz(timezone).utcOffset()
      },
      getTodayBeginTimestamp: function (timezoneOffset) {
        let now = new Date()
        // new Date()과 같은기능인데 컴퓨터시간으로 받는게 아닌(컴터시간이 틀어지는경우가 있음)클라우드시간을 받음 - time.js를 만들어야함 (모니터링 포탈보고 만들수있음 user API가 필요해 보임)
        // let now = Vue.time.newDate()
        let timestamp = now.getTime()
        if (timezoneOffset !== undefined) timestamp += timezoneOffset * 60 * 1000 + now.getTimezoneOffset() * 60 * 1000
        let localNow = new Date(timestamp)
        timestamp = Math.floor((new Date((new Date(localNow.setHours(0))).setMinutes(0))).setSeconds(0) / 1000) * 1000
        if (timezoneOffset !== undefined) timestamp -= (now.getTimezoneOffset() * 60 * 1000 + timezoneOffset * 60 * 1000)
        return timestamp
      },
      getNowTimestamp: function (timezoneOffset) {
        let now = new Date()
        // let now = Vue.time.newDate() // 위에 설명있음
        let timestamp = now.getTime()
        if (timezoneOffset !== undefined) timestamp += timezoneOffset * 60 * 1000 + now.getTimezoneOffset() * 60 * 1000
        return timestamp
      },
      getLocalTimestamp: function (timestamp, timezoneOffset) {
        let now = new Date()
        // let now = Vue.time.newDate() // 위에 설명있음
        if (timezoneOffset !== undefined) timestamp += timezoneOffset * 60 * 1000 + now.getTimezoneOffset() * 60 * 1000
        return timestamp
      },
      hasAllKeys: function (obj, keys) {
        let result = false
        if (obj instanceof Object && keys instanceof Array) {
          let undefinedKeys = []
          keys.map(key => {
            if (obj[key] === undefined) undefinedKeys.push(key)
          })
          if (undefinedKeys.length === 0) result = true
          else {
            // console.log('utils.hasAllKeys failed')
            // console.log(undefinedKeys)
          }
        } else {
          // console.log('utils.hasAllKeys failed')
        }
        return result
      },
      getFriendlyTimeFromSec: function (seconds) {
        let text = null
        if (seconds < 60) {
          text = '1m'
        } else if (seconds < 60 * 60) {
          text = Math.round(seconds / 60) + 'm'
        } else if (seconds < 60 * 60 * 24) {
          text = Math.round(seconds / 60 / 60) + 'h'
        } else {
          text = Math.round(seconds / 60 / 60 / 24) + 'd'
        }
        return text
      },
      isValidEmailAddress (email) {
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regexp.test(email)) {
          return true
        } else {
          return false
        }
      },
      isValidMacAddress (macAddress) {
        let regexp = new RegExp('[0-9A-F]{12}')
        if (regexp.test(macAddress)) {
          return true
        } else {
          return false
        }
      },
      convertCamelToNormal (str) {
        return str
        // insert a space before all caps
          .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
          .replace(/^./, function (str) { return str.toUpperCase() })
      },
      getDateTimeTextForTable: function (myDate) {
        let text = ''
        if (myDate) {
          if (isNaN(myDate.getTime())) {
            text = myDate.toString()
          } else {
            let ago = '(' + this.getTimeDiffFromNow(myDate.getTime()).textDetail + ')'
            text = myDate.toISOString().substring(0, 19) + ' ' + ago
          }
        }
        return text
      },
      // debounce(Function fn, Number milliseconds_to_wait, Boolean immediate)
      _debounces: {},
      debounce: function (key, fn, milliseconds_to_wait) {
        if (this._debounces[key] === undefined) this._debounces[key] = []
        let keysToDelete = []
        for (let i = 0; i < this._debounces[key].length; i++) {
          clearTimeout(this._debounces[key][i])
          keysToDelete.push(this._debounces[key][i])
        }
        for (let i = 0; i < keysToDelete.length; i++) {
          let index = this._debounces[key].indexOf(keysToDelete[i])
          if (index > -1) delete this._debounces[key][index]
        }
        // console.log(milliseconds_to_wait + ' ' + key)
        let timeout = setTimeout(()=>{
          fn()
          // console.log(key)
        }, milliseconds_to_wait)
        this._debounces[key].push(timeout)
        return timeout
      },
      isIPv4: function (addr) {
        return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(addr)
      }
    }
    Vue.prototype.$tool = tool
    Vue.tool = tool
  }
}

export default ToolPlugin
