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
        stage ('Deploy') {
            steps {
                sh """
                #!/bin/bash
                ***REMOVED*** -i ansible/hosts.ini ansible/playbook.yaml 
                """
            }
        }
    }
}
