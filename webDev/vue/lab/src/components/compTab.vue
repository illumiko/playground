<template>
    <!-- <router-link to="/test">Hello</router-link> -->
    <div class="py-2">
        <router-link
        class="tabs"
        v-for="i in routes"
        :id="i.text"
        :to="i.to"
        >{{i.text}}</router-link>
    </div>
</template>

<script>
export default {
    emits: ['show'],
    data() {
        return {
            routes: [
                {
                    text: "test",
                    to: "/test"
                },
                {
                    text: "comp",
                    to: "/comp"
                },
                {
                    text: "clones",
                    to: "/clones"
                }
            ]
            
        }
    },
  
}
</script>

<style scoped>
.tabs{
    @apply p-2 bg-green-500 m-4 px-4
}
.router-link-exact-active{
    @apply bg-green-700
}

</style>
