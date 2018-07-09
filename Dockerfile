FROM node

# Create app directory
WORKDIR /app/

# Install app dependencies
COPY package*.json /app/

# Install app dependencies
RUN cd /app && \
    npm install

# Bundle app source
COPY . /app/
    
# Start building project 
RUN npm run build:prod

# Start server
CMD [ "node", "server.js" ]

