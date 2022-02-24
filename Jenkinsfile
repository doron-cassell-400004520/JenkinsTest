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
                
                script{
                    GIT_BRANCH = sh (
                        script: '''
                                    cd /var/www/html/
                                    git branch
                                ''',
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