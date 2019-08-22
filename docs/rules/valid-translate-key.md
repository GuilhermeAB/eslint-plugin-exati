# Valid translate key (valid-translate-key)

Invalid translate key. Key must be uppercase

## Rule Details

Examples of **incorrect** code for this rule:

```js
const text = this.$t('key')
```

```vue
<template>
    span {{$t('key')}}
</template>
```

Examples of **correct** code for this rule:

```js
const text = this.$t('KEY')
```

```vue
<template>
    span {{$t('KEY')}}
</template>
```
