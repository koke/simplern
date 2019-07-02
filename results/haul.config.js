{
  "mode": "development",
  "context": "/Users/koke/a8c/try/simplern",
  "entry": [
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/Object.es6.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/console.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/error-guard.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/Number.es6.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/String.prototype.es6.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/Array.prototype.es6.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/Array.es6.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/Object.es7.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/vendor/polyfills/babelHelpers.js",
    "/Users/koke/a8c/try/simplern/node_modules/react-native/Libraries/Core/InitializeCore.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/src/utils/polyfillEnvironment.js",
    "/Users/koke/a8c/try/simplern/node_modules/haul/hot/patch.js",
    "./index.js"
  ],
  "output": {
    "path": "/var/folders/ly/xlx6y_sx7d1605h97m4dhjkc0000gn/T/haul-start-6X1y7T",
    "filename": "index.ios.bundle",
    "publicPath": "http://localhost:9092/"
  },
  "module": {
    "rules": [
      {
        "test": {},
        "loaders": [
          "babel-loader"
        ]
      },
      {
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "test": {},
        "exclude": {},
        "use": [
          {
            "loader": "/Users/koke/a8c/try/simplern/node_modules/cache-loader/dist/cjs.js",
            "options": {
              "cacheDirectory": "/Users/koke/a8c/try/simplern/node_modules/.cache/cache-loader"
            }
          },
          {
            "loader": "/Users/koke/a8c/try/simplern/node_modules/thread-loader/dist/cjs.js",
            "options": {
              "workers": 7
            }
          },
          {
            "loader": "/Users/koke/a8c/try/simplern/node_modules/babel-loader/lib/index.js",
            "options": {
              "presets": [
                [
                  "/Users/koke/a8c/try/simplern/node_modules/metro-react-native-babel-preset/src/index.js",
                  {
                    "disableImportExportTransform": true
                  }
                ]
              ],
              "plugins": [
                "/Users/koke/a8c/try/simplern/node_modules/haul/src/utils/fixRequireIssues.js",
                "/Users/koke/a8c/try/simplern/node_modules/react-hot-loader/babel.js",
                "/Users/koke/a8c/try/simplern/node_modules/haul/src/hot/babelPlugin.js"
              ],
              "cacheDirectory": true
            }
          }
        ]
      },
      {
        "test": {},
        "use": {
          "loader": "/Users/koke/a8c/try/simplern/node_modules/haul/src/loaders/assetLoader.js",
          "query": {
            "platform": "ios",
            "root": "/Users/koke/a8c/try/simplern"
          }
        }
      }
    ]
  },
  "plugins": [
    {
      "options": {},
      "pathCache": {},
      "fsOperations": 0,
      "primed": false
    },
    {
      "definitions": {
        "process.env": {
          "NODE_ENV": "\"development\""
        },
        "__DEV__": true
      }
    },
    {
      "options": {
        "minimize": false,
        "debug": true,
        "test": {}
      }
    },
    {
      "options": {},
      "fullBuildTimeout": 200,
      "requestTimeout": 10000
    },
    {
      "options": {}
    },
    {
      "options": {
        "banner": "if (this && !this.self) { this.self = this; };\n",
        "raw": true
      }
    },
    {
      "options": {
        "module": true
      }
    },
    {
      "sourceMapFilename": "[file].map",
      "sourceMappingURLComment": "\n//# sourceMappingURL=[url]",
      "moduleFilenameTemplate": "webpack://[namespace]/[resourcePath]",
      "fallbackModuleFilenameTemplate": "webpack://[namespace]/[resourcePath]?[hash]",
      "namespace": "",
      "options": {
        "test": {},
        "filename": "[file].map"
      }
    }
  ],
  "resolve": {
    "alias": {
      "react-proxy": "@zamotany/react-proxy"
    },
    "plugins": [
      {},
      {}
    ],
    "mainFields": [
      "react-native",
      "browser",
      "main"
    ],
    "extensions": [
      ".ios.js",
      ".native.js",
      ".js"
    ]
  },
  "optimization": {
    "minimize": false,
    "minimizer": [
      {
        "options": {
          "test": {},
          "extractComments": false,
          "sourceMap": true,
          "cache": true,
          "parallel": true,
          "uglifyOptions": {
            "compress": {
              "inline": 1
            },
            "output": {
              "comments": {}
            }
          }
        }
      }
    ],
    "namedModules": true,
    "concatenateModules": true
  },
  "target": "webworker",
  "stats": "verbose",
  "name": "ios",
  "devtool": false
}