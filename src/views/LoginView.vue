<script setup>
import { ref } from 'vue'
import { usegsbStore } from '@/stores/gsbStore'
import { useRouter } from 'vue-router'

const gsbStore = usegsbStore()
const login = ref('')   
const mdp = ref('')     
const isVisible = ref(null)

const router = useRouter()

const getLogin = async() => {
    try{
        const data = await gsbStore.loginVisiteur(login.value, mdp.value);
        isVisible.value = !!data
        if(data){
            router.push('/AccueilView')
        }
    } catch(error){
        console.error(error)
        isVisible.value = false
    }
}
</script>

<template>
    <h1>GSB</h1>
    <p>Identifiez-vous</p>

    <form @submit.prevent="getLogin">
        <input type="text" placeholder="Login" v-model="login">
        <input type="password" placeholder="Mot de passe" v-model="mdp">
        <button type="submit">CONNEXION</button>
    </form>

    <p v-if="isVisible === false" class="faux">Erreur t'as fait de la merde chef</p>
</template>

<style scoped>
    .faux{
        margin: 5px auto;
        background-color: red;
        text-align: center;
    }
</style>