<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10">Ladybug</h1>
    <p class="text-center text-ewhite text-shadow-epink font-trap-regular desktop:text-base phone:text-2xs phone:mx-2 desktop:mx-0 z-10">Find out how your ladybug is composed if you buy one of this pack.</p>

    <p class="text-center text-ewhite text-shadow-epink font-trap-regular desktop:text-base phone:text-2xs phone:mx-2 desktop:mx-0 z-10 mt-20">Ready to generate your <span class="text-epink">unique</span> NFT ?</p>
    <div class="flex justify-center">
        <!-- Formkit ? => Création id aléatoire sur supabase et création d'un ensemble aléatoire -->
            <!-- => Rappel GIF comme avec Fino à l'affichage de la prochaine page -->
        <Router-Link to="/ladybuggenerate" class="z-20 mt-8 mb-40"><button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue p-2"><p class="font-trap-regular text-ewhite text-base z-20">Generate now</p></button></Router-Link>
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
</script>