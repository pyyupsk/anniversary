/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    arrowParens: 'always',
    plugins: ['prettier-plugin-pkg', 'prettier-plugin-tailwindcss'],
    printWidth: 100,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    tailwindFunctions: ['clsx', 'cn', 'cva'],
    trailingComma: 'all',
    overrides: [
        {
            files: '*.{md,mdx}',
            options: {
                tabWidth: 2,
                endOfLine: 'auto',
                proseWrap: 'always',
                embeddedLanguageFormatting: 'auto',
                printWidth: 80,
            },
        },
    ],
};

export default config;
