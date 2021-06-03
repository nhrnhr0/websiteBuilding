import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
export default {
    //external:['three'],



    input: 'src/scripts/main.js',
    output: {
        file: 'build/scripts/bundle.js',
        format: 'iife',
        globals: {
            three: 'THREE',
        },
    },
    plugins: [
        resolve({

            // the fields to scan in a package.json to determine the entry point
            // if this list contains "browser", overrides specified in "pkg.browser"
            // will be used
            mainFields: ['module', 'main'], // Default: ['module', 'main']
      
            
      
            // some package.json files have a "browser" field which specifies
            // alternative files to load for people bundling for the browser. If
            // that's you, either use this option or add "browser" to the
            // "mainfields" option, otherwise pkg.browser will be ignored
            browser: true,  // Default: false
      
            // not all files you want to resolve are .js files
            extensions: [ '.mjs', '.js', '.jsx', '.json' ],  // Default: [ '.mjs', '.js', '.json', '.node' ]
      
            // whether to prefer built-in modules (e.g. `fs`, `path`) or
            // local ones with the same names
            preferBuiltins: false,  // Default: true
      
            // Force resolving for these modules to root's node_modules that helps
            // to prevent bundling the same package multiple times if package is
            // imported from dependencies.
            dedupe: [ 'three', 'three-glob' ], // Default: []
          }),
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
    
};