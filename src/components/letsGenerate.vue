<template>
    <Router-Link :to="{name:'ladybuggenerate', params: {id}}" class="z-20 mt-8 mb-40"><button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] px-10 py-3 border-eblue p-2"><p class="font-trap-regular text-ewhite text-base z-20">Generate now</p></button></Router-Link>
</template>

<script>
export default {
  props: {
        id:{
      type: String,
    },
  },
  };
</script>