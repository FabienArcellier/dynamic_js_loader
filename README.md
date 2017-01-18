## Motivation

For a project, I need to load javascript files are not packaged in node.js.
It's vanilla javascript with function. This snippet is a way to do it.

## Synopsis

``dynamic_js_loader`` is a node module that exposes 2 methods to load functions
from vanilla javascript files from a directory.

## The latest version

You can find the latest version to ...

    git clone https://github.com/FabienArcellier/dynamic_js_loader.git

## Code Example

```javascript
djl = require('./dynamic_js_loader');
djl.requireDirGlobal('dir');
File1.test();

libs = djl.requireDir('dir');
libs['File1'].test();
```

## Installation

You have to clone the repository.

## Tests

## Contributors

* Fabien Arcellier
