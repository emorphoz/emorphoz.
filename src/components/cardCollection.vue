<template>

</template>

<script>
// import statut from './icones/joueur_icone.vue';
// import foot from './icones/ballon_foot.vue';
// import petanque from "./icones/ballon_petanque.vue";
// import bascket from "./icones/ballon_basket.vue";
// import tennis from "./icones/ballon_tennis.vue";

export default {
  props: {
    statut: {
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
      default: "/",
    },
    id:{
      type: String,
    },
    type:String,
  },
  data: function() {
    return {
      insect: {
        "ladybug":ladybug,
        "butterfly":butterfly,
        "mantis":mantis,
        "grasshopper":grasshopper,
        "bee":bee,
        "larva":larva,
      },      
    }
  },
  components: { statut, ladybug, butterfly, mantis, grasshopper, bee, larva }
};
</script>