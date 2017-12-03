[![NPM](https://nodei.co/npm/leadcollector.png)](https://nodei.co/npm/leadcollector/)

# leadcollector

A robust Node.js scraper that collects search results from google and checks whether if they are built on wordpress

## Download
The source is available for download from
[GitHub](https://github.com/saintsweeto/leadcollector).
Alternatively, you can install using Node Package Manager (npm):
<pre>
  npm install leadcollector
</pre>

## Usage
```javascript
const Collector = require('leadcollector');

const options = {
  host: 'www.google.com'
  keyword: 'software+auckland',
  results: 100
};

Collector.collect(options, function (lead) {
    console.log(lead);
});
```
