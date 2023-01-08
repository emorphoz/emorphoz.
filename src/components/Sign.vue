<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';

let username = ref('')
let passwrd = ref('')
let mail = ref('')
let password2 = ref('')

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
    }
}

</script>


<template>
<div class="bg-epurple bg-opacity-10">
  <form>
    <input type="email" v-model="mail" /> <br /> <br />
    <input type="text" v-model="username" /> <br /> <br />
    <input type="password" v-model="passwrd" /> <br /> <br />
    <input type="password" v-model="password2" /> <br /> <br />
    <button class="bg-eblue" @click.prevent="signup">Submit</button>
  </form>
</div>
</template> 