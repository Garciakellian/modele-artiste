<template>
    <div>
        <div id="phone-menu">
            <Slide noOverlay>
                <ul id="navlist2">
                    <router-link to="/" class="navitems"><a href="#">Accueil</a></router-link>
                    <router-link to="/lartiste" class="navitems"><a href="#">L'artiste</a></router-link>
                    <router-link to="/catalogue" class="navitems"><a href="#">Catalogue</a></router-link>
                    <router-link to="/evenement" class="navitems"><a href="#">Évenement</a></router-link>
                    <router-link to="/contact" class="navitems"><a href="#">Contact</a></router-link>
                </ul>
            </Slide>
            <router-link to="/" class="logo-router"><img src="../assets/logo.png" alt="logo" class="logo-slide"/></router-link>
            
        </div>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    components: {
        Slide
    }
}
</script>

<style lang="scss">
$firstColor: #2e2e2e;




a{
    text-decoration: none !important;
    color:white !important;
}
#phone-menu{
    display: flex; flex-direction: row;
}
.logo{
   display: none;
}
.logo-slide{height: 50px; margin: 5px auto;}
.logo-router{margin: 0 auto;}
.bm-burger-bars{background-color: $firstColor;}
.bm-burger-button{width: 25px; height: 20px; position: absolute; top :20px; left :20px ; margin-bottom: 80px;}
.bm-cross {
    background: white;
    }
#navlist{
    display: flex;
    flex-direction: row  !important;
    list-style: none;
    font-size: 15px;
}
#navlist2{
    display: flex;
    flex-direction: column;
    list-style: none;
}
.navitems{
    &:hover{
        text-decoration: underline !important; 
    }
}

@media (min-width: 992px) {
#navlist{
    width: 30%;
    margin: 20px 20px 0px auto;
    flex-direction:row;
    justify-content: space-around
}
.logo{height: 40px; display: block; margin: 10px}

}
</style>