FROM openjdk:8-alpine

WORKDIR /app

COPY Docker/java-runner/run.sh /app/run.sh
RUN chmod +x /app/run.sh

ENTRYPOINT ["/bin/sh", "/app/run.sh"]