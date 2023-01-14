<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10">Ladybug</h1>

        <img src="/public/img/Vector-ladybug.png" alt="" class="mb-0 relative">
        <p class="text-ewhite text-shadow-epurple font-trap-medium desktop:text-xs phone:text-5xs absolute desktop:left-10 phone:left-2 desktop:mt-96 phone:mt-28">A unique <span class="text-eblue">head</span> that goes <br class="desktop:hidden flex"/> with its <span class="text-eblue">support</span></p>
        <p class="text-ewhite text-shadow-epurple font-trap-medium desktop:text-xs phone:text-5xs absolute desktop:right-10 phone:right-2 desktop:mt-80 phone:mt-20">A <span class="text-eblue">100%</span> customizable shell with <br class="desktop:hidden flex"/> all available themes</p>
        <div class="flex justify-center">
            <img src="/public/img/ladybug_pres.png" alt="" class="absolute w-1/2 desktop:-mt-52 phone:-mt-14">
        </div>
            <img src="/public/img/ladybug-pres.gif" alt="" class="-mt-1 w-full">

            <div class="absolute desktop:right-10 phone:right-0 desktop:mt-20 phone:mt-5">
                <div class="flex">
                    <p class="text-ewhite text-shadow-epurple font-trap-medium desktop:text-xs phone:text-5xs mt-5">A background wit a <span class="text-eblue">unique <br/> atmosphere</span> that will react to weather</p>
                    <img src="/public/icon/Drop_down.png" alt="" class="rotate-90 w-1/6 -mr-8">
                </div>
            </div>

            <div class="absolute desktop:left-10 phone:left-0 desktop:mt-80 phone:mt-32">
                <div class="flex">
                    <img src="/public/icon/Drop_down-right.png" alt="" class="w-1/6">
                    <p class="text-ewhite text-shadow-epurple font-trap-medium desktop:text-xs phone:text-5xs mt-5">Some <span class="text-eblue">part</span> are generate by <br /> the algorithm</p>
                </div>
            </div>

        <img src="/public/img/ladybug-pres-reverse.gif" alt="" class="w-full">
        <img src="/public/img/Vector-ladybug.png" alt="" class="-mt-1 w-full rotate-180">


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