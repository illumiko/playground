<template>
  <!-- <button class="rate">bad</button>
  <button class="rate">average</button>
  <button class="rate">good</button> -->
  <div>
    <button 
      v-for="btn in rateOpts" 
      :key="'hellio'"
      type="button"
      @click.prevent="selectBtn"
      class=""
      :class="['rate', btn.selected ? 'bg-blue-500' : 'hover:bg-blue-400 transition']"
    >{{btn.text}}</button>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'], // same as above
  data() {
    return {
      rateOpts:[
        {
          text: 'bad',
          selected: false
        },
        {
          text: 'average',
          selected: false
        },
        {
          text: 'good',
          selected: false
        },
      ]
      
    }
  },
  methods: {
    selectBtn(e) {
        this.rateOpts.forEach(i => {
          i.selected = false
          if(i.text == e.target.textContent){
              i.selected = true
            }
        });
        console.log(this.selected)
      },
  },
  computed: {
    selected() {
        let x = this.rateOpts.filter(i => i.selected == true)
        this.$emit('update:modelValue', x)
      }
  },
}
</script>

<style scoped>
.rate{
  @apply m-2 p-4 border border-blue-600;
}

</style>
