"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortObject(o) {
    return Object.keys(o)
        .sort()
        .reduce((r, k) => ((r[k] = o[k]), r), {});
}
exports.sortObject = sortObject;
//# sourceMappingURL=sortObject.js.map