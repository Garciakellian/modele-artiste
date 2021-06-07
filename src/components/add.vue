<template>
    <div class="container">
        <form class="addform"  @submit.prevent="postTableau">
            <div class="formgroup">
                <label for="title">Titre:</label>
                <input class="inputperso" type="text" id="title" required="required" v-model="titre">
            </div>
            <div class="formgroup">
                <label for="artiste">Artiste:</label>
                <input class="inputperso" type ="text" id="artiste" required="required" v-model="artiste">
            </div>
            <div class="formgroup">
                <label for="price">Prix:</label>
                <input class="inputperso" type="number" id="price" required="required" step="any" max="100000.00" v-model="prix">
            </div>
            <div class="formgroup">
                <label for="format">Format:</label>
                <input class="inputperso" type="text" id="format" required="required" v-model="format">
            </div>
            <div class="formgroup">
                <label for="medium">Medium:</label>
                <input class="inputperso" id="medium" type="text" required="required" v-model="medium">
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
      titre: "",
      artiste:"",
      prix: "",
      format: "",
      medium: "",
    };
  },
methods: {
postTableau: function() {
    let token = this.data.token;
    let titre = this.titre;
    let artiste = this.artiste;
    let prix = this.prix;
    let format = this.format;
    let medium = this.medium;
    let image = this.image;

        axios
          .post(
            "http://localhost:3000/api/posttableau",
            {
                titre,
                artiste,
                prix,
                format,
                medium,
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
            alert("votre tableau a bien été ajouté !");
            window.location.href = "http://localhost:8080/#/admin";
            location.reload(true);
          })
          .catch(() => {
            console.log("le tableau n'a pas été ajouté");
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
.addform{
    display: flex;
    flex-direction: column;
    margin: 30px
}
.addbutton{
    background:#17A2B8;
    border-radius: 30px;
    color:white;
    border:none;
    padding-left: 20px;
    padding-right:20px;
    font-size:30px;
    margin: 10px auto;
}
label{margin-top: 10px;}
.inputperso{border-radius: 20px; border: 1px solid black}
.formgroup{
    display:flex;
    justify-content: space-between;
    margin: 10px 0;
}

@media (min-width: 992px) {
  .formgroup{justify-content: space-around;}
 }

</style>