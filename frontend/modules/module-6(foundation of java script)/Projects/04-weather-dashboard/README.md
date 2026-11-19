# Project 04 — Weather Dashboard

## What you will build
Build a city weather search using the free Open-Meteo geocoding and forecast APIs.

## Features
- Search by city name
- Convert a city into coordinates
- Show temperature, feels-like temperature, humidity, wind, and today's range
- Show loading, not-found, and network error messages
- No API key required

## JavaScript concepts practiced
fetch(), async and await, try/catch, URLSearchParams, JSON, API response mapping, conditional rendering.

## Run in VS Code
1. Open this project folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Keep `index.html`, `styles.css`, and `script.js` in the same folder.

**Internet connection required.** The project uses `https://geocoding-api.open-meteo.com` and `https://api.open-meteo.com`. No secret key is needed. API availability is controlled by the provider.

## Important files
- `index.html` — page structure and accessible controls.
- `styles.css` — responsive layout and visual design.
- `script.js` — application logic. Read the comments from top to bottom.

## Practice after it works
1. Add a Celsius/Fahrenheit toggle.
1. Show a five-day forecast.
1. Add a button to use the browser's geolocation API.

## Learning note
First run the project, then read one function at a time. Change a small part, refresh the browser, and observe the result. Do not only copy the code.
