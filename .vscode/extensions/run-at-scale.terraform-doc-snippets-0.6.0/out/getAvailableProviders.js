"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const octokit = require("@octokit/rest")();
const iterateOnDocFiles_1 = require("./iterateOnDocFiles");
// handle errors and do pagination
function getAvailableProviders(tmpDir, snips, processRepo) {
    octokit.repos.getForOrg({ org: "terraform-providers", type: "public", per_page: 100 }, (error, result) => {
        result.data.forEach((element) => {
            processRepo(tmpDir, element.name, snips, iterateOnDocFiles_1.iterateOnDocFiles);
        });
    });
}
exports.getAvailableProviders = getAvailableProviders;
//# sourceMappingURL=getAvailableProviders.js.map