// let names = [];
// let no_names = parseInt(prompt("How many names do you want"));

// for (let i = 0; i < no_names; i++) {
//     let name  = prompt("Enter a name");
//     names.push(name);
// }

// console.log(names);


// let students = [];
// let no_studs = parseInt(prompt("How many student do you want"));

// for (let i = 0; i < no_studs; i++) {
//     // Declare an object which will hold the student data
//     let student = {
//         name :  null,
//         gender: '',
//         phone : '',
//         age : 0,
//         m_status : ''
//     };

//     // Accept the student data from the user
//     student.name = prompt("Enter a name for student " + (i + 1));

//     let isMale = confirm("Are you a male?");
//     // if (isMale) {
//     //     student.gender = "Male";
//     // } else {
//     //     student.gender = "Female"
//     // }
//     student.gender = isMale ? "Male" : "Female"; // Alternative to the if statement above

//     student.phone = prompt("Enter " + (student.gender.toLowerCase() == "male" ? "his": "her")  + " phone number");

//     // Store the student details
//     students.push(student)
// }

let students = [
    {
        name :  "Amadi James",
        gender: 'Male',
        phone : '09034343232',
        age : 24,
        m_status : 'Single'
    },
    {
        name :  "Amadi Judith",
        gender: 'Female',
        phone : '09034542322',
        age : 30,
        m_status : 'Married'
    },
    {
        name :  'Kingsley Jude',
        gender: 'Male',
        phone : '080974534524',
        age : 27,
        m_status : 'Divorced'
    },
    {
        name :  'Abadi Abafe',
        gender: 'Female',
        phone : '070235235234',
        age : 25,
        m_status : 'Single'
    }
]

// for(let x=0; x < students.length; x++){
//     // console.log(students[x].name + "\n" + students[x].phone);

//     // Alternatively
//     let student = students[x];
//     console.log(student.name + "\n" + student.phone);
// }

// SYNTAX OF FOR EACH
// Array.forEach(function(element){
//     console.log(element);
// })

// EXAMPLE OF FOR EACH
students.forEach(function(student){
    console.log(student.name + "\n" + student.phone);
});



