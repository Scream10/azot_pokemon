module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-native', 'prettier'],
    parserOptions: {
        sourceType: 'module',
    },
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-use-before-define': ['error', { variables: false }],
        'no-unused-vars': 2,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 0,
        'prettier/prettier': 2,
    },
}