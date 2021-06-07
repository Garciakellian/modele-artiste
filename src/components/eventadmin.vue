<template>
<main >
    <div  v-for="item in event" :key="item.id">

      <!--nom-->
    <div class="flexC">
        <div>
            <div class="nom flex">
                <h1 class="event-nom">{{item.nom}}</h1>
                <button class="bg-warning button1" v-on:click="nomHidden = !nomHidden"><i class="fas fa-edit edicon"></i></button>
            </div>
            <div class="flexH">
            <form class="showfocus flex" v-if="!nomHidden" @submit.prevent="modifyNom(item.id)">
                <input class="inputperso" type="text" required="required" v-model="nom"
                name ="title">
            <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle description-primary"></i></button>
            </form>
            </div>
        </div>
        <div class="event_date">
            <div class="event_du flex">
                <p>Du: {{item.date}} </p>
                <button class="bg-warning button1" v-on:click="duHidden = !duHidden"><i class="fas fa-edit edicon"></i></button>
            </div>
            <div class="flexH">
                <form class="showfocus flex" v-if="!duHidden" @submit.prevent="modifyDate(item.id)">
                    <input class="inputperso" type="date" required="required" v-model="date"
                    name ="date">
                    <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle description-primary"></i></button>
                </form>
            </div>
            <div class="event_au flex">
                <p>Au: {{item.date_fin}}</p>
                <button class="bg-warning button1" v-on:click="auHidden = !auHidden"><i class="fas fa-edit edicon"></i></button>
            </div>
            <div class="flexH">
                <form class="showfocus flex" v-if="!auHidden" @submit.prevent="modifyDate_fin(item.id)">
                    <input class="inputperso" type="date" required="required" v-model="date_fin"
                    name ="date_fin">
                    <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle description-primary"></i></button>
                </form>
            </div>
        </div>
    </div>


      <div class="event container">

        <!--image-->
        <div class="flexC event_div-img col-4">
          <form class="showfocus flexC" v-if="!imageHidden" @submit.prevent="modifyImage(item.id)">
            <input class="inputperso" type="file" accept="image/png, image/jpeg"
            id="image" required="required" name ="title" @change="onFileChange">
            <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle description-primary"></i></button>
          </form>
          <div class="flex">
            <button class="bg-warning button1" v-on:click="imageHidden = !imageHidden"><i class="fas fa-edit edicon"></i></button>
            <img :src="'http://localhost:3000/tmp/' + item.image" alt="image" class="adminevent_img">
          </div>
        </div>


          <!--description-->
          <div class=" description-div col-md-6">
            <div>
              <form class="showfocus form" v-if="!modifyHidden" @submit.prevent="modifyDescription(item.id)">
                <TextareaAutosize :min-height="20" class="inputperso descriptionarea" id="description" required="required" name ="description" v-model="description"></TextareaAutosize>
                <button class="button1 bg-white" type="submit"><i class="fas fa-check-circle description-primary"></i></button>
              </form>
            </div>
              <button class="bg-warning button1" v-on:click="modifyHidden = !modifyHidden"><i class="fas fa-edit edicon"></i></button>
              <p class="event_description-p">{{item.description}}</p>

          </div>


        </div>
    </div>
</main>
</template>

<script>
import axios from "axios";

const rawUrlParams = window.location.href.split('?')[1];
const urlParams = new URLSearchParams('?' + rawUrlParams);
const idme = urlParams.get('id');

export default {
  name: "eventadmin",
  components: {
  },
   data() {
        return {
            idme:"",
            item:"",
            event:"",
            image:"",
            nom:"",
            date:"",
            date_fin:"",
            descri:"",
            description:"",
            imageHidden: true,
            nomHidden: true,
            descriHidden: true,
            modifyHidden: true,
            duHidden: true,
            auHidden: true,
        }
   },
   async created() {
    axios
      .get(`http://localhost:3000/api/getonetevent/${idme}`)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => console.log(error));
  },
    methods:{
   modifyNom: function(id){
    let nom = this.nom

    axios
          .post(
            "http://localhost:3000/api/updatenom",
            {
              nom,
              id
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
          });
      },
  modifyImage: function(id){
    //let token = this.data.token;
    let image = this.image

    axios
          .post(
            "http://localhost:3000/api/updateeventimage",
            {
              image,
              id,
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
modifyDescription: function(id){
    let description = this.description

    axios
          .post(
            "http://localhost:3000/api/updatedescription",
            {
              description,
              id
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
          });
      },

modifyDate: function(id){
    let date = this.date

    axios
          .post(
            "http://localhost:3000/api/updatedate",
            {
              date,
              id
            },
          )
          .then(() => {
            location.reload(true);
          })
          .catch(() => {
            console.log("la bio n'a pas été mis a jour !");
          });
      },

modifyDate_fin: function(id){
    let date_fin = this.date_fin

    axios
          .post(
            "http://localhost:3000/api/updatedate_fin",
            {
              date_fin,
              id
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
.event{display: flex;
    &-nom{padding-top:50px}
    &_date{display: flex; }
    &_du{margin-right: 10px;}
    &_au{margin-left: 10px;}
    }
.event{display: flex; flex-direction: column;
&_description-p{font-size: 22px;}
}

.adminevent_img{display: flex;}
.event_div-img{margin: 50px auto; }

@media (min-width: 768px) {
  .event{flex-direction: row;justify-content: space-between;}
}
</style>
