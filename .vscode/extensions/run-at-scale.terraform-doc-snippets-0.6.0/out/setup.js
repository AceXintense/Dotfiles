"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmp = require("tmp");
function setupWorkspace() {
    const tmpobj = tmp.dirSync();
    const tmpDir = tmpobj.name;
    console.log(`tmp dir will be ${tmpDir}`);
    return tmpDir;
}
exports.setupWorkspace = setupWorkspace;
//# sourceMappingURL=setup.js.map