<template>
  <div class="testCont">
    <slot name="default"></slot>
  </div>

  
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  .assHeader {
   @apply text-white text-3xl sm:text-4xl text-center mb-2;
  }
  .assContainer {
   @apply bg-gray-800 p-10 rounded-2xl m-8 sm:m-16 lg:mx-72 mt-8;
  }

</style>
