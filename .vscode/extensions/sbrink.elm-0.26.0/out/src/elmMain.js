"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(ctx) {
    vscode.window.showInformationMessage("This plugin is deprecated. For modern Elm support in VSCode use https://marketplace.visualstudio.com/items?itemName=Elmtooling.elm-ls-vscode");
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=elmMain.js.map