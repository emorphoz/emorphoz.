<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10">Ladybug</h1>
    <p class="text-center text-ewhite text-shadow-epink font-trap-regular desktop:text-base phone:text-2xs phone:mx-2 desktop:mx-0 z-10">Find out how your ladybug is composed if you buy one of this pack.</p>

    <p class="text-center text-ewhite text-shadow-epink font-trap-regular desktop:text-base phone:text-2xs phone:mx-2 desktop:mx-0 z-10 mt-20">Ready to generate your <span class="text-epink">unique</span> NFT ?</p>
    <div class="flex justify-center">
        <!-- Formkit ? => Comme l'id, générer aléatoire le résultat pour chaque calque -->
            <!-- => Rappel GIF comme avec Fino à l'affichage de la prochaine page -->
            <generateNFT 
            :id="Math.ceil(Math.random()*81000)"/>
    </div>
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
import generateNFT from '../../../components/letsGenerate.vue'
</script>