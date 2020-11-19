import { H5 } from '../general/Headers';
import P from '../general/Paragraph';
import Code from '../general/Code';

export default function FontInstallation({ fontData }) {
  return (
    <>
      <H5>Installation:</H5>

      <P>
        Fontsource assumes you are using a bundler, such as Webpack, to load in
        CSS. Solutions like CRA, Gatsby and Next.js are prebuilt examples that
        are compatible.
      </P>

      <Code lang="javascript">
        yarn add fontsource-{fontData.fontId} &#47;&#47; npm install fontsource-
        {fontData.fontId}
      </Code>

      <P>
        Then within your app entry file or site component, import it in. For
        example in Gatsby, you could choose to import it into a layout template
        (layout.js), page component (index.js), or gatsby-browser.js.
      </P>

      <Code lang="js">
        import &#34;fontsource-{fontData.fontId}&#34;; &#47;&#47; Defaults to
        weight 400 with all styles included.
      </Code>

      <P>
        Fontsource allows you to select weights and even individual styles,
        allowing you to cut down on payload sizes to the last byte! Utilizing
        the CSS unicode-range selector, all language subsets are accounted for.
      </P>

      <Code lang="js">
        import &#34;fontsource-{fontData.fontId}/500.css&#34; &#47;&#47; All
        styles included.
        {'\n'}
        import &#34;fontsource-{fontData.fontId}
        /900-normal.css&#34; &#47;&#47; Select either normal or italic.
      </Code>

      <P>Alternatively, the same solutions could be imported via SCSS!</P>

      <Code lang="scss">
        @import &#34;~fontsource-{fontData.fontId}/index.css&#34;;
        {'\n'}
        @import &#34;~fontsource-{fontData.fontId}/300-italic.css&#34;;
      </Code>

      <P>
        These examples may not reflect actual compatibility. Please refer to the
        variables at the top of the page.
      </P>

      <P>
        Finally, you can reference the font name in a CSS stylesheet, CSS
        Module, or CSS-in-JS.
      </P>

      <Code lang="css">
        body &#123;
        {'\n'}
        {'  '}font-family: &#34;{fontData.fontName}&#34;;
        {'\n'}
        &#125;
      </Code>
    </>
  );
}
