# Deployment Guide

### Deploying Backend on Google Cloud Platform (GCP)

1. **Setup GCP:** Create a new project on [Google Cloud Platform](https://console.cloud.google.com/).
2. **Deploy Backend:**
   - Set up a **Google App Engine** or **Compute Engine**.
   - Deploy your Node.js backend using the following command:
     ```bash
     gcloud app deploy
     ```

### Deploying Frontend on Vercel

1. **Setup Vercel:** Create a new Vercel project from [Vercel](https://vercel.com/).
2. **Deploy Frontend:**
   - Connect your GitHub repository.
   - Select the frontend folder and deploy.
   - Vercel will automatically handle the deployment of your React app.
