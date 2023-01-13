<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase, isConnect } from '@/supabase.js'

import footerE from './components/footer.vue'

import {ref} from 'vue';
const menuVisible = ref(true);

const SignOut = async() => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    // route.push("/")
    isConnect.value = !isConnect.value;
  }

  console.log("user est", isConnect)

</script>

<template>
<div class="bg-edark">

<header>

     <header class="pb-20">
    <div class="flex gap-14">
      <Router-Link to="/" @click="menuVisible = true" class="desktop:w-1/12 desktop:scale-50 phone:w-1/5 phone:ml-2 desktop:ml-10 desktop:mr-52"><img src="/public/img/iconemorphoz.gif"></Router-Link>
      <div class="desktop:hidden flex">
        <button @click="menuVisible = !menuVisible" :class="{hidden: !menuVisible}"><img src="/public/icon/Menu.svg" alt="" class="absolute top-6 right-4"></button>
        <button @click="menuVisible = !menuVisible" :class="{hidden: menuVisible}"><img src="/public/img/cross.png" alt="" class="absolute top-3 right-4"></button>
      </div>
      <div class="flex pt-10 gap-80">
        <!-- DROPDOWN -->
        <!-- <p class="desktop:flex hidden font-trap-semibold text-ewhite pt-4">EN</p> -->

      

        
        <!-- MENU PC -->
        <nav>
          <div class="desktop:flex hidden">


              <div class="px-56 pt-12 mt-3 absolute bg-epurple rounded-full shadow-epurple shadow-sm blur z-10"></div>
            <ul class="flex gap-10 pt-5 rounded-full z-20">
              <Router-Link to="/how"><li class="font-trap-regular text-ewhite ml-4">How it works</li></Router-Link>
              <Router-Link to="/#contact"><li class="font-trap-regular text-ewhite">Contact</li></Router-Link>
              <Router-Link to="/about"><li class="font-trap-regular text-ewhite">About Us</li></Router-Link>
              <Router-Link to="/market"><li class="font-trap-regular text-ewhite">Market</li></Router-Link>
            </ul>
            
        </div>
        <div class="desktop:hidden">
          
        </div>
        </nav>

        
      
        <div class="desktop:flex hidden gap-10">
        <Router-Link to="/login" v-if="isConnect == false"><p class="font-trap-semibold text-ewhite pt-2">LOG IN</p></Router-Link>
        <Router-Link to="/Profil" v-if="isConnect == true"><p class="font-trap-semibold text-ewhite pt-2">PROFIL</p></Router-Link> <!-- :to="{ name: 'Profil', params: { id: user.id } }"  | /{{user.id}} -->
        <Router-Link to="/sign" v-if="isConnect == false"><button class="bg-epurple bg-opacity-40 border-epurple rounded-3xl p-2 border-2"><p class="font-trap-semibold text-ewhite text-opacity-40"> Sign Up </p></button></Router-Link>
        <Router-Link to="/" v-if="isConnect == true"><button class="bg-epurple bg-opacity-40 border-epurple rounded-3xl p-2 border-2" @click="SignOut()"><p class="font-trap-semibold text-ewhite text-opacity-40"> SIGN OUT </p></button></Router-Link>
      </div>


      </div>  
    </div>

    <!-- MENU PHONE -->
    <nav class="overflow-hidden h-full flex desktop:hidden">
      <div class="h-full w-full bg-edark absolute overflow-y-hidden z-50" :class="{hidden: menuVisible}">
        <img src="/public/icon/emorphoz_long.svg" alt="" class="desktop:w-96 w-11/12">

        <img src="/public/icon/orbe-purple.svg" alt="" class="absolute z-0 w-[1000px]">
        <ul class="mt-14 z-50">
          <li class="z-50">
          <Router-link to="/" @click="menuVisible = !menuVisible" class="z-50">
            <div class="flex gap-4 justify-center z-50">
              <h2 class="font-trap-medium text-ewhite text-base z-50">Log in / Sign up</h2>
              <img src="/public/icon/phoneMenu/Profil.svg" alt="" class="z-50">
            </div>
          </Router-link>
            <hr class="ml-14 mr-2 bg-gradient-to-r from-eblue to-epink">
          </li>

          <li class="mt-10 z-50">
          <Router-Link to="/how" class="z-50" @click="menuVisible = !menuVisible">
            <div class="flex gap-4 justify-center z-50">
              <h2 class="font-trap-medium text-ewhite text-base z-50">How it works</h2>
              <img src="/public/icon/phoneMenu/Question.png" alt="" class="w-1/12 z-50">
            </div>
          </Router-Link>
            <hr class="ml-14 mr-2 bg-gradient-to-r from-eblue to-epink">
          </li>


          <li class="mt-10 z-50">
            <Router-Link to="/market" class="z-50" @click="menuVisible = !menuVisible">
            <div class="flex gap-4 justify-center z-50">
              <h2 class="font-trap-medium text-ewhite text-base z-50">Market</h2>
              <img src="/public/icon/phoneMenu/Market.png" alt="" class="z-50 w-[37px]">
            </div>
          </Router-Link>
            <hr class="ml-14 mr-2 bg-gradient-to-r from-eblue to-epink">
          </li>


          <li class="mt-10">
            <Router-Link to="/about" @click="menuVisible = !menuVisible">
            <div class="flex gap-4 justify-center">
              <h2 class="font-trap-medium text-ewhite text-base">About Us</h2>
              <img src="/public/icon/phoneMenu/About.png" alt="" class="w-[40px]">
            </div>
          </Router-Link>
            <hr class="ml-14 mr-2 bg-gradient-to-r from-eblue to-epink">
          </li>


          <li class="mt-10">
            <Router-Link to="/#contact" @click="menuVisible = !menuVisible">
            <div class="flex gap-4 justify-center">
              <h2 class="font-trap-medium text-ewhite text-base">Contact</h2>
              <img src="/public/icon/phoneMenu/Contact.png" alt="" class="w-[40px]">
            </div>
          </Router-Link>
            <hr class="ml-14 mr-2 bg-gradient-to-r from-eblue to-epink">
          </li>
        </ul>

        <img src="/public/icon/phoneMenu/3EllipseGradient.svg" alt="" class="absolute">


      </div>
    </nav>
  </header>


</header>

<Suspense>
  <RouterView :class="{hidden: !menuVisible}"/>
</Suspense>

<footerE :class="{hidden: !menuVisible}"/>
</div>

</template>