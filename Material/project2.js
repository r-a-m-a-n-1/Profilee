function cal(){
    let Dms=document.getElementById("dms").value;
    let Coa=document.getElementById("coa").value;
    let Dsa=document.getElementById("dsa").value;
    let Pdc=document.getElementById("pdc").value;
    let Webd=document.getElementById("webd").value;
    let Pe=document.getElementById("pe").value;
    let Pom=document.getElementById("pom").value;


let sum=parseFloat(Dms)+parseFloat(Coa)+parseFloat(Dsa)+parseFloat(Pdc)+parseFloat(Webd)+parseFloat(Pe)+parseFloat(Pom);

document.getElementById("demo").innerHTML=`Total marks is =${sum}`;

let percentage=(sum/700)*100;

document.getAnimations("demo1").innerHTML=`Percentage is ${percentage}`;

if(percentage>=100){
    
    document.getElementById("demo2").innerHTML=`Grade is A++`;

}
else if(percentage>=80){
    document.getElementById("demo2").innerHTML=` Grade is A`;
}
else if(percentage>=60){
    document.getElementById("demo2").innerHTML=` Grade is B`;
}
else if(percentage>=40){
    document.getElementById("demo2").innerHTML=` Grade is C`;
}
else{
    document.getElementById("demo2").innerHTML=`Grade is F`;
}
}