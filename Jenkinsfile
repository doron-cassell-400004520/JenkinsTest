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
                sh 'git remote set-url origin https://github.com/doron-cassell-400004520/NginxVbox.git'
            }
        }
        stage('Run Functional Test') {
            steps {
                echo 'Testing'
                sh 'cd'
                sh 'node /home/doron-nginx/Documents/JenkinsTest/index.js'
            }
        }
    }
}