<template>
<main>
    <div v-for="item in artiste" :key="item.titre">
        <h1 class="artisteadmin">{{item.titre}}</h1>
        <div class="artiste container">
            <inner-image-zoom :src="'http://localhost:3000/tmp/' + item.image" alt="image" class="artiste_img"></inner-image-zoom>
            <div class="artiste_description col-8">
                <h2 class="artiste_description-h">{{item.subtitle}}</h2>
                <p class="artiste_description-p">{{item.text}}</p>
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
            artiste:"",
            image:"",
            titre:"",
            subtitle:"",
            text:"",
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
}
</script>

<style lang="scss">


$firstColor: #2e2e2e;
$secondColor: #4e5e82;

.artisteadmin{margin-top: 80px;}
main{color:$firstColor; margin-top:25px;}
h1{text-transform: uppercase; margin: 25px auto; color:$firstColor}
.artiste{
    &_img{width: 150px; height: 200px; margin: 25px auto;}
    &_description{
        margin: 25px auto;
        &-h{ border-bottom: $secondColor 1px solid;}
        &-p{text-align: center;}
    }
}
@media (min-width: 992px) {
    h1{font-size: 3.5em;}
    .artiste{ display: flex;
    &_img{
        width: 375px;
        height: 500px;
        float: none;
        margin-right: 30px;
        margin-top: auto;
        margin-bottom: auto;
        ;}
    &_description{
        &-h{text-align: right;}
        &-p{font-size: 1.2em; margin-top: 0px;}
    }
}
}


</style>
