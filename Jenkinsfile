pipeline {

    agent any

    stages {
        stage('Git') {
            steps {
                echo 'Status'
                sh 'cd /var/www/html/'
                sh 'git status'
            }
        }
        stage('Application Development') {
            steps {
                echo 'loading'
                sh 'git push'
            }
        }
        stage('Run Functional Test') {
            steps {
                echo 'Testing'
                sh 'cd'
                sh 'node Documents/JenkinsTest/index.js'
            }
        }
    }
}