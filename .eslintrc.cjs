module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:import/recommended', // 解决引用问题 import/no-unresolved
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
    },
    project: ['./tsconfig.json', './vite.config.ts'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['vue'],
  },
  plugins: ['import', 'vue', '@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-undef': 'off', // 未定义的变量关闭报错
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': ['warn'], // 关闭 any 类型的 warning
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': ['warn', { target: 'single' }],
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
  },
  settings: {
    // 解决引用问题 import/no-unresolved
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.ts', 'vue'],
      },
    },
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', 'js'],
    },
  },
  // 全局变量
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    WeixinJSBridge: 'readonly',
    ElMessage: 'readonly',
    ElMessageBox: 'readonly',
    ElLoading: 'readonly',
  },
}
