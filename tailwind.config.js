/**
  Only use it to customize TW config during development.
  All long-term changes should be made in the `pn-tailwind` repo:
  https://github.com/PrecisionNutrition/pn-tailwind

  The default TW config can be found at:
  https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { tailwindConfig } = require('@precision-nutrition/elements');

module.exports = {
  ...tailwindConfig,

  theme: {
    ...tailwindConfig.theme,

    extend: {
      spacing: {
        0.5: '0.125rem',
      },
      maxWidth: {
        '1/3': '33%',
        '2/3': '67%',
      },
      minWidth: {
        '1/2': '50%',
      },
    },

    variants: {
      ...tailwindConfig.variants,

      borderColor: [...tailwindConfig.variants.borderColor, 'focus-visible'],
      ringColor: [...tailwindConfig.variants.ringColor, 'focus-visible'],
      textColor: [...tailwindConfig.variants.textColor, 'focus-visible'],
    },

    /**
      Custom config example:
      theme: {
        ...tailwindConfig.theme,
        colors: {
          ...tailwindConfig.theme.colors,
          transparent: 'transparent',
        },
      }
      variants: {
        ...tailwindConfig.variants,
        textColor: [...tailwindConfig.variants.textColor, 'active'],
      },
    */
  },
};
