<template>
    <main id="connect">
         <form method="POST" id="formulaire" @submit.prevent="envoi">
          <label for="email" class="email">Email:</label><br>
          <input type="text" id="email" v-model="email"
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"><br>
          <label class='label-2' for="password">Mot de passe:</label><br>
          <input type="password" id="password" v-model="password"
          pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"><br>
          <button type="submit" class="buton-connexion">Connexion</button>
        </form>
    </main>
</template>

<script>
import axios from "axios";

export default {
  name: 'connexion',
  data() {
    return{
      email: "",
      password: ""
    };
  },
    methods: {
    envoi: function() {
      //envoie des informations de connexion à l'API pour authentification
      let token = "";
      if (this.email == "" || this.password == "") {
        alert(
          "Veuillez entrer votre email et votre mot de passe pour vous connecter"
        );
      } else {
        axios
          .post(
            "http://localhost:3000/api/login",
            {
              email: this.email,
              password: this.password
            },
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer${token}` //Renvoi du token par l'api en cas d'authentification
              }
            }
          )
          .then((response) => {
           // Si authentification réussie autorisation d'accès pour l'administrateur de l'applcation
            let reponse = response.data;
            let connected = 0;
            this.$session.set('user', JSON.stringify(reponse));
            let user = JSON.parse(this.$session.get("user"));
            token = user.token;
            connected++
            this.$session.set('connected', JSON.stringify(connected))
            console.log(connected);
              window.location.href = "http://localhost:8080/#/admin";
              location.reload(true);
            })
          .catch(() => {
            console.log("la connexion a échouée"); //En cas d'echec envoie de l'information à l'utilisateur

          });
      }
    }
  }
}
</script>

<style lang="scss">
#formulaire{
    margin-top: 100px;
    background: white;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    color:black;
}
#connect{
    position:absolute;
    background-image:url(../assets/catalogue_4.jpg);
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat ;
    width: 100%;
    min-height: 100%;
    margin:0px
}
.email{margin-top:20px}
.buton-connexion{
    margin-top:20px;
    margin-bottom: 20px;
    background: black;
    color:white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
}
</style>