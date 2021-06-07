<template>
    <footer id="footer">
        <ul class="socialNetwork">
            <li class="socialIcon"><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook facebook"></i></a></li>
            <li class="socialIcon"><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram instagram"></i></a></li>
            <li class="socialIcon"><a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in linkedin"></i></a></li>
            <li class="socialIcon"><a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter twitter"></i></a></li>
        </ul>
        <p class="copyright">Copyright © 2021 Kim Pov Eap - Tous droits réservés.</p>
    </footer>
</template>

<script>
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap');
$firstColor: #4F6457;

i{font-size: 2em;}

#footer{
    background-color: #F9F9F9; padding-top: 50px; 
    }

.socialNetwork{
    display: flex;
    margin: 50px auto;
    list-style: none;
    width: 50%;
}
.socialIcon{
    width: 50%;
    &:hover{
        transform: scale(1.5);
        transition: 300ms ease-out;
    }
}
.facebook{color: #0777E9}
.instagram{color:#E1306C}
.linkedin{color:#0A66C2}
.twitter{color:#1DA1F2}

.copyright{
    padding-bottom: 50px;
    color:$firstColor;
    font-family: 'Kiwi Maru', serif;
}

</style>