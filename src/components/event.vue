<template>
<main >
    <div class="container oevent" v-for="item in event" :key="item.id">

        <div class="flexC">
            <div class="onom flex">
                <h1 class="oevent-nom">{{item.nom}}</h1>
            </div>
            <div class="oevent_date flex">
                <div class="oevent_du flex">
                    <p>Du: {{item.date}} </p>
                </div>
                <div class="oevent_au flex">
                    <p>Au: {{item.date_fin}}</p>
                </div>
            </div>
        </div>
        <div class="oevent_div">
            <img :src="'http://localhost:3000/tmp/' + item.image" alt="image" class="oevent_img">
            <p class="oevent_description  col-md-7">{{item.description}}</p>
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
            description:"",
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
}
</script>

<style lang="scss">

.oevent{
    &_du{margin-right: 10px;}
    &_au{margin-left: 10px;}
    &_description{margin-top: 20px; font-size: 17px;}
    &_img{height: 180px;}
    &_div{margin-top: 100px;}
}

@media (min-width: 768px) {
 .oevent{
     margin-bottom: 50px;
    &_div{display: flex; justify-content: space-between; margin-bottom: 150px;}
    &_description{font-size: 22px;}
 }
}
</style>
