import { H5 } from '../general/Headers';
import P from '../general/Paragraph';
import Code from '../general/Code';
import HR from '../general/HorizontalRule';

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

      {fontData.variable ? (
        <>
          <HR />

          <H5>Variable Fonts:</H5>

          <P>
            This particular typeface supports{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">
              variable fonts
            </a>
            .
          </P>

          <P>
            Begin by importing both the variable and fallback font for
            non-compatible browsers.
          </P>

          <Code lang="js">
            import &#34;fontsource-{fontData.fontId}400.css&#34; // Weight 400
          </Code>

          <P>
            Select either a stripped down weights only variant of the font or a
            full feature variant that contains all the variable axes.
          </P>

          <Code lang="js">
            import &#34;fontsource-{fontData.fontId}/variable.css&#34; //
            Contains ONLY variable weights and no other axes. Both normal and
            italic.
            {'\n'}
            import &#34;fontsource-{fontData.fontId}/variable-normal.css&#34; //
            Normal variant.
            {'\n'}
            import &#34;fontsource-{fontData.fontId}/variable-italic.css&#34; //
            Italic variant.
            {'\n'}
            &#47;&#47; Or
            {'\n'}
            import &#34;fontsource-{fontData.fontId}/variable-full.css&#34; //
            This contains ALL variable axes. Font files are larger. Both normal
            and italic.
            {'\n'}
            import &#34;fontsource-{fontData.fontId}
            /variable-full-normal.css&#34; // Normal variant.
            {'\n'}
            import &#34;fontsource-{fontData.fontId}
            /variable-full-italic.css&#34; // Italic variant.
          </Code>

          <P>
            Note a <i>full</i> or <i>italic</i> variant may NOT exist if there
            are no additional axes other than wght and/or ital. You can check
            the available axes{' '}
            <a href="https://fonts.google.com/variablefonts">here</a>.
          </P>

          <P>
            Followed by the CSS using the @supports tag, which checks whether
            the browser is capable of utilizing variable fonts. Fallback fonts
            and their relevant CSS should be used outside the block, whilst all
            variable options should be used within the @supports block and
            utilizing the font-variation-settings tag.
          </P>

          <Code lang="css">
            h1 &#123;
            {'\n'}
            {'  '}font-family: {fontData.fontName};{'\n'}
            {'  '}font-weight: 400;
            {'\n'}
            &#125;
            {'\n'}
            {'\n'}
            @supports (font-variation-settings: normal) &#123;
            {'\n'}
            {'  '}h1 &#123;
            {'\n'}
            {'    '}font-family: {fontData.fontName}Variable;
            {'\n'}
            {'    '}font-variation-settings: &#34;wght&#34; 400;
            {'\n'}
            {'  '}&#125;
            {'\n'}
            &#125;
          </Code>

          <P>
            <i>
              To view the available variable axes that may be included in the
              font, click{' '}
              <a href="https://fonts.google.com/variablefonts">here</a>. The
              meanings of all axes and the restrictions associated with them are
              explained there.
            </i>
          </P>
        </>
      ) : (
        ''
      )}
    </>
  );
}
