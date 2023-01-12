<template>
    <h1 class="text-ewhite text-center phone:text-base desktop:text-lg font-audiowide text-shadow-epurple">How it works
        ?</h1>
    <img src="/public/img/renduFinal.gif" alt="video de presentation emorphoz" class="w-2/3 mx-auto">
    <div class="mx-auto">
        <h2 class="text-ewhite text-center phone:text-xs desktop:text-lg font-audiowide text-shadow-epurple">
            Take full control of your NFT</h2>
        <h3 class="text-ewhite font-trap-medium tphone:text-3xs desktop:text-xs text-center">Learn how your NFT is created
            step by step</h3>
    </div>

    <div class="bg-[url('/public/img/tuto/gif1.jpg')] mt-10 h-full">
        <div class="flex flex-shrink pt-20 desktop:ml-20">
            <img class="w-1/12" src="/public/img/tuto/numerotisation-1.png" />
            <div>
                <div class="flex justify-center">
                    <hr class="text-epurple w-1/3 border-epurple"/>
                </div>
                <h2 class="text-ewhite font-audiowide text-lg text-center text-shadow-eblue">The generator uses the <br /> outside temperature</h2>
            </div>
        </div>
        <p class="text-ewhite font-trap-light text-light mx-4">After pressing the "generate" button, a computer program
            launches to first look at the <span class="text-eblue"> outside temperature </span> of the place where you
            are located. </p>
        <p class="text-ewhite font-trap-light text-light mx-4 z-20">For example, if it is<span class="text-eblue"> cold
            </span> where you are when you create one of our NFT, your bug will be in a cold place !</p>
    </div>

    <div class="bg-[url('/public/img/tuto/gif2.jpg')]">
        <div class="desktop:flex">
            <img class="w-1/12" src="/public/img/tuto/numerotisation-2.png" />
            <h2 class="text-ewhite font-audiowide desktop:text-lg phone:text-5xs text-center text-shadow-eblue">The generator will generate a
                rendering of the NFT</h2>
        </div>
        <p class="text-ewhite font-trap-light text-light mx-4">After taking the outside temperature into account, the
            generator will select 3 different combinations in <span class="text-eblue"> 3 separate layers:</span></p>
        <ul>
            <li> - the insect</li>
            <li> - the support where the insect is posed </li>
            <li> - the background</li>
        </ul>
        <p class="text-ewhite font-trap-light text-light mx-4">After selecting and assembling these 3 layers, the
            generator will create the image with the different layers. So you will have at that moment a first
            rendering.</p>
    </div>

    <div class="bg-[url('/public/img/tuto/gif3.jpg')]">
        <div class="flex flex-wrap">
            <img class="w-1/12" src="/public/img/tuto/numerotisation-3.png" />
            <h2 class="text-ewhite font-audiowide text-lg text-center text-shadow-eblue">You can personalize it !</h2>
        </div>
        <p class="text-ewhite font-trap-light text-light mx-4">It is up to you now ; you can add an unique head to your
            ladybug and a shell too !</p>
        <p class="text-ewhite font-trap-light text-light mx-4">For this part, about a dozen products are available! </p>
        <p class="text-ewhite font-trap-light text-light mx-4">So there are many possibilities, 300,000 in total!</p>
    </div>

    <div class="bg-[url('/public/img/tuto/gif4.jpg')]">
        <div class="flex flex-wrap">
            <img class="w-1/12" src="/public/img/tuto/numerotisation-4.png" />
            <h2 class="text-ewhite font-audiowide text-lg text-center text-shadow-eblue">The contract</h2>
        </div>
        <p class="text-ewhite font-trap-light text-light mx-4">Once you have finished generating your NFT, a smart
            contract is made. It states that you will forever receive 2% of every NFT resale once it is registered in
            the blockchain . 3 other parties will also receive 2% of each resale:</p>
        <ul class="text-ewhite font-trap-light text-light mx-4">
            <li> - An associaton</li>
            <li> - E-morphoz </li>
            <li> - The OFFF Festival</li>
        </ul>

        <p class="text-ewhite font-trap-light text-light mx-4">In other words, by choosing E-morphoz, by investing in
            yourself, you participate in supporting an association.</p>
    </div>

    <div class="bg-[url('/public/img/tuto/gif5.jpg')]">
        <div class="flex flex-wrap">
            <img class="w-1/12" src="/public/img/tuto/numerotisation-5.png" />
            <h2 class="text-ewhite font-audiowide text-lg text-center text-shadow-eblue">That’s it !</h2>
        </div>
        <p class="text-ewhite font-trap-light text-light mx-4">And here, after adding or not the accessories,?</p>
        <p class="text-ewhite font-trap-light text-light mx-4">you can validate the model of your NFT and you will have
            access to the minted image in the blockhain and you will have more than to publish it on your wallet!</p>
        <p class="text-ewhite font-trap-light text-light mx-4">Now that you know everything, why don’t you go for it?
        </p>
        <Router-Link to="/market"><button
                class=" desktop:mt-10 desktop:ml-3 phone:mt-24 phone:ml-16 scale-50 bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue z-20">
                <p
                    class="font-trap-regular text-ewhite desktop:text-lg phone:text-base z-20  mx-auto text-shadow-eblue">
                    Generate
                </p>
            </button></Router-Link>
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