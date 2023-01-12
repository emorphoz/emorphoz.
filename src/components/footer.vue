<template>
    <!-- ============================== FOOTER PC ============================== -->
<div class="desktop:flex hidden">
    <div class="w-full pt-5 absolute bg-epurple shadow-epurple shadow-sm blur z-10"></div>
    <div class="bg-gradient-to-b from-epurple to-edark shadow-epurple z-20 pb-10">
        <div class="desktop:flex phone:grid tablette:grid phone:justify-center tablette:grid-cols-1 desktop:gap-10 tablette:relative phone:relative">
            <div class="mt-10">
                <img src="/public/icon/emorphoz_long.svg" alt="">
                <div class="flex">
                    <p class="text-ewhite font-trap-semibold text-shadow-epink">in <span class="text-eblue">collaboration</span> with the</p>
                    <img src="/public/icon/OFFF.svg" alt="" class="w-1/5">
                </div>

                <div class="flex gap-6">
                   <a href="#" class="w-1/12"><img src="/public/icon/social/instagram.svg" alt=""></a>
                   <a href="#" class="w-1/12"><img src="/public/icon/social/mail.svg" alt=""></a>
                   <a href="#" class="w-1/12"><img src="/public/icon/social/twitter.svg" alt=""></a>
                   <a href="#" class="w-1/12"><img src="/public/icon/social/discord.svg" alt=""></a>
                   <a href="#" class="w-1/12"><img src="/public/icon/social/tiktok.svg" alt=""></a> 
                </div>
            </div>

            <!-- TEAM -->
            <div class="mt-10">
                <h2 class="text-ewhite font-trap-semibold">Our Team</h2>
                <ul class="pt-2">
                    <Router-Link to="/about"><li class="font-trap-regular text-ewhite text-opacity-40">About</li></Router-Link>
                    <Router-Link to="/about"><li class="font-trap-regular text-ewhite text-opacity-40">Our formation</li></Router-Link>
                    <a href="https://www.offf.barcelona/" target="_blank"><li class="font-trap-regular text-ewhite text-opacity-40">OFFF</li></a>
                </ul>
            </div>

            <!-- Market -->
            <div class="mt-10">
                <h2 class="text-ewhite font-trap-semibold">Market</h2>
                <ul class="pt-2">
                    <Router-Link to="/market"><li class="font-trap-regular text-ewhite text-opacity-40">Generate NFT</li></Router-Link>
                    <Router-Link to="/how"><li class="font-trap-regular text-ewhite text-opacity-40">How it works</li></Router-Link>
                </ul>
            </div>

            <!-- Crypto -->
            <div class="mt-10">
                <h2 class="text-ewhite font-trap-semibold">Crypto Money</h2>
                <ul class="pt-2">
                    <a href="https://tezos.com/" target="_blank"><li class="font-trap-regular text-ewhite text-opacity-40">Tezos</li></a>
                    <a href="https://metamask.io/" target="_blank"><li class="font-trap-regular text-ewhite text-opacity-40">Open Wallet</li></a>
                </ul>
            </div>

            <!-- Policy -->
            <div class="mt-10">
                <h2 class="text-ewhite font-trap-semibold">Privacy policy</h2>
                <ul class="pt-2">
                    <Router-Link to="/mentionslegales"><li class="font-trap-regular text-ewhite text-opacity-40">Legal mentions</li></Router-Link>
                    <Router-Link to="/mentionslegales"><li class="font-trap-regular text-ewhite text-opacity-40">CGU</li></Router-Link>
                    <Router-Link to="/mentionslegales"><li class="font-trap-regular text-ewhite text-opacity-40">Confidentiality policy</li></Router-Link>
                </ul>
            </div>

        </div>

        <div class="grid grid-cols-1 justify-center ml-28 mb-10">
            <hr class="opacity-25 mt-10 w-11/12"/>
        </div>

        <div class="grid grid-cols-2 gap-x-96 ml-3">
            <p class="font-trap-regular text-opacity-20 text-ewhite">Project carried out as part of an educational exercise within the MMI department in Montbéliard</p>
            <p class="font-trap-regular text-ewhite"> <span class="text-opacity-20">© 2022</span> E-morphoz</p>
            
        </div>

    </div>
</div>



<!-- ============================== FOOTER Phone ============================== -->
<div class="desktop:hidden flex">
    <div class="w-full pt-5 absolute bg-epurple shadow-epurple shadow-sm blur z-10"></div>
    
    <div class="bg-gradient-to-b from-epurple to-edark shadow-epurple z-20 pb-10 w-full">
        <div class="desktop:flex phone:grid phone:justify-center w-full">
            <div class="mt-10">
                <div class="flex">
                    <img src="/public/icon/OFFF.svg" alt="" class="w-1/3">
                    <img src="/public/icon/emorphoz_short.png" alt="">
                </div>
            </div>

            <ul class="ml-2">
                <a href="#"><li class="text-ewhite text-xs font-trap-semibold">Legal Mentions</li></a> <hr class="opacity-30 mb-5 w-11/12"/>
                <a href="#"><li class="text-ewhite text-xs font-trap-semibold">OFFF</li></a> <hr class="opacity-30 mb-5 w-11/12"/>
                <a href="#"><li class="text-ewhite text-xs font-trap-semibold">Tezos</li></a> <hr class="opacity-30 mb-5 w-11/12" />
                <Router-Link to="/how"><li class="text-ewhite text-xs font-trap-semibold">How it works</li></Router-Link> <hr class="opacity-30 mb-5 w-11/12"/>
                <Router-Link to="/market"><li class="text-ewhite text-xs font-trap-semibold">Generate NFT's</li></Router-Link> <hr class="opacity-30 mb-5 w-11/12" />
            </ul>


            <div class="flex justify-center gap-10">
                   <a href="#"><img src="/public/icon/social/instagram.svg" alt=""></a>
                   <a href="#"><img src="/public/icon/social/mail.svg" alt=""></a>
                   <a href="#"><img src="/public/icon/social/twitter.svg" alt=""></a>
            </div>
            <div class="flex justify-center gap-10">
                   <a href="#"><img src="/public/icon/social/discord.svg" alt=""></a>
                   <a href="#"><img src="/public/icon/social/tiktok.svg" alt=""></a> 
            </div>

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