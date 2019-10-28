# Docker image base
FROM node:erbium-slim

# Environment
ENV LANG=C.UTF-8
ENV INSTALL_PATH /app

# Dump context
RUN node -v && npm -v

# Base packages
RUN mkdir -p ${INSTALL_PATH}/
WORKDIR ${INSTALL_PATH}/

# Install Node modules
COPY package*.json ./

# Dependencies
RUN npm ci --production

# Add app code with deps
COPY . .

# App config
EXPOSE 2000
CMD [ "npm", "start" ]
