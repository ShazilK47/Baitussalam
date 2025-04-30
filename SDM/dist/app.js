var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const usersAPIUrl = "http://localhost:3000/users";
export const createStudent = (name, city) => __awaiter(void 0, void 0, void 0, function* () {
    const body = { name, city };
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    const response = yield fetch(usersAPIUrl, config);
    const newUser = yield response.json();
    alert("Student Added");
    console.log(newUser);
    loadStudents(); // Refresh the students list
});
export const loadStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(usersAPIUrl);
    const students = yield response.json();
    const studentsTbody = document.getElementById("students");
    studentsTbody.innerHTML = ''; // Clear the existing table content
    students.forEach((student) => {
        const row = studentsTbody.insertRow();
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.city}</td>
            <td><button onclick="getWeatherInfo('${student.city}')">Get Weather</button></td>
        `;
    });
});
const getWeatherInfo = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const weatherAPIKey = "YOUR_WEATHER_API_KEY"; // Replace with your API key
    const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}`;
    const response = yield fetch(weatherAPIUrl);
    const weatherData = yield response.json();
    const weatherInfo = `
        Temperature: ${weatherData.current.temp_c}°C
        Condition: ${weatherData.current.condition.text}
    `;
    alert(weatherInfo); // Display weather information
});
