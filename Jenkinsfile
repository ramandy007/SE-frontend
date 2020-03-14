pipeline {
  agent any
  tools {nodejs "node"}
  environment {CI='true'}
  
  stages {
     stage('SonarQube Analysis') {
     
    steps{script{
      
      env.home = tool name: 'Sonar_Qube', type: 'hudson.plugins.sonar.SonarRunnerInstallation';

     withSonarQubeEnv(credentialsId: 'sonarqube-secret',installationName:'sonarqube') {
    
       
      sh "${home}/bin/sonar-scanner   -Dsonar.host.url=http://electivemanagement.eastus.cloudapp.azure.com:9000 \ -Dsonar.login=admin -Dsonar.password=admin"};
    }}

}
    stage('Install dependencies'){
      steps{
      sh 'npm install'
      
      }
    }
  
        

    //     stage('SonarQube analysis') {
    // steps{ scannerHome = tool 'Sonar_Qube';
    // withSonarQubeEnv('sonarqube') { // If you have configured more than one global server connection, you can specify its name
    //   sh "${scannerHome}/bin/sonar-scanner"}
    // }}
    
    stage("test"){steps {sh 'npm test'}}
        stage('Build') { 
            steps {
                
                sh 'npm build'
            }
        }
    }

}
