<template>
<Router-Link :to=url>
    <div class="grid">
        <div class="relative bg-black border-4 shadow-epurple shadow-lg">
            <div :class="{hidden: !soon}" class="absolute z-40 bg-black bg-opacity-70 w-full h-full">
                <p class="text-ewhite font-trap-semibold phone:text-2xs desktop:text-base text-center desktop:mt-14 text-shadow-ewhite ">Available soon..</p>
                <div class="flex justify-center desktop:h-1/2 phone:h-[60px]">
                    <img src="/public/img/Locked.png" alt="">
                </div>
            </div>

            <div class="absolute z-40 w-full h-full border-epink border-[15px] blur-sm shadow-epink shadow-lg"></div>
            <img src="/public/icon/orbe-purple.svg" alt="" class="absolute z-10 w-[700px]">
            <component :is="insects[insect]" class="z-20 phone:h-[120px] desktop:h-[300px]"/>
        </div>

        <div class="bg-gradient-to-tr from-epink to-edark shadow-epurple shadow-lg py-2" >
            <h2 class="text-center text-ewhite font-trap-semibold desktop:text-base phone:text-xs">{{name}}</h2>
        </div>

    </div>
</Router-Link>

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

<script>
import ladybug from './insects/ladybug.vue'
import butterfly from './insects/butterfly.vue'
import mantis from './insects/mantis.vue'
import grasshopper from './insects/grasshopper.vue'
import bee from './insects/bee.vue'
import larva from './insects/larva.vue'

export default {
  props: {
    soon: {
      type: Boolean,
    },
    name: {
      type: String,
      default: "Nom non définie",
    },
    insect: {
      type: String,
    },
    url: {
      type: String,
      default: "/market",
    },
    id:{
      type: String,
    },
    type:String,
  },
  data: function() {
    return {
      insects: {
        "ladybug":ladybug,
        butterfly,
        mantis,
        grasshopper,
        bee,
        larva,
      }    
    }
  },
  components: { ladybug, butterfly, mantis, grasshopper, bee, larva }
};
</script>