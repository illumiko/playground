<template>
<Test v-if="this.displayed.Test" />
<Tab @show="vis"/>
<Clones 
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
</div>
</template>

<script>
import Tab from './compTab.vue'
import Test from './test.vue'
import Comp from './parent-cmp-comp.vue'
import Clones from './addSponClones.vue'
import Bcontainer from './baseCard.vue'
export default {
  components: {
    Test,
    Comp,
    Clones,
    Bcontainer,
    Tab,
  },
  
}
</script>
