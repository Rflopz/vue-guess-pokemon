<template>
 <div class="container">
  <button v-for="(option, i) in options" :key="option.id" @click="handleAnswerClick(option.id)"
   :class="answerClass(option.id)">
   <span>{{ `${(i + 10).toString(36)} )` }}</span>
   <span>{{ capitalize(option.name) }}</span>
   <span class="spacer"></span>
  </button>
 </div>
</template>

<script lang="ts">

interface Pokemon {
 name: string;
 id: number;
}

export default {
 props: {
  isCorrect: {
   type: Boolean,
   required: true,
  },
  options: {
   type: Array<Pokemon>,
   required: true
  },
  isSubmitted: {
   type: Boolean,
   required: false,
  }
 },

 data() {
  return {
   pokemonId: 0,
  }
 },

 methods: {
  answerClass(id: number) {
   if (!this.isSubmitted)
    return "answer";

   if (this.pokemonId !== 0 && this.pokemonId !== id)
    return "hide"

   return this.isCorrect ? "answer correct" : "answer incorrect";
  },
  capitalize(s: string) {
   s = s.trim();
   return s[0].toUpperCase() + s.slice(1)
  },

  handleAnswerClick(pokemonId: number) {
   this.$emit("onSelect", pokemonId);
   this.pokemonId = pokemonId;
  }
 }
}
</script>

<style escoped>
div.container {
 margin-top: 50px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
}

span.spacer {
 width: 20px;
 height: 20px;
}

button.answer:hover {
 color: #181818;
 background: #c87e10;
}

button.answer {
 font-size: 26px;
 border: 4px solid #c87e10;
 background: none;
 color: #ebebeba3;
 padding: 8px 16px;
 margin-top: 15px;
 border-radius: 15px;
 width: 350px;
 text-align: center;
 display: flex;
 justify-content: space-between;
 align-items: center;
 cursor: pointer;
}

.hide {
 display: none;
}

button.correct,
button.correct:hover {
 border: 4px solid lightgreen;
 background-color: lightgreen;
 color: #181818;
}

button.incorrect,
button.incorrect:hover {
 border: 4px solid lightcoral;
 background-color: lightcoral;
 color: #181818;
}
</style>
