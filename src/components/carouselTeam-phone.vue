<template>
<div class="flex justify-center">
    <button v-on:click="scoreCard += 1; if(scoreCard > 5){scoreCard = 1};">
    <img src="/public/icon/slide_left.svg" alt="" class="phone:w-10/12">
    </button>

    <!-- =================== CARD 1 ===================-->
    <card class="mt-20" 
        name="Alicia Iversenc" 
        type="alicia"
        poste="Com'"
        insta="https://www.instagram.com/aliciaivrc/"
        linkedin="https://www.linkedin.com/in/aliciaiversenc/"
        v-if="scoreCard == 1"/>
        
    <card class="mt-20" 
        name="Morgane Chamberlin" 
        type="morgane"
        poste="Com'"
        insta="https://www.instagram.com/morgane.19_c/"
        linkedin="https://www.linkedin.com/in/morgane-chamberlin/"
        v-if="scoreCard == 2"/>

    <card class="mt-20" 
        name="Bryan Ferry" 
        type="bryan"
        poste="Designer"
        insta="https://www.instagram.com/bryan.fzz/"
        linkedin="https://www.linkedin.com/in/bryan-ferry-523546216/"
        v-if="scoreCard == 3"/>

    <card class="mt-20" 
        name="Maxime Paris" 
        type="maxime"
        poste="Designer"
        insta="https://www.instagram.com/max_prs_25/"
        linkedin="https://www.linkedin.com/in/maxime-paris-730322215/"
        v-if="scoreCard == 4"/>

    <card class="mt-20" 
        name="Marwin Rodrigues" 
        type="marwin"
        poste="Dev'"
        insta="https://www.instagram.com/marwin.rdgs/"
        linkedin="https://www.linkedin.com/in/marwin-rodrigues/"
        v-if="scoreCard == 5"/>
    <!-- ======================================-->

    <button v-on:click="scoreCard -= 1; if(scoreCard < 1){scoreCard = 5};">
    <img src="/public/icon/slide_right.svg" alt="" class="phone:w-10/12">
    </button>

</div> 
</template>

<script setup>
import card from './cardGuy.vue'
</script>

<script>


// Alicia = 1 | Morgane = 2 | Bryan = 3 | Maxime = 4 | Marwin = 5 
export default {
  props: {
    scoreCard:{
        type : Number,
        default : 1,
    },
  },
  };

</script>