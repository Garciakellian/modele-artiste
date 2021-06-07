<template>
    <main class="container">
        <h1 class="aevent_titre">Évenement</h1>
        <div class="aevent ">
            <div id="aevent_event" class="aevent_event" v-for="event in items" :key="event.id">
                  <button @click="getevent(event.id)" class="button_event">
                  <h2 class="aevent_event-titre">{{ event.nom }}</h2>
                  <div class="event_block flex">
                    <img :src="'http://localhost:3000/tmp/' + event.image" alt="image" class="aevent_event-image">
                    <div class="event_blockdroite col-md-6">
                        <p v-if="event.description.length > 300" class="avent_p">{{event.description.substring(0,300)}}...</p>
                        <p v-else class="avent_p">{{event.description}}</p>
                    </div>
                  </div>
               </button>
               <hr>
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
      data: "",
      nom: "",
      image: "",
      idevent: "",
      items: "",
      description:"",
    };
  },
  created() {
    //Appel à l'api pour l'affichage de tous les messages
    axios
      .get("http://localhost:3000/api/getevent")
      .then(response => {
        this.items = response.data;
      })

      .catch(error => console.log(error));
  },
  methods: {

    getevent: function(id){

      let getevent = id;

      window.location.href = `http://localhost:8080/#/event?id=${getevent}`;
      location.reload(true);
    },
  }}
</script>

<style lang="scss">
.aevent{display: flex; flex-direction: column; 
&_titre{margin-bottom: 50px;}
&_event-image{height: 200px; width:auto; margin: 15px 0;}
&_p{margin: 20px;}
}

.event{
    &_block{padding-bottom: 50px; display: flex; justify-content: space-between; align-items: center
     ;flex-direction: column; font-size: 22px;}
    &_blockdroite{display: flex; flex-direction: column;justify-content: space-around;}
}

.button_event{background: white; border: none;}

@media (min-width: 768px) { 
  .event{
    &_block{flex-direction: row; justify-content: space-between;}
  }
 }
</style>
