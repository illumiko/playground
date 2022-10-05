<template>
  <div class="assContainer">
    <h1 class="assHeader">Add Clones</h1>
    <form action="" class="my-8">
    <div>
      <p class="inputLabel inline mx-4">Title</p>
      <input v-model="this.cloneInfo.title" 
      type="text" 
      class="inputText my-8" 
      required
      >
    </div>
    <div>
      <p class="inputLabel inline mx-4">Name</p>
      <input v-model="this.cloneInfo.name" 
      type="text" 
      class="inputText" 
      required
      >
    </div>
    <div>
      <p class="inputLabel inline mx-4 ">Age</p>
      <input 
      v-model="this.cloneInfo.age" 
      type="text" 
      class="inputText my-8" 
      required
      >
    </div>
    <div>
      <p class="inputLabel inline mx-4 ">Hobby</p>
      <input 
      v-model="this.cloneInfo.type" 
      type="text" 
      class="inputText" 
      required
      >
    </div>
    <button @click.prevent="clonesAdder" class="btn mx-auto my-8">Add</button>
    </form>

  </div>
</template>

<script>
export default {
  props: ['userData'],
  emits: ['add'],
  data() {
    return {
      cloneInfo: {
        title: '',
        name: '',
        age: '',
        type: '',
      }
      
    }
  },
  methods: {
    clonesAdder() {
      if(this.cloneName !== '' && this.cloneAge !== '' && this.cloneHobby !== '') {
        this.$emit('add', this.cloneInfo)
      }
    }
  }
  
}
</script>
