function search(elem) {
    let data = [20, 35, 45, 70, 85, 90, 90];
    let index = [];
    for (i = 0; i <= data.length - 1; i++) {
        if (data[i] === elem) {
            index.push(i);
        }
    }
    return index;


}
console.log(search(90));



// function checkPalindrome(str) {  
    
//     const len = str.length;  
  
    
//     for (let i = 0; i < len / 2; i++) {  
        
//         if (str[i] !== str[len - 1 - i]) {  
//           console.log( 'It is not palindrome'); 
//           return;
//         }  
//     }  
  
//     console.log( 'It is a palindrome');  
// }  
  
// checkPalindrome('MADAM');