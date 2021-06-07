<template>
    <nav class="bg-info navbaradmin">
      <Slide class="slide" noOverlay>
        <ul id="navlist2">
            <router-link to="/admin" class="navitems"><a href="#">Admin</a></router-link>
            <router-link to="/homeadmin" class="navitems"><a href="#">Admin - Accueil</a></router-link>
            <router-link to="/lartisteadmin" class="navitems"><a href="#">Admin - L'artiste</a></router-link>
            <router-link to="/adminevent" class="navitems"><a href="#">Admin - Évenement</a></router-link>
            <hr>
                    <router-link to="/" class="navitems"><a href="#">Accueil</a></router-link>
                    <router-link to="/lartiste" class="navitems"><a href="#">L'artiste</a></router-link>
                    <router-link to="/catalogue" class="navitems"><a href="#">Catalogue</a></router-link>
                    <router-link to="/evenement" class="navitems"><a href="#">Évenement</a></router-link>
                    <router-link to="/contact" class="navitems"><a href="#">Contact</a></router-link>
            <hr>
           <router-link to ="/add" class="buttonadmin">Ajouter une oeuvre</router-link>
           <router-link to ="/addevent" class="buttonadmin">Ajouter un evenement</router-link>
           <router-link to="/" class="buttonadmin" @click="deco">Se deconnecter</router-link>
        </ul>
      </Slide>
      <div>

         
      </div>        
    </nav>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'navbar',
   data(){

    return {
    }

},
        components: {
        Slide
    },
created (){// verifie si l'user est connecté, sinon le renvoi a l'acceuil
  let connected = this.$session.get('connected');
  if (connected >= 1 ){
    console.log(connected)
  }else {
    window.location.href = " http://localhost:8080/#/";
    location.reload(true);
  }
},
methods:{
            deco: function(){//Fonction pour deconnecter la session de l'application
              this.$session.remove('connected');
              this.$session.remove('user');
              window.location.href = "http://localhost:8080/#/";
              location.reload(true);
      },
}
}
</script>

<style lang="scss">

#navlist2{
    display: flex;
    flex-direction: column;
    list-style: none;
}

</style>