<script lang="ts">
import PokemonImage from './PokemonImage.vue';
import Header from '../Layout/Header.vue'
import Options from '../Answers/Options.vue'
import Result from '../Answers/Result.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: { PokemonImage, Options, Header, Result },
  data() {
    return {
      options: [] as Array<any>,
      selected: 0,
      isCorrect: false,
      isHidden: true,
      isSubmitted: false,
    }
  },
  methods: {
    async getMixedPokemons() {
      const result = await getPokemonOptions();
      const randomId = Math.floor(Math.random() * result.length);
      this.options = result;
      this.selected = parseInt(result[randomId].id);
    },
    handleSelect(pokemonId: number) {
      this.isCorrect = pokemonId === this.selected;
      this.isHidden = false
      this.isSubmitted = true;
    },
    async handleSkipClick() {
      const result = await getPokemonOptions();
      const randomId = Math.floor(Math.random() * result.length);
      this.options = result;
      this.selected = parseInt(result[randomId].id);
      this.isSubmitted = false;
      this.isCorrect = false;
      this.isHidden = true;
    }
  },
  computed: {
    pokemonName() { return this.options.find(x => x.id === this.selected).name }
  },

  mounted() {
    this.getMixedPokemons();
  }
}
</script>

<template>
  <div v-if="selected !== 0">
    <Header @skip="handleSkipClick" />
    <PokemonImage :is-hidden="isHidden" :pokemon-id="selected" />
    <Options :options="options" :is-submitted="isSubmitted" :is-correct="isCorrect" @on-select="handleSelect" />
    <Result v-if="isSubmitted" :isCorrect="isCorrect" :pokemon-name="pokemonName" @skip="handleSkipClick" />
  </div>
  <div v-else>
    <h2>Loading, please wait...</h2>
  </div>
</template>
