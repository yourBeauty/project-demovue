
export  default  {
  state: {
    show:'aa',
    names: '',
    count: 1,
    roles:[],
    obj: {
      name: 'xiaoming',
      age: '20'
    }
  },
  mutations: {
    increment (state,na){
      console.log(this.name);
      state.names = na
    },
    selectRoles(state,role){
      console.log(role);
      state.roles=role
    }
  },
  actions: {
    switch_dialog(context,na){
      alert(na);
      context.commit('increment',na);

    }
  }
}
