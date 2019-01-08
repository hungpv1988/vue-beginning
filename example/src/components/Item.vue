<template>
        <div>
            <div class="view">
                <input class="toggle" type="checkbox" v-model="todo.isDone" v-on:click="onTodoStatusChange({todo})">
                <label @dblclick="startEditingTodo(todo)">{{todo.text}}</label>
                <button class="destroy" v-on:click="destroyTodo(todo)"></button>
            </div>

            <input class="edit"
                    @keyup.escape="cancelEditingTodo(todo)"
                    @keyup.enter="finishEditingTodo(todo)"
                    @blur="finishEditingTodo(todo)"
                    v-model.trim="todo.text">
        </div>
</template>

<script>
export default {
    name: 'item',

    props: ['todo'], 
    
    mounted(){
        //this.todo.text = 'fuck';
     //   alert(this.todo.text);
    },
    
    methods:{
        onTodoStatusChange: function(todo){
            todo.isDone = !todo.isDone;
        },

        startEditingTodo: function(todo){
            this.$emit('edit', todo);
        },

        destroyTodo:function(todo){
            this.$emit('destroy', todo);
        },

        cancelEditingTodo:function(todo){
            this.$emit('cancelEdit', todo);
        },

        finishEditingTodo: function(todo){
            this.$emit('finishEdit', todo);
        }
    }
}
</script>


