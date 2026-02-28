# ✈️ Airline Management System

> Industry-level airline booking system with AI/ML features

## 🏗️ Tech Stack

**Frontend:** Next.js 14, TypeScript, Tailwind CSS, ShadCN UI  
**Backend:** Node.js, Express, TypeScript (Microservices)  
**Database:** PostgreSQL, Redis, MongoDB  
**AI/ML:** Python, FastAPI, TensorFlow, XGBoost  
**DevOps:** Docker, Kubernetes, AWS, GitHub Actions

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.9+ ([Download](https://www.python.org/)) - *Optional for ML features*
- **Docker** ([Download](https://www.docker.com/)) - *Optional for databases*

### Installation

**1️⃣ Clone the repository:**

```bash
git clone https://github.com/YOUR_USERNAME/airline-management-system.git
cd airline-management-system
```

**2️⃣ Install all dependencies (ONE COMMAND!):**

```bash
npm install
```

✨ **That's it!** This will:
- Install all frontend dependencies
- Install all backend service dependencies
- Setup Python environment (if Python is installed)
- Create .env files from examples

**3️⃣ Start databases (Docker):**

```bash
npm run docker:up
```

**4️⃣ Start all services:**

```bash
npm run dev:all
```

---

## 📜 Available Commands

```bash
# Install everything
npm install                 # Installs ALL dependencies

# Development
npm run dev:frontend        # Start frontend only (Port 3000)
npm run dev:backend         # Start all backend services
npm run dev:all            # Start everything at once

# Individual services
npm run dev:gateway        # API Gateway (Port 5000)
npm run dev:user          # User Service (Port 5001)
npm run dev:flight        # Flight Service (Port 5002)
npm run dev:booking       # Booking Service (Port 5003)
npm run dev:payment       # Payment Service (Port 5004)

# Build for production
npm run build              # Build everything

# Docker
npm run docker:up          # Start databases
npm run docker:down        # Stop databases
npm run docker:logs        # View logs
```

---

## 🌐 Service Ports

| Service | Port | URL |
|---------|------|-----|
| Frontend | 3000 | http://localhost:3000 |
| API Gateway | 5000 | http://localhost:5000 |
| User Service | 5001 | http://localhost:5001 |
| Flight Service | 5002 | http://localhost:5002 |
| Booking Service | 5003 | http://localhost:5003 |
| Payment Service | 5004 | http://localhost:5004 |
| Pricing Service | 5005 | http://localhost:5005 |
| Recommendation | 5006 | http://localhost:5006 |
| Notification | 5007 | http://localhost:5007 |
| Admin Service | 5008 | http://localhost:5008 |

---

## 🗄️ Database Setup

**Using Docker (Recommended):**

```bash
npm run docker:up
```

This starts:
- PostgreSQL (Port 5432)
- Redis (Port 6379)
- MongoDB (Port 27017)
- Kafka (Port 9092)

---

## 🔐 Environment Variables

After `npm install`, configure the `.env` files:

**Frontend:** `frontend/.env.local`
**Backend Services:** `backend/services/[service-name]/.env`

Update database credentials and API keys as needed.

---

## 👥 Team

- **Your Name** - Full Stack Developer
- **Partner Name** - Full Stack Developer

---

## 📧 Support

If you encounter any issues, please open an issue or contact the team.

---

## 📝 License

MIT License
```