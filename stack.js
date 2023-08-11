function isPalindrome(s){
    n=[];
    let length=s.length;
    for(i=0;i<parseInt(s.length)/2;i++){
        n.push(s[i]);
        i++;
     }
   if(length%2!=0){
        i++;
    }
    var ele;
    
    while (i != s.length)
    {
         ele = n[n.length-1];
         n.pop();
 
    
    if (ele != s[i])
        return false;
        i++;
    }
    console.log(n);
    
 
return true;
    
}
console.log(isPalindrome("MADAM"));
