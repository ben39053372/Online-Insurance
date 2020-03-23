git pull
docker stop insurance-nginx
docker rm insurance-nginx
docker build -t insurance-nginx
docker run -p 8080:80 -d --name insurance-nginx insurance-nginx