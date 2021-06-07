<template>
    <main class="container">
        <h1>Contact</h1>
        <div class="contact">
            <p id="valid">Votre mail a bien été envoyée</p>
            <form class="contact_form" @submit.prevent="sendMail" id=form>
                <label for="nom" class="contact_form_label">Nom:</label>
                <input type="text" v-model="nom" name="nom" id="nom" class="contact_form_input" placeholder="Nom">

                <label for="email" class="contact_form_label">Email:</label>
                <input type="email" v-model="email" name="email" id="email" class="contact_form_input" placeholder="Email">

                <label for="sujet" class="contact_form_label">Sujet:</label>
                <input type="text" v-model="sujet" name="sujet" id="sujet" class="contact_form_input" placeholder="Sujet">

                <label for="message" class="contact_form_label">Message:</label>
                <TextareaAutosize :min-height="10" name="message" v-model="message" id="message" class="contact_form_input" placeholder="Message"
                rows="7"></TextareaAutosize>
                <button class="contact_form_validate" type="submit">Envoyer</button>
            </form>
        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
  name: "add",
  data() {
    return {
        nom: "",
        email: "",
        sujet: "",
        message: "",
    };
  },
methods: {
    sendMail: function(){

    let email = this.email;
    let nom = this.nom;
    let sujet = this.sujet;
    let message = this.message


    axios.post("http://localhost:3000/api/contact",{
        email,
        nom,
        sujet,
        message
    })
    .then(() => {
            document.getElementById('form').style.display = 'none';
            document.getElementById('valid').style.display = 'block';
          })
          .catch(() => {
            console.log("le message n'a pas été envoyé");
          });
      
    }
}
}
</script>

<style lang='scss'>
textarea {
  resize: none;
}
.contact{
    &_form{display: flex; flex-direction: column;
        &_input{margin-bottom: 10px; width: 90%; height: 50px;}
        &_validate{width: 100px; border: none; color:white; background:black; padding: 15px 20px;}
        &_label{margin-top: 20px; text-align: left;}
    }
}

#valid{display: none;}
</style>