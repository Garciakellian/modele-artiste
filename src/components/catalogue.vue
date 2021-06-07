<template>
    <main class="container">
        <h1 class="catalogue_titre">Mon catalogue</h1>
        <div class="catalogue">
            <button id="catalogue_tableau" class="catalogue_tableau  col-lg-4"
            v-for="tableau in items" :key="tableau.id" @click="gettableau(tableau.id)">
                <h2 class="catalogue_tableau-titre">{{ tableau.titre }}</h2>
               <div>
                <p id="venduId" v-if="tableau.vendu == 'Vendu'">Vendu !</p>
                <img :src="'http://localhost:3000/tmp/' + tableau.image" alt="image" class="catalogue_tableau-image">
              </div>
              </button>
        </div>
    </main>
</template>

<script>

import axios from "axios";

export default {
  name: "catalogue",
  data() {
    return {
      data: "",
      titre: "test",
      image: "",
      id: "",
      items: "",
    };
  },
 async created() {
    //Appel à l'api pour l'affichage de tous les messages
    axios
      .get("http://localhost:3000/api/gettableau")
      .then(response => {
        this.items = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    gettableau: function(id){

      let gettableau = id;

      window.location.href = `http://localhost:8080/#/tableau?id=${gettableau}`;
      location.reload(true);
    }
  }
}
</script>

<style lang="scss">
.catalogue{
  display: flex; flex-direction: column;
    &_titre{margin-bottom: 50px;}
}
.catalogue_tableau{
  border: none;
  background: white;
    display: block;
    margin: 30px auto !important;
    &-titre{font-size:22px; }
    &-image{ height: 200px !important;}
}
#venduId{
  width: 100px;
  color:red;
  font-size: 20px;
  margin: 0 auto;
}

@media (min-width: 576px) { 
  .catalogue_tableau-image{height: 200px !important;}
 }
 @media (min-width: 768px){.catalogue{flex-direction: row !important; flex-wrap: wrap !important;}}

 @media (min-width: 1200px) { 
  .catalogue_tableau-image{height: 250px !important;}
 }
</style>