CLIENT_DIR=./client
BACKEND_DIR=./mailer
BUILD_PATH=./client/dist
MSG="Warning client not build run 'make build'!!!"

all: client backend

client: ${BUILD_PATH}

${BUILD_PATH}: 
	npm --prefix ${CLIENT_DIR} run build

backend:
	@if [ -d ${BUILD_PATH} ]; then \
		echo "Client Exist"; \
	else \
		echo "\e[1;33m${MSG}\e[0m"; \
	fi
	node ${BACKEND_DIR}

clean:
	rm -rf ${BUILD_PATH}