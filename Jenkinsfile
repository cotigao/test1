pipeline {
    agent any
    stages {
        stage ('Checkout') {
            steps {
                bash """
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
