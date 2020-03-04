pipeline {
  stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm test'
                sh 'npm build'
            }
        }
    }

}
