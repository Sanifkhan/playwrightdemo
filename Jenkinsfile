pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install browsers') {
      steps {
        sh 'npx playwright install --with-deps chromium'
      }
    }

    stage('Run Playwright tests') {
      steps {
        sh 'npx playwright test'
      }
    }
  }

  post {
    always {
      publishHTML(target: [
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report'
      ])
    }
  }
}
