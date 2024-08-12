
  var vm = new Vue({
    el:'#map',
    data:{
        title: 'dien thoai Isphone'
    },
  });
  console.log(vm);

  setTimeout (() =>{
    vm.title='Điện thoại SamSung';
  },4000
  );