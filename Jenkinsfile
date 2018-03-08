node {
    docker.withRegistry('vmandale/nodetest', 'DockerHub') {
    
        git url: "https://github.com/vmandale/nodejs_app_k8_demo-remname.git/", credentialsId: 'GitHub'
    
        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id
    
        stage "build"
        def app = docker.build "nodejs-app-demo"
    
        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}
