function start(){
var a=[20];
var b=[20];
for(var i=0; i<20;i++){
  a[i]=parseInt(0);
  b[i]=parseInt(0);
}
for  (var i=1; i<21;i++){
  for(var j=0; j<6;j++){
    if (document.querySelector(".a"+i).querySelectorAll(".form_radio")[j].firstElementChild.checked){
      a[i-1]=parseInt(24)+parseInt(document.querySelector(".a"+i).querySelectorAll(".form_radio")[j].firstElementChild.value);
    }
    if (document.querySelector(".b"+i).querySelectorAll(".form_radio")[j].firstElementChild.checked){
      b[i-1]=parseInt(24)+parseInt(document.querySelector(".b"+i).querySelectorAll(".form_radio")[j].firstElementChild.value);
    }
  }
}

var st=[0, a[0]+b[2]+a[5]+a[9]+a[10]+b[12]+a[15]+a[19], b[0]+a[3]+b[6]+a[8]+b[10]+a[13]+b[16]+a[18], a[1]+b[3]+b[5]+a[7]+a[11]+b[13]+b[15]+a[17], b[1]+a[4]+b[8]+b[9]+b[11]+a[14]+b[18]+b[19], a[2]+b[4]+a[6]+b[7]+a[12]+b[14]+a[16]+b[17]];
var stz=["","Человек","Техника","Природa","Знаковая система","Художественный образ"];

for(var i=1;i<6;i++){
  for (var j=i;j<6;j++){
    if(st[i]<st[j]){
      st[0]=st[i];
      st[i]=st[j];
      st[j]=st[0];
      stz[0]=stz[i];
      stz[i]=stz[j];
      stz[j]=stz[0];
    }
  }
//console.log(st[i]," ",stz[i]);
}
var sum=parseInt(st[1]+st[2]+st[3]+st[4]+st[5]);
for(var i=1;i<6;i++){
st[i]=Math.floor(st[i]/(sum)*100);
//console.log(st[i],"% ",stz[i]);
}
if ((st[1]+st[2]+st[3]+st[4]+st[5])<100){
  st[1]+=100-(st[1]+st[2]+st[3]+st[4]+st[5]);
}

//console.log(st[0],st[1],"% -",stz[1],st[2],"% -",stz[2],st[3],"% -",stz[3],st[4],"% -",stz[4],st[5],"% -",stz[5]);
localStorage.setItem("st1",st[1]);
localStorage.setItem("st2",st[2]);
localStorage.setItem("st3",st[3]);
localStorage.setItem("st4",st[4]);
localStorage.setItem("st5",st[5]);

localStorage.setItem("stz1",stz[1]);
localStorage.setItem("stz2",stz[2]);
localStorage.setItem("stz3",stz[3]);
localStorage.setItem("stz4",stz[4]);
localStorage.setItem("stz5",stz[5]);
}