function countingValleys(n, s) {

    var numsea = 0;
    var count = 0;

    
    for (var i = 0; i < n; i++){
    
      if ( s[i] == 'U' ){
        numsea += 1;
      }
      if ( s[i] == 'D' && numsea == 0 ){
        count += 1;
      }
      if (s[i] == 'D'){
        numsea -= 1;
      } 

        }
        
    return count;
}

countingValleys(8, 'UDDDUDUU');