document.getElementById("addStudent").addEventListener("click", function () {
    document.getElementById("studentModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("studentModal").classList.add("hidden");
});

document.getElementById("saveStudent").addEventListener("click", function () {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let phone = document.getElementById("studentPhone").value;
    let enroll = document.getElementById("studentEnroll").value;
    let date = document.getElementById("studentDate").value;

    if (name && email && phone && enroll && date) {
        let student = {
            name,
            email,
            phone,
            enroll,
            date
        };

        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));

        addStudentToTable(student);

        document.getElementById("studentModal").classList.add("hidden");
        clearInputs();
    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
});

function clearInputs() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentEnroll").value = "";
    document.getElementById("studentDate").value = "";
}

function addStudentToTable(student) {
    let tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td class="py-4 px-2">${student.name}</td>
        <td class="py-4 px-2">${student.email}</td>
        <td class="py-4 px-2">${student.phone}</td>
        <td class="py-4 px-2">${student.enroll}</td>
        <td class="py-4 px-2">${student.date}</td>
        <td class="py-4 px-2">
            <button onclick="deleteStudent(this)" class="text-red-500">Delete</button>
        </td>
    `;

    tbody.appendChild(tr);
}

function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(addStudentToTable);
}

window.onload = loadStudents;

function deleteStudent(button) {
    let row = button.parentElement.parentElement;
    let name = row.children[0].textContent;

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(student => student.name !== name);
    localStorage.setItem("students", JSON.stringify(students));

    row.remove();
}


function addStudentToTable(student) {
    let tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td class="py-4 px-2">
            <a href="student.html" class="text-blue-500 font-semibold" onclick="saveStudentData('${student.name}')">
                ${student.name}
            </a>
        </td>
        <td class="py-4 px-2">${student.email}</td>
        <td class="py-4 px-2">${student.phone}</td>
        <td class="py-4 px-2">${student.enroll}</td>
        <td class="py-4 px-2">${student.date}</td>
        <td class="py-4 px-2">
            <button onclick="deleteStudent(this)" class="text-red-500">Delete</button>
        </td>
    `;

    tbody.appendChild(tr);
}


function saveStudentData(name) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let student = students.find(s => s.name === name);

    if (student) {
        localStorage.setItem("selectedStudent", JSON.stringify(student));
    }
}
