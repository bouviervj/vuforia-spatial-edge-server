FROM ubuntu:18.04

RUN mkdir -p /app
WORKDIR /app


RUN apt-get update; apt-get install -y curl git

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

COPY .git ./.git/
COPY .git* ./
COPY *.js ./
COPY libraries ./libraries
COPY models ./models
COPY scripts ./scripts
COPY *.conf ./
COPY *.json ./
COPY *.sh ./

RUN npm install

RUN ls -la; \
    git submodule update --init --recursive; \
    cd addons/vuforia-spatial-core-addon; \
    npm install; \
    mkdir -p /root/Documents

RUN chmod 744 start.sh

# Start the server
EXPOSE 8080
CMD ["/bin/sh", "/app/start.sh"]


