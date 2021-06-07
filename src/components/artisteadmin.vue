<template>
<main >
    <div  v-for="item in artiste" :key="item.titre">

      <!--titre-->
      <div class="flexC">
        <div class="titre">
          <h1 class="artiste-titre">{{item.titre}}</h1>
          <button class="bg-warning button1" v-on:click="titreHidden = !titreHidden"><i class="fas fa-edit edicon"></i></button>
        </div>
        <div class="flexH">
          <form class="showfocus flex" v-if="!titreHidden" @submit.prevent="modifyTitre">
            <input class="inputperso" type="text" required="required" v-model="titre"
            name ="title">
           <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
          </form>
        </div>
      </div>

      <div class="artiste container">

        <!--image-->
        <div class="flexC col-lg-6">
          <form class="showfocus flexC" v-if="!imageHidden" @submit.prevent="modifyImage">
            <input class="inputperso" type="file" accept="image/png, image/jpeg"
            id="image" required="required" name ="title" @change="onFileChange">
            <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
          </form>
          <div class="flex">
            <button class="bg-warning button1" v-on:click="imageHidden = !imageHidden"><i class="fas fa-edit edicon"></i></button>
            <inner-image-zoom :src="'http://localhost:3000/tmp/' + item.image" alt="image" class="profile_img"></inner-image-zoom>
          </div>
        </div>


        <div class="artiste_description col-lg-6">

          <!--SousTitre-->
          <div class="flexC">
            <div class="flex">
              <h2 class="artiste_description-h">{{item.subtitle}}</h2>
              <button class="bg-warning button1" v-on:click="subtitleHidden = !subtitleHidden"><i class="fas fa-edit edicon"></i></button>
            </div>
            <div class="flex">
              <form class="showfocus flex" v-if="!subtitleHidden" @submit.prevent="modifySubtitle">
                <input class="inputperso" type="text" id="image" required="required" name ="subtitle" v-model="subtitle">
                <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>
            </div>
          </div>

          <!--text-->
          <div class="flexC text-div">
            <div>
              <form class="showfocus form" v-if="!modifyHidden" @submit.prevent="modifyText">
                <TextareaAutosize :min-height="20" class="inputperso textarea" id="text" required="required" name ="text" v-model="text"></TextareaAutosize>
                <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle text-primary"></i></button>
              </form>
            </div>
              <button class="bg-warning button1" v-on:click="modifyHidden = !modifyHidden"><i class="fas fa-edit edicon"></i></button>
              <p class="artiste_description-p">{{item.text}}</p>

          </div>


        </div>
    </div>
</div>
</main>
</template>

<script>
import axios from "axios";
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';

export default {
  name: "Artisteadmin",
  components: {
    'inner-image-zoom': InnerImageZoom,
  },
   data() {
        return {
            item:"",
            artiste:"",
            image:"",
            titre:"",
            subtitle:"",
            text:"",
            imageHidden: true,
            titreHidden: true,
            subtitleHidden: true,
            modifyHidden: true,
        }
   },
   async created() {
    axios
      .get("http://localhost:3000/api/getartiste")
      .then(response => {
        this.artiste = response.data;
      })
      .catch(error => console.log(error));
  },
    methods:{
   modifyTitre: function(){
    let titre = this.titre

    axios
          .post(
            "http://localhost:3000/api/updateTitre",
            {
              titre :titre
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
          });
      },
  modifyImage: function(){
    //let token = this.data.token;
    let image = this.image

    axios
          .post(
            "http://localhost:3000/api/updateImage",
            {
              image,
             // token,
            },
          //  {
           //  headers: {
          //     "Content-type": "application/json",
            //  Authorization: `Bearer ${token}`
            //   }
//}
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
          });
},
 modifySubitle: function(){
    let subtitle = this.subtitle

    axios
          .post(
            "http://localhost:3000/api/updateSubtitle",
            {
              subtitle,
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
          });
      },
modifyText: function(){
    let text = this.text

    axios
          .post(
            "http://localhost:3000/api/updateText",
            {
              text,
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
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

<style lang="scss">


$firstColor: #2e2e2e;
$secondColor: #4e5e82;

main{color:$firstColor; margin-top:25px;}
h1{text-transform: uppercase; margin: 25px auto; color:$firstColor}
.artiste{
   &-titre{padding-top: 50px;}
    &_description{
        margin-top: 25px;
        &-h{ border-bottom: $secondColor 1px solid;}
        &-p{text-align: center;}
    }
}
 .profile_img{width: 200px !important; margin:20px !important; display: flex ; justify-content: center;}
@media (min-width: 992px) {
    h1{font-size: 3.5em;}
    .artiste{ display: flex;
    
    &_description{
        &-h{text-align: right;}
        &-p{font-size: 1.2em; margin-top: 0px;}
    }
}
.profile_img{
  width: 100px;
       /* margin-right: 30px;
        margin-top: auto;
        margin-bottom: auto;*/
        }
}
.titre{display: flex; margin: 0 auto}
.flex{display:flex}
.flexC{display:flex; flex-direction: column; align-items: center;}
.flexH{display: flex; justify-content: center;}
.textarea{width:300px; 
}
.text-div{margin-top:50px}
</style>
