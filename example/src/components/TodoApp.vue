<template>
    <div>
        <ul>
            <li v-for="item in todoList" :key="item.id">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TodoApp',
        data() {
            return { title: "Test", todoList: [{"id":"1", "name" : "Hung"}, {"id":"2", "name" : "Hieu"}]}
        },

        methods: {
            updateData() {
                //    this.title = 'test';
                this.todoList =  [{"id":"1", "name" : "Hung Phan"}, {"id":"2", "name" : "Hieu Phan"}];
            }
        }
    }
</script>
