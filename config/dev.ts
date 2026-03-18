import type { UserConfigExport } from "@tarojs/cli";
export default {
  logger: {
    quiet: false,
    stats: true
  },
  defineConstants: {
    BASE_URL: '"http://localhost:3000/api"',
    APP_VERSION: `"${require('../package.json').version}"`,
  },
  mini: {},
  h5: {}
} satisfies UserConfigExport
