# 🚀 HERO.IO

**HERO.IO** is a curated, responsive web-based app store that showcases productivity and lifestyle applications. It presents app details like ratings, downloads, descriptions, and review statistics in a clean, card-based interface — perfect for discovering your next favorite tool.


## ✨ Features

- 🃏 Dynamic app cards with images, titles, ratings, and download counts  
- 📊 Detailed rating breakdowns (1–5 stars with counts)  
- 🔍 Fully responsive layout (works on desktop, tablet, and mobile)  
- 🎨 Clean, modern UI with hover effects and accessible design  
- ⚡ Built with vanilla HTML, CSS, and JavaScript — no frameworks  


## 🛠️ Technologies Used

- **HTML5** – semantic markup  
- **CSS3** – Flexbox, Grid, custom properties, responsive design  
- **JavaScript (ES6+)** – dynamic rendering of app data, event handling 
- **React 18** — UI library 

No other third-party libraries are used.


## 📦 How to Run
1. Open terminal and run command:
   npm run dev
2. Clone the repository:
   git clone https://github.com/your-username/hero-io-appstore.git


## 📁 Project Structure

```
hero-io/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── apps.js              
│   ├── utils/
│   │   └── helpers.js           
│   ├── hooks/
│   │   ├── useInstall.js        
│   │   └── useToast.js          
│   ├── components/
│   │   ├── Header.jsx           
│   │   ├── Footer.jsx           
│   │   ├── AppCard.jsx          
│   │   ├── Loader.jsx           
│   │   ├── Toast.jsx            
│   │   ├── Stars.jsx            
│   │   ├── PhoneMockup.jsx      
│   │   ├── ReviewChart.jsx      
│   │   └── SortDropdown.jsx     
│   ├── pages/
│   │   ├── HomePage.jsx         
│   │   ├── AppsPage.jsx         
│   │   ├── AppDetailsPage.jsx   
│   │   ├── InstallationPage.jsx 
│   │   └── NotFoundPage.jsx     
│   ├── App.jsx                 
│   ├── main.jsx                
│   └── index.css                
├── index.html
├── vite.config.js
└── package.json
