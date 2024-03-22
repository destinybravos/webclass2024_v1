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
    },
    {
        name: "Oriamo Ear plugs",
        price: 99000,
    },
    {
        name: "Infinix Charger",
        price: 200000,
    }
]

let tableItems = "";
items.forEach((item) => {
    if (item.price > 100000) {
        let discount = (item.price * (discountRate/100));
        totalPrice += item.price - discount;
        tableItems += `<tr>
                            <td>${item.name}</td>
                            <td>
                                &#8358; ${(item.price - discount).toLocaleString()}
                                <em><small style="color:red; text-decoration: line-through; display:inline-block; margin:auto 10px;"> &#8358; ${item.price.toLocaleString()} </small></em>
                            </td>
                        </tr>`;
    }else{
        totalPrice += item.price;
        tableItems += `<tr>
                            <td>${item.name}</td>
                            <td> &#8358; ${item.price.toLocaleString()} </td>
                        </tr>`;
    }
});

tableItems += `<tr>
                    <td colspan="2">
                        <strong>Total: ${totalPrice.toLocaleString()}</strong>
                    </td>
                </tr>`;

document.getElementById("solution1_content").innerHTML = tableItems;



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
    },
    {
        name: "Francis Odega",
        grades: [27,54,54,,,40]
    }
]

let studentTable = "";

students.forEach((student) => {
    let sumOfGrades = 0;
    studentTable += `<tr>
                        <td>${student.name}</td>`;
    let grade; let totalCourse = student.grades.length;
    for (let i = 0; i < totalCourse; i++) {
        if (student.grades[i] == undefined || student.grades[i] == "") {
            grade = " - ";
        } else {
            grade = student.grades[i];
            sumOfGrades += grade;
        }
        studentTable += `<td>${grade}</td>`
    }
    // Sum of Grades
    studentTable += `<td>${sumOfGrades}</td>`

    // Average of Grade
    let averageGrade = sumOfGrades / totalCourse;
    studentTable += `<td>${(averageGrade).toFixed(2)}</td>`
    // totalGrades += sumOfGrades;
    console.log(averageGrade);
    studentTable += `</tr>`;
})

document.getElementById("solution2_content").innerHTML = studentTable;
