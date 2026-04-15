# HNG14 Stage 1 - DevOps Track Personal API

## 1. What the project is and how to run it locally
This is a simple Personal API built for the HNG12 DevOps Track Stage 1. It provides basic information about the developer and health status of the service.

**To run locally:**
1. Clone this repository: `git clone <your-repo-link>`
2. Install Node.js if not already installed.
3. Install dependencies: `npm install`
4. Start the app: `node app.js`
5. The API will be available at `http://localhost:3000`

## 2. The three endpoints and their expected responses

- **GET /**
  - Response: `{"message": "API is running"}`
- **GET /health**
  - Response: `{"message": "healthy"}`
- **GET /me**
  - Response: 
    ```json
    {
      "name": "Blessing Benedicta Bill",
      "email": "benedictabill20@gmail.com",
      "github": "https://github.com/BlessingbillCloudify"
    }
    ```

## 3. Live Deployment URL
Live API: [http://51.21.30.243](http://51.21.30.243)

