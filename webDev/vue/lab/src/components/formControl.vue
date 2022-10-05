<template>
  <div class="conti">
    <form @submit.prevent="logging">
      <div class="formContainer">
      <!-- RADIO BTNS -->
        <div class="box">
          <h1 class="text-3xl text-red-600">Select Any</h1>
          <div>
            <input 
              v-model="checkbox"
              type="checkbox" 
              name="g-1" 
              id="" 
              class="checky checky1" 
              value="1idk">
              <p>idk bro at this point 1</p>
          </div>
          <div>
            <input 
              v-model="checkbox"
              type="checkbox" 
              name="g-1" 
              id="" 
              class="checky checky2" 
              value="2idk">
              <p>idk bro at this point 2</p>
          </div>
          <div>
            <input 
              v-model="checkbox"
              type="checkbox" 
              name="g-1" 
              id="" 
              class="checky checky3" 
              value="3idk">
              <p>idk bro at this point 3</p>
          </div>
        </div>
        <!-- CHECKBOX -->
        <div class="box">
          <h1 class="text-3xl text-red-600">Select Any</h1>
          <div>
            <input 
              v-model="radioVal"
              type="radio" 
              name="g-1" 
              id="" 
              class="checky checky1" 
              value="1idk">
              <p>idk bro at this point 1</p>
          </div>
          <div>
            <input 
              v-model="radioVal"
              type="radio" 
              name="g-1" 
              id="" 
              class="checky checky2" 
              value="2idk">
              <p>idk bro at this point 2</p>
          </div>
          <div>
            <input 
              v-model="radioVal"
              type="radio" 
              name="g-1" 
              id="" 
              class="checky checky3" 
              value="3idk">
              <p>idk bro at this point 3</p>
          </div>
        </div>
        <!-- TextArea -->
        <div class="textarea">
          <h1 class="text-red-600 p-4 text-black text-3xl">write anything something</h1>
          <textarea v-model="usrComment" name="idk" id="" cols="20" rows="10" class="bg-gray-300"></textarea>
        </div>
        <!-- ask use for rating -->
        <div class="rating">
          <usr-rating v-model="rating"></usr-rating>
        </div>
        <!-- submit btn -->
        <button class="border border-purple-600 hover:bg-purple-500 p-3 my-4">Submit</button>
      </div>
    </form>

    <!-- show logs -->
    <div class="submittedData border border-green-600 p-3 transition-all">
      <p ref="show" class="text-xl"></p>
    </div>

    
  </div>
</template>
<script>
  import usrRating from './TheUsrRating.vue'
export default {
  components: {
    usrRating
  },

  data() {
    return {
      usrComment: '',
      radioVal: null,
      rating: '',
      checkbox: []
    }
  },

  methods: {
    logging() {
      const display = this.$refs.show
      display.innerHTML = ""
      // logging textarea and resetting
      if(this.usrComment){
        display.innerHTML = `TextArea: ${this.usrComment} <br><br>`
        this.usrComment = ''
      }
      // radio val
      display.innerHTML += `radio val: ${this.radioVal} <br><br>`
      this.radioVal = null
      // checkbox
      display.innerHTML += `checkbox: ${this.checkbox} <br><br>`
      this.checkbox = []
      // rating
      display.innerHTML += `rating: ${this.rating[0].text}`
      this.rating[0].selected = false
      

    }
  },

}
</script>

<style scoped>
h1{
  @apply py-4 border border-red-500 text-center my-4
}
.conti{
  @apply text-white p-4 bg-gray-800 m-4 lg:mx-60 rounded border
}
form > .formContainer {
  @apply text-2xl flex flex-col items-center text-center
}
form .formContainer .box div {
  @apply flex flex-row items-baseline
}
form input {
  @apply m-2 mr-4
}

</style>

