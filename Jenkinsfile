pipeline {
    agent any
    stages {
        stage ('Setup') {
            steps {
                sh """
                #!/bin/bash
                apt-get install -y ansible"""
            }
        }
        stage ('Checkout') {
            steps {
                sh """
                #!/bin/bash
                date
                git diff --name-only HEAD^..HEAD"""
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Hello world!"'
            }
        }
    }
}
