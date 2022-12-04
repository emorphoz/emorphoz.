<template>
    <h1 class="text-center text-ewhite text-shadow-epurple font-audiowide desktop:text-lg phone:text-xs">Marketplace</h1>
    <p class="text-center text-ewhite text-shadow-epink font-trap-regular desktop:text-base phone:text-2xs phone:mx-2 desktop:mx-0">Choose from our collection which insect you want and make way for the generator.</p>

    <div class="grid desktop:grid-cols-3 phone:grid-cols-2 place-items-stretch place-self-center">
        <card />
    </div>

    <p class="text-center text-ewhite text-shadow-epink font-trap-semibold desktop:text-base text-2xs phone:mx-2 desktop:mx-0">Our site regularly updates the collections by adding new insects. Do not hesitate to follow us on social networks to be informed of the next news.</p>

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

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import card from '../../components/cardCollection.vue'
</script>