pipeline {
    agent any1
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
                ansible-playbook -i ansible/hosts.ini ansible/playbook.yaml 
                """
            }
        }
    }
}
