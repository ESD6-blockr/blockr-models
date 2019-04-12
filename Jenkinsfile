#!groovy
@Library('blockr-jenkins-lib') _

Map sonarSettings = [
    key: "blockr-models",
    source: "src/",
    host: "https://sonarqube.naebers.me"
]

tsBuildAndPublish(sonarSettings)
