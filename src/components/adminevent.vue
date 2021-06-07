<template>
    <main class="container">
        <h1 class="aevent_titre">Evenement</h1>
        <div class="aevent ">
            <div id="aevent_event" class="aevent_event" v-for="event in items" :key="event.id">
                  <button class="button_event">
                  <h2 @click="getevent(event.id)" class="aevent_event-titre">{{ event.nom }}</h2>
                  <div class="event_block flex">
                    <img :src="'http://localhost:3000/tmp/' + event.image" alt="image" class="aevent_event-image">
                    <div class="event_blockdroite col-md-6">
                        <p v-if="event.description.length > 300">{{event.description.substring(0,300)}}...</p>
                        <p v-else>{{event.description}}</p>
                        <button class="button- bg-danger event_delete" @click="deleevent(event.id, event.image)">Supprimer</button> 
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
      data: JSON.parse(this.$session.get("user")),
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

    deleevent: function(id, image) {
      let token = this.data.token;

      if (
       confirm("êtes vous sûr de vouloir supprimé cette event?") &&
      confirm("cela effacera définitivement l'event")
      ){
        axios
          .post(
            "http://localhost:3000/api/deleteevent",
            {
              id,
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
            alert("votre event a bien été supprimé");
            location.reload(true);
          })
          .catch(() => {
            console.log("l'event n'a pas été supprimé !");
          });
      }
    },
    getevent: function(id){

      let getevent = id;

      window.location.href = `http://localhost:8080/#/eventadmin?id=${getevent}`;
      location.reload(true);
    },
  }}
</script>

<style lang="scss">
.aevent{display: flex; flex-direction: column;}

.event{
    &_block{padding-bottom: 50px; display: flex; justify-content: space-between;}
    &_delete{width: 200px; margin: 10px auto;}
    &_blockdroite{display: flex; flex-direction: column;justify-content: space-around;}
}

.button_event{background: white; border: none;}
</style>
