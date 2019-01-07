<template>
    <div class="view">
        <input class="toggle" type="checkbox" v-model="this.todo.isDone" v-on:click="test()">
        <label @dblclick="startEditingTodo(this.todo)">{{this.todo.text}}</label>
        <button class="destroy" v-on:click="destroyTodo(this.todo)"></button>
     </div>
</template>

<script>
export default {
    name: 'item',
    props: ['todo', 'test'],
    
    methods:{
        onTodoStatusChange: function(todo){
            todo.isDone = !todo.isDone;
        },

        startEditingTodo: function(todo){
            this.beforeText = todo.text;
        },

        destroyTodo:function(todo){
            alert(todo);
        },
    }
}
</script>


