
# Hotel Booking Website

## Overview
This project is a hotel booking website built using the MERN stack. As my first project, the primary focus was on frontend development, creating an attractive and user-friendly interface using SCSS. The backend is designed to store and manage details about hotel rooms. Users can browse and view available rooms, providing a seamless experience for potential guests.

## Features
- **Frontend Development:** Focused on building an engaging UI using React and SCSS.
- **Backend:** A small backend built with Node.js and Express.js to store hotel room details.
- **Room Browsing:** Users can browse and view hotel rooms, with detailed information available for each room.
- **Responsive Design:** Ensures a smooth experience across various devices.

## Technologies Used
- **Frontend:** React, SCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Screenshots
### Homepage
![Screenshot (239)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/4e9ca4eb-4051-4491-859d-38d6e48effb5)
![Screenshot (240)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/b1f8105a-7fba-4724-8bd2-1513dfaf9bae)
![Screenshot (241)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/7bc3bf44-4c6e-4c94-95ae-6546038d1037)
![Screenshot (242)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/6f51b030-61be-4297-9215-2aab8567ac86)

### Rooms Page
![Screenshot (243)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/8e3c4968-b609-4143-b850-479b21523a77)

### Room Page
![Screenshot (244)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/f4069a44-02ad-4221-b35b-a1dd2d496b6b)
![Screenshot (245)](https://github.com/Hirak7024/Hotel-Booking-Personal-Project/assets/118119209/26b0af3c-359a-4b9e-a583-ce61d0b171db)

## Deployment
The project is deployed and can be accessed [here](https://hotel-booking-personal-project-1.vercel.app/).

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Hirak7024/Hotel-Booking-Personal-Project.git
   cd Hotel-Booking-Personal-Project
   ```

2. **Set up the server:**
   ```sh
   cd server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following variables:
   ```env
   MONGO_CONNECTION = your_mongodb_connection_string
   ```

4. **Start the backend:**
   ```sh
   npm run dev
   ```

5. **Set up the client:**
   ```sh
   cd ../client
   npm i react-scripts
   npm start
   ```
