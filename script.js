function Fazercalculo(){
    //alert ("funcionando");
    let valuef01 = parseFloat (document.getElementById("faixa01").value);
    let valuef02 = parseFloat (document.getElementById("faixa02").value);
    let valuef03 = parseFloat (document.getElementById("faixa03").value);
    let mult = parseFloat (document.getElementById("mult").value);
    let toler = parseFloat (document.getElementById("toler").value);
    let concat = valuef01 + "" + valuef02 + "" + valuef03;
   
    let multf = concat * mult;
    
    let tol = multf *toler;
    
    let tol01= multf - tol;
    
    let tol02= multf + tol;
  
    let conclu= tol01 + " para - e " + tol02 + " para +";
    document.getElementById ("result").value = conclu;
}

