import Vue from 'vue';
import Router from 'vue-router';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '*', ///path của route
    //  redirect: '/bar', 
      name: 'default', // tên route
      component: ComponentB // component route sử dụng
    },
    {
        path: '/bar', ///path của route
        name: 'ComponentA', // tên route
        component: ComponentA // component route sử dụng
    },
    {
      path: '/foo',
      name: 'ComponentB',
      component: ComponentB
    }
  ]
})