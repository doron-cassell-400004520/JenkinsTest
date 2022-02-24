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
                sh 'git remote set-url origin https://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@github.com/doron-cassell-400004520/NginxVbox.git'
                script{
                    GIT_BRANCH = sh (
                        script: 'ls',
                        returnStdout: true
                    ).trim()
                    echo "${GIT_BRANCH}"
                }
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