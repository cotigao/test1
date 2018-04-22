pipeline {
    agent any
    stages {
        stage ('Checkout') {
            steps {
                checkout scm
            }
            steps {
                bash ./check.sh
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Hello world!"'
            }
        }
    }
}
