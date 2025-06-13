# SiteScope

## Backend Repo
https://github.com/MattSanchez77/SiteScopeBE.git

**Stay ahead of the build.**

SiteScope is a full-stack MERN web application that allows users to search by ZIP code and discover current or upcoming construction projects in Colorado. The app empowers residents, business owners, and curious neighbors to stay informed about what’s being built in their communities.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Planning](#project-planning)
- [Getting Started](#getting-started)
- [API Routes](#api-routes)
- [Data Model](#data-model)
- [Features](#features)
- [Future Enhancements](#future-enhancements)
- [Screenshots](#screenshots)

---

## Project Overview

**SiteScope** gives users a searchable view of construction activity by ZIP code. It pulls from a local MongoDB database seeded with project data and displays it through a clean, React-based interface.

This project was built to demonstrate full-stack development skills using the MERN stack.

---

## ⚙️ Tech Stack

- **Frontend:** React (Vite), React-Router-DOM, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Testing:** Thunder Client
- **Deployment:** (To be added — e.g. Render)

---

## Project Planning

### Goals
- Build a fully functional full-stack MERN application
- Display real-time or mock construction project data
- Enable search and filtering by ZIP code
- Create a clean, usable frontend UI


### CRUD Routes
| Method | Route               | Description                       |
| ------ | ------------------- | --------------------------------- |
| GET    | `/api/projects`     | Get all projects or filter by ZIP |
| GET    | `/api/projects/:id` | Get one project by ID             |
| POST   | `/api/projects`     | Create a new project              |
| PUT    | `/api/projects/:id` | Update a project                  |
| DELETE | `/api/projects/:id` | Delete a project                  |


### 🧠 Data Model (Mongoose)
```js
{
  name: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  type: String,       // Restaurant, Pharmacy, etc.
}