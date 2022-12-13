<script setup lang="ts">
    import { ref } from "@vue/reactivity";
// import { supabase, user } from '../supabase'
</script>
<template>
<div class="bg-epurple bg-opacity-10">
    <button class="bg-eblue">
          Se déconnecter
    </button>

    <!-- FORMKIT n'apparait pas ? installation faites -> Sign & Log -->
        <FormKit class="bg-ewhite">
          <FormKit name="email" label="Votre eMail" type="email" />
          <FormKit name="password" label="Mot de passe" type="password" />
        </FormKit>

</div>
</template> 