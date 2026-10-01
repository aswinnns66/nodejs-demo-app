# CI/CD Pipeline Using GitHub Actions (Elevate Labs Task 1)

## Objective
Set up an automated CI/CD pipeline using GitHub Actions to test, build, and deploy a containerized Node.js application to DockerHub upon pushing to the `main` branch.

## Pipeline Architecture
1. **Trigger:** Automated trigger on `push` and `pull_request` events to the `main` branch.
2. **Job 1 (Run Unit Tests):** 
   - Checks out the repository.
   - Sets up the Node.js (v18) runtime environment.
   - Installs dependencies via `npm install`.
   - Executes unit tests with `npm test`.
3. **Job 2 (Build & Push Docker Image):** 
   - Runs conditionally after tests succeed (`needs: test`).
   - Authenticates to DockerHub using encrypted repository secrets (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`).
   - Builds the Docker image based on the custom `Dockerfile`.
   - Pushes the image to DockerHub tagged as `latest` and with the commit SHA.

## Deliverables
- **GitHub Workflow:** `.github/workflows/main.yml`
- **Application Code:** `server.js`, `test.js`, `package.json`
- **Docker Setup:** `Dockerfile`, `.dockerignore`
- **DockerHub Repository:** `https://hub.docker.com/repository/docker/aswinnns66/nodejs-demo-app`

## Verification
- GitHub Actions workflow succeeded across both testing and deployment stages.
- DockerHub registry received and hosted the published container image.
