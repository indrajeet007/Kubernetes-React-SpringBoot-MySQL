FROM openjdk:10-jre-slim

RUN mkdir -p /opt/spring-crud/

COPY ./target/crud-mysql-vuejs-1.2.2-SNAPSHOT.jar /opt/spring-crud/

WORKDIR /opt/spring-crud/

EXPOSE 8080

CMD ["java", "-jar", "crud-mysql-vuejs-1.2.2-SNAPSHOT.jar"]
