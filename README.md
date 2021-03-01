# antd-button-color
[![npm version](https://img.shields.io/badge/npm-1.0.4-success.svg)](https://www.npmjs.com/package/antd-button-color) 
[![License](http://img.shields.io/:license-mit-success.svg)](http://badges.mit-license.org)

Simple button for Ant Design react with more color like default, primary, success, warning, info, dark, lightdark.
<br/>
<br/>
<a href="https://codesandbox.io/s/amazing-thompson-grfvh" target="_blank" rel="noopener noreferrer">DEMO</a>
<br/>
<br/>
![ImageDemo](https://raw.githubusercontent.com/herudi/antd-button-color/master/screenshot_1.png)
## Features

- More color for button (primary, success, warning, info, dark, lightdark, default).

## Installation
### Note: install Ant Design (required).

```bash
$ npm install antd
//or
$ yarn add antd
```

Next install using npm:

```bash
$ npm install antd-button-color
```

If using yarn:

```bash
$ yarn add antd-button-color
```

## Usage

### Import Style css or less
```JavaScript

//import css or less
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'antd-button-color/dist/css/style.css'; // or 'antd-button-color/dist/css/style.less'

// global vars in less
// @success-color: #28a745;
// @warning-color: #eca52b;
// @info-color: #17a2b8;
// @dark-color: #343a40;
// @light-dark-color: #6c757d;

```

### Usage in jsx or tsx

```JavaScript

//esm or ts
import Button from "antd-button-color";

//example usage
<Button type="primary">Primary Button</Button>
<Button type="success">Success Button</Button>
<Button type="info">Info Button</Button>
<Button type="warning">Warning Button</Button>
<Button type="dark">Dark Button</Button>
<Button type="lightdark">Lightdark Button</Button>
<Button type="default">Deafult Button</Button>

//with dashed
<Button with="dashed" type="success">Success Dashed Button</Button>

//with link
<Button with="link" type="info">Info Link Button</Button>
```

## License

[MIT](LICENSE)


