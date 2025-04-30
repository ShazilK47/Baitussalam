interface Student {
    id: number;
    name: string;
    city: string;
}

const usersAPIUrl = "http://localhost:3000/users";

export const createStudent = async (name: string, city: string): Promise<void> => {
    const body = { name, city };
    const config: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };

    const response = await fetch(usersAPIUrl, config);
    const newUser: Student = await response.json();
    alert("Student Added");
    console.log(newUser);

    loadStudents(); // Refresh the students list
};

export const loadStudents = async (): Promise<void> => {
    const response = await fetch(usersAPIUrl);
    const students: Student[] = await response.json();
    const studentsTbody = document.getElementById("students") as HTMLTableSectionElement;

    studentsTbody.innerHTML = ''; // Clear the existing table content

    students.forEach((student: Student) => {
        const row = studentsTbody.insertRow();
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.city}</td>
            <td><button onclick="getWeatherInfo('${student.city}')">Get Weather</button></td>
        `;
    });
};

const getWeatherInfo = async (city: string): Promise<void> => {
    const weatherAPIKey = "YOUR_WEATHER_API_KEY"; // Replace with your API key
    const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}`;

    const response = await fetch(weatherAPIUrl);
    const weatherData = await response.json();

    const weatherInfo = `
        Temperature: ${weatherData.current.temp_c}°C
        Condition: ${weatherData.current.condition.text}
    `;
    alert(weatherInfo); // Display weather information
};
