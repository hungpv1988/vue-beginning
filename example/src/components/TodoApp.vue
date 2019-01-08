<template>
    <div>
        <section class="todoapp">
            <header class="header">
               <Header :countItems="this.todos.length" @add="addNew" />
            </header>

            <section class="main">
                <ul class="todo-list">
                    <li v-for="todo in shownItems" :key="todo.id" :class="{completed: todo.isDone, editing: todo === editingTodo}" > 
                        <Item :todo="todo" @destroy="destroyTodo" @edit="startEditingTodo" @cancelEdit="cancelEditingTodo" @finishEdit="finishEditingTodo"/> 
                    </li>
                </ul>
            </section>

            <footer class="footer">
                <span class="todo-count">
                    <strong>{{itemsLeft}}</strong> item(s) left 
                </span>

          <!-- Remove this if you don't implement routing -->
                <ul class="filters">
                    <li>
                       <router-link to="/all">All</router-link>
                    </li>

                    <li>
                       <router-link to="/active">Active</router-link>
                    </li>

                    <li>
                      <router-link to="/completed">Completed</router-link>
                    </li>
                </ul>
                <router-view></router-view> 
          <!-- Hidden if no completed items are left ↓ -->
                 <button class="clear-completed" v-on:click="clearAllTodos()">Clear completed</button>
            </footer>
        </section>

        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Esc to cancel edit</p>
            <p>Enter to accept edit</p>
      </footer>
    </div>
</template>

<script>
    import Item from './Item.vue';
    import Header from './Header.vue';

    export default {
        name: 'TodoApp',
        props: ['newTodo'],
        components:{
            Item,
            Header
        },
 
 mounted(){
        },

        data() {
            return { 
                        title: "Todo list", 
                        todos: [
                                    {"id":"1", "text" : "Learn JavaScript ES6+ goodies", isDone: true},
                                    {"id":"2", "text" : "Learn React JS", isDone: true},
                                    {"id":"3", "text" : "Learn Vue", isDone: false},
                                    {"id":"4", "text" : "Build something awesome", isDone: false}
                                ],
                        editingTodo: null,
                        beforeText : null
                    }
        },

        methods: {
            addNew(text, callback){
                var item = {"id": this.countItems + 1, "text": text, "isDone": false};
                this.todos.push(item);
                
                if (!callback){
                    callback();
                }
            },

            destroyTodo:function(todo){
                this.todos  =  this.todos.filter(item => item.id != todo.id);  
            },
            
            startEditingTodo: function(todo){
                this.editingTodo = todo;
                this.beforeText = todo.text;
            },

            cancelEditingTodo:function(todo){
                todo.text = this.beforeText;
                this.editingTodo = null;
            },

            finishEditingTodo: function(){
                this.editingTodo = null;
            },

            clearAllTodos: function(){
                this.todos = [];
            },

            getTodosByStatus: function(status){
               alert(status);
            }
        },

        computed: {
            status() {
                return this.$route.params.status;
            },

            countItems:function(){
                return  this.todos.length;
            },

            itemsLeft: function(){
                return this.todos.filter(todo => !todo.isDone).length;
            },

            activeItems: function(){
                return this.todos.filter(todo => !todo.isDone);
            },

            completedItems: function(){
                 return this.todos.filter(todo => todo.isDone);
            },

            shownItems:function(){
                switch(this.status)
                {
                    case 'active': return this.activeItems;
                    case 'completed': return this.completedItems;
                    default: return this.todos;
                }
            }
        }
    }
</script>
