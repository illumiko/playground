<template>

<div class="assContainer ">
  <div class="testCont">
    <h1 class="assHeader my-4 mb-8"> {{headerCus}} </h1>
    <div class="grid grid-cols-2 items-baseline gap-4">
      <h1 class="text">{{name}}</h1>
      <p @click="reNamer" class="btn">ReNamer</p>
    </div>

    <div class="grid grid-cols-2 items-baseline gap-4">
      <h1 class="text">{{age}}</h1>
      <p @click="deleter" class="btn">Delete Clone</p>
    </div>
    
    <div class="grid grid-cols-2 items-baseline gap-4">
      <h1 class="text">{{hobby}}</h1>
    </div>

  </div>
</div>


  
</template>

<script>
export default {
  props: ['headerCus','name', 'age', 'hobby'],
  methods: {
    reNamer() {
      this.$emit('re-gen', this.headerCus)
      console.log('%c works', 'color: #fca111; background:#333;')
    },
    deleter() {
      this.$emit('del', this.headerCus)
    }
  }
  
}
</script>
<style scoped>

</style>
