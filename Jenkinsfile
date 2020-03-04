pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('test'){
      steps{
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
