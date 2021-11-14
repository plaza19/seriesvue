<template>
  <div class="container">
    <h1 class="title is-1" id="title">{{serie.nombre}}</h1>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="serie.imagen" alt="Placeholder image" />
        </figure>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item"><b>IMDB:</b>{{serie.puntuacion}}</a>
        <a class="card-footer-item"><b>Year:</b>{{serie.anyo}}</a>
      </footer>
    </div>
    <div class="btn_container">
        <router-link :to="'/personajes/' + this.id" class="button is-primary">Personajes</router-link>
    </div>
   
  </div>
</template>

<script>
import axios from "axios";
import Global from "./Global";
export default {
  name: "DetalleSerie",
  data() {
    return {
      id: 0,
      serie: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getSerie();
  },
  watch: {
    "$route.params.id"(next, prev) {
      if (prev != next) {
        this.id = next;

       this.getSerie();
      }
    },
  },
  methods: {
      getSerie() {
        var request = "/api/Series/" + this.id;
        var url = Global.urlApiSeries + request;
        axios.get(url).then((res) => {
          this.serie = res.data;
        });
      }
  }
};
</script>

<style scoped>
div.card {
  width: 50%;
  margin: 0 auto;
}
h1#title {
    margin: 0 auto;
    width: fit-content;
}

div.btn_container {
    width: fit-content;
    margin: 0 auto;
}

</style>