"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const codeBlocks = require("gfm-code-blocks");
const providersConfig = require("./config.json");
function getCodeBlock(docPath, codeBlockIndex = 0) {
    const blocks = codeBlocks(fs.readFileSync(docPath, "utf-8"));
    if (blocks.length + 1 >= codeBlockIndex && blocks.length > 0) {
        return blocks[codeBlockIndex].code.slice(1, -1);
    }
    else {
        return "#XXX empty snippet\n";
    }
}
exports.getCodeBlock = getCodeBlock;
//# sourceMappingURL=getCodeBlock.js.map