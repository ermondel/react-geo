module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.js',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@buttons(.*)$': '<rootDir>/src/buttons$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@modal(.*)$': '<rootDir>/src/modal$1',
    '^@redux(.*)$': '<rootDir>/src/redux$1',
    '^@sections(.*)$': '<rootDir>/src/sections$1',
    '^@sidebar(.*)$': '<rootDir>/src/sidebar$1',
    '^@subcomponents(.*)$': '<rootDir>/src/subcomponents$1',
    '^@googlemap(.*)$': '<rootDir>/src/googlemap$1',
  },
};
