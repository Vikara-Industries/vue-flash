<template>
  <CardHolder  :deck="deck"></CardHolder>
</template>

<script>



import CardHolder from '@/components/CardHolder.vue'


export default {
  data(){
        return{
          deck:[
            {prompt:"ahám", answer:"I", right:0, wrong:0},
            {prompt:"tvám", answer:"you (singular)", right:0, wrong:0},
            {prompt:"sá", answer:"he", right:0, wrong:0},
            {prompt:"vayám", answer:"we", right:0, wrong:0},
            {prompt:"yūyám", answer:"you (plural)", right:0, wrong:0},
            {prompt:"té", answer:"they", right:0, wrong:0},
            {prompt:"idám", answer:"this", right:0, wrong:0},
            {prompt:"tát", answer:"that", right:0, wrong:0}, ]
        }
      },
  components:{CardHolder},
  name: 'Practise',
}
</script>

<style>
  *{
  font-family: sans-serif;
  margin:0;
  padding:0;
}

.card-holder{
  position: absolute;
  height:100%;
  width:100%;
}
button{
  background-color:cadetblue;
  font-size: 1.5em;
  position: fixed;
  width: 100px;
  height:100px;
}

.card{
  position: absolute;
  background-color: bisque;
  width:70%;
  height:100%;
  left:15%;
  font-size: 5em;
}
.rightbtn{
  width: 15%;
  height:100%;
  right:0;
}
.wrongbtn{
  background-color: rgb(255, 138, 161);
  width: 15%;
  height: 100%;
  left:0%
}
</style>