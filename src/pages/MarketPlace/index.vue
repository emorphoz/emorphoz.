<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10">Marketplace</h1>
    <p class="text-center text-ewhite text-shadow-epink font-trap-regular desktop:text-base phone:text-2xs phone:mx-2 desktop:mx-0 z-10">Choose from our collection which insect you want and make way for the generator.</p>

    <div class="grid desktop:grid-cols-3 phone:grid-cols-2 place-items-stretch place-self-center desktop:mx-10 phone:mx-6 desktop:gap-14 phone:gap-8 mt-10">
        
            <img src="/public/icon/orbe-pink.svg" alt="" class="absolute left-0 top-40 w-1/6 hidden desktop:flex">
            <img src="/public/icon/orbe-pink.svg" alt="" class="absolute rotate-180 right-0 top-72 w-1/6 hidden desktop:flex">

            <img src="/public/icon/3_Ellipse_White.svg" alt="" class="absolute hidden desktop:flex z-0 w-1/2 right-28 top-32">

        <card
        name="ladybug"
        insect="ladybug"
        url="/ladybugpresent"/>

        <card 
        name="Butterfly"
        insect="butterfly"
        soon/>

        <card 
        name="Mantis"
        insect="mantis"
        soon/>




        <card 
        name="Grasshopper"
        insect="grasshopper"
        soon/>

        <img src="/public/icon/3_Ellipse_White.svg" alt="" class="absolute hidden desktop:flex z-0 w-1/4 left-0 -rotate-45 mt-64">

        <card 
        name="Bee"
        insect="bee"
        soon/>

        <card 
        name="Larva"
        insect="larva"
        soon/>
    </div>    
    
    <img src="/public/icon/orbe-purple.svg" alt="" class="absolute right-0 w-1/3 -mt-40 hidden desktop:flex z-0">

    <p class="z-10 text-center text-ewhite text-shadow-epink font-trap-semibold desktop:text-base text-2xs phone:mx-4 desktop:mx-10 mt-40 mb-40">Our site regularly updates the collections by adding new insects. Do not hesitate to follow us on social networks to be informed of the next news.</p>

    <img src="/public/icon/orbe-pink.svg" alt="" class="absolute left-0 -mt-52 w-1/6 hidden desktop:flex">


</template>

<style scoped>

.text-shadow-eblue {
    text-shadow: #25C6E5 1px 0 10px;
}
.text-shadow-epurple {
    text-shadow: #61066D 1px 0 10px;
}

.text-shadow-ewhite {
    text-shadow: #FFFFFF 1px 0 10px;
}

.text-shadow-epink {
    text-shadow: #E8088F 1px 0 3px;
}

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import card from '../../components/cardCollection.vue'
</script>