"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async = require("async");
const fs = require("fs");
const git = require("nodegit");
const generateSnippet_1 = require("./generateSnippet");
const tfTypesMap = {
    d: "data",
    r: "resource",
};
// XXX is this the right place to instantiate?
class SnippetClass {
    constructor(provider, resourceType, providerTypeDir) {
        this.provider = provider;
        this.resourceType = resourceType;
        this.providerTypeDir = providerTypeDir;
        this.snippet = {};
    }
}
function downloadGitRepo(workspace, providerFull, allSnippets, iterateOnFilesFunc) {
    const provider = providerFull.split("terraform-provider-")[1];
    console.log(`Downloading git repo for ${provider}`);
    // get this from config giving provider config preference, then global, then this default
    const providerRepo = `https://github.com/terraform-providers/${providerFull}`;
    const providerDir = `${workspace}/${provider}`;
    git.Clone.clone(providerRepo, providerDir).then(() => {
        async.each(Object.keys(tfTypesMap), (tfType) => {
            const providerTypeDir = `${providerDir}/website/docs/${tfType}`;
            const resourceType = tfTypesMap[tfType];
            const snippetObject = new SnippetClass(provider, resourceType, providerTypeDir);
            fs.stat(providerTypeDir, (err, data) => {
                if (err === null) {
                    iterateOnFilesFunc(snippetObject, allSnippets, generateSnippet_1.generateSnippet);
                }
            });
        });
    });
}
exports.downloadGitRepo = downloadGitRepo;
//# sourceMappingURL=downloadGitRepo.js.map