import { loadStudents, createStudent } from './app';

document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("create-student") as HTMLFormElement;
    studentForm.addEventListener("submit", (e: Event) => {
        e.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const city = (document.getElementById("city") as HTMLInputElement).value;

        createStudent(name, city);
    });

    loadStudents(); // Load students when page loads
});
