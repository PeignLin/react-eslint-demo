module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        "prefer-arrow",
        "import",
    ],
    'rules': {
        'indent': [
            'error',
            2,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-var': [
            'error',
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': true,
            },
        ],
        'prefer-template': [
            'error',
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'always-multiline',
            },
        ],
        "prefer-arrow-callback": [
            "error",
            { "allowNamedFunctions": true }
        ],
        "react/function-component-definition": [
            "error",
            {
                "namedComponents": [
                    "arrow-function",
                ],
            }
        ],
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
                "disallowPrototype": true,
                "singleReturnOnly": true,
                "classPropertiesAllowed": false
            }
        ],
        "import/newline-after-import": [
            "error",
            {
                "count": 2
            }
        ]
    },

};
