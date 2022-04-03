<template>
  <Tab></Tab>
  <!-- <form-control></form-control> -->
  <router-view></router-view>

  <!-- <Tab/> -->
  <!-- <Clones 
    :userData="this.users"
    @add="cloningClones"
    v-if="this.displayed.Clones"
    />

    <div v-if="this.displayed.Comp">
        <Comp
        v-for="humans in users"
        :key='humans.title'
        :name="humans.name"
        :age="humans.age"
        :header-cus="humans.title"
        :hobby="humans.type"
        @re-gen='reGen'
        @del='deleteClone'
        />
    </div> -->
  <!-- <form-control></form-control> -->
</template>

<script>
import Tab from "./components/compTab.vue"
import Bcontainer from "./components/baseCard.vue"
import formControl from "./components/formControl"
export default {
  name: "App",
  components: {
    Bcontainer,
    Tab,
    formControl
  },
  data() {
    return {
      users: [
        {
          title: "DhongiDon",
          name: `spondon`,
          type: "moody",
          age: "thousand year old loli"
        },
        {
          title: "DhongiDon Clone The First",
          name: `spondon`,
          type: "moody",
          age: "thousand year old loli"
        },
        {
          title: "DhongiDon Clone The Second",
          name: `spondon`,
          type: "moody",
          age: "thousand year old loli"
        }
      ]
    }
  },
  methods: {
    randomStr() {
      let Alphabets = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOQRSTUVWXYZ"
      let randomizer = Math.floor(Math.random() * (10 - 4) + 4)
      let newName = []
      for (let i = 0; i < randomizer; i++) {
        let randomizer = Math.floor(Math.random() * (Alphabets.length - 1) + 1)
        newName.unshift(Alphabets.split("")[randomizer])
      }
      return newName.join("")
    },
    reGen(n) {
      let x = this.users.find(({ title }) => title == n)
      x.name = this.randomStr()
    },
    deleteClone(n) {
      let x = this.users.find(({ title }) => title == n)
      let index = this.users.indexOf(x)
      this.users.splice(index, 1)
      console.log(index)
    },

    cloningClones(n) {
      this.users.unshift(n)
      console.log(this.users)
    }
  }
}
</script>

<style>
* {
  @apply transition;
}
body {
  @apply bg-gray-700;
}
.lists {
  @apply text-xl sm:text-2xl my-8 bg-yellow-400 px-6;
}
.testCont {
  @apply bg-gray-600 sm:p-8 sm:m-8 p-4 my-4 mt-8 rounded-2xl;
}
.btn {
  @apply select-none cursor-pointer text-xl bg-red-500 hover:bg-green-500 block p-1 rounded-md;
}
.taskSeparator {
  @apply border-2 border-solid border-green-600 rounded-2xl;
}
.textOutput {
  @apply text-xl sm:text-2xl bg-green-300 p-2 mb-4 rounded-2xl;
}
.text {
  @apply text-xl sm:text-2xl bg-green-500 p-2 mb-4 rounded-2xl;
}
.inputLabel {
  @apply text-xl sm:text-2xl text-white;
}
.inputText {
  @apply w-3/4 sm:w-2/4 text-black bg-gray-300;
}
.assUnderline {
  @apply border-2 border-black border-solid rounded-2xl mb-10;
}
.toggle {
  @apply bg-indigo-500;
}
.center {
  @apply mx-auto;
}
.assHeader {
  @apply text-white text-3xl sm:text-4xl text-center mb-2;
}
.assContainer {
  @apply bg-gray-800 p-10 rounded-2xl m-8 sm:m-16 lg:mx-72 mt-8;
}
</style>
