<template>
     <header class="pb-20">
    <div class="flex gap-14">
      <Router-Link to="/" class="w-1/12 scale-50"><img src="/public/img/iconemorphoz.gif" alt=""></Router-Link>
      <div class="flex pt-2 gap-12">
        <!-- DROPDOWN -->
        <p class="font-trap-semibold text-ewhite pt-2">EN</p>
        <nav class="bg-epurple bg-opacity-50 rounded-full p-2 shadow-pinkBlur">
          <ul class="flex gap-2">
            <Router-Link to="/how"><li class="font-trap-regular text-ewhite">How it works</li></Router-Link>
            <Router-Link to="/#contact"><li class="font-trap-regular text-ewhite">Contact</li></Router-Link>
            <Router-Link to="/about"><li class="font-trap-regular text-ewhite">About Us</li></Router-Link>
            <Router-Link to="/market"><li class="font-trap-regular text-ewhite">Market</li></Router-Link>
          </ul>
        </nav>
        <Router-Link to="/login"><p class="font-trap-semibold text-ewhite pt-2">LOG IN</p></Router-Link>

        <Router-Link to="/sign"><button><p class="font-trap-semibold text-epink bg-epurple bg-opacity-40 border-epurple rounded-3xl p-2 border-2">Sign Up</p></button></Router-Link>
      </div>  
    </div>
  </header>
</template>