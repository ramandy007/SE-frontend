pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('test'){
      steps{
      sh 'npm install'
      sh 'npm test'
      }
    }
        stage('Build') { 
            steps {
                
                sh 'npm build'
            }
        }
    }

}
