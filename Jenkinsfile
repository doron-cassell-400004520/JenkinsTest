pipeline {

    agent any

    stages {
        stage('Git') {
            steps {
                echo 'Status'
                sh 'git status'
            }
        }
        stage('Application Development') {
            steps {
                echo 'loading'
                
                sh 'git remote set-url origin https://github.com/doron-cassell-400004520/NginxVbox.git'
                script{
                    sh 'cd /var/www/html/'
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
                script{
                    TEST_RESULTS = sh (
                        script: 'node /home/doron-nginx/Documents/JenkinsTest/index.js',
                        returnStdout: true
                    ).trim()
                    echo "${TEST_RESULTS}"
                }
            }
        }
    }
}