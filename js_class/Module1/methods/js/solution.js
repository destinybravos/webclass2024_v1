// Solution 1:
let discountRate = 10;
let totalPrice = 0;
let items = [
    {
        name: "Techno Spark 4",
        price: 153500,
    },
    {
        name: "Techno Power Bank",
        price: 35000,
    }
]


items.forEach((item) => {
    if (item.price > 100000) {
        let discount = (item.price * (discountRate/100));
        totalPrice += item.price - discount;
    }else{
        totalPrice += item.price;
    }
});

// console.log(totalPrice);



// Solution 2:
let totalGrades;
let students = [
    {
        name: "Amadi John",
        grades: [50,34,65,23,45,23]
    },
    {
        name: "Udeme John",
        grades: [27,54,,23,45,43]
    }
]

students.forEach((student) => {
    let sumOfGrades = 0;
    let grade; let totalCourse = student.grades.length;
    for (let i = 0; i < totalCourse; i++) {
        if (student.grades[i] == undefined || student.grades[i] == "") {
            grade = " - ";
        } else {
            grade = student.grades[i];
            sumOfGrades += grade;
        }
    }
    let averageGrade = sumOfGrades / totalCourse;
    // totalGrades += sumOfGrades;
    console.log(averageGrade);
})
