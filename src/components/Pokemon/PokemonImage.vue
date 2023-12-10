<template>
  <div class="img-container">
    <img class="image" :class="{ 'dark-theme': isHidden }" :src="pokemonImgURI" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isHidden: {
      type: Boolean,
      required: true,
    },
    pokemonId: {
      type: Number,
      required: true,
    }
  },

  computed: {
    pokemonImgURI: function () {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }

}
</script>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.img-container img {
  transition: all 0.3s ease-in;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

img.image {
  width: 300px;
  height: 400px;
  max-height: 400px;
  max-width: 300px;
}

img.dark-theme {
  filter: brightness(0) invert();
}
</style>