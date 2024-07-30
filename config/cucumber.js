module.exports ={
    default:{
        tags: process.env.npm_config_TAGS || "",
        paths:[
            "src/tests/features"
        ],
        dryRun:true,
        require:[
            "src/tests/steps/*.ts"
        ],
        requireModule:[
            "ts-node/register"
        ],
        formatOptions:{
            snippetInterface: "async-await"
        }
    }
}