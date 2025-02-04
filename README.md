# 🎬 Movie Lover  

## 🌐 Live Site  
[Movie Lover](https://movie-lover-a62ea.web.app/)  

## 📌 Introduction  

**Movie Lover** is a dynamic platform that provides users with an interactive experience to explore and manage their favorite movies. The website features seamless authentication, secure data operations, and engaging UI elements to enhance user engagement.

---

## 📖 Table of Contents  

- [Introduction](#introduction)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Configuration](#configuration)  
- [Dependencies](#dependencies)  
- [Development](#development)  
- [License](#license)  

---

## ✨ Features  

✔ **Email & Password Authentication** – Secure user login and registration.  
✔ **Google Login Integration** – Quick access using Google authentication.  
✔ **Password Recovery** – Hassle-free password reset option.  
✔ **HTTP Operations**:  
   - **POST** – Handles data submission.  
   - **PUT** – Updates existing data.  
   - **DELETE** – Ensures secure data deletion.  
✔ **Interactive Toast Notifications** – Enhances user experience with real-time alerts.  

---

## ⚙️ Installation  

### Prerequisites  

Ensure you have the following installed:  

- [Node.js](https://nodejs.org/) (Recommended: v16+)  
- [Vite](https://vitejs.dev/)  
- [Firebase Account](https://firebase.google.com/)  

### Steps  

1. **Clone the Repository**  
   ```sh
   git clone https://github.com/Shazzad501/movie-lover.git
   cd movie-lover
   ```

2. **Install Dependencies**  
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and configure it as follows:  

   ```env
   VITE_apiKey=your-firebase-api-key
   VITE_authDomain=your-firebase-auth-domain
   VITE_projectId=your-firebase-project-id
   VITE_storageBucket=your-firebase-storage-bucket
   VITE_messagingSenderId=your-firebase-messaging-sender-id
   VITE_appId=your-firebase-app-id
   ```

   **⚠️ Keep this file private! Do not share it publicly.**  

4. **Run the Development Server**  
   ```sh
   npm run dev
   ```

5. **Build for Production**  
   ```sh
   npm run build
   ```

---

## 🚀 Usage  

- **User Authentication** – Sign up and log in using email/password or Google.  
- **Movie Management** – Add, update, and delete movie-related data.  
- **Review & Rating System** – Users can provide feedback on movies.  
- **Password Recovery** – Easily recover lost passwords.  
- **Engaging UI** – Smooth animations with `AOS` and `react-lottie-player`.  

---

## 🔧 Configuration  

The platform is integrated with Firebase for authentication and database management. Ensure you configure the `.env` file with your Firebase credentials.  

---

## 📦 Dependencies  

The project uses the following dependencies:  

### **Main Dependencies**  
- React (`18.3.1`)  
- React Router DOM (`7.0.2`)  
- Firebase (`11.0.2`)  
- React Hook Form (`7.54.0`)  
- AOS Animations (`2.3.4`)  
- React Icons (`5.4.0`)  
- SweetAlert2 (`11.14.5`)  
- Typewriter Effect (`2.21.0`)  

### **Development Dependencies**  
- Vite (`6.0.1`)  
- ESLint (`9.15.0`)  
- Tailwind CSS (`3.4.15`)  
- DaisyUI (`4.12.14`)  
- PostCSS (`8.4.49`)  

To install all dependencies, run:  
```sh
npm install
```

---

## 🎨 Development  

### **Linting & Formatting**  
Run ESLint to check for code quality issues:  

```sh
npm run lint
```

### **Run Development Server**  
```sh
npm run dev
```

### **Build for Production**  
```sh
npm run build
```

---

## 📜 License  

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for more details.  

---

## 👨‍💻 Contributors  

- Shazzad Maruf – Creator & Maintainer  

---








