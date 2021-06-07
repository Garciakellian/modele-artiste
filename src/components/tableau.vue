<template>
<div>
   <div v-for="tableau in item" :key="tableau.id" class="tableau container">
        <div class="row">
            <h1 class="tableau_hPage if_A col-12">{{tableau.titre}}</h1>
            <inner-image-zoom :src="'http://localhost:3000/tmp/' + tableau.image" alt="image" class="tableau_image col-md-6" ></inner-image-zoom>
           <div class="tableau_div col-md-6">
              <h1 class="tableau_hPage if_B">{{tableau.titre}}</h1>
                <p class="tableau_artiste">Artiste: <span class="tableau_artiste-span">{{tableau.artiste}}</span></p>
                <p class="tableau_prix">Prix: <span  class="tableau_prix-span">{{tableau.prix}} </span>$</p>
                <p class="tableau_format">Format: <span class="tableau_format-span">{{tableau.format}}</span></p>
                <p class="tableau_medium">Medium: <span class="tableau_medium-span">{{tableau.medium}}</span></p>
             <form  @click="order(tableau.id)" action="http://localhost:3000/api/order" method="POST" v-if="tableau.vendu == 'A Vendre'">
                  <input type="hidden" :value="tableau.id" name="id">
                  <input type="hidden" :value="tableau.titre" name="titre">
                  <input type="hidden" :value="tableau.prix" name="prix">
                  <input type="submit" v-model="Acheter" class="tableau_acheter">
                </form>
                <p v-else class="vendu">Vendu !</p>
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
  name: "tableau",
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
      Acheter: "",
    };
  },
  mounted (){
        axios.get(`http://localhost:3000/api/getonetableau/${idme}`)
        .then(response => {
          console.log(response.data)
          this.item = response.data
          
          console.log(response);
        })
        .catch(error => console.log(error))
    },
  methods: {
     payment: function(paymentid){
    let id = paymentid
    console.log(id)
    axios.post(`http://localhost:3000/paiment`)
        .then(response => {
          console.log(response.data)
          this.item = response.data
        })
        .catch(error => console.log(error))
  },
  }
}
</script>

<style lang='scss'>

.if_B{display: none;}

.tableau{
  margin:50px 0;
  &_div{display: flex; justify-content: center; align-items: center; flex-direction: column;}
  &_image{ margin: 10px auto 50px auto !important; height: auto!important; width: 300px!important;}
  &_hPage{font-size: 50px;}
  &_acheter{border:#2e2e2e 1px solid; padding:10px 20px; border-radius: 5px; background: white;
    &:hover{background: #2e2e2e; color:white; transition: 300ms ease-in;}
  }
}
.vendu{
  color:red; font-size:20px;
}


@media (min-width: 768px) {
  .if_A{display: none;}
  .if_B{display: block;}
  .tableau_image{ height: auto !important;}
}
@media (min-width: 992px) {
  .tableau{margin:80px 0}
  .tableau_image{ height: auto !important;}
}
</style>
