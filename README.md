# nginx-proxy-on-docker

This template shows how to serve frontend and backend services which run as separated containers through a single port by the nginx reverse proxy.
The template consists of a nodejs backend and a static html frontend and they can accessed with these endpoints:

for frontend: http://localhost:8080
for backend: http://localhost:8080/api

to run the template:
$ docker-compose up
