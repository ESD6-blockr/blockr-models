#!groovy
@Library('blockr-jenkins-lib') _

String repo = "blockr-models"

Map settings = [
    sonar_key: 'blockr-models',
    sonar_exclusions: '**/__tests__/**/*,**/**/index.ts',
    source_folder: 'src/',
    archive_folders: ['dist/']
]

tsBuildAndPublish(repo, settings)
