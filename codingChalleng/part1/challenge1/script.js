let marks = { weight: 95, height: 1.88, };
let johns = { weight: 85, height: 1.76, };

function BMI(weight, height) {
    return (weight / (height * height));
};

let bmiResult = BMI(marks.weight, marks.height);
console.log(bmiResult);

console.log(typeof johns);
console.log(typeof marks);

let bmiResultTwo = BMI(johns.weight, johns.height);
console.log(bmiResultTwo);

let markHigherBMI;
if (marks.height > johns.height) {
    let markHigherBMI = true;
} else {
    console.log("Marks height it not greater then Jonhs")
}

console.log(markHigherBMI);





// funger ikke 

// let bmiResultTwo = BMI(johns.jonh.weight, johns.jonh.height,);
// console.log(bmiResultTwo);