pipeline {
    agent any
    stages {
        stage ('Checkout') {
            steps {
                checkout scm
            }
            steps {
                ./check.sh
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Hello world!"'
            }
        }
    }
}
