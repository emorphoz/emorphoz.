<script>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '@/supabase.js'

import {ref} from 'vue';
</script>

<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs z-10">Welcome Marwin</h1> <!-- {{ username.value }}  -->

    <div class="desktop:flex justify-center gap-20 mt-10 mb-20">
        <div class="rounded-3xl bg-epink bg-opacity-40 px-10">
            <div class="flex justify-center mt-5">
                <img src="/public/icon/User.svg" alt="">
            </div>
            <!-- <p class="text-ewhite font-trap-medium desktop:text-4xs phone:text-5xs text-center">Click to edit profile photo</p> -->

            <div class="flex justify-center">
                <hr class="text-ewhite w-10/12"/>
            </div>

            <form class="mt-10">
                <h2 class="text-ewhite text-shadow-epurple font-trap-light mt-10">NICKNAME</h2>
                <input type="text" name="" id="" placeholder="Marwin" class="pl-2 rounded-lg text-ewhite text-opacity-75 bg-edark bg-opacity-70">
                
                <h2 class="text-ewhite text-shadow-epurple font-trap-light mt-5">E-MAIL</h2>
                <input type="email" name="" id="" placeholder="marwinrdgs.pro@gmail.com" class="pl-2 rounded-lg text-ewhite text-opacity-75 bg-edark bg-opacity-70">
                <p class="text-ewhite text-5xs text-shadow-epurple">A confirmation email will be sent to your current email</p>

                <h2 class="text-ewhite text-shadow-epurple font-trap-light mt-5 text-center">CHANGE PASSWORD</h2>
                <input type="password" name="" id="" placeholder="your password" class="pl-2 rounded-lg text-ewhite text-opacity-75 bg-edark bg-opacity-70 mb-2"> <br />
                <input type="password" name="" id="" placeholder="your new-password" class="pl-2 rounded-lg text-ewhite text-opacity-75 bg-edark bg-opacity-70 mb-5">
            </form>
        </div>

        <div class="rounded-3xl bg-epink bg-opacity-40">
            <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-base phone:text-2xs z-10 m-2">Your collection</h1>
            <div class="flex justify-center mb-5">
                <button class="bg-edark rounded-[20px] py-3 z-40 px-2 mt-10"><p class="font-trap-regular text-ewhite desktop:text-2xs phone:text-3xs text-shadow-epurple z-40">Voir plus ...</p></button>
            </div>
        </div>
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