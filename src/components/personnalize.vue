<template>

<h1 class="text-ewhite text-center phone:text-base desktop:text-lg font-audiowide text-shadow-epurple">Choose your elytron</h1>
        <div class="flex justify-center">

<button v-on:click="cpChoose -= 1; if(cpChoose < 1){cpChoose = 4}"><img src="/public/icon/slide_left.svg" alt=""></button>

<div class="flex justify-center relative col-span-2">
  <img :src="bg" alt="" class="mb-10 desktop:w-1/3 relative"/>        <!-- BG -->
  <img :src="support_corps" alt="" class="absolute desktop:w-1/3">    <!-- SUP -->
  <img :src="head" alt="" class="absolute desktop:w-1/3">             <!-- Head -->
  <img src="/public/insects/ladybugs/carapaces/cp_lava.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 1">                <!-- Carap -->
  <img src="/public/insects/ladybugs/carapaces/cp_ocean.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 2">               <!-- Carap -->
  <img src="/public/insects/ladybugs/carapaces/cp_space.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 3">               <!-- Carap -->
  <img src="/public/insects/ladybugs/carapaces/cp_nature.png" alt="" class="absolute desktop:w-1/3" v-if="cpChoose == 4">              <!-- Carap -->
</div>

<button v-on:click="cpChoose += 1; if(cpChoose > 4){cpChoose = 1}"><img src="/public/icon/slide_right.svg" alt=""></button>

</div>  

<div class="flex justify-center desktop:-ml-20 phone:-ml-20 mb-20">
  <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue z-40 phone:ml-20 desktop:w-1/4 mt-10"><p class="font-trap-regular text-ewhite text-base z-40">Validate</p></button>
</div>
</template>

<script>
let bgRandom = Math.ceil(Math.random()*40);
let supportcorps_Random = Math.ceil(Math.random()*40);

let bgChoose = "/public/img/insects/mantis.png";
let subcChoose = "/public/img/insects/mantis.png";
let headChoose = "/public/img/insects/mantis.png";

let cpChoose = 1;


// ============= BACKGROUND
if (bgRandom >= 0 ) {
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
    cpChoose: {
      type : Number,
      default : 1,
    },
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