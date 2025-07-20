# Web Component Library: Environment Setup

Built using React (Next.js) and Storybook, this project features a responsive web component library that includes buttons, text, tables, images, and more. The application is containerized with Docker and serves the production build on localhost:8083.

## Prerequisites
- Ensure [Docker](https://www.docker.com/get-started) is installed on your machine.

---

## Steps to Run the Application

### 1. Clone the Repository

Clone this project repository and navigate to its directory:

```bash
git clone https://github.com/jli33-rrc/li_jenna_coding_assignment12.git
cd li_jenna_coding_assignment12
```

### 2. Build the Docker Image

Build the Docker Image by using the following command:

```bash
docker build -f Dockerfile.prod -t li_jenna_coding_assignment12 .
```

### 3. Run the Docker Container

Run the Docker Container by using the following command:

```bash
docker run -p 8083:8083 --name li_jenna_coding_assignment12 li_jenna_coding_assignment12
```

### 4. Access the Application

Once the container starts successfully, you can access the application in your web browser at:

- Local: (http://localhost:8083)