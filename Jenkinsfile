pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          sh 'docker-compose build'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'docker-compose run backend npm test'
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          sh 'docker-compose up -d'
        }
      }
    }
  }
}
