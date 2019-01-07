import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
        path: '/:status', ///path của route
    },
    {
      path: '*',
      redirect: '/all'
    }
  ],
  mode: 'history'
})