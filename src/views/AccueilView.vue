<script setup>
import { storeToRefs } from 'pinia'
import { usegsbStore } from '@/stores/gsbStore'

const gsbStore = usegsbStore()
const { utilisateur } = storeToRefs(gsbStore)
</script>

<template>
    <h1>Bienvenue {{ utilisateur.prenom }} {{ utilisateur.nom }}</h1>
    <pre>{{ utilisateur }}</pre>
</template>