import { useState } from 'react';
import Link from 'next/link';

export default function WeatherPage() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const apiKey = 'a8c2766725aaad25d93d94f5997ebf49';
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`
            );

            if (!response.ok) {
                throw new Error('Город не найден. Попробуйте еще раз.');
            }

            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>Погода</h1>
            <div>
                <input
                    type="text"
                    placeholder="Введите город"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ padding: '10px', width: '200px', marginRight: '10px' }}
                />
                <button onClick={fetchWeather} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Узнать погоду
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && (
                <div style={{ marginTop: '20px' }}>
                    <h2>
                        {weatherData.name}, {weatherData.sys.country}
                    </h2>
                    <p>Температура: {weatherData.main.temp}°C</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                    <p>Влажность: {weatherData.main.humidity}%</p>
                    <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
                </div>
            )}
        </div>
    );
}