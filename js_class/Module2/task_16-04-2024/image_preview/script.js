let dataForm = document.forms['frmImg'];

let students = [];

let displayStudents = () => {
    let stdList = '';
    students.forEach((student) => {
        stdList += `<li>
                        <img src="${student.image}" alt="" class="images">
                        <h4>${student.name}</h4>
                    </li>`;
    })

    document.getElementById('gallery').innerHTML = stdList;
}


dataForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let imageFile = dataForm['images'].files[0];
    let stdName = dataForm['stu_name'].value;

    let imageUrl = converFiletoUrl(imageFile);

    let newStudent = {
        name: stdName,
        image: imageUrl
    }
    students.push(newStudent);
    
    displayStudents();


    dataForm.reset();
});



let converFiletoUrl = (file) => {
    let imageUrl = URL.createObjectURL(file);
    return imageUrl;
}

