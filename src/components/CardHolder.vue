<template>
        <div>
          <flash-card
                    
                    class="card-holder"
                    :prompt="activeCard.prompt" 
                    :answer="activeCard.answer"></flash-card>
                    
          <button class="rightbtn" @click="right">Right ({{activeCard.right}})</button>
          <button class="wrongbtn" @click="wrong">Wrong ({{activeCard.wrong}})</button>
          </div>
</template>
<script>
import FlashCard from './FlashCard.vue'
export default {
  name: 'CardHolder',
  data(){
          return{
            deckIndex:0,

          }
        },
        
        components:{FlashCard},
        props:{
          deck: Array
        },
        computed:{
          activeCard:{
            get(){
              return this.deck[this.deckIndex]
            }
          }
        },
        methods:{
          randomCard(){
            this.deckIndex = Math.floor(Math.random()*this.deck.length)
          },
          right(){
            this.activeCard.right++
            this.randomCard()
          },
          wrong(){
            this.activeCard.wrong++
            this.randomCard()
          }
        }
}
</script>
