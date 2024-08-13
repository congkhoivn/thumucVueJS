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
/*Bài 2*/
var computed = new Vue({
  el:'#computed',
  data:{
    message: 'Hello world',
    a: 0,
    b: 0,
    number: 20
  },
  methods:{
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    },
    
  } ,
  computed:{
    addA() {
      console.log('addA run');
      return this.a + this.number
    },
    addB() {
      console.log('addB run');
      return this.b + this.number
    }
  }
});
/*Ràng buộc dữ liệu 2 chiều*/
var dulieu = new Vue({
  el:'.fname',
  data:{
    fristName: '',
    about: ''
  },
  methods:{

  }
}
);
/* Ràng buộc class bằng VueJS*/
var ddemo = new Vue({
  el:'#demau',
  data:{
    lophoc:'QLBD',
    isActive: false,
    isError: true
  },
  methods:{
    changeActive(){
      this.isActive = !this.isActive
    },
    changeError(){
      this.isError = !this.isError
    }
  },
  computed:{
    objClass: function(){
      return{
        active: this.isActive,
        error: this.isError
      }
    }
  }
}
);
/*Render Template dùng biểu thức điều kiện*/
var app1= new Vue({
  el:'#app1',
  data:{
    tabSelected: 'login'
  },
  methods:{
    changetabs(tab){
      this.tabSelected = tab;
    }
  }
});

/*Render Template dùng biểu thức điều kiện*/