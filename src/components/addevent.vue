<template>
    <div>
        <form class="addform"  @submit.prevent="postEvent">
            <div class="formgroup">
                <label for="nom">Nom de l'evenement:</label>
                <input class="inputperso" type="text" id="nom" required="required" v-model="nom">
            </div>
            <div class="formgroup">
                <label for="artiste">Description de l'evenement:</label>
                <TextareaAutosize :min-height="10" class="inputperso" type ="text" id="artiste" required="required" v-model="description"></TextareaAutosize>
            </div>
            <div class="formgroup">
                <label for="date">Debut de l'evenement:</label>
                <input class="inputperso" type="date" id="date" required="required" v-model="date">
            </div>
            <div class="formgroup">
                <label for="date_fin">Fin de l'evenement:</label>
                <input class="inputperso" type="date" id="date_fin" required="required" v-model="date_fin">
            </div>
            <div class="formgroup">
                <label for="image">image</label>
                <input type="file" @change="onFileChange" accept="image/png, image/jpeg" id="image" required="required">
            </div>
            <button type="submit" class="addbutton">Confirmer</button>


        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "add",
  data() {
    return {
      data: JSON.parse(this.$session.get("user")),
      image: "",
      date:"",
      date_fin:"",
      description:"",
      nom:"",
    };
  },
methods: {
postEvent: function() {
    let token = this.data.token;
    let nom = this.nom;
    let date = this.date;
    let date_fin = this.date_fin;
    let description = this.description;
    let image = this.image;

        axios
          .post(
            "http://localhost:3000/api/postevent",
            {
                nom,
                date,
                date_fin,
                description,
                image,
                token,
            },
            {
             headers: {
               "Content-type": "application/json",
              Authorization: `Bearer ${token}`
              }
}
          )
          .then(() => {
            this.message === "";
            alert("votre évenement a bien été ajouté !");
            window.location.href = "http://localhost:8080/#/adminevent";
            location.reload(true);
          })
          .catch(() => {
            console.log("l'evenement n'a pas été ajouté");
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

</style>