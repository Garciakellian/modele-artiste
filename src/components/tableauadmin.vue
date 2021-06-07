<template>
<div>
   <div v-for="tableau in item" :key="tableau.id" class="tableau container">
        <div class="row">
          <div class="column  col-6">
            <inner-image-zoom :src="'http://localhost:3000/tmp/' + tableau.image" alt="image" class="tableau_image" ></inner-image-zoom>
            <button class="bg-warning button1" v-on:click="imageHidden = !imageHidden"><i class="fas fa-edit edicon"></i></button>
            <form class="showfocus flex" v-if="!imageHidden" @submit.prevent="modifyImage(tableau.id, tableau.titre, tableau.artiste)">
                  <input class="inputperso" type="file" accept="image/png, image/jpeg"
                   id="image" required="required" name ="title" @change="onFileChange">
                  <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>
          </div>


           <div class="tableau_div col-6">

              <div class="flex">
                <h1 id="tableau_title" class="tableau_hPage">{{tableau.titre}}</h1>
                <button class="bg-warning button1" v-on:click="titreHidden = !titreHidden"><i class="fas fa-edit edicon"></i></button>
              </div>
              <form class="showfocus flex" v-if="!titreHidden" @submit.prevent="modifyTitre(tableau.id)">
                  <input class="inputperso" type="text" required="required" v-model="titre"
                  name ="title">
                  <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>


                <div class="flex">
                  <p class="tabl tableau_artiste">Artiste:
                    <span class="tableau_artiste-span">{{tableau.artiste}}</span>
                  </p>
                  <button class="bg-warning button1" v-on:click="artisteHidden = !artisteHidden"><i class="fas fa-edit edicon"></i></button>
                </div>
                <form class="showfocus flex" v-if="!artisteHidden" @submit.prevent="modifyArtiste(tableau.id)">
                  <input class="inputperso" type="text" required="required" v-model="artiste"
                  name ="artiste">
                  <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
                </form>

                <div class="flex">
                  <p class="tableau_prix">Prix:
                    <span  class="tableau_prix-span">{{tableau.prix}}</span>
                  </p>
                  <button class="bg-warning button1" v-on:click="prixHidden = !prixHidden"><i class="fas fa-edit edicon"></i></button>
                </div>
              <form class="showfocus flex" v-if="!prixHidden" @submit.prevent="modifyPrix(tableau.id)">
                  <input class="inputperso" type="number" required="required" v-model="prix"
                  name ="prix" step="any" max="100000.00">
                  <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>

                <div class="flex">
                  <p class="tableau_format">Format:
                    <span class="tableau_format-span">{{tableau.format}}</span>
                  </p>
                  <button class="bg-warning button1" v-on:click="formatHidden = !formatHidden"><i class="fas fa-edit edicon"></i></button>
                </div>
              <form class="showfocus flex"  v-if="!formatHidden" @submit.prevent="modifyFormat(tableau.id)">
                  <input class="inputperso" type="text" required="required" v-model="format"
                  name ="format">
                  <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>

                <div class="flex">
                  <p class="tableau_medium">Medium:
                    <span class="tableau_medium-span">{{tableau.medium}}</span>
                  </p>
                  <button class="bg-warning button1" v-on:click="mediumHidden = !mediumHidden"><i class="fas fa-edit edicon"></i></button>
                </div>
              <form class="showfocus flex"  v-if="!mediumHidden" @submit.prevent="modifyMedium(tableau.id)">
                  <input class="inputperso" type="text" required="required" v-model="medium"
                  name ="medium">
                  <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";


import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';


const rawUrlParams = window.location.href.split('?')[1];
const urlParams = new URLSearchParams('?' + rawUrlParams);
const idme = urlParams.get('id');

export default {
  name: "tableauadmin",
  components: {
    'inner-image-zoom': InnerImageZoom

  },
  data() {
    return {
      data: "",
      image: "",
      titre: "",
      artiste:"",
      prix: "",
      format: "",
      medium: "",
      id: "",
      idme : idme,
      item: "",
      artisteid: "",
      titreHidden: true,
      artisteHidden: true,
      prixHidden: true,
      formatHidden: true,
      mediumHidden: true,
      imageHidden: true,
    };
  },
  mounted (){ 
        
        //Appel à l'Api pour l'affichage du message à modifier 
        console.log(idme)
        axios.get(`http://localhost:3000/api/getonetableau/${idme}`)
        .then(response => {
          console.log(response.data)
          this.item = response.data
        })
        .catch(error => console.log(error))
    },
  methods:{
  modifyTitre: function(titreid){
    let id = titreid;
    console.log(id);
    let titre = this.titre

    axios
          .post(
            "http://localhost:3000/api/modifyTitre",
            {
              id: id,
              titre :titre
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été mis a jour !");
          });
      },
  

  modifyArtiste: function(artisteid){
    let id = artisteid;
    console.log(id);
    let artiste = this.artiste

    axios
          .post(
            "http://localhost:3000/api/modifyArtiste",
            {
              id: id,
              artiste :artiste
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été mis a jour !");
          });
      },

modifyPrix: function(prixid){
    let id = prixid;
    console.log(id);
    let prix = this.prix

    axios
          .post(
            "http://localhost:3000/api/modifyPrix",
            {
              id: id,
              prix :prix
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été mis a jour !");
          });
      },

modifyFormat: function(formatid){
    let id = formatid;
    console.log(id);
    let format = this.format

    axios
          .post(
            "http://localhost:3000/api/modifyFormat",
            {
              id: id,
              format :format
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été mis a jour !");
          });
      },

modifyMedium: function(mediumid){
    let id = mediumid;
    console.log(id);
    let medium = this.medium

    axios
          .post(
            "http://localhost:3000/api/modifyMedium",
            {
              id,
              medium :medium
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été mis a jour !");
          });
      },
modifyImage: function(imageid, imageArtiste, imageTitre){
    let token = this.data.token;
    let id = imageid;
    let image = this.image
    let titre = imageTitre
    let artiste = imageArtiste

    axios
          .post(
            "http://localhost:3000/api/modifyImage",
            {
              id,
              image,
              titre,
              artiste,
              token,
            },
            {
             headers: {
               "Content-type": "application/json",
              Authorization: `Bearer ${token}`
              }
}
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été mis a jour !");
          });
},
onFileChange: function(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (files.length === 0) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        this.image = reader.result
      }
    },
    }

}

</script>

<style lang='scss'>
.showfocus{
  margin-bottom: 15px;
}
.tabl{padding-top:5px}
.tableau{
  &_div{display: flex; justify-content: center; align-items: center; flex-direction: column;}
  &_image{height: 600px;}
  &_hPage{font-size: 50px;}
  &_acheter{border:#2e2e2e 1px solid; padding:10px 20px; border-radius: 5px; background: white;
    &:hover{background: #2e2e2e; color:white; transition: 300ms ease-in;}
  }
}
.button1{border:none; border-radius: 50%; margin-left:10px; height: 30px; width: 30px; }
.column{display: flex; flex-direction: column-reverse;}
.edicon{font-size:15px; color:#2e2e2e;}
</style>
