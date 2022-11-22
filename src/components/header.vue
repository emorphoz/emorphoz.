<template>
     <header class="pb-20">
    <div class="flex gap-14">
      <Router-Link to="/" class="w-1/12 scale-50"><img src="/public/img/iconemorphoz.gif"></Router-Link>
      <div class="flex pt-10 gap-64">
        <!-- DROPDOWN -->
        <p class="font-trap-semibold text-ewhite pt-10">EN</p>
        <nav class="bg-epurple rounded-full shadow-epurple">
          <ul class="flex gap-10 pt-5">
            <Router-Link to="/how"><li class="font-trap-regular text-ewhite">How it works</li></Router-Link>
            <Router-Link to="/#contact"><li class="font-trap-regular text-ewhite">Contact</li></Router-Link>
            <Router-Link to="/about"><li class="font-trap-regular text-ewhite">About Us</li></Router-Link>
            <Router-Link to="/market"><li class="font-trap-regular text-ewhite">Market</li></Router-Link>
          </ul>
        </nav>
      
        <div class="flex gap-10">
        <Router-Link to="/login"><p class="font-trap-semibold text-ewhite pt-2">LOG IN</p></Router-Link>
        <Router-Link to="/sign"><button class="bg-epurple bg-opacity-40 border-epurple rounded-3xl p-2 border-2"><p class="font-trap-semibold text-epink"> Sign Up </p></button></Router-Link>
      </div>
      </div>  
    </div>
  </header>
</template>