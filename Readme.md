# GemAura

A full-stack gemstone recommendation application that suggests personalized gemstones based on a user's zodiac sign and primary life concern.

## Features

* Personalized gemstone recommendations
* Rule-based recommendation engine
* Recommendation history
* Search and filter recommendations
* Dashboard with statistics
* Responsive user interface
* Form validation
* SQLite local database storage

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* SQLite

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000/
```

## Environment Variables

### Backend (.env)

```env
PORT=5000
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## API Endpoints

### Generate Recommendation

```http
POST /api/recommend
```

### Get All Recommendations

```http
GET /api/recommendations
```

### Get Recommendation By ID

```http
GET /api/recommendations/:id
```

### Delete Recommendation

```http
DELETE /api/recommendations/:id
```

### Dashboard Statistics

```http
GET /api/dashboard/stats
```

## Project Structure

```text
GemAura/

├── frontend/
├── backend/
├── README.md
├── AI_USAGE.md
```

## Recommendation Rules

Examples:

* Aries + Career → Ruby
* Taurus + Wealth → Emerald
* Gemini + Education → Emerald
* Cancer + Health → Pearl
* Leo + Career → Ruby
* Libra + Marriage → Diamond
* Scorpio + Business → Red Coral
* Sagittarius + Career → Yellow Sapphire
* Capricorn + Wealth → Blue Sapphire
* Aquarius + Technology → Amethyst
* Pisces + Health → Pearl

## Future Improvements

* User Authentication
* Admin Dashboard
* AI-Based Recommendations
* PDF Reports
* Email Notifications
* Cloud Database Support

## License

This project is created for learning and demonstration purposes.
