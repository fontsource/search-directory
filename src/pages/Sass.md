Alternatively, the same solutions could be imported via SCSS!

```scss
@import '~@fontsource/open-sans/index.css';
@import '~@fontsource/open-sans/300-italic.css';
```

For more advanced setups, you can use our highly customizable Sass mixins that can modify many of the existing @font-face variables.

```scss
@import '~@fontsource/open-sans/scss/mixins';

// Uses a unicode-range map to automatically generate multiple @font-face rules.
@include fontFace(
  $weight: 500,
  $display: fallback,
  $fontDir: '~@fontsource/open-sans/files'
);

// Fully customizable single @font-face mixin.
@include fontFaceCustom(
  $weight: 600,
  $display: optional,
  $woff2Path: '~@fontsource/open-sans/files/open-sans-latin-500-normal.woff2',
  $unicodeRange: false
);
// More options available in link below.
```

You can see all of the existing inputtable mixin variables [here](https://github.com/fontsource/fontsource/tree/master/packages/open-sans/scss/mixins.scss).
