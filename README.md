# Warp 10 Photon

*A photon is a light quantum...*


Warp 10 Photon is a web application developed to easily deal with the [Warp 10](http://www.warp10.io)
platform. Based on [Warp 10 Quantum](https://github.com/cityzendata/warp10-quantum/), it aims to be a lighter, faster and more flexible version of Quantum. A light Quantum... a Warp 10 Photon!

Entirely developed as [Polymer](https://www.polymer-project.org/) elements, you will
find in this repository not only the full application but the whole set of web-components
allowing to customize your Warp 10 experience.

### Contributing

We love contributions from the community! Issues and pull request are welcome.

### License

Warp 10 Photon uses Apache 2.0 License, available [here](./LICENSE).


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve --module-resolution node --component-dir node_modules
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
