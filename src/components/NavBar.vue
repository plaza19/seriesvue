<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>

      <a class="navbar-item">
        Nuevo Personaje
      </a>

      <a class="navbar-item">
        Modificar Personaje
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Series
        </a>

        <div class="navbar-dropdown">
          <router-link :to="'/detalleserie/' + serie.idSerie" class="navbar-item" v-for="serie in series" :key="serie">
            {{serie.nombre}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

import Global from "./Global.js";
import axios from "axios";

export default {
  name: 'NavBar',
  data () {
    return {
      series: []
    }
  },
  methods: {
    populateSeries() {
      var request = "/api/Series";
      var url = Global.urlApiSeries + request;

      axios.get(url).then(res=>{
        this.series = res.data;
      })

    }
  },
  mounted () {
    this.populateSeries();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
