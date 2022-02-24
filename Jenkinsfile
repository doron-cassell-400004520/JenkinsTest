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

                sh 'cd /var/www/html/'
                sh 'git remote set-url origin https://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@github.com/doron-cassell-400004520/NginxVbox.git'
                script{
                    GIT_BRANCH = sh (
                        script: 'git branch',
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