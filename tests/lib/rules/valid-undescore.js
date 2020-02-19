/**
 * @fileoverview Rule to flag trailing underscores in variable declarations.
 * @author Matheus M. Dutra
 */

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/valid-underscore');

const ruleTester = new RuleTester({
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: { ecmaVersion: 2018 },
});
ruleTester.run('valid-undescore', rule, {

    valid: [
        {
            code: '<script>vm._itemId</script>',
            options: [{ allowParent: ['vm'] }],
        },
        {
            code: '<script>this._teste</script>',
            options: [{ allowAfterThis: true }],
        },
        {
            code: '<script>this._teste</script>',
            options: [{ allowParent: ['vm'], allowAfterThis: true }],
        },
    ],

    invalid: [
        {
            code: '<script>this._teste</script>',
            errors: [{ messageId: 'unexpectedUnderscore', data: { identifier: '_teste' } }],
            options: [{ allowParent: ['$parent', 'vm'] }],
        },
        {
            code: '<script>this.$_aura._teste</script>',
            errors: [{ messageId: 'unexpectedUnderscore', data: { identifier: '_teste' } }],
            options: [{ allowParent: ['$parent', 'vm'] }],
        },
    ],
});
