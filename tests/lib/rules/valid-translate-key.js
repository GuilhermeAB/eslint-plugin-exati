/**
 * @fileoverview Valid translate key
 * @author Guilherme Afonso Borchardt
 */

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/valid-translate-key');

const ruleTester = new RuleTester({
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: { ecmaVersion: 2018 },
});
ruleTester.run('consistent-translate-key', rule, {

    valid: [],

    invalid: [
        {
            code: '$t("text")',
            errors: ['Invalid translate key. Key must be uppercase'],
        },
        {
            code: 'this.$t("text")',
            errors: ['Invalid translate key. Key must be uppercase'],
        },
        {
            code: '<template><div>{{$t("text")}}</div></template>',
            errors: ['Invalid translate key. Key must be uppercase'],
        },
        {
            code: '<template><div :text="$t(\'text\')"></div></template>',
            errors: ['Invalid translate key. Key must be uppercase'],
        },
    ],
});
