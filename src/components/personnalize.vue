<template>

<h1 class="text-ewhite text-center phone:text-base desktop:text-lg font-audiowide text-shadow-epurple">Choose your elytron </h1>
        <div class="flex justify-center">

<button v-on:click="cpChoose -= 1; if(cpChoose < 1){cpChoose = 4}"><img src="/public/icon/slide_left.svg" alt=""></button>

<div class="flex justify-center relative col-span-2">
  
  <!-- ================= BackGround ================= -->
  <component is="bgLava" class="desktop:w-1/3 relative" v-if="bg == 1"/>
  <component is="bgOcean" class="desktop:w-1/3 relative" v-if="bg == 2"/>
  <component is="bgSpace" class="desktop:w-1/3 relative" v-if="bg == 3"/>
  <component is="bgNature" class="desktop:w-1/3 relative" v-if="bg == 4"/>

  <!-- ================= SUP ================= -->
  <component is="supLava" class="absolute desktop:w-1/3" v-if="sup == 1"/>
  <component is="supOcean" class="absolute desktop:w-1/3" v-if="sup == 2"/>
  <component is="supSpace" class="absolute desktop:w-1/3" v-if="sup == 3"/>
  <component is="supNature" class="absolute desktop:w-1/3" v-if="sup == 4"/>

  <!-- ================= CARAPACE ================= -->
  <img src="/public/insects/ladybugs/carapaces/cp_lava.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 1">
  <img src="/public/insects/ladybugs/carapaces/cp_ocean.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 2">
  <img src="/public/insects/ladybugs/carapaces/cp_space.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 3">
  <img src="/public/insects/ladybugs/carapaces/cp_nature.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 4">

  <!-- ================= HEAD ================= -->
  <component is="headLava" class="absolute desktop:w-1/3" v-if="head == 1"/>
  <component is="headOcean" class="absolute desktop:w-1/3" v-if="head == 2"/>
  <component is="headSpace" class="absolute desktop:w-1/3" v-if="head == 3"/>
  <component is="headNature" class="absolute desktop:w-1/3" v-if="head == 4"/>
</div>

<button v-on:click="cpChoose += 1; if(cpChoose > 4){cpChoose = 1}"><img src="/public/icon/slide_right.svg" alt=""></button>

</div>  

<div class="flex justify-center desktop:-ml-20 phone:-ml-20 mb-20">
  <a href="/public/img/NFT/Your-NFT.jpg" download><button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] phone:px-20 desktop:px-0 desktop:pr-32 desktop:pl-2 py-3 border-eblue z-40 phone:ml-20 desktop:ml-40 desktop:w-1/4 mt-10"><p class="font-trap-regular text-ewhite text-base z-40">Validate</p></button></a>
</div>
</template>

<script>
import bgSpace from "./insects/ladybugs/background/bg_space.vue"
import bgNature from "./insects/ladybugs/background/bg_nature.vue"
import bgOcean from "./insects/ladybugs/background/bg_ocean.vue"
import bgLava from "./insects/ladybugs/background/bg_lava.vue"

import headSpace from "./insects/ladybugs/heads/hd_space.vue"
import headNature from "./insects/ladybugs/heads/hd_nature.vue"
import headOcean from "./insects/ladybugs/heads/hd_ocean.vue"
import headLava from "./insects/ladybugs/heads/hd_lava.vue"

import supSpace from "./insects/ladybugs/supbody/sup_space.vue"
import supNature from "./insects/ladybugs/supbody/sup_nature.vue"
import supOcean from "./insects/ladybugs/supbody/sup_ocean.vue"
import supLava from "./insects/ladybugs/supbody/sup_lava.vue"

let bgChoose = 0;
let bg = 0;

let supChoose = 0;
let sup = 0;

let headChoose = 0;
let head = 0;

let bgRandom = Math.ceil(Math.random()*40);
let supportcorps_Random = Math.ceil(Math.random()*40);


let cpChoose = 1;


// ============= BACKGROUND
if (bgRandom >= 0 ) {
  bgChoose = 1;
};

if (bgRandom > 10 ) {
  bgChoose = 2;
};

if (bgRandom > 20 ) {
  bgChoose = 3;
};

if (bgRandom > 30 ) {
  bgChoose = 4;
};
// =============>

// ============= support corps
if (supportcorps_Random < 10 ) {
  supChoose = 1;
  headChoose = 1;
};

if (supportcorps_Random > 10 ) {
  supChoose = 2;
  headChoose = 2;
};

if (supportcorps_Random > 20 ) {
  supChoose = 3;
  headChoose = 3;
};

if (supportcorps_Random > 30 ) {
  supChoose = 4;
  headChoose = 4;
};
// =============>

export default {
  props: {
    cpChoose: {
      type: Number,
      default: 1,
    },
    bg: {
      type: Number,
      default: bgChoose,
    },
    bgRandom: {
      type: Number,
      default: 0,
    },
    sup: {
      type: Number,
      default: supChoose,
    },
    supportcorps_Random: {
      type: Number,
      default: 0,
    },
    head: {
      type: Number,
      default: headChoose,
    },
  },

  data: function() {
    return {
      bgs: {
        bgLava:bgLava,
        bgSpace,
        bgNature,
        bgOcean,
      },
      heads:{
        headLava,
        headSpace,
        headNature,
        headOcean,
      },
      sups:{
        supLava,
        supSpace,
        supNature,
        supOcean,
      }
    }
  },
  components: { bgLava, bgSpace, bgNature, bgOcean, headLava, headSpace, headNature, headOcean, supLava, supSpace, supNature, supOcean }
  };
</script>