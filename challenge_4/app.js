const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs')
const querystring = require("querystring")
const { PORT = 8000 } = process.env;

const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

function getHtml(page) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, `${page}.html`);

    return fs.readFileSync(htmlFilePath, 'utf-8');
}

function getJSON(data) {
    const toJSON = JSON.stringify(data);

    return toJSON;
}

function router() {
    const routes = {
        get: () => { },
        post: () => { },
    };
    const get = (path, cb) => {
        routes.get[path] = cb;
    };
    const post = (path, cb) => {
        routes.post[path] = cb;
    };
    return {
        get,
        post,
        routes,
    };
}

const appRouter = router();

appRouter.get('/', (req, res) => {
    const pageContent = getHtml('index');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(pageContent);
})

appRouter.get('/search', (req, res) => {
    const pageContent = getHtml('search');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(pageContent);
})

appRouter.get('/result', (req, res) => {
    const pageContent = getHtml('result');
    const realQueryString = req.url.replace('/result?','');
    const queryString = querystring.parse(realQueryString);
    var htmlRenderized = ejs.render(pageContent, {
        data:queryString,
    });
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(htmlRenderized);
})

appRouter.get('/style.css', (req, res) => {
    const cssFilePath = path.join(PUBLIC_DIRECTORY, 'assets/css/style.css');
    const cssContent = fs.readFileSync(cssFilePath, 'utf-8');
    res.setHeader('Content-Type', 'text/css');
    res.writeHead(200);
    res.end(cssContent);
});

appRouter.get('/script.js', (req, res) => {
    const jsFilePath = path.join(PUBLIC_DIRECTORY, 'assets/js/script.js');
    const jsContent = fs.readFileSync(jsFilePath, 'utf-8');
    res.setHeader('Content-Type', 'application/javascript');
    res.writeHead(200);
    res.end(jsContent);
});


appRouter.get('/assets/img/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(PUBLIC_DIRECTORY, 'assets/img', filename);

    // Check if the file exists before reading and serving it
    fs.access(imagePath, fs.constants.R_OK, (err) => {
        if (err) {
            res.setHeader('Content-Type', 'text/plain');
            res.writeHead(404);
            res.end('Image not found');
        } else {
            // Set the appropriate Content-Type for SVG files
            res.setHeader('Content-Type', 'image/svg+xml');
            res.writeHead(200);
            const imageContent = fs.readFileSync(imagePath);
            res.end(imageContent);
        }
    });
});


const server = () => {
    return (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const { pathname } = parsedUrl;
        if (req.method === 'GET' && appRouter.routes.get[pathname]) {
            appRouter.routes.get[pathname](req, res);
        } else if (req.method === 'POST' &&
            appRouter.routes.post[pathname]) {
            appRouter.routes.post[pathname](req, res);
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(404);
            res.end(getHtml('404'));
        }
    };
};

// running server
http.createServer(server()).listen(PORT, '0.0.0.0', () => {
    console.log('Server is running, open http://0.0.0.0: %d', PORT);
});

