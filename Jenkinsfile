pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Install dependencies'){
      steps{
      sh 'npm install'
      
      }
    }
        stage('Build') { 
            steps {
                
                sh 'npm build'
            }
        }
    }

}
