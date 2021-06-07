<template>
  <div class="home">
    <div v-for="item in artiste" :key="item.titre">
      <div class="ban">
        <h1 class="ban_h1">Kim Pov Eap | artiste peintre</h1>
      </div>
      <hr>
      <div class="citation">
        <h2 class="citation_h" data-aos="fade-right">{{item.citation_titre}}</h2>
        <p class=citation_p data-aos="fade-left">"{{item.citation}}"</p>
      </div>
      <hr>
      <div class="catalogues container" id="catalogues" >
        <div class="catalogues_d">
          <h2 class="catalogues_d_h">Catalogue</h2>
          <router-link to="/catalogue" class="catalogues_d_b">voir plus -></router-link>
        </div>
        <div class="catalogues_d1">
          <button v-for="tableau in items" :key="tableau.id" class="catalogues_d2 col-lg-4" 
          @click="gettableau(tableau.id)" data-aos="zoom-in">
            <h3 class="catalogues_d2_h">{{tableau.titre}}</h3>
            <img :src="'http://localhost:3000/tmp/' + tableau.image"  alt="tableau" class="catalogues_d2_i ">
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
            <img  :src="'http://localhost:3000/tmp/' + item.image" alt="evenement" class="hevent_img">
          </button>
        </div>
      </div>
      <hr>
      <div class="about container">
        <div class="about_d">
          <h2 class="about_d_d_h screen_A">{{item.titre}}</h2>
          <div class="about_d_d" >
            <img :src="'http://localhost:3000/tmp/' + item.image"  alt="Kim Pov Eap" class="about_d_i col-11 col-lg-4" data-aos="">
            <div>
              <h2 class="about_d_d_h screen_B">{{item.titre}}</h2>
              <p v-if="item.text.length > 300" class="about_d_d_p ">{{item.text.substring(0,300)}}...</p>
              <p v-else class="about_d_d_p ">{{item.text}}</p>
              <router-link to="/lartiste" class="about_d_d_b screen_B">A Propos</router-link>
            </div>
          </div>
          <router-link to="/lartiste" class="about_d_d_b screen_A">A Propos</router-link>
        </div>
      </div>
      <hr>
    </div>

  </div>
</template>

<script>
import axios from "axios";


  export default {
    data() {
      return {
        items:"",
        slide: 0,
        artiste:"",
        tableau:"",
        nom:"",
        description:"",
        event:"",
        sliding: null,
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

      .catch(error => console.log(error));
  },
  

    methods: {


       gettableau: function(id){

      let gettableau = id;

      window.location.href = `http://localhost:8080/#/tableau?id=${gettableau}`;
      location.reload(true);
    },
        getevent: function(id){

      let getevent = id;

      window.location.href = `http://localhost:8080/#/event?id=${getevent}`;
      location.reload(true);
    },
      onSlideStart(slide) {
        this.sliding = true
        console.log(slide)
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide)
      }
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
$fontPrimary: 'Rubik', sans-serif;


*{font-family: $fontPrimary;}

.img-fluid{height: 500px !important;}



//baniere
.ban{
  background: url(../assets/catalogue_2.jpg);
  background-size: cover;
  background-position: center;
  padding: 300px 0;
  &_h1{color: whitesmoke; -webkit-text-stroke: 0.2px black; font-size: 20px; }
}
//CITATION
.citation{
  margin: 50px;
  &_h{color:black; text-transform: uppercase;}
  &_p{font-style: italic;}
}


// CATALOGUE
.catalogues{
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

.catalogues_animation{animation: catalogues 1s both}

@keyframes catalogues{
  from{opacity: 0;}
  to{opacity: 1;}
}

//EVENT
.hevent{
  margin-bottom: 50px;
  &_titre{display: flex; justify-content: space-between; margin-bottom: 50px;}
  &_h2{text-transform: uppercase;}
  &_router{color:black !important; text-decoration: underline !important;
  &:hover{text-decoration: none !important; transform: scale(1.2); transition: 200ms ease-in;}}
  &_button{border: none; background: white;}
  &_h3{text-transform: uppercase;}
  &_p{padding-top: 50px;}
  &_img{height: 150px;}
}





//ABOUT
.about{
  &_d{ display: flex; flex-direction: column;
    &_d{
      &_h{ margin: 50px auto; color: black; text-transform: uppercase;}
      &_p{display: flex; margin: 40px 20px;}
      &_b{border: black 1px solid; background:white;
       border-radius: 15px; padding:10px 20px; margin-top:20px; color:black !important;
       width: 150px;
      &:hover{ background:black; color:white !important; transition: 200ms ease-in;}}
    }
    &_i{ height: 300px; width: auto !important;}
  }
}

.screen{
  &_B{display: none;}
  &_A{margin: 0 auto;}
}

@media (min-width: 768px) {.catalogues_d1{flex-direction: row;} .hevent_button{display: flex;}}
 @media (min-width: 992px){

   .ban_h1{font-size: 30px;}

  .about_d{ &_d{display: flex;} &_i{height: 400px;}  } 
 .screen{ &_B{display: block; margin: 0 auto;} &_A{display: none;}}

 .catalogues_d2_i{height: 250px;}
 }
</style>