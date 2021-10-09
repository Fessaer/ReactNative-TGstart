module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/testing/jest-setup.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
