/**
 * @fileoverview Valid translate key
 * @author Guilherme Afonso Borchardt
 */

function validTranslate (context, node) {
    const jsNodeTranslate = (node.callee.type === 'Identifier' && node.callee.name === '$t'); // $t('text')
    const jsNodePropertyTranslate = (node.callee.property && node.callee.property.type === 'Identifier' && node.callee.property.name === '$t'); // this.$t('text')

    if (jsNodeTranslate || jsNodePropertyTranslate) {
        const literal = (node.arguments || node.callee.arguments).filter(a => a.type === 'Literal')[0];
        const text = (literal && literal.value) || null;
        if (!text) return;

        if (text.match(/[A-Za-z]/g).length !== (text.match(/[A-Z]/g) || []).length) {
            context.report(literal, 'Invalid translate key. Key must be uppercase');
        }
    }
}

module.exports = {
    meta: {
        docs: {
            description: 'Valid translate key',
            category: undefined,
            recommended: true,
        },
        schema: [],
    },

    create: function (context) {
        return context.parserServices.defineTemplateBodyVisitor(
            // Event handlers for <template>.
            {
                CallExpression: function (node) {
                    validTranslate(context, node);
                },
            },
            // Event handlers for <script> or scripts
            {
                CallExpression: function (node) {
                    validTranslate(context, node);
                },
            },
        );
    },
};
