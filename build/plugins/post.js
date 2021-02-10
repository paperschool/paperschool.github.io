const fs = require("fs");
const path = require("path");
const copyDirectory = require("copy-dir");

class PostManifestAndCopyWebpackPlugin {

    constructor({ postsLocation }){
        if(typeof postsLocation === undefined){
            throw new Error("PostManifestAndCopyWebpackPlugin - missing posts location")
        }
        this.postsLocation = path.resolve(postsLocation);
    }

    log(...messages){
        console.log(`${this.constructor.name}: ${messages}`);
    }

    generatePostManifest() {

        const postManifest = { 
            created: Date.now(),
            posts: [] 
        };

        fs.readdirSync(this.postsLocation).forEach(postFolder => {             
            fs.readdirSync(path.resolve(this.postsLocation,postFolder)).forEach(post => {
               if(post.endsWith(".json")){
                   postManifest.posts.push(postFolder);
               }
            });
       })

       return postManifest;
    }

    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler) {
        compiler.hooks.afterDone.tap(`${this.constructor.name}-afterDone`, stats => {
        
            this.log("Copying Posts to output directory...");
            copyDirectory.sync(this.postsLocation,path.resolve(compiler.outputPath,"posts"));
            
            this.log("Generating Post Manifest");
            const postManifest = JSON.stringify(this.generatePostManifest());
            fs.writeFileSync(path.resolve(compiler.outputPath,"posts","posts.json"), postManifest);

        })
      }
}

module.exports = new PostManifestAndCopyWebpackPlugin({
    postsLocation: "./app/posts"
});