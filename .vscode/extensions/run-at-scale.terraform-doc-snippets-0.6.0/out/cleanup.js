"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fsExtra = require("fs-extra");
function cleanup(dir) {
    console.log(`Cleaning up ${dir}`);
    fsExtra.remove(dir, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Deleted ${dir}`);
    });
}
exports.cleanup = cleanup;
//# sourceMappingURL=cleanup.js.map