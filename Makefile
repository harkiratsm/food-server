server-setup:
	npm i

# If you wanted to run your server in development mode, you would use the following command:
docker-compose_dev:
	docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up -d

# Pushing new changes to container 
docker-compose_dev_build:
	docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up -d --build

docker-compose_dev_down:
	docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml down

# If you wanted to run your server in production mode, you would use the following command:
docker-compose_prod:
	docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml up -d

docker-compose_prod_down:
	docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml down

