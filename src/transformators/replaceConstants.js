const t = require("@babel/types");

let allValues = {};

const Visitor = {
    MemberExpression(path) {
        const {
            node
        } = path;

        if (
            t.isIdentifier(node.object) &&
            t.isIdentifier(node.property)
        ) {
            const propertyName = node.property.name;
            const variableName = node.object.name;
            const binding = path.scope.getBinding(variableName);

            if (
                binding &&
                t.isFunctionDeclaration(binding.path.node) &&
                !node.computed &&
                t.isAssignmentExpression(path.parentPath.node)
            ) {
                if (!allValues[variableName]) allValues[variableName] = {};

                allValues[variableName][propertyName] = t.cloneNode(path.parentPath.node.right);
                path.parentPath.remove()
            }

            if (
                binding &&
                t.isFunctionDeclaration(binding.path.node) &&
                !node.computed &&
                t.isMemberExpression(path.parentPath.node)
            ) {
                path.replaceWith(allValues[variableName][propertyName]);
            }
        }
    },
    VariableDeclarator(path) {
        const {
            id,
            init
        } = path.node;

        if (t.isIdentifier(id) && t.isStringLiteral(init)) {
            if ( !path.scope.bindings[id.name] ) return; // Variable not used?

            const references = path.scope.bindings[id.name].referencePaths;
            const value = init.value;

            references.forEach(reference => {
                reference.replaceWith(t.stringLiteral(value));
            });

            path.remove();
        }
    }
};

export default Visitor;