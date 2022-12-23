<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10"> bg : {{ bg }}</h1>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10"> support_corps : {{ support_corps }}</h1>
</template>
<script>

let bgRandom = Math.ceil(Math.random()*30);
let supportcorps_Random = Math.ceil(Math.random()*30);

export default {
  props: {
        bg:{
            type : Number,
            default : bgRandom,
    },

    support_corps:{
            type : Number,
            default : supportcorps_Random,
    },
  },
  };
</script>