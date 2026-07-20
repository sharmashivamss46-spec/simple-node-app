pipeline {

    agent any

    environment {
        IMAGE_NAME = "simple-node-app"
        CONTAINER_NAME = "simple-node-container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/sharmashivamss46-spec/simple-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 3000:3000 \
                $IMAGE_NAME
                '''
            }
        }

    }

}
