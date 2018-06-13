FROM node:6.11.2
EXPOSE 8080

WORKDIR /app

ADD package.json /app/
# RUN npm install
# RUN apt-get install -y curl
# RUN apt-get update && apt-get install --yes curl && curl -sL https://deb.nodesource.com/setup_6.x | -E bash - && apt-get install -y nodejs && apt-get install -y npm
# RUN apt-get install libkrb5-dev
RUN npm install --only=prod
# RUN npm rebuild

ADD . /app

CMD ["node", "server"]
