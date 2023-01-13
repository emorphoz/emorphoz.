<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { supabase, isConnect, user } from '../supabase';

const route = useRoute();

let passwrd = ref('')
let mail = ref('')

const login = async () => {
    const { data, error , isConnect} = await supabase.auth.signInWithPassword({

        email: mail.value,

        password: passwrd.value,
    })
    // console.log(isConnect.value)
    // route.push("/")
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
      // route.push("/")  
    }
</script>

<template>
<div class="bg-epurple bg-opacity-10 border-2 border-l-eblue border-t-eblue border-r-epink border-b-epink px-4 py-10">
    <h1 class="text-ewhite text-center phone:text-2xs desktop:text-base font-audiowide text-shadow-epurple">Log in to e-morphoz with</h1>

    <div class="desktop:flex desktop:gap-20 mb-10">
        <div class="flex justify-center">
        <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] border-eblue z-20 scale-90" @click.prevent="logGoogle">
            <div class="flex gap-4">
                <img src="/public/img/google.png" alt="" class="w-1/5">
                <span class="text-ewhite font-trap-light mt-4">Log in with Google</span>
            </div>
        </button>
        </div>
        <div class="flex justify-center phone:mt-5 desktop:mt-0">
        <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] border-eblue z-20 scale-90">
            <div class="flex gap-4">
                <img src="/public/img/metamask.png" alt="" class="w-1/5">
                <span class="text-ewhite font-trap-light mt-5">Log in with Metamask</span>
            </div>
        </button>
        </div>
    </div>

    <h1 class="text-ewhite text-center phone:text-2xs desktop:text-base font-audiowide text-shadow-epurple m-5">Or insert your information</h1>

    <div class="flex justify-center">
    <form class="grid">
        <p class="text-ewhite text-shadow-eblue">E-mail</p>
        <input type="email" v-model="mail" class="bg-opacity-0 bg-ewhite pl-2 pr-10 text-ewhite border-b-2 border-eblue mb-7" placeholder="michelle.rivera@example.com">

        <p class="text-ewhite text-shadow-eblue">Password</p>
        <input type="password" v-model="passwrd" class="bg-opacity-0 bg-ewhite pl-2 pr-10 text-ewhite border-b-2 border-eblue mb-7" placeholder="Enter your password">

        <div class="flex justify-center">
          <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-lg border-eblue px-5 py-1" @click.prevent="login"><span class="text-ewhite font-trap-medium text-sm">Log in</span></button>
        </div>
    </form>
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