pipeline {

    agent any

    stages {

        stage("run-frontend") {

            steps {
                echo 'executing npm'
                nodejs('Node-19.1.0') {
                  sh 'npm install'
                  sh 'npm start'
                }
            }
        }

    }
}

