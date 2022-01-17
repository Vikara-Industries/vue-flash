<template>
  <div class="decks">
    <h1>Choose a deck to practise with:</h1>
    <ul :class="style">
      <li v-for="(i,deck) in deckList" :key="i">Deck {{deck}}</li>
    </ul>
  </div>
</template>

<script>
// import DeckHolder from '@/components/DeckHolder.vue'
import decks from '@/decks.json'

export default {
  data(){
        return{
          deckList:decks
        }
      },
  // components:{DeckHolder},
  name: 'Decks',
}
</script>
