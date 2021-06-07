<template>
    <main class="">
        <h1 class="acatalogue_titre">Pannel admin</h1>
        <div class="acatalogue flex">
            <div id="acatalogue_tableau" class="acatalogue_tableau" v-for="tableau in items" :key="tableau.id">
                <div class="abuttons">
                        <button v-if="tableau.vendu == 'A Vendre'"
                        class="button- bg-success" @click="sell(tableau.id)">{{tableau.vendu}}</button>
                        <button v-else
                        class="button- bg-warning" @click="unsell(tableau.id)">{{tableau.vendu}}</button>
                        <button class="button- bg-danger" @click="deletableau(tableau.id, tableau.image)">Supprimer</button> 
                </div>
                  <button @click="gettableau(tableau.id)" class="button_tableau">
                  <h2 class="acatalogue_tableau-titre">{{ tableau.titre }}</h2>
                  <div>
                    <p id="venduId" v-if="tableau.vendu == 'Vendu'">Vendu !</p>
                    <img :src="'http://localhost:3000/tmp/' + tableau.image" alt="image" class="acatalogue_tableau-image">
                  </div>
               </button>
           </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
  name: "catalogue",
  data() {
    return {
      data: JSON.parse(this.$session.get("user")),
      titre: "",
      image: "",
      idtableau: "",
      items: "",
      text:"",
    };
  },
  created() {
    //Appel à l'api pour l'affichage de tous les messages
    axios
      .get("http://localhost:3000/api/gettableau")
      .then(response => {
        this.items = response.data;
      })

      .catch(error => console.log(error));
  },
  methods: {

    deletableau: function(delid, idmage) {
      let token = this.data.token;
      let idtable = delid;
      let image = idmage;

      if (
       confirm("êtes vous sûr de vouloir supprimé ce tableau?") &&
      confirm("cela effacera définitivement le tableau")
      ){
        axios
          .post(
            "http://localhost:3000/api/deletetableau",
            {
              id: idtable,
              image
            },
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
             }
            }
          )
          .then(() => {
            alert("votre tableau a bien été supprimé");
            location.reload(true);
          })
          .catch(() => {
            console.log("le message n'a pas été supprimé !");
          });
      }
    },
    gettableau: function(id){

      let gettableau = id;

      window.location.href = `http://localhost:8080/#/tableauadmin?id=${gettableau}`;
      location.reload(true);
    },
/*
modify: function(modifid){

  let modify = modifid
      window.location.href = `http://localhost:8080/#/modify?id=${modify}`;
      location.reload(true);

},*/

    sell: function(idtosell) {
      let token = this.data.token;
      let id = idtosell;

      if (
       confirm("Avez-vous vendu ce tableau ?")
      ){
        axios
          .post(
            "http://localhost:3000/api/selltableau",
            {
              id: id
            },
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
             }
            }
          )
          .then(() => {
            alert("votre tableau a bien été vendu");
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été declaré vendu !");
          });
      }
    },
     unsell: function(idtosell) {
      let token = this.data.token;
      let id = idtosell;

      if (
       confirm("Remmetre ce tableau en vente?")
      ){
        axios
          .post(
            "http://localhost:3000/api/unselltableau",
            {
              id: id
            },
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
             }
            }
          )
          .then(() => {
            alert("votre tableau a bien été remis en vente");
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été remis en vente !");
          });
      }
    },
}
}
</script>

<style lang="scss">
li{list-style: none;}
.acatalogue{
    flex-wrap: wrap;
    justify-content: center;
    &_titre{margin-bottom: 50px; padding-top: 50px;}
}
.acatalogue_tableau{
    margin: 30px 20px;
    &-titre{font-size:22px; }
    &-image{ width: 300px;}
}
.abuttons{
        display: flex;
        justify-content: space-evenly;
        margin-bottom:5px;
}
.button-{
        color:white;
        border:none;
        padding: 10px;
        border-radius: 15px;

        &:hover{
                transform: scale(1.2);
                transition: 200ms ease-in ;
        }
}
.button_tableau{border: none; background: white;}
.modify{
  background-color: #17A2B8 !important;
  border-radius: 15px;
  padding:10px 0;
}

#venduId{
  width: 100px;
  color:red;
  font-size: 20px;
  margin: 0 auto;
}

@media (min-width: 576px){
  .acatalogue_tableau-image{height: 300px; width: auto;}
}
@media (min-width: 768px){

  .acatalogue_tableau-image{height: 200px; width: auto;}
}
@media (min-width: 992px){
  .acatalogue_tableau{ width: 30%;}
   .acatalogue_tableau-image{height:220px;}
}
@media (min-width: 1200px){
  .acatalogue_tableau-image{height:260px;}
}
</style>
