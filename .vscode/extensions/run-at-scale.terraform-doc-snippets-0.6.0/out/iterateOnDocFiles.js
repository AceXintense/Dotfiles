"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async = require("async");
const fs = require("fs");
function iterateOnDocFiles(snippetObject, allSnippets, generateSnippet) {
    const dir = snippetObject.providerTypeDir;
    const files = fs.readdirSync(dir);
    const markdownFiles = files.filter((str) => str.indexOf(".markdown") !== -1 || str.indexOf(".md") !== -1);
    async.forEach(markdownFiles, (filename) => {
        snippetObject.docFile = `${dir}/${filename}`;
        generateSnippet(snippetObject, allSnippets);
    });
}
exports.iterateOnDocFiles = iterateOnDocFiles;
//# sourceMappingURL=iterateOnDocFiles.js.map