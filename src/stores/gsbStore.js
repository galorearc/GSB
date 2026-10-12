import DataService from "@/services/DataService";
import { defineStore } from "pinia";
import { ref } from "vue";

const dataService = new DataService()

export const usegsbStore = defineStore('gsb', () => {
    const utilisateur = ref({})

    const loginVisiteur = async (login, mdp) =>{
        try{
            const data = await dataService.getVisiteur(login, mdp)
            utilisateur.value = data
            return data
        } catch (error){
            console.error("Erreur de connexion", error)
            throw error
        }
    }
    return { utilisateur, loginVisiteur }
})