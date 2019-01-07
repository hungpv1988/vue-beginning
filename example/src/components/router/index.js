import Vue from 'vue';
import Router from 'vue-router';
//import ComponentA from './ComponentA.vue';
//import ComponentB from './ComponentB.vue';

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    // {
    //   path: '/active', ///path của route
    //   component: ComponentA
    // },
    // {
    //     path: '/Completed', ///path của route
    //     component: ComponentB
    // },
    {
        path: '/:status', ///path của route
       // component: TodoApp
    },
    {
      path: '*',
      redirect: '/all'
    }
  ],
  mode: 'history'
})