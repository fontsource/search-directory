const baseUrl =
  'https://raw.githubusercontent.com/fontsource/fontsource/master';

const fontSourceData = {
  base: baseUrl,
  list: `${baseUrl}/FONTLIST.json`,
  readme: `${baseUrl}/README.md`,
  changelog: `${baseUrl}/CHANGELOG.md`,

  /**
   * @param {string} pkg
   * @param {string} subset
   */
  pkg(pkg, subset) {
    const folder = `${baseUrl}/packages/${pkg}`;

    return {
      metadata: `${folder}/metadata.json`,
      readme: `${folder}/README.md`,
      npm: `https://www.npmjs.com/package/@fontsource/${pkg}`,
      preview: `${folder}/files/${pkg}-${subset}-400-normal.woff`,
      repo: `https://github.com/fontsource/fontsource/tree/master/packages/${pkg}`,
    };
  },
};

export default fontSourceData;
