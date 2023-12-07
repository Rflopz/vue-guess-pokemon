<template>
 <div class="header">
  <h1>Who is this pokemon?</h1>
  <button class="btn-skip" @click="handleSkipClick">skip</button>
 </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['skip'])

const handleSkipClick = () => {
 emit('skip')
}
</script>

<style scoped>
div.header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 20px;
}

button.btn-skip:hover {
 border: 1px solid #c87e10;
 color: #c87e10;
}

button.btn-skip {
 background-color: #292929;
 border: 1px solid whitesmoke;
 color: whitesmoke;
 border-radius: 10px;
 padding: 10px;
 cursor: pointer;
}
</style>