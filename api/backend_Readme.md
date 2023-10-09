#### Backend tutorial for fiverr-clone app:

- create package.json file using

```js
npm init -y
```

- make a file named server.js
- rename index.js to server.js inside package.json file under main section.
- To use ES module method or es6 method include this inside package.json

```json
"type": "module.js"
```

- Now you can you es6 features like

```js
import express from "express";
```

- add this script under script section to start your app with nodemon

```json
"start": "nodemon server.js"
```

**Q 1.** How to clone single branch in git ?

```bash

    git clone --single-branch -b "branch_name" <repo_link> . # here dot is added to clone in the current folder
```

**Point 1.** In review model we use enum to give option to select from [1,2,3,4,5] only
