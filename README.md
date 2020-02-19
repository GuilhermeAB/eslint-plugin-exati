# eslint-plugin-exati

Lint exati

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint --dev
```

Next, install `eslint-plugin-exati`:

```
$ yarn add eslint-plugin-exati --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-exati` globally.

## Usage

Add `exati` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "exati"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "exati/rule-name": 2,
        "exati/valid-underscore": ["error", { "allowAfterThis": true, "allowParent": ["vm"] }]
    }
}
```

## Supported Rules

* exati/valid-translate-key
* exati/valid-underscore




