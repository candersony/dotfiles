"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("./elmUtils");
const vscode = require("vscode");
const path = require("path");
function fileIsTestFile(filename) {
    const config = vscode.workspace.getConfiguration('elm');
    const testMatcher = (config.get('elmTestFileMatcher'));
    const [_, elmVersion] = utils.detectProjectRootAndElmVersion(filename, vscode.workspace.rootPath);
    if (utils.isElm019(elmVersion) === false) {
        // we didn't differentiate test/app code for 0.18
        return false;
    }
    const pathFromRoot = path.relative(vscode.workspace.rootPath, filename);
    const pathParts = path.parse(pathFromRoot);
    const pathNormalized = path.posix.format(pathParts);
    const testMatcherParts = path.parse(testMatcher);
    const testMatcherNormalized = path.posix.format(testMatcherParts);
    const isTestFile = pathNormalized.includes(testMatcherNormalized);
    return isTestFile;
}
exports.fileIsTestFile = fileIsTestFile;
//# sourceMappingURL=elmTest.js.map