#!groovy
@Library('blockr-jenkins-lib') _

String repo = "blockr-models"

Map settings = [
    sonar_key: 'blockr-models',
    source_folder: 'src/',
    archive_folders: ['dist/']
]

tsBuildAndPublish(repo, settings)
