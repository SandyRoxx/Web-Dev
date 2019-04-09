//Default binding

var f1= function(){
    console.log(this);
}
f1();

var f2= function(){
    'use strict';
    console.log(this);
}
f2();

//------------------

//Implicit Binding

var obj={
    color:"red",
    b(){
        console.log(this.color);
    }
}

obj.b();

//-----------------

//Explicit Binding

obj={
    color:"Black"
}
var color='Global';

function d(){
    console.log(this.color);
}
d();
d.call(obj);
d.apply(obj);

//---------------------


var edge={
    device:"mobile",
    chara:"pixcel",
    dev:function(){
        console.log(this);
    }

}


var edgeX={
    device:"mobile",
    chara:"iPhone"
}

function device(){
    console.log(this);
}
device();
edge.dev();
device.call(edgeX);
