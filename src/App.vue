<script setup>
import { RouterLink, RouterView } from 'vue-router'

import headerE from './components/header.vue'
import footerE from './components/footer.vue'


</script>

<template>
<div class="bg-edark">

<headerE />


  <RouterView/>


<footerE />
</div>

</template>