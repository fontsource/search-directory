const baseUrl =
  'https://raw.githubusercontent.com/fontsource/fontsource/master';

const fontSource = {
  base: baseUrl,
  list: `${baseUrl}/FONTLIST.json`,

  /**
   * @param {string} pkg
   */
  pkg(pkg) {
    const folder = `${baseUrl}/packages/${pkg}`;

    return {
      metadata: `${folder}/metadata.json`,
      preview: `${folder}/files/${pkg}-all-400-normal.woff`,
    };
  },
};

export default fontSource;
