import babel from 'rollup-plugin-babel'
import nodeResolve  from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
//import { rollup } from "rollup";
import { terser } from "rollup-plugin-terser";
 

var production = true;

/**
 * 
        // the fields to scan in a package.json to determine the entry point
        // if this list contains "browser", overrides specified in "pkg.browser"
        // will be used
        mainFields: ['module', 'main'], // Default: ['module', 'main']



        // some package.json files have a "browser" field which specifies
        // alternative files to load for people bundling for the browser. If
        // that's you, either use this option or add "browser" to the
        // "mainfields" option, otherwise pkg.browser will be ignored
        browser: true, // Default: false

        // not all files you want to resolve are .js files
        extensions: ['.mjs', '.js', '.jsx', '.json'], // Default: [ '.mjs', '.js', '.json', '.node' ]

        // whether to prefer built-in modules (e.g. `fs`, `path`) or
        // local ones with the same names
        preferBuiltins: false, // Default: true

        // Force resolving for these modules to root's node_modules that helps
        // to prevent bundling the same package multiple times if package is
        // imported from dependencies.
        dedupe: ['three', 'three-glob', 'TrackballControls'], // Default: []
 * 
 */
var plugings = [
    
    nodeResolve ({
        jsnext: true,
        main: true,
        preferBuiltins: true,
        browser: true,
    }),
    commonjs({
        include: 'node_modules/**'
    }),
    
    
    babel({
        exclude: 'node_modules/**',
    }),

    /*terser({}),*/
]
if (production) {
    plugings.push(terser({}), );
}

var globals = {
    //'THREE': 'three',
}//external:['three'],
export default 
    [ {
        input: 'src/scripts/three.final.js',//three/mainThreejs.js',
        output: {
            file: 'build/scripts/bundle2.js',
            format: 'cjs',
            globals: globals,
        },
        plugings: plugings,
    }, { 
            input: 'src/scripts/main.js',
            output: {
                file: 'build/scripts/bundle.js',
                format: 'cjs',
                globals: globals,
            },
            plugins: plugings,
        },


        { 
            input: 'src/scripts/vendors/three.js',
            output: {
                file: 'build/scripts/vendors/three.min.js',
            },
            plugins: [],
        },
       
        {
            input: 'src/scripts/vendors/three-globe.js',
            output: {
                file: 'build/scripts/vendors/three-globe.min.js',
            },
            plugings: [terser()],
            
        }
    ];