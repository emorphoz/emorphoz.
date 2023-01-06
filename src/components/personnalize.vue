<template>

        <h1 class="text-center" >{{ cpChoose }}</h1>
        <div class="flex justify-center">

<button v-on:click="cpChoose -= 1; if(cpChoose < 1){cpChoose = 4}"><img src="/public/icon/slide_left.svg" alt=""></button>

<div class="flex justify-center relative col-span-2">
  <img :src="bg" alt="" class="mb-10 w-1/3 relative"/>        <!-- BG -->
  <img :src="support_corps" alt="" class="absolute w-1/3">    <!-- SUP -->
  <img :src="head" alt="" class="absolute w-1/3">             <!-- Head -->
  <img src="/public/insects/ladybugs/carapaces/cp_lava.png" alt="" class="absolute w-1/3" v-if="cpChoose = 1">                <!-- Carap -->
  <img src="/public/insects/ladybugs/carapaces/cp_ocean.png" alt="" class="absolute w-1/3" v-if="cpChoose = 2">               <!-- Carap -->
  <img src="/public/insects/ladybugs/carapaces/cp_space.png" alt="" class="absolute w-1/3" v-if="cpChoose = 3">               <!-- Carap -->
  <img src="/public/insects/ladybugs/carapaces/cp_nature.png" alt="" class="absolute w-1/3" v-if="cpChoose = 4">              <!-- Carap -->
</div>

<button v-on:click="cpChoose += 1; if(cpChoose > 4){cpChoose = 1}"><img src="/public/icon/slide_right.svg" alt=""></button>

</div>  
</template>

<script>
let bgRandom = Math.ceil(Math.random()*40) + 1;
let supportcorps_Random = Math.ceil(Math.random()*40) + 1;

let bgChoose = "/public/img/insects/mantis.png";
let subcChoose = "/public/img/insects/mantis.png";
let headChoose = "/public/img/insects/mantis.png";

let cpChoose = 1;

// ============= BACKGROUND
if (bgRandom > 0 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_lava.png";
};

if (bgRandom > 10 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_ocean.png";
};

if (bgRandom > 20 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_space.png";
};

if (bgRandom > 30 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_nature.png";
};
// =============>

// ============= support corps
if (supportcorps_Random < 10 ) {
  subcChoose = "/public/insects/ladybugs/support_corps/sup_lava.png";
  headChoose = "/public/insects/ladybugs/heads/hd_lava.png";
};

if (supportcorps_Random > 10 ) {
  subcChoose = "/public/insects/ladybugs/support_corps/sup_ocean.png";
  headChoose = "/public/insects/ladybugs/heads/hd_ocean.png";
};

if (supportcorps_Random > 20 ) {
  subcChoose = "/public/insects/ladybugs/support_corps/sup_space.png";
  headChoose = "/public/insects/ladybugs/heads/hd_space.png";
};

if (supportcorps_Random > 30 ) {
  subcChoose = "/public/insects/ladybugs/support_corps/sup_nature.png";
  headChoose = "/public/insects/ladybugs/heads/hd_nature.png"
};
// =============>

export default {
  props: {
        bg:{
            type : Text,
            default : bgChoose,
    },
    support_corps:{
            type : Text,
            default : subcChoose,
    },
    head:{
      type: Text,
      default: headChoose,
    },
    cpChoose: {
      type: Number,
      default: 1,
    },
  },
  };
</script>