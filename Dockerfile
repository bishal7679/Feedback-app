FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN sudo npm install -g concurrently
RUN sudo npm install -g react-scripts

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
