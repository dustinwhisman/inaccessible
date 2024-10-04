export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');
};

export const config = {
  dir: {
    input: 'pages',
    output: 'dist',
    includes: '../src',
  },
  markdownTemplateEngine: 'njk',
};
