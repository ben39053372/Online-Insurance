git pull
yarn build
docker stop insurance-nginx
docker rm insurance-nginx
docker build -t insurance-nginx .
docker run -p 8080:80 -p 8443:443 -d --name insurance-nginx insurance-nginx