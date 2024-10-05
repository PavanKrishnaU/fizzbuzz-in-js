function fizz(){
    let text=document.getElementById('fizzbuzz');
    text.innerHTML='';
    for(let i=1;i<=100;i++){
        let a=document.createElement('li');
        if(i%3==0 && i%5==0){
            a.textContent='fizzbuzz';
    
        }else if(i%3==0){
            a.textContent='fizz';
         } else if(i%5==0){
            a.textContent='buzz';
    
        }
        else{
            a.textContent=i;
        }
        text.appendChild(a);
    }}