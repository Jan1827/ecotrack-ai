# 🌱 EcoTrack AI

AI-powered Carbon Footprint Calculator built with Next.js, Gemini AI, Recharts, and jsPDF.

## 📌 Overview

EcoTrack AI helps users understand and reduce their environmental impact by calculating carbon emissions from:

* ⚡ Electricity Consumption
* 🚗 Transportation Usage
* ✈️ Air Travel

The application provides personalized sustainability insights using Google Gemini AI, visual emission breakdowns, carbon scoring, sustainability goal tracking, and downloadable PDF reports.

Built for the Hack2Skill Virtual PromptWars Challenge.

---

## 🚀 Live Demo

**Vercel Deployment:**
https://ecotrack-ai-green.vercel.app

---

## 💻 GitHub Repository

https://github.com/Jan1827/ecotrack-ai

---

## ✨ Features

### Carbon Footprint Calculator

Calculate estimated carbon emissions based on:

* Electricity Units Consumed
* Vehicle Kilometers Travelled
* Number of Flights Taken

### AI Sustainability Coach 🤖

Powered by Google Gemini AI.

Generates personalized recommendations to:

* Reduce emissions
* Improve sustainability habits
* Encourage eco-friendly practices

### Carbon Score System

Users are categorized into:

| Score          | Category        |
| -------------- | --------------- |
| < 200 kg CO₂   | Green Hero 🟢   |
| 200–399 kg CO₂ | Eco Explorer 🟡 |
| ≥ 400 kg CO₂   | Carbon Heavy 🔴 |

### Sustainability Goal Tracker 🎯

Tracks progress toward maintaining emissions below the sustainability target.

### Emission Analytics 📊

Interactive Pie Chart displaying:

* Electricity Emissions
* Transportation Emissions
* Flight Emissions

### PDF Report Generation 📄

Generate and download a sustainability report containing:

* Total Carbon Footprint
* Carbon Score
* Sustainability Summary

---

## 🛠 Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### AI Integration

* Google Gemini API

### Visualization

* Recharts

### PDF Generation

* jsPDF

### Testing

* Jest
* React Testing Library

### Deployment

* Vercel

---

## 🏗 Architecture

User Input
↓
Carbon Emission Calculation
↓
Emission Breakdown
↓
Carbon Score Analysis
↓
Goal Tracking
↓
Gemini AI Insights
↓
PDF Report Generation

---

## 🔒 Security Features

* Environment Variables for API Keys
* Input Validation
* Protection Against Negative Inputs
* Realistic Value Constraints
* Server-side AI Requests

---

## ♿ Accessibility Improvements

* Semantic Headings
* Accessible Form Labels
* ARIA Labels for Interactive Elements
* Improved Component Structure
* Better Screen Reader Support

---

## 🧪 Testing

The project includes unit tests using Jest and React Testing Library.

### Covered Components

✅ CarbonScore

✅ GoalTracker

✅ CarbonChart

✅ StatsCards

✅ AIInsights

✅ DownloadReport

✅ Carbon Calculation Utility

### Current Status

* 14+ Passing Tests
* 6 Test Suites Passing

### Run Tests

```bash
npm test
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/Jan1827/ecotrack-ai.git
```

### Navigate to Project

```bash
cd ecotrack-ai
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create:

```env
.env.local
```

Add:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗 Build for Production

```bash
npm run build
```

---

## 📈 Future Enhancements

* User Authentication
* Historical Carbon Tracking
* Weekly Sustainability Reports
* Carbon Offset Recommendations
* Community Leaderboards
* Personalized Sustainability Challenges

---

## 🎯 Hackathon Submission

### Challenge

Hack2Skill Virtual PromptWars

### Theme

AI-Powered Sustainability Assistant

### Objective

To help users understand, visualize, and reduce their carbon footprint using AI-driven insights and sustainability analytics.

---

## 👩‍💻 Author

**Janhavi Ojha**

LinkedIn:
https://www.linkedin.com/in/janhavi-ojha-9baa53417/

GitHub:
https://github.com/Jan1827

---

## 🌍 Making Sustainability Smarter with AI

Track. Analyze. Improve. Sustain.
