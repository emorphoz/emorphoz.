<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../supabase';

const route = useRoute();

let passwrd = ref('')
let mail = ref('')

const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({

        email: mail.value,

        password: passwrd.value,
    })
    route.
}
</script>

<template>
<div class="bg-epurple bg-opacity-10">

  <form>
    <input type="email" v-model="mail"> <br /> <br />
    <input type="password" v-model="passwrd"> <br /> <br />
    <button class="bg-eblue" @click.prevent="login">Submit</button>
  </form>

</div>
</template> 