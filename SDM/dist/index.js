import { loadStudents, createStudent } from './app';
document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("create-student");
    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const city = document.getElementById("city").value;
        createStudent(name, city);
    });
    loadStudents(); // Load students when page loads
});
