<template>
  <q-page class="">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <div class="row">
          <div class="intro col-12 col-md-6 q-px-md q-my-auto">
        <div class="name-header">
          Hi, I'm Jared Omni Galanza
        </div>
        <div class="name-header caption">
          {{ `<full-stack-developer />` }}
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class=".tagcloud row justify-center" ref="tg">

        </div>
      </div>
        </div>
      </div>
      
    </div>
    
    
  </q-page>
</template>

<script>
//import TagCloud from "TagCloud"
const TagCloud = require("TagCloud")
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'AboutMe',
  setup(){
    const tagTexts = ["VueJS", "Node JS", "ASP.NET", "SQL", "Android", "Cordova", "Capacitor", "HTML", "CSS", "Javascript", "Python", "ES5/ES6", "npm", "REST", "websockets", "jQuery", "Git", "Java", "C#", "Delphi", "Polymer JS"]
    const tg = ref(null)
    const tgOptions = {
      radius: 350,
      maxSpeed: "slow",
      initSpeed: "slow"
    }
    onMounted(() => {

      setTimeout(() => {
        TagCloud(tg.value, tagTexts, tgOptions);
      }, 300)
      
    })

    return {
      tg
    } 
  }
})
</script>

<style scoped lang="scss">
@media (max-width: 1023px) {
  .intro{
    text-align: center;
  }
}
</style>
