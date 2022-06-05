<template>
    <h1>Add cats</h1>
    <span>
        name:
        <input v-model="cats.name" type="text">
    </span>
    <br><br>
    <span>
        age:
        <input v-model="cats.age" type="test">
    </span>
    <br><br>
        <button @click="this.save">Add cats</button>
    <h1>Cats details</h1>
    <div>
        name: {{cats.name}}
        <br>
        <br>
        age: {{cats.name}}
    </div>
    <h1>CATS:</h1>
</template>

<script>

export default {
    name: 'App',
    data() {
      return {
        cats: {}
      }
    },
    methods: {
      async save () {
          await this.$store.dispatch("saveCats",this.cats)
        }

    }


}
</script>

<style>
    body{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>
