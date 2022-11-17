<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="bg-edark">

  <header class="pb-20">
    <div class="flex gap-14">
      <img src="../public/img/iconemorphoz.gif" alt="" class="w-1/12 scale-50">
      <div class="flex pt-2 gap-12">
        <p class="font-trap-semibold text-ewhite pt-2">EN</p>
        <nav class="bg-epurple bg-opacity-50 rounded-full p-2 shadow-pinkBlur">
          <ul class="flex gap-2">
            <li class="font-trap-regular text-ewhite">How it works</li>
            <li class="font-trap-regular text-ewhite">Contact</li>
            <li class="font-trap-regular text-ewhite">About Us</li>
            <li class="font-trap-regular text-ewhite">Market</li>
          </ul>
        </nav>
        <p class="font-trap-semibold text-ewhite pt-2">LOG IN</p>

        <button><p class="font-trap-semibold text-epink bg-epurple bg-opacity-40 border-epurple rounded-3xl p-2 border-2">Sign Up</p></button>
      </div>  
    </div>
  </header>


  <RouterView />
</div>

</template>
