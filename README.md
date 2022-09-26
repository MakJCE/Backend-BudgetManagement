# Backend-BudgetManagement


*BD DOCKER*

    docker run -itd --network=bridge -p 5440:5432 -e POSTGRES_PASSWORD=mysecretpassword -d -v postgres-volume:/var/lib/postgresql/data postgres

*BACKEND DOCKER*

    docker build -t full-back:0.1.0 .

    docker run -itd --network=bridge -p 8500:8500 -d -e SERVER_PORT=8500 full-back:0.1.0