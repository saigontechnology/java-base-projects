# Java-Postgres-Keycloak
## Setting up locally
###### Install PostgreSQL, MySQL and Keycloak version of 22.0.0
```
docker-compose up -d
```
##### User Credential
##### Role User
```
username: khoa
passord: P@ssword123
```
##### Admin User
```
username: thanh
passord: P@ssword123
```
##### Getting token from keycloak
```
curl --location --request POST 'http://localhost:8080/auth/realms/saigontechnology/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: OAuth_Token_Request_State=8e9ab695-56cb-4b35-aadf-c57165710be0' \
--data-urlencode 'client_id=javabasekeycloak' \
--data-urlencode 'username=khoa' \
--data-urlencode 'password=P@ssword123' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_secret=BptM4xBN9vUSvaGsKzvkoGSE3PMEdpWE'
```
##### Swagger
http://localhost:8181/api/swagger-ui.html#/
##### Postman
```
documents/springbootkeycloak.postman_collection.json
```