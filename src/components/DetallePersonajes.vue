<template>
    <div class="container">
        <h2>Personaje</h2>
        <table class="table">
            <thead>
                <th>Nombre</th>
                <th>Imagen</th>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key=personaje>
                    <td>{{personaje.nombre}}</td>
                    <td><img :src="personaje.imagen"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './Global';
    export default {
        name:"DetallePersonaje",
        data () {
            return {
                id : 0,
                personajes : []
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            this.getPersonajes();
            
        }, 
        methods : {
            getPersonajes() {
                var request = "/api/Series/PersonajesSerie/" + this.id;
                var url = Global.urlApiSeries + request;
                axios.get(url).then(res=>{
                    this.personajes = res.data;
                    console.log(res.data);
                })
            }
        }
    }
</script>

<style scoped>

</style>