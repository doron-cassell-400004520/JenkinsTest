pipeline {

    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Git') {
            steps {
                script{
                    env.TOKEN = sh (
                        script: '''
                                    cat /home/doron-nginx/Documents/token.txt
                                ''',
                        returnStdout: true
                    ).trim()
                    
                    echo "Checking remote"
                    REMOTE_CHANGES = sh (
                        script: '''
                                    cd /var/www/html/
                                    sudo git fetch
                                    git rev-list --count HEAD..@{u}; behind_count=$?
                                    if $behind_count != 0; then echo false; else echo true; fi
                                ''',
                        returnStdout: true
                    ).trim()

                    if (REMOTE_CHANGES) {
                        echo "No pulls required"
                    }else{
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

                    echo "Checking local"
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
        stage('Application Development') {
            steps {
                echo 'loading'
                
                
            }
        }
        stage('Run Functional Test') {
            steps {
                echo 'Testing'
                script{
                    TEST_RESULTS = sh (
                        script: '''
                                    npm install
                                    npm install selenium-webdriver
                                    node Documents/JenkinsTest/index.js
                        ''',
                        returnStdout: true
                    ).trim()
                    echo "${TEST_RESULTS}"
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}