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
                TOKEN = read -p
                script{
                    GIT_BRANCH = sh (
                        script: '''
                                    cd /var/www/html/
                                    sudo git remote set-url origin https://'''${TOKEN}'''@github.com/doron-cassell-400004520/NginxVbox.git
                                    sudo git push origin islandMovers
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
                script{
                    TEST_RESULTS = sh (
                        script: '''
                                    ls
                        ''',
                        returnStdout: true
                    ).trim()
                    echo "${TEST_RESULTS}"
                }
            }
        }
    }
}