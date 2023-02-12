# Lorix (for browsers)

<img align="right" src=docs/images/lorix.png height="110px">

A browser version of Lorix, the _simple_, _user-friendly_ Javascript DataFrame API for transforming data.

_Based on Lorix v0.2.7_

For the original non-browser version, based on Node, see [here](https://github.com/jmsmistral/lorix)


### Features

- Enables rapid data wrangling on Javascript
- Exposes a simple, functional data-oriented API that operates over an array of objects
- Function chaining to encapsulate multiple data transformations in single blocks
- Helpful error messages to assist debugging


# How to use

The simplest way to use this is to download the code in this repo, and `import` the `lorix.js` module into the code you're using, like below:

```javascript
// your_module.js

import lorix from "lorix.js";

// Access the Lorix DataFrame API here...
const dataArray = [
    {"colA": 1, "colB": 2},
    {"colA": 2, "colB": 3},
    {"colA": 3, "colB": 4}
];

let df = lorix.DataFrame.fromArray(dataArray);
df.head();
```

```html
<!-- Reference your_module.js script your html file -->
<script type="module" src="your_module.js"></script>
```

# License

Free Software through the [GNU Affero GPL v3](https://www.gnu.org/licenses/why-affero-gpl.en.html)

See LICENSE file for details.
