import path from 'node:path'

export default {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  test: {
    deps: {
      inline: ['element-plus'],
    },
  },
}
