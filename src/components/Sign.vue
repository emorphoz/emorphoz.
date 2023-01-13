<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';

let username = ref('')
let passwrd = ref('')
let mail = ref('')
let password2 = ref('')
let Done = ref('');

const signup = async () => {
    try {
        if (passwrd.value == password2.value) {
            const { data, error } = await supabase.auth.signUp({
                email: mail.value,
                password: passwrd.value,
                options: {
                    data: {
                        username: username.value,

                    }
                }
            })

            console.log(data.user);
            if (error) throw error
        }
    } catch (error) {
        console.log(error.error_description, error.message);
    };
};

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
    <h1 class="text-ewhite text-center phone:text-2xs desktop:text-base font-audiowide text-shadow-epurple">Sign Up / Create an account</h1>
  
    <div class="desktop:flex desktop:gap-20 mb-10">
        <div class="flex justify-center">
        <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] border-eblue z-20 scale-90" @click.prevent="logGoogle">
            <div class="flex gap-4">
                <img src="/public/img/google.png" alt="" class="w-1/5">
                <span class="text-ewhite font-trap-light mt-4">Sign Up with Google</span>
            </div>
        </button>
        </div>
        <div class="flex justify-center phone:mt-5 desktop:mt-0">
        <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-[20px] border-eblue z-20 scale-90">
            <div class="flex gap-4">
                <img src="/public/img/metamask.png" alt="" class="w-1/5">
                <span class="text-ewhite font-trap-light mt-5">Sign Up with Metamask</span>
            </div>
        </button>
        </div>
    </div>

    <div class="flex justify-center">
        <form class="grid">
        <p class="text-ewhite text-shadow-eblue">E-mail</p>
        <input type="email" v-model="mail" class="bg-opacity-0 bg-ewhite pl-2 pr-10 text-ewhite border-b-2 border-eblue mb-7" placeholder="michelle.rivera@example.com"/>
        <p class="text-ewhite text-shadow-eblue">Usernamme</p>
        <input type="text" v-model="username" class="bg-opacity-0 bg-ewhite pl-2 pr-10 text-ewhite border-b-2 border-eblue mb-7" placeholder="Michelle Rivera"/>
        <p class="text-ewhite text-shadow-eblue">Password</p>
        <input type="password" v-model="passwrd" class="bg-opacity-0 bg-ewhite pl-2 pr-10 text-ewhite border-b-2 border-eblue mb-7" placeholder="Enter your password"/>
        <p class="text-ewhite text-shadow-eblue">Repeat your password</p>
        <input type="password" v-model="password2" class="bg-opacity-0 bg-ewhite pl-2 pr-10 text-ewhite border-b-2 border-eblue mb-7" placeholder="Confirm password"/>

        <div class="flex gap-5 mb-5">
            <input type="checkbox" name="" id="">
            <p class="text-ewhite text-shadow-epink desktop:text-3xs phone:text-4xs">I accept all the term of use, you can check in the <br /> <Router-Link to="/mentionslegales" class="underline">privacy politics</Router-Link></p>
        </div>

        <div class="flex justify-center">
            <button class="bg-eblue shadow-turquoizeBlur bg-opacity-80 border-2 rounded-lg border-eblue px-5 py-1" @click.prevent="signup" v-on:click="Done = true"><span class="text-ewhite font-trap-medium text-sm">Sign Up</span></button>
        </div>
        <p class="text-ewhite text-center" v-if="Done == true">Please, check your mailbox and validate your account </p>
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