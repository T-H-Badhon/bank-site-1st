// ledger js code 
const dipTotal=document.getElementById('dip-total');
const balTotal= document.getElementById('bal-total');
const widTotal= document.getElementById('wid-total');
const dipButton=document.getElementById('dip-btn');
const widButton=document.getElementById('wid-btn');

// diposit part 

const dip=document.getElementById('dip');
        
dipButton.addEventListener('click', function(){
    if(parseFloat(dip.value)>=0){
        const dipVS=dip.value;
    const dipVN= parseFloat(dipVS);
    const balTotalVS=balTotal.innerText;
    const balTotalVN=parseFloat(balTotalVS);
    const newBal=balTotalVN+dipVN;
    balTotal.innerText=newBal;
            

    const dipTotalVS=dipTotal.innerText;
    const dipTotalVN=parseFloat(dipTotalVS);
    const newDip=dipTotalVN+dipVN;
    dipTotal.innerText=newDip;
    dip.value='';
    }  
    else{
        dip.value='';
        alert('invalid amount');
    }        
});


//withdraw part

const wid=document.getElementById('wid');

widButton.addEventListener('click', function(){
    const balTotalVS=balTotal.innerText;
    const balTotalVN=parseFloat(balTotalVS);
    if(parseFloat(wid.value)>=0 && parseFloat(wid.value)<=balTotalVN ){
        const widVS=wid.value;
    const widVN= parseFloat(widVS);
    
    const newBal=balTotalVN-widVN;
    balTotal.innerText=newBal;
            

    const widTotalVS=widTotal.innerText;
    const widTotalVN=parseFloat(widTotalVS);
    const newwid=widTotalVN+widVN;
    widTotal.innerText=newwid;
    wid.value='';
    }  
    else{
        wid.value='';
        alert('invalid amount');
    } 
})


