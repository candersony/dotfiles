"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PreviewClient = require("./preview/client");
function activate(context) {
    PreviewClient.activate(context);
}
exports.activate = activate;
function deactivate() {
    PreviewClient.deactivate();
}
exports.deactivate = deactivate;
//# sourceMappingURL=index.js.map