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
    route.push("/")
}

const logGoogle = async() => { 
      try { 
        const { data, error } = await supabase.auth.signInWithGoogle({ 
          provider: 'google', 
        }); 
        if (error) throw error; 
      } catch (error) { 
        alert(error.error_description || error.message); 
      }
      route.push("/")  
    }
</script>

<template>
<div class="bg-epurple bg-opacity-10">

  <button @click="logGoogle()">Sign In with Google</button><br> 
  <form>
    <input type="email" v-model="mail"> <br /> <br />
    <input type="password" v-model="passwrd"> <br /> <br />
   <button class="bg-eblue" @click.prevent="login">Submit</button>
  </form>

</div>
</template> 