pipeline {
  agent any
  tools {nodejs "node"}
  environment {CI='true'}
  stages {
    stage('Install dependencies'){
      steps{
      sh 'npm install'
      
      }
    }
    stage('SonarQube Analysis') {
        sh "/home/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqubescanner/bin/sonar-scanner -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.projectName=SE-frontend-Jenkins -Dsonar.projectVersion=1.0 -Dsonar.projectKey=Jenkins-frontend:app -Dsonar.sources=. -Dsonar.projectBaseDir=/home/jenkins/workspace/build_test"
    }
    
    stage("test"){steps {sh 'npm test'}}
        stage('Build') { 
            steps {
                
                sh 'npm build'
            }
        }
    }

}
