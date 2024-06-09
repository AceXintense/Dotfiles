"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const getCodeBlock_1 = require("./getCodeBlock");
// const providersConfig = require("./config.json");
function generateSnippet(snippetObject, allSnippets) {
    const filename = path.parse(snippetObject.docFile).base;
    const resourceName = filename.split(".")[0];
    const fullResourceName = `${snippetObject.provider}-${snippetObject.resourceType}-${resourceName}`;
    snippetObject.snippet[fullResourceName] = {
        description: `Defines ${resourceName}`,
        prefix: `tf-${fullResourceName}`,
    };
    const codeBlock = getCodeBlock_1.getCodeBlock(snippetObject.docFile).split("\n");
    snippetObject.snippet[fullResourceName].body = codeBlock;
    allSnippets[fullResourceName] = snippetObject.snippet[fullResourceName];
}
exports.generateSnippet = generateSnippet;
//# sourceMappingURL=generateSnippet.js.map