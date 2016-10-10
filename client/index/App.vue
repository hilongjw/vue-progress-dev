<template>
    <div id="app">
        <docs-content></docs-content>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>
<script>
import docsContent from './components/docsContent.vue'
export default {
    created (){
        this.$Progress.start()
    },
    components: {
        docsContent
    }
}
</script>
