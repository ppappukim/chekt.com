<template>
  <div class="footer">
    <div class="wrapper">
      <div class="define-chekt">
        <img src="@/assets/logo-gray.png" style="width:55px; height:53px; margin-top:5px; color:var(--blue-gray-high);">
        <div class="contents">
          <div class="define-chekt-desc">
            For years security companies have installed alarm systems & surveillance systems in the same
            location, but creating a video monitoring solution for the client has been expensive, 
            time-consuming and difficult to maintain.  The Visual Verification Bridge eliminates those challenges,
            giving the central station operator visual awareness and the client a powerful security solution.
          </div>
          <ul class="sns">
            <li class="sns-text"><a href="" target="_blank"><span style="text-decoration:underline;">Twitter</span></a></li>
            <li class="sns-text"><a href="" target="_blank"><span style="text-decoration:underline;">Youtube</span></a></li>
            <li class="sns-text"><a href="" target="_blank"><span style="text-decoration:underline;">Facebook</span></a></li>
            <li class="sns-text"><a href="" target="_blank"><span style="text-decoration:underline;">Instargram</span></a></li>
            <li class="sns-text-last"><a href="" target="_blank"><span style="text-decoration:underline;">LinkedIn</span></a></li>
          </ul>
        </div>
      </div>
      <div class="border"></div>
      <div class="other-infos">
        <div class="other-policy">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
        <div>Copyright © 2015 - 2022 CHeKT</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 200px;
  background-color: #FAFAFA;
  padding-left: 20px;
  padding-right: 20px;
}
.wrapper {
  max-width: 1054px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 100px;
}
.contents {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
}
.define-chekt {
  display: flex;
  flex-direction: row;
}
.define-chekt-desc {
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--blue-gray-high);
  line-height: 22px;
  width: 90%;
}
.sns {
  display: block;  /* Remove bullet points; allow greater control of positioning */
  width: 100%;     /* Get the row full width */
  color: var(--blue-gray-higher);
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 24px;
}
.sns li {
  display: inline-block; /* Get all images to show in a row */
  text-align: center;    /* Centre align the images */
}
.sns > div {
  margin-right: 10px;
}
.sns-text > a {
  text-decoration: underline;
}

.sns-text > a:visited, a:link, a:active, .sns-text-last > a:visited, a:link, a:active {
  text-decoration: none;
  color: var(--blue-gray-higher);
  cursor: pointer;
}
.sns-text > a::after {
  margin: 0 8px;
  text-decoration: none;
  content: "/";
}

.sns-text > a:hover {
  color: var(--gray-high);
}
.border {
  border-bottom: solid 1px var(--border);
  margin-top: 50px;
}
.other-infos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
  color: var(--blue-gray-high);
  line-height: 22px;
}
.other-policy {
  display: flex;
  flex-direction: row;
}
.other-policy > div {
  display: inline;
}
.other-policy > div {
  margin-right: 10px;
  text-decoration: underline;
  cursor: pointer;
}
.other-policy > div:hover {
  color: var(--gray-high);
}

@media screen and (max-width: 750px) { 
  .define-chekt {
    flex-direction: column;
  }
  .contents {
    padding-left: 0px;
    padding-top: 20px;
  }
  .other-infos {
    flex-direction: column;
  }
  .other-policy {
    padding-bottom: 30px;
  }

}
</style>
