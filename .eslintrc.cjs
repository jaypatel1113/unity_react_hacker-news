module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "simple-import-sort", "sort-keys-fix"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        // simple sorting
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "simple-import-sort/imports": [
                    "error",
                    {
                        groups: [
                            // Packages `react` related packages come first.
                            ["^react", "^@?\\w"],
                            // Internal packages.
                            ["^(@|components)(/.*|$)"],
                            // Side effect imports.
                            ["^\\u0000"],
                            // Parent imports. Put `..` last.
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                            // Style imports.
                            ["^.+\\.?(css)$"],
                        ],
                    },
                ],
                "sort-keys-fix/sort-keys-fix": "warn",
                "sort-keys": ["error", "asc", { caseSensitive: true, natural: false, minKeys: 2 }],
            },
        },
    ]
};
