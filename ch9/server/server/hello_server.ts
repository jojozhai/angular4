/**
 * Created by zhailiang on 2017/2/18.
 */
import * as http from 'http'

const server = http.createServer((request, response) => {
    response.end("Hello Node!");
});

server.listen(8000);