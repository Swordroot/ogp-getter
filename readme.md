# What is this?
A module that observes ogp info on passed url.

# Installation
```
npm install ogp-getter
```

# How to use
## JavaScript
```
var ogpGetter = require("ogp-getter")

ogpGetter.getOGP("https://some.host/url").then(data => console.log(data))
```

## TypeScript
```
import { getOGP } from "ogp-getter";

const run = async () => {
  const ogpInfo = await getOGP("https://some.host/url");
  console.log(ogpInfo)
}

run();
```