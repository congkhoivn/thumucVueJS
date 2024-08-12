var vm = new Vue({
  el:'#map',
  data:{
    title:'Điện thoại Samsung',
    dt1:'Nokia',
    dt2:'Apple'
  } 
});
console.log(vm);

setTimeout(() =>{
  vm.title='Điện thoại Xiaomi'
  vm.dt1='Điện thoại Oppo'
  vm.dt2='Điện thoại Iphone'
},5000
);

var click= new Vue({
  el:'.dulieu',
  data:{
    count:1,
    clientX: 0,
    clientY: 0
  },
  methods:{
    handleClick(number, event){
      console.log('click',event.target);
      this.count += number;
    },
    handleMouseMove(e){
       console.log(e);
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    }
  }
}
);