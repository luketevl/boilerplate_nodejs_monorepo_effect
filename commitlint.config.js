export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
      headerPattern: /^(?:([\p{Emoji_Presentation}\p{Extended_Pictographic}])\uFE0F?\s+)?(\w+)(?:\(([^)]+)\))?!?:\s(.+)$/u,
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'bugfix',
        'hotfix',
        'docs',
        'codestyle',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
}
