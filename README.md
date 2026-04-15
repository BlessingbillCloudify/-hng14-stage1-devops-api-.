# HNG14 Stage 1 - DevOps Track Personal API

A simple Node.js/Express API that returns personal details and health status.

## Tech Stack
- **Language:** Node.js
- **Framework:** Express
- **Process Manager:** PM2
- **Reverse Proxy:** Nginx

## Endpoints
- `GET /`: Returns `{"message": "API is running"}`
- `GET /health`: Returns `{"message": "healthy"}`
- `GET /me`: Returns:
  ```json
  {
    "name": "Blessing Benedicta Bill",
    "email": "benedictabill20@gmail.com",
    "github": "https://github.com"
  }


