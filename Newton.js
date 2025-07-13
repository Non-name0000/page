class Newton{
  
  function(n){
    let line;
    line=1/4*n(x-n)-1/8*n*n-2;
    return line;
  }
  
  let a=document.querySelector('#startpoint1');
  for(a<10){
    if(function(a)==0){
    b=a;
    }
    a=a+0.01;
  }
  let EPS=document.querySelector('#EPS');
  let count=0;
  while(function(b)<EPS){
    a=b;
  for(a<=10){
    if(function(a)==0){
    b=a;
    }
    a=a+0.01;
    count=count++;
  }
  }
}
    
  
  
