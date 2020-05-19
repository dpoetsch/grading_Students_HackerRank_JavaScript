function gradingStudents(grades) {
    
    let GG = [];

    for (var i=0; i < grades.length; i++ ){
    
    if( Math.ceil(grades[i]/5)*5 - grades[i] < 3 && grades[i] >= 38){
    GG.push(Math.ceil(grades[i]/5)*5);
    }else{
     GG.push(grades[i]);
    }

}
    return GG
}

const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));