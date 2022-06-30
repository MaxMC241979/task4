const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const txt = document.querySelector(".txt");
const txt2 = document.querySelector(".txt2");
const txt3 = document.querySelector(".txt3");
const txt4 = document.querySelector(".txt4");
const txt5 = document.querySelector(".txt5");
const txt6 = document.querySelector(".txt6");
const txt7 = document.querySelector(".txt7");
const txt8 = document.querySelector(".txt8");
const res = document.querySelector(".result");
const resSR = document.querySelector(".resultSR");
const resST = document.querySelector(".resultSТ");

btn.addEventListener ( 'click',  function(e) {
   
    var a = parseInt(txt.value);
    var b = parseInt(txt2.value);
    var c = parseInt(txt3.value);

    D = b * b - 4 * a * c;
    if (D > 0) {
        var x1;
        var x2;
        x1 = (-b - Math.sqrt(D)) / (2 * a);
        x2 = (-b + Math.sqrt(D)) / (2 * a);
            
        res.innerHTML = (String("Корни уравнения: x1 = " + x1 + ", x2 = " + x2));
    
        }
    else if (D == 0) {
        
        var x;
        x = -b / (2 * a);
              
        res.innerHTML = (String("Корни уравнения: x = " + x));
    }
    else {
        
        res.innerHTML = (String("Уравнение не имеет действительных корней!"));
       
    }   
   
}
);

btn2.addEventListener ( 'click',  function(e) {

    var aa = parseInt(txt4.value);
    var bb = parseInt(txt5.value);
    var cc = parseInt(txt5.value);
   
    var d = (Math.min(aa, bb, cc)); 

    resSR.innerHTML = (d);
    
}
);

btn3.addEventListener ( 'click',  function(e) {

    var af = parseInt(txt7.value);
    var bf = parseInt(txt8.value);

     var cf = af**bf; 
      
  resST.innerHTML = (cf);
    
}
);
