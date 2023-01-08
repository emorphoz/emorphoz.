<template>
<div class="flex justify-center">
    <button v-on:click="scoreCard1 += 1; if(scoreCard1 > 5){scoreCard1 = 1};
                        scoreCard2 += 1; if(scoreCard2 > 5){scoreCard2 = 1};
                        scoreCard3 += 1; if(scoreCard3 > 5){scoreCard3 = 1};">
    <img src="/public/icon/slide_left.svg" alt="">
    </button>

    <!-- =================== CARD 1 ===================-->
    <card class="mt-20" 
        name="Alicia Iversenc" 
        type="alicia"
        poste="Communication"
        insta="#"
        linkedin="#"
        v-if="scoreCard1 == 1"/>
        
    <card class="mt-20" 
        name="Morgane Chamberlin" 
        type="morgane"
        poste="Communication"
        insta="#"
        linkedin="#"
        v-if="scoreCard1 == 2"/>

    <card class="mt-20" 
        name="Bryan Ferry" 
        type="bryan"
        poste="Designer"
        insta="#"
        linkedin="#"
        v-if="scoreCard1 == 3"/>

    <card class="mt-20" 
        name="Maxime Paris" 
        type="maxime"
        poste="Designer"
        insta="#"
        linkedin="#"
        v-if="scoreCard1 == 4"/>

    <card class="mt-20" 
        name="Marwin Rodrigues" 
        type="marwin"
        poste="Developper"
        insta="#"
        linkedin="#"
        v-if="scoreCard1 == 5"/>
    <!-- ======================================-->

    <!-- =================== CARD 2 ===================-->
    <card class="mt-20" 
        name="Alicia Iversenc" 
        type="alicia"
        poste="Communication"
        insta="#"
        linkedin="#"
        v-if="scoreCard2 == 1"/>
        
    <card class="mt-20" 
        name="Morgane Chamberlin" 
        type="morgane"
        poste="Communication"
        insta="#"
        linkedin="#"
        v-if="scoreCard2 == 2"/>

    <card class="mt-20" 
        name="Bryan Ferry" 
        type="bryan"
        poste="Designer"
        insta="#"
        linkedin="#"
        v-if="scoreCard2 == 3"/>

    <card class="mt-20" 
        name="Maxime Paris" 
        type="maxime"
        poste="Designer"
        insta="#"
        linkedin="#"
        v-if="scoreCard2 == 4"/>

    <card class="mt-20" 
        name="Marwin Rodrigues" 
        type="marwin"
        poste="Developper"
        insta="#"
        linkedin="#"
        v-if="scoreCard2 == 5"/>
    <!-- ======================================-->

    <!-- =================== CARD 3 ===================-->
    <card class="mt-20" 
        name="Alicia Iversenc" 
        type="alicia"
        poste="Communication"
        insta="#"
        linkedin="#"
        v-if="scoreCard3 == 1"/>
        
    <card class="mt-20" 
        name="Morgane Chamberlin" 
        type="morgane"
        poste="Communication"
        insta="#"
        linkedin="#"
        v-if="scoreCard3 == 2"/>

    <card class="mt-20" 
        name="Bryan Ferry" 
        type="bryan"
        poste="Designer"
        insta="#"
        linkedin="#"
        v-if="scoreCard3 == 3"/>

    <card class="mt-20" 
        name="Maxime Paris" 
        type="maxime"
        poste="Designer"
        insta="#"
        linkedin="#"
        v-if="scoreCard3 == 4"/>

    <card class="mt-20" 
        name="Marwin Rodrigues" 
        type="marwin"
        poste="Developper"
        insta="#"
        linkedin="#"
        v-if="scoreCard3 == 5"/>
    <!-- ======================================-->



    <button v-on:click="scoreCard1 -= 1; if(scoreCard1 < 1){scoreCard1 = 5};
                        scoreCard2 -= 1; if(scoreCard2 < 1){scoreCard2 = 5};
                        scoreCard3 -= 1; if(scoreCard3 < 1){scoreCard3 = 5};">
    <img src="/public/icon/slide_right.svg" alt="">
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
    scoreCard1:{
        type : Number,
        default : 1,
    },
    scoreCard2: {
        type : Number,
        default: 2,
    },
    scoreCard3: {
        type : Number,
        default : 3,
    },
  },
  };

</script>