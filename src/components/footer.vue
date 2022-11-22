<template>
    <div class="bg-epurple shadow-epurple drop-shadow-lg">
        <div class="flex gap-10">
            <div>
                <img src="/public/icon/emorphoz_long.svg" alt="">
                <div class="flex">
                    <p class="text-ewhite font-trap-semibold">in <span class="text-eblue">collaboration</span> with the</p>
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
            <div>
                <h2 class="text-ewhite font-trap-semibold">Our Team</h2>
                <ul class="pt-2">
                    <Router-Link to="/about"><li class="font-trap-regular text-ewhite text-opacity-40">About</li></Router-Link>
                    <Router-Link to="/about"><li class="font-trap-regular text-ewhite text-opacity-40">Our formation</li></Router-Link>
                    <a href="#"><li class="font-trap-regular text-ewhite text-opacity-40">OFFF</li></a>
                </ul>
            </div>

            <!-- Market -->
            <div>
                <h2 class="text-ewhite font-trap-semibold">Market</h2>
                <ul class="pt-2">
                    <Router-Link to="/market"><li class="font-trap-regular text-ewhite text-opacity-40">Generate NFT</li></Router-Link>
                    <Router-Link to="/how"><li class="font-trap-regular text-ewhite text-opacity-40">How it works</li></Router-Link>
                </ul>
            </div>

            <!-- Crypto -->
            <div>
                <h2 class="text-ewhite font-trap-semibold">Crypto Money</h2>
                <ul class="pt-2">
                    <a href="#"><li class="font-trap-regular text-ewhite text-opacity-40">Tezos</li></a>
                    <a href="#"><li class="font-trap-regular text-ewhite text-opacity-40">Open Wallet</li></a>
                </ul>
            </div>

            <!-- Policy -->
            <div>
                <h2 class="text-ewhite font-trap-semibold">Privacy policy</h2>
                <ul class="pt-2">
                    <Router-Link to="/"><li class="font-trap-regular text-ewhite text-opacity-40">Legal mentions</li></Router-Link>
                    <Router-Link to="/"><li class="font-trap-regular text-ewhite text-opacity-40">CGU</li></Router-Link>
                    <Router-Link to="/"><li class="font-trap-regular text-ewhite text-opacity-40">Confidentiality policy</li></Router-Link>
                </ul>
            </div>

        </div>
    </div>
</template>