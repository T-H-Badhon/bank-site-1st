// check validity 

const userEmail=document.getElementById('user-email');
const userPassword=document.getElementById('user-password');
const btn=document.getElementById('login-btn');
userEmail.addEventListener('keyup', function(){
    const password=userPassword.value;
    const email=userEmail.value;
    if(password=='Badhon' && email=='oishi@gmail.com'){
        btn.classList.add('bg-green-400');
        btn.classList.remove('bg-red-400');
        btn.addEventListener('click',function(){
            window.location.href="ledger.html";
        })
    } 
    else{
        btn.classList.remove('bg-green-400');
        btn.classList.add('bg-red-400');
    }
});

userPassword.addEventListener('keyup', function(){
    
    const password=userPassword.value;
    const email=userEmail.value;
    if(password=='Badhon' && email=='oishi@gmail.com'){
        btn.classList.add('bg-green-400');
        btn.classList.remove('bg-red-400');
        btn.addEventListener('click',function(){
            window.location.href="ledger.html";
        })
    } 
    else{
        btn.classList.remove('bg-green-400');
        btn.classList.add('bg-red-400');
    }
});