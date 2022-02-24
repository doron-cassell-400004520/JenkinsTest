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
                sh 'git remote add origin https://github.com/doron-cassell-400004520/NginxVbox.git'
                sh 'git push origin islandMovers'
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