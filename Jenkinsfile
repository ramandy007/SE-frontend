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
     
    // steps{sh "/home/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqubescanner/bin/sonar-scanner -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.projectName=Se_front_end_jenkins -Dsonar.projectVersion=1.0 -Dsonar.projectKey=jenkins_front_end:app -Dsonar.sources=/var/lib/jenkins/workspace/$JOB_NAME "}
    steps{
      // def scannerHome=tool  'Sonar_Qube';
      tool name: 'Sonar_Qube', type: 'hudson.plugins.sonar.SonarRunnerInstallation'

     withSonarQubeEnv(credentialsId: 'sonarqube-secret',installationName:'sonarqube') {
      sh "${name}/bin/sonar-scanner -Dsonar.login=admin -Dsonar.password=admin"}
    }

}
        
    
    stage("test"){steps {sh 'npm test'}}
        stage('Build') { 
            steps {
                
                sh 'npm build'
            }
        }
    }

}
