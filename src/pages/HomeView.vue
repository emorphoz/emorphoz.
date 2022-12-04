<template>

<div>
    <!-- Long Logo -->
    <img src="/public/icon/emorphoz_long.svg" alt="" class="desktop:w-96 w-11/12">

    <!-- Slogan -->
    <h1 class="font-audiowide text-ewhite ml-10 desktop:text-lg text-xs text-shadow-epink">invest in yourself</h1>
    <div class="flex ml-10">
        <p class="text-ewhite font-trap-semibold desktop:text-base text-xs phone:mt-2 text-shadow-epink">in <span class="text-eblue">collaboration</span> with the</p>

        <!-- Logo OFF PC & Mobile -->
        <div class="desktop:flex hidden">
            <a href="https://www.offf.barcelona/" target="_blank"><img src="/public/icon/OFFF.svg" alt=""></a>
        </div>
        <div class="flex desktop:hidden">
            <a href="https://www.offf.barcelona/" target="_blank"><img src="/public/icon/OFFF.svg" alt="" class="phone:absolute phone:left-0 phone:w-1/3 phone:ml-5 phone:mt-10"></a>
        </div>
    </div>
    <div class="desktop:flex hidden">
        <img src="/public/img/3-Ellipse.png" class="absolute top-44 right-0 w-1/5 z-10">
        <img src="/public/icon/orbe-purple.svg" class="absolute scale-150 top-36 right-14 z-10">
        <img src="/public/img/Ellipse-lineshort.png" alt="" class="absolute left-96 w-1/5 z-10">
    </div>

    <div class="desktop:hidden flex">

        <div class="grid grid-cols-2">
            <div class="col-span-1">
                <img src="/public/img/3-Ellipse.png" alt="" class="rotate-90 mt-14 -ml-32 scale-150">
            </div>

            <div class="col-span-1">
                <div class="flex">
                    <img src="/public/img/NFTsymb.png" alt="" class="h-12 mt-16">
                    <p class="font-trap-semibold text-ewhite text-xs mt-20">300, 000 NFTs</p> 
                </div>
                <p class="text-ewhite text-opacity-75 font-trap-light text-3xs text-center">Now available</p>
            </div>
        </div>

    </div>

    <div class="desktop:hidden flex">
        <img src="/public/img/insects/coccinelle.png" alt="" class="z-20">
        <img src="/public/img/clouds.png" alt="" class="z-10 absolute opacity-30 epur">
    </div>

    <div class="desktop:hidden flex">
        <img src="/public/img/renduFinal.gif" alt="" class="w-11/12 ml-4">
    </div>

    <div class="desktop:w-1/2 z-20">
    <p class="text-ewhite font-trap-regular pt-40 desktop:ml-10 phone:ml-4 phone:mr-2 desktop:text-xs phone:text-3xs z-20">Discover a unique generator that will create a unique <br />
    work designed specifically for your tastes but also <br />
    according to the ambient temperature of your city...</p>
        <img src="/public/img/Ellipse-lineshort.png" alt="" class="absolute z-10 desktop:w-1/6 desktop:-bottom-24 phone:-mt-32 phone:w-[280px] phone:rotate-[225deg] desktop:rotate-0">

    <div class="desktop:flex hidden">
        <img src="/public/img/insects/coccinelle.png" alt="" class="z-20 absolute -bottom-24 w-1/3 right-0">
        <img src="/public/img/clouds.png" alt="" class="z-10 absolute -bottom-24 w-1/3 right-0 opacity-30 epur">
    </div>
    
    <img src="/public/icon/orbe-purple.svg" class="absolute scale-150 right-72 bottom-20 z-0 rotate-90 w-1/6">

    <div class="desktop:grid grid-cols-3 phone:text-center content-between mt-5">
        <div class="col-span-1"></div>
        <Router-Link to="/market" class="z-20"><button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue p-2"><p class="font-trap-regular text-ewhite text-base z-20">Discover</p></button></Router-Link>
    </div>
    </div>

    <img src="/public/icon/orbe-pink.svg" alt="" class="absolute z-10 -bottom-96 w-1/4">

    <!-- <img src="/public/" alt=""> == Gif System         -->

    <div class="hidden desktop:flex">
        <img src="/public/img/renduFinal.gif" alt="" class="absolute z-10 right-10 desktop:mt-10">
        <img src="/public/img/NFTsymb.png" alt="" class="h-28 -bottom-96 absolute left-80 desktop:ml-10">
        <div class="grid grid-cols-4">
            <div class="col-span-2"></div>
            <div class="col-span-2">
                <p class="font-trap-semibold text-ewhite text-lg mt-52 desktop:ml-14">300, 000 NFTs</p> 
                <p class="text-ewhite text-opacity-75 font-trap-light text-base text-center">Now available</p>
            </div>
        </div>
    </div>

    <img src="/public/icon/orbe-purple.svg" alt="" class="absolute z-10 w-1/3 rotate-180 -left-44">
    <img src="/public/icon/orbe-pink.svg" alt="" class="absolute z-10 w-1/5 right-0 rotate-180">

    <div class="grid grid-cols-6 gap-10 mt-24">
        <div class="col-span-1"></div>
            <div class="col-span-4 row" >
                <p class="text-ewhite desktop:font-trap-semibold desktop:text-base phone:font-trap-regular">When you generate an nft, a smart contract is made between 4 differents parties:</p>
            </div>
        <div class="col-span-1"></div>
        <div class="col-span-1"></div>

            <div class="desktop:col-span-1 phone:col-span-2">
                <img src="/public/icon/User.svg" alt="" class="phone:w-1/2 desktop:w-auto">
                <p class="text-ewhite font-trap-light desktop:text-xs phone:text-3xs">You</p>
            </div>

            <div class="desktop:col-span-1 phone:col-span-2">
                <img src="/public/icon/People.svg" alt="" class="phone:w-1/2 desktop:w-auto">
                <p class="text-ewhite font-trap-light desktop:text-xs phone:text-3xs">An association</p>
            </div>

            <div class="desktop:col-span-1 phone:col-span-3">
                <img src="/public/icon/emorphoz_long.svg" alt="">
                <p class="text-ewhite font-trap-light desktop:text-xs phone:text-3xs">E-morphoz</p>
            </div>

            <div class="desktop:col-span-1 phone:col-span-3">
                <img src="/public/icon/OFFF.svg" alt="">
                <p class="text-ewhite font-trap-light desktop:text-xs phone:text-3xs">The OFFF festival</p>
            </div>

        <div class="col-span-1"></div>
        <div class="col-span-1"></div>

        <div class="col-span-6">
            <p class="text-ewhite font-trap-light desktop:text-xs phone:text-3xs">
                This smart contract states that once the NFT is entered in the blockchain , <span class="text-eblue">8% of the selling
                price will be given to the 4 original parties</span>, forever. If you choose to invest with E-morphoz, you
                will receive 2% of each resale in addition to participate in a donation for an association 
            </p>
        </div>

    </div>

    <div class="desktop:grid grid-cols-3 mt-20">
        <div class="col-span-1"></div>

        <div class="col-span-1">
            <p class="text-ewhite desktop:text-base phone:text-xs font-audiowide absolute z-50 phone:ml-10 phone:mt-11 desktop:mt-0 desktop:left-96 desktop:ml-20 phone:text-center">Many textures available</p>
            <Router-Link to="/market"><button class="absolute desktop:mt-10 desktop:ml-3 phone:mt-24 phone:ml-16 scale-50 bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue z-20"><p class="font-trap-regular text-ewhite desktop:text-lg phone:text-base z-20 text-shadow-eblue">Generate now</p></button></Router-Link>
            <div class="hidden desktop:flex">
                <img src="/public/img/CardTextu.png" alt="" class="z-10 desktop:scale-150 phone:w-full">
            </div>

            <div class="desktop:hidden flex">
                <img src="/public/img/CardTextu_phone.png" alt="" class="z-10 desktop:scale-150 phone:w-full">
            </div>
        </div>

        <div class="col-span-1"></div>
    </div>

    <img src="/public/icon/orbe-purple.svg" alt="" class="absolute z-0 rotate-180 w-1/3 desktop:-mt-52">
    <img src="/public/icon/orbe-pink.svg" alt="" class="absolute z-0 rotate-180 w-1/5 right-0">
    <p class="text-center mt-20 text-ewhite font-audiowide desktop:text-lg phone:text-base z-20 text-shadow-eblue">A more <span class="text-eblue">eco-friendly</span> way to pay and store your NFT</p>

    <div class="desktop:grid grid-cols-3 mt-10">
        <div class="col-span-1"></div>
        <a href="https://tezos.com/" target="_blank"><button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue z-20 desktop:ml-44 phone:ml-24 w-1/2"><img src="/public/img/tezosButton.png" alt=""></button></a>
    </div>

    <div class="desktop:grid grid-cols-2">
        <img src="/public/img/carte.png" alt="">
        
        <div class="desktop:mt-72">
            <h2 class="text-ewhite font-audiowide text-lg text-center text-shadow-eblue">Why <span class="text-eblue"> Tezos </span> ?</h2>
            <p class="text-ewhite font-trap-light text-light">Unlike blockchains such as Bitcoin or Etherum, the tezos system requires much less carbon energy and running costs making it an ideal alternative platform to create environmentally friendly blockchain applications</p>
        </div>

    </div>

    <img src="/public/icon/orbe-purple.svg" alt="" class="absolute right-0 w-1/2 desktop:-mt-96">

    <img src="/public/icon/orbe-pink.svg" alt="" class="absolute left-0 w-1/3 desktop:-mt-96">

    <div class="grid grid-cols-12 mt-36 mb-96">
        <div class="col-span-1"></div>

        <img src="/public/icon/orbe-purple.svg" alt="" class="absolute w-1/3 left-0 desktop:mt-52 rotate-180 z-0">
        <img src="/public/icon/orbe-pink.svg" alt="" class="absolute w-1/3 right-0 rotate-180 z-0">

        <div class="col-span-10">
            <p class="phone:text-lg desktop:text-[150px] font-trap-bold absolute z-0 desktop:-mt-56 phone:-mt-10 text-transparent bg-clip-text bg-gradient-to-r from-eblue to-epink">CONTACT</p>
           <div class="desktop:flex hidden">
                <p class="phone:text-lg desktop:text-[150px] font-trap-bold absolute z-0 desktop:mt-[360px] desktop:right-20 text-transparent bg-clip-text bg-gradient-to-r from-eblue to-epink">US NOW</p>
            </div>
            <div class="desktop:flex hidden">
                <img src="/public/img/Forms.png" alt="" class="absolute z-10 w-5/6 desktop:-mt-20">
            </div>

            <div class="desktop:hidden flex">
                <img src="/public/img/Forms_phone.png" alt="" class="absolute z-10 w-5/6 desktop:-mt-20">
            </div>

            <div class="desktop:grid grid-cols-2">
                <form class="col-span-1 desktop:ml-24 z-40">
                    <input type="text" placeholder="Your email" class="row bg-transparent z-50 border-b-2 text-ewhite phone:ml-2 mb-10 desktop:pr-40 phone:pr-20 phone:mt-10 desktop:mt-0"> <br>
                    <textarea name="" class="row bg-transparent z-50 border-b-2 text-ewhite desktop:pr-40 phone:pr-28 phone:ml-2 pb-12 text-opacity-70"> Message </textarea>
                </form>

                <div class="col-span-1">
                    <img src="/public/img/fuser.png" alt="" class="absolute z-40 desktop:w-1/5 phone:w-1/2 desktop:-ml-48 desktop:-mt-24 phone:-mt-20 phone:ml-40">
                    <h2 class="text-ewhite desktop:text-base phone:text-2xs font-trap-semibold desktop:mt-10 z-40 phone:ml-10 desktop:ml-0">Any questions ?</h2>
                    <p class="text-ewhite desktop:text-xs phone:text-3xs font-trap-regular z-40 phone:ml-10 desktop:ml-0">if you have any questions about our generator or if you want a partnership, do not hesitate to <span class="text-eblue">contact us !</span></p>
                </div>

                <div class="col-span-1"></div>
                <button class="bg-eblue desktop:-ml-32 shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue z-40 phone:ml-20 desktop:w-1/4 mt-10"><p class="font-trap-regular text-ewhite text-base z-40">Send</p></button>
            </div>

            <div class="desktop:hidden flex">
                <p class="phone:text-lg phone:mt-32 phone:ml-32 desktop:text-[150px] font-trap-bold absolute z-0 desktop:mt-[360px] desktop:right-20 text-transparent bg-clip-text bg-gradient-to-r from-eblue to-epink">US NOW</p>
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