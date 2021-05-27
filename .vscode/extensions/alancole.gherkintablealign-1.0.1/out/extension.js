"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = exports.commandTableAlign = void 0;
const vscode = require("vscode");
class Scope {
    constructor() {
        this.start = 0;
        this.end = 0;
    }
}
class LineChange {
    constructor(range, text) {
        this.range = range;
        this.text = text;
    }
}
function getTableScopes(textEditor, lineFrom, lineTo) {
    const scopes = [];
    let currentScope = new Scope();
    let isScopeOpen = false;
    for (let i = lineFrom; i <= lineTo; i++) {
        const line = textEditor.document.lineAt(i);
        if (line.text.trim().indexOf('|') === 0) {
            // open the scope
            if (!isScopeOpen) {
                currentScope.start = i;
                isScopeOpen = true;
            }
        }
        else {
            // close the scope
            if (isScopeOpen) {
                currentScope.end = (i - 1);
                scopes.push(currentScope);
                currentScope = new Scope();
                isScopeOpen = false;
            }
        }
    }
    // close the scope if it's open
    if (isScopeOpen) {
        currentScope.end = lineTo;
        scopes.push(currentScope);
    }
    return scopes;
}
function getScopes(textEditor, ranges) {
    let scopes;
    let noSelection = (ranges.length === 1 && ranges[0].isSingleLine && ranges[0].start.character === ranges[0].end.character);
    if (noSelection) {
        scopes = getTableScopes(textEditor, 0, textEditor.document.lineCount - 1);
    }
    else {
        scopes = [];
        ranges.forEach(range => {
            const rangeScopes = getTableScopes(textEditor, range.start.line, range.end.line);
            scopes = scopes.concat(rangeScopes);
        });
    }
    return scopes;
}
function performTableAlignment(lines) {
    const rowIndentation = [];
    // prep lines
    const finalRows = [];
    lines.forEach((row) => {
        rowIndentation.push(row.text.indexOf('|'));
        const preCols = row.text.trim().split('|');
        const cols = [];
        preCols.forEach((testCol) => {
            if (testCol.length > 0) {
                cols.push(testCol.trim());
            }
        });
        finalRows.push(cols);
    });
    // get column widths
    let colWidths = [];
    finalRows.forEach(row => {
        row.forEach((col, colIdx) => {
            if (colWidths[colIdx] === undefined || (col.length > colWidths[colIdx])) {
                colWidths[colIdx] = col.length;
            }
        });
    });
    // apply col width
    finalRows.forEach(row => {
        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] + ' '.repeat(colWidths[i] - row[i].length);
        }
    });
    // assemble lines
    const finalLines = [];
    finalRows.forEach((row, rowIdx) => {
        let line = ' '.repeat(rowIndentation[rowIdx]);
        row.forEach((col, colIdx) => {
            line += (colIdx === 0 ? '|' : '') + ' ' + (col + ' |');
        });
        finalLines.push(line);
    });
    return finalLines;
}
function commandTableAlign(textEditor, ranges) {
    return __awaiter(this, void 0, void 0, function* () {
        const lineChanges = [];
        const scopes = getScopes(textEditor, ranges);
        scopes.forEach(scope => {
            // get scope lines
            const lines = [];
            for (let i = scope.start; i <= scope.end; i++) {
                lines.push(textEditor.document.lineAt(i));
            }
            // align scope lines
            if (lines.length > 0) {
                const preparedLines = performTableAlignment(lines);
                lines.forEach((line, lineIndex) => {
                    lineChanges.push(new LineChange(line.range, preparedLines[lineIndex]));
                });
            }
        });
        // replace editor lines with alignments
        if (lineChanges.length > 0) {
            textEditor.edit(editBuilder => {
                let lineIndex = 0;
                lineChanges.forEach((change) => {
                    editBuilder.replace(change.range, change.text);
                    lineIndex++;
                });
            });
        }
        else {
            vscode.window.showInformationMessage('Alignment failed: No tables were found.');
        }
    });
}
exports.commandTableAlign = commandTableAlign;
// controls for extension
function activate(context) {
    const command = vscode.commands.registerCommand('alan-cole.gherkinTableAlign', () => {
        if (vscode.window.activeTextEditor) {
            commandTableAlign(vscode.window.activeTextEditor, vscode.window.activeTextEditor.selections);
        }
    });
    context.subscriptions.push(command);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map