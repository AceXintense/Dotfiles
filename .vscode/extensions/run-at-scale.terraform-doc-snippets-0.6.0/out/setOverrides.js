"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/chybie/ts-json/blob/master/app.ts
const configuration = require("./config.json");
function setOverrides(allSnippets) {
    const override_snippets = configuration.override_snippets;
    for (let snippet of override_snippets) {
        allSnippets = Object.assign(allSnippets, snippet);
    }
    return allSnippets;
}
exports.setOverrides = setOverrides;
//# sourceMappingURL=setOverrides.js.map