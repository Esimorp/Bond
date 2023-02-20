#!/usr/bin/env node


import getPort from 'get-port'

import app from '../app.js'
import http from 'http'

const startApp = async () => {
    const port = await getPort();
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port);
}

startApp().then()



