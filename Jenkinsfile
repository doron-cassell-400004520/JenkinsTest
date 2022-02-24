pipeline {

    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install node'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'node index.js'
            }
        }
    }
}