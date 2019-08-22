module.exports = {
    extends: ['airbnb-base'],
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'space-before-function-paren': ['error', 'always'],
        'no-undef': 0,
        'object-shorthand': ['error', 'never'],
        'func-names': ['error', 'never'],
        indent: ['error', 4],
        semi: [2, 'always'],
        'max-len': ['error', { code: 500 }],
        'no-param-reassign': 0,
        'no-unused-expressions': 0,
        'global-require': 0,
        'no-console': 'error',
        'no-plusplus': ['off'],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'prefer-rest-params': 0,
        'import/no-unresolved': 'error',
        'no-shadow': ['error', { allow: ['state'] }],
        'import/no-extraneous-dependencies': 'error'
    }
};
