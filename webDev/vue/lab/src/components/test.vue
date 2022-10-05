<template>
<div class="assContainer">
  <h1 class="assHeader">Testing</h1>

  <!-- <div class="testCont"> -->

  <Bcontainer>
    <div class="flex flex-col sm:flex-row">
      <!--<input type="text" class="inputText" v-bind:value=name v-on:keyup.enter=set> -->
      <input type="text" class="inputText w-full sm:w-2/3" v-model="name" placeholder="Enter a text"> 
      <p class="btn mt-4 sm:mt-0 sm:ml-4 text-center" v-on:click='reset'>Reset</p>
    </div>
      <p class="my-5 textOutput text-center">Result: {{name}}</p>
  </Bcontainer>
  <!-- </div> -->

  <Bcontainer>
  <div class="testCont">
    <div class="flex sm:flex-row flex-col  items-baseline text-center">
      <p class="btn w-full" v-on:click='add'>Add</p>
      <p class="btn my-4 w-full sm:mx-8" v-on:click='subtract'>Subtract</p>
      <p class="textOutput w-full sm:mr-4">Counted: {{counter}}</p>
      <p class="textOutput w-full" v-once>OriginalCount: {{counter}}</p>
    </div>
  </div>
  </Bcontainer>

  <Bcontainer>
  <!-- <div class="testCont"> -->
:   <p class="btn text-lg sm:text-xl w-max ml-auto" @click="toggleList" :class='[{toggle: listToggle}, {center: !listToggle}]'>Toggle</p>
    <div v-if="listToggle" class="container">
      <h1 class="assHeader">Lists</h1>
      <input type="text" class="inputText w-full py-2" @keypress.enter='this.lists.push(this.listEntered)' v-model="listEntered" placeholder="Enter something"> 
      <div v-if="lists.length" class="list" >
        <li class="lists" @click="removeListItem" v-for="i in lists"> {{ i }}</li>
      </div>
      <p v-else class="text my-4">nothing to show</p>
    </div>
  <!-- </div> -->
  </Bcontainer>
</div>
</template>

<script>
import Bcontainer from './baseCard.vue'
export default {
  components: {
    Bcontainer

  },
  data() {
    return {
      name: '',
      counter: 0,
      listToggle: true,
      listEntered: '',
      lists: []
    }
  },
  watch: {
    counter(e) {
      e > 40 ? setTimeout(() => this.counter=0,2000) : console.log(e)
     }
  },
  methods: {
      set(e) {
          this.name = e.target.value
        },
      reset() {
          this.name = ""
        },
      add() {
          this.counter+=5
        },
      subtract() {
          this.counter-=5
       },
      toggleList() {
        this.listToggle = !this.listToggle
        console.log(this.listToggle)
      },
      removeListItem(e) {
        const x = e.target.innerText
        let y = this.lists.indexOf(x)
        this.lists.splice(y,1)

      }
   }
}
  
</script>

<style> 
</style>
