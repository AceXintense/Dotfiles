"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const cleanup_1 = require("./cleanup");
const downloadGitRepo_1 = require("./downloadGitRepo");
const getAvailableProviders_1 = require("./getAvailableProviders");
const setOverrides_1 = require("./setOverrides");
const setup = require("./setup");
const sortObject_1 = require("./sortObject");
const configuration = require("./config.json");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cap = configuration.total_snippets;
        const tmpDir = setup.setupWorkspace();
        const snips = {};
        getAvailableProviders_1.getAvailableProviders(tmpDir, snips, downloadGitRepo_1.downloadGitRepo);
        // TODO: find a better way to count up front the number of processed markdown files OR providers
        yield sleep(600);
        while (Object.keys(snips).length < cap) {
            console.log(`${Object.keys(snips).length} of ${cap}`);
            yield sleep(20);
        }
        console.log(Object.keys(snips).length);
        const overrideSnipsIncluded = setOverrides_1.setOverrides(snips);
        const sortedSnips = sortObject_1.sortObject(overrideSnipsIncluded);
        fs_1.writeFileSync("snippets/terraform.json", JSON.stringify(sortedSnips, null, 2), "utf-8");
        cleanup_1.cleanup(tmpDir);
    });
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms * 100));
}
main();
//# sourceMappingURL=main.js.map