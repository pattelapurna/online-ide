FROM openjdk:8-alpine

WORKDIR /app

COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

ENTRYPOINT ["/bin/sh", "/app/run.sh"]