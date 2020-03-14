pipeline {
  agent any
  tools {nodejs "node"}
  environment {CI='true'}
  
  stages {
     stage('SonarQube Analysis') {
     
    // steps{sh "/home/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqubescanner/bin/sonar-scanner -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.projectName=Se_front_end_jenkins -Dsonar.projectVersion=1.0 -Dsonar.projectKey=jenkins_front_end:app -Dsonar.sources=/var/lib/jenkins/workspace/$JOB_NAME "}
    steps{
      // def scannerHome=tool  'Sonar_Qube';
      def home=tool name: 'Sonar_Qube', type: 'hudson.plugins.sonar.SonarRunnerInstallation';

     withSonarQubeEnv(credentialsId: 'sonarqube-secret',installationName:'sonarqube') {
      //  println home;
       
      sh "${home}/bin/sonar-scanner -Dsonar.host.url=${SONAR_HOST_URL} -Dsonar.login=admin -Dsonar.password=admin"};
    }

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
