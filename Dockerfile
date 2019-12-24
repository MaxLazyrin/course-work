FROM nginx:alpine
COPY index.html /var/lib/www/index.html
COPY pages /var/lib/www/
COPY nginx.conf /etc/nginx/nginx.conf
RUN ls -al /var/lib/www
