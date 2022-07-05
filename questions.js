const answer=document.querySelectorAll(".answer");
const plus1=document.querySelectorAll(".ans");
function show(a){
var index=a;
for(var i=0;i<answer.length;i++){
    answer[i].style.display="none";
}
//plus1[index-1].innerHTML='<span class=".ans" onclick=hide('+index+')>-</span>';
answer[index-1].style.display="block";
}
/*function hide(b){
    var index2=b;
    console.log(b,answer);

    plus1[index2-1].innerHTML='<span class=".ans" onclick=show1('+index2+')>+</span>';
    for(var i=0;i<answer.length;i++){
        answer[i].style.display="none";
    }
    answer[b-1].style.display="none";
    alert("hello");

}*/