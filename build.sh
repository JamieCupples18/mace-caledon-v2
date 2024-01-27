docker build -t macecaledon-api:latest src/Backend/.;
docker build -t macecaledon-frontend:latest src/Frontend/mace-frontend/.;

cd src; docker-compose up