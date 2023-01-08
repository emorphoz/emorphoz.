<template>

<div class="bg-egrey w-1/5 relative mx-10 rounded-3xl shadow-turquoizeBlur border-eblue border-1">
    <component :is="types[type]" alt="" class="scale-50 bottom-20 absolute rounded-full"/>

    <div class="justify-center flex pt-32">
        <h2 class="text-center bg-eblue text-ewhite w-1/2 py-2 px-2 rounded-full phone:text-5xs desktop:text-3xs font-trap-regular">{{poste}}</h2>
    </div>

        <h2 class="text-ewhite text-center text-shadow-eblue -mb-4 phone:text-xs desktop:text-sm font-audiowide">{{name}}</h2>

        <div class="flex justify-center">
            <a :href="insta"><img src="/public/img/teams/Instagram.png" alt="" class="scale-50"></a>
            <a :href="linkedin"><img src="/public/img/teams/LinkedIn.png" alt="" class="scale-50"></a>
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
<script >
import marwin from "./teams/marwin.vue"
import bryan from "./teams/bryan.vue"
import maxime from "./teams/maxime.vue"
import alicia from "./teams/alicia.vue"
import morgane from "./teams/morgane.vue"

export default {
  props: {
    insta: {
      type: String,
    },
    linkedin: {
        type: String,
    },
    name: {
      type: String,
    },
    poste: {
        type: String,
    },
    type:String,
  },
  data: function() {
    return {
      types: {
        marwin:marwin, 
        bryan,
        maxime ,
        alicia  ,
        morgane  ,
      }
    }
  },
  components: { marwin, bryan, maxime, alicia, morgane },
};
</script>