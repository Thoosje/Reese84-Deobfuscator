// https://github.com/SteakEnthusiast/Supplementary-AST-Based-Deobfuscation-Materials/blob/master/Dead%20Code%20Removal/Removing%20Unreferenced%20Variables/deobfuscator.js

const Visitor = {
    "VariableDeclarator|FunctionDeclaration"(path) {
        const {
            node,
            scope
        } = path;
        const data = scope.getBinding(node.id.name);
        if (!data) return;

        // If the variable is constant and never referenced, remove it.
        if (data.constant && !data.referenced) {
            path.remove();
        }
    },
};

export default Visitor;