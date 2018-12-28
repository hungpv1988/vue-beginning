<template>
  <div>
    test test test
    <TodoApp/>
  </div>
  
</template>

<script>
import  TodoApp  from './TodoApp.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    TodoApp: TodoApp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
