<template>
    <!-- <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10"> bg : {{ bg }}</h1>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10"> support_corps : {{ support_corps }}</h1> -->

    <div class="grid grid-6">
      <div class="col-span-2"></div>
      <div class="flex justify-center relative col-span-2">
        <img :src="bg" alt="" class="mb-10 w-1/3 relative"/>                                              <!-- BG -->
        <img src="/public/insects/ladybugs/support_corps/sup_ocean.png" alt="" class="absolute w-1/3">    <!-- SUP -->
        <img src="/public/insects/ladybugs/heads/hd_space.png" alt="" class="absolute w-1/3">             <!-- Head -->
        <img src="/public/insects/ladybugs/carapaces/cp_lava.png" alt="" class="absolute w-1/3">          <!-- Carap -->
      </div>
      <div class="col-span-2"></div>
    </div>  
</template>
<script>

let bgRandom = Math.ceil(Math.random()*30);
let supportcorps_Random = Math.ceil(Math.random()*30);
let bgChoose = "/public/img/insects/mantis.png";

// BACKGROUND
if (bgRandom < 10 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_lava.png";
};

if (bgRandom > 10 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_ocean.png";
};

if (bgRandom > 20 ) {
  bgChoose = "/public/insects/ladybugs/backgrounds/bg_space.png";
};

export default {
  props: {
        bg:{
            type : Text,
            default : bgChoose,
    },

    support_corps:{
            type : Number,
            default : supportcorps_Random,
    },
  },
  };
</script>