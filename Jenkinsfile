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
                    REMOTE_CHANGES= sh (
                        script: '''
                                    cd /var/www/html/
                                    sudo git fetch
                                    git rev-list --count HEAD..@{u}; behind_count=$?
                                    if $behind_count != 0; then echo "false"; else echo "true"; fi
                                ''',
                        returnStdout: true
                    ).trim()

                    if (REMOTE_CHANGES == "true") {
                        echo "No pulls required"
                    }else{
                        env.TOKEN = input message: 'Please enter the token',parameters: [string(defaultValue: '',description: '',name: 'Token')]

                        GIT_PULL = sh (
                            script: """
                                        cd /var/www/html/
                                        sudo git remote set-url origin https://${env.TOKEN}@github.com/doron-cassell-400004520/NginxVbox.git
                                        sudo git pull

                                    """,
                                    returnStdout: true
                        ).trim()
                        echo "${GIT_PULL}"
                    }

                    LOCAL_CHANGES = sh (
                        script: '''
                                    cd /var/www/html/
                                    git diff --quiet; nochanges=$?
                                    echo $nochanges
                                ''',
                        returnStdout: true
                    ).trim()

                    if (LOCAL_CHANGES == '0') {
                        echo "Push not required"
                    }else{
                        env.COMMIT_MESSAGE = input message: 'Please enter the commit message',parameters: [string(defaultValue: '',description: '',name: 'Commit')]
                        env.TOKEN = input message: 'Please enter the token',parameters: [string(defaultValue: '',description: '',name: 'Token')]

                        GIT_PUSH = sh (
                            script: """
                                        cd /var/www/html/
                                        sudo git remote set-url origin https://${env.TOKEN}@github.com/doron-cassell-400004520/NginxVbox.git
                                        sudo git add .
                                        sudo git commit -m "${env.COMMIT_MESSAGE}"
                                        sudo git push origin islandMovers
                                    """,
                            returnStdout: true
                        ).trim()
                        echo "${GIT_PUSH}"
                    }
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