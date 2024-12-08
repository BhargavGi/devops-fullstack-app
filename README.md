# DevOps Portfolio: Scalable Web Application Deployment

This project showcases a scalable web application deployment pipeline using **Docker**, **Jenkins**, **Prometheus**, and **Grafana**. The objective of this project is to demonstrate a complete DevOps workflow, including building, testing, and deploying a web application with continuous integration and monitoring.

## Overview

The project includes a basic web application with a **Node.js backend** and a **React frontend**, both containerized using **Docker**. The pipeline automates the build, test, and deploy process using **Jenkins**, while **Prometheus** and **Grafana** are used to monitor the application.

### Key Features:
- **Dockerized Backend and Frontend**: Each component of the application (frontend and backend) is containerized using Docker for isolated environments.
- **CI/CD Pipeline**: Automated build, test, and deploy process via Jenkins.
- **Monitoring**: Prometheus collects metrics, and Grafana provides a dashboard for real-time application performance monitoring.

## Tools and Technologies Used

- **Docker**: For containerizing the application (both frontend and backend).
- **Jenkins**: For automating the CI/CD pipeline (build, test, deploy).
- **Prometheus**: For monitoring and collecting application metrics.
- **Grafana**: For visualizing the data collected by Prometheus.
- **Git**: For version control and managing the codebase.
- **MySQL**: Used as the backend database for storing application data.

## Steps to Set Up the Application

### 1. **Clone the Repository**

Clone the project from GitHub to your local machine:
```bash
git clone https://github.com/yourusername/devops-portfolio.git
cd devops-portfolio/sample-web-app
