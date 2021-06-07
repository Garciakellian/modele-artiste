<template>
  <div>
      <div  v-for="item in artiste" :key="item.titre">
        <div class="marg"></div>
      <div class="ban">
        <h1 class="ban_h1">Kim Pov Eap | artiste peintre</h1>
      </div>
        <hr>
        <div class="acitation">
                <h2 class="acitation_h" data-aos="fade-right">{{item.citation_titre}}
                    <button class="bg-warning button1 font-button" v-on:click="citationtitreHidden = !citationtitreHidden"><i class="fas fa-edit edicon"></i></button>
                </h2>
                <form class="showfocus flex" v-if="!citationtitreHidden" @submit.prevent="modifyCitationtitre">
                    <input class="inputperso" type="text" required="required" v-model="citation_titre"
                    name ="title">
                    <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
                </form>


            <p class=acitation_p data-aos="fade-left">"{{item.citation}}"
                <button class="bg-warning button1" v-on:click="citationHidden = !citationHidden"><i class="fas fa-edit edicon"></i></button>
            </p>
            <form class="showfocus form" v-if="!citationHidden" @submit.prevent="modifyCitation">
                <TextareaAutosize :min-height="20" class="inputperso textarea" id="text" required="required" name ="text" v-model="citation"></TextareaAutosize>
                <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
            </form>

        </div>
        <hr>
        <div class="acatalogues container" id="acatalogues" >
            <div class="acatalogues_d">
                <h2 class="acatalogues_d_h">Catalogue</h2>
                <router-link to="/catalogue" class="acatalogues_d_b">voir plus -></router-link>
            </div>
            <div class="acatalogues_d1">
                <button v-for="tableau in items" :key="tableau.id" class="acatalogues_d2 col-lg-4" 
                    @click="gettableau(tableau.id)" data-aos="zoom-in">
                    <h3 class="acatalogues_d2_h">{{tableau.titre}}</h3>
                    <img :src="'http://localhost:3000/tmp/' + tableau.image" class="acatalogues_d2_i ">
                </button>
            </div>
        </div>
        <hr>
        <div class="hevent container" v-for="item in event" :key="item.id">
        <div class="hevent_titre">
          <h2 class="hevent_h2">Évenement</h2>
          <router-link to="/evenement" class="hevent_router">voir plus -></router-link>
        </div>
        <div>
          <button class="hevent_button" @click="getevent(item.id)">
            <div data-aos="zoom-in-right">
              <h3 class="hevent_h3">{{item.nom}}</h3>
              <p v-if="item.description.length > 300" class="hevent_p">{{item.description.substring(0,300)}}...</p>
              <p v-else class="hevent_p">{{item.description}}</p>
            </div>
            <img  :src="'http://localhost:3000/tmp/' + item.image" class="hevent_img">
          </button>
        </div>
      </div>
      <hr>
        <div class="aabout container">
            <div class="aabout_d">
                <h2 class="aabout_d_d_h ascreen_A">{{item.titre}}</h2>
                <div class="aabout_d_d" >
                    <inner-image-zoom :src="'http://localhost:3000/tmp/' + item.image" alt="image" class="aabout_d_i col-11 col-lg-4"></inner-image-zoom>
                        <div>
                            <h2 class="aabout_d_d_h ascreen_B">{{item.titre}}</h2>
                            <p v-if="item.text.length > 300" class="aabout_d_d_p" id="aboutText">{{item.text.substring(0,300)}}...</p>
                            <p v-else class="aabout_d_d_p" id="aboutText">{{item.text.substring(0,300)}}</p>
                            <router-link to="/lartiste" class="aabout_d_d_b ascreen_B">A Propos</router-link>
                        </div>
                </div>
                <router-link to="/lartiste" class="aabout_d_d_b ascreen_A">A Propos</router-link>
            </div>
        </div>
        <hr>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';

  export default {
  components: {
    'inner-image-zoom': InnerImageZoom,
  },
    data() {
      return {
        items:"",
        artiste:"",
        text:"",
        citation:"",
        citation_titre:"",
        event:"",
        nom:"",
        description:"",
        image:"",
        slide: 0,
        sliding: null,
        citationtitreHidden: true,
        citationHidden: true,
      }
    },
    async created() {
    //Appel à l'api pour l'affichage de tous les messages
    axios
      .get("http://localhost:3000/api/getrandomtableau")
      .then(response => {
        this.items = response.data;
      })
      .catch(error => console.log(error));

    axios
      .get("http://localhost:3000/api/getartiste")
      .then(response => {
        this.artiste = response.data;
      })
      .catch(error => console.log(error));

    axios
      .get("http://localhost:3000/api/getlastevent")
      .then(response => {
        this.event = response.data;
      })

  },
    methods: {
gettableau: function(id){

      let gettableau = id;

      window.location.href = `http://localhost:8080/#/tableau?id=${gettableau}`;
      location.reload(true);
    },
      onSlideStart(slide) {
        this.sliding = true
        console.log(slide)
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide)
      },

 modifyCitationtitre: function(){
    let citation_titre = this.citation_titre

    axios
          .post(
            "http://localhost:3000/api/updateCitationtitre",
            {
              citation_titre,
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la citation n'a pas été mis a jour !");
          });
      },
modifyCitation: function(){
    let citation = this.citation

    axios
          .post(
            "http://localhost:3000/api/updateCitation",
            {
              citation,
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la citation n'a pas été mis a jour !");
          });
      },
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
$fontPrimary: 'Rubik', sans-serif;

.img-fluid{height: 500px !important;}

.marg{padding-bottom: 50px;}

//CITATION
.acitation{
  margin: 50px;
  &_h{color:black; font-size: 32px; text-transform: uppercase;}
  &_p{font-style: italic;}
}
.font-button{font-size: 20px;}


// CATALOGUE
.acatalogues{ 
  margin-bottom: 50px;
  &_d{ display: flex; justify-content: space-between; margin-bottom: 30px;
    &_h{color:black; text-transform: uppercase; font-size:30px;}
    &_b{background-color: white; border:none; text-decoration: underline !important; color: black !important;
      &:hover{text-decoration: none !important; transform: scale(1.2); transition: 200ms ease-in}
    ;}
  }
  &_d1{display: flex; justify-content: space-around; flex-direction: column;}
  &_d2{
    background-color: white;
    border: none;
    &_h{text-transform: uppercase; font-size: 15px;
      &:hover{text-decoration: underline;}}
    &_i{height: 200px; margin-bottom: 50px;
      &:hover{transform:scale(1.1); transition: 200ms ease-in;}
    }
  }
}

.acatalogues_animation{animation: catalogues 1s both}

@keyframes catalogues{
  from{opacity: 0;}
  to{opacity: 1;}
}
//ABOUT
.aabout{
  &_d{ display: flex; flex-direction: column;
    &_d{
      &_h{ margin: 50px auto; color: black; text-transform: uppercase;}
      &_p{display: flex; margin: 40px 20px;}
      &_b{border: black 1px solid; background:white; border-radius: 15px; padding:10px 20px; margin-top:20px; color:black !important;
      &:hover{ background:black; color:white; transition: 200ms ease-in;}}
    }
  }
}

.ascreen{
  &_B{display: none;}
  &_A{margin: 0 auto;}
}

@media (min-width: 768px) {.acatalogues_d1{flex-direction: row;}}
 @media (min-width: 992px){


  .aabout_d{ &_d{display: flex;} &_i{height: 400px;}  } 
 .ascreen{ &_B{display: block; margin: 0 auto !important;} &_A{display: none;  }}

 .acatalogues_d2_i{height: 250px;}
 }
</style>