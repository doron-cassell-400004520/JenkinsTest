pipeline {

    agent any

    stages {
        stage('Git') {
            steps {
                echo 'Pulling'
                sh 'git pull'
            }
        }
        stage('Application Development') {
            steps {
                echo 'loading'
                sh 'git push'
            }
        }
    }
}