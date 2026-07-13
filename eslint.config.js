import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  test: true,
  typescript: true,
}, {
  rules: {
    'pnpm/yaml-enforce-settings': 'off',
  },
})
