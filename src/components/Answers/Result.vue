<template>
 <div class="container">
  <div v-if="isCorrect">
   <h2>Nice job!</h2>
  </div>
  <div v-else>
   <h2>Oops, the name is "{{ capitalizedName }}"</h2>
  </div>

  <button @click="handleClick">
   Play again
  </button>
 </div>
</template>


<script lang="ts" setup>
import { computed } from 'vue';
const emit = defineEmits(['skip'])

const props = defineProps({
 isCorrect: {
  type: Boolean,
  required: true,
 },
 pokemonName: {
  type: String,
  requierd: true,
 }
})

const handleClick = () => {
 emit('skip')
}

const capitalizedName = computed(() => {
 let name = props.pokemonName?.trim() || "";
 return name[0].toUpperCase() + name.slice(1)
})

</script>

<style scoped>
div.container {
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}

h2 {
 text-align: center;
 font-size: 32px;
}

button {
 background-color: #292929;
 color: whitesmoke;
 border: 1px solid whitesmoke;
 padding: 10px;
 border-radius: 10px;
 margin-top: 20px;
 cursor: pointer;
}
</style>