window.onload=function(){
    let input=document.getElementById('input');
    let btn=document.getElementById('btn');
    let result=document.getElementById('result');

    btn.onClick = function(){
        let val=intput.value;
        result.inerText=val;
    }
}


