<template>
    <div>
        <h1>Items: {{ countItems }}</h1>
        <input class="new-todo" placeholder="What needs to be done?" v-model="text" autofocus v-on:keyup.enter="addNew">
    </div>
</template>

<script>
export default {
    props: ['countItems'],
    
    data() {
        return {
            text: ''
        }
    },

    methods:{
        addNew(){
            this.$emit('add', this.text, () => {this.text = ''});
        }
    }
}
</script>

