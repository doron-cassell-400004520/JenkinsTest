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
                                    git remote set-url origin https://github.com/doron-cassell-400004520/NginxVbox.git
                                    git push origin islandMovers
                                    doron-cassell-400004520
                                    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
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
                        script: 'ls',
                        returnStdout: true
                    ).trim()
                    echo "${TEST_RESULTS}"
                }
            }
        }
    }
}