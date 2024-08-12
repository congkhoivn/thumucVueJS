
  var vm = new Vue({
    el:'#map',
    data:{
        title: 'dien thoai Ịphone'
    },
    
  });
  console.log(vm);

  setTimeout (() =>{
    vm.title='Điện thoại SamSung';
  },4000
  );