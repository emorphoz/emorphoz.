<template>
     <header class="pb-20">
    <div class="flex gap-14">
      <Router-Link to="/" class="w-1/12 scale-50"><img src="/public/img/iconemorphoz.gif"></Router-Link>
      <div class="flex pt-10 gap-64">
        <!-- DROPDOWN -->
        <p class="desktop:flex hidden font-trap-semibold text-ewhite pt-4">EN</p>
        
        <nav>
          <div class="desktop:flex hidden">


              <div class="px-56 pt-8 mt-3 absolute bg-epurple rounded-full shadow-epurple shadow-sm blur z-10"></div>
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
        <Router-Link to="/login"><p class="font-trap-semibold text-ewhite pt-2">LOG IN</p></Router-Link>
        <Router-Link to="/sign"><button class="bg-epurple bg-opacity-40 border-epurple rounded-3xl p-2 border-2"><p class="font-trap-semibold text-ewhite text-opacity-40"> Sign Up </p></button></Router-Link>
      </div>
      </div>  
    </div>
  </header>
</template>