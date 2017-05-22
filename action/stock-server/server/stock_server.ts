/**
 * Created by zhailiang on 2017/5/17.
 */

import * as express from "express";
import * as path from "path";
import {Server} from "ws";

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')))

app.get('/api/stock', (req, res) => {
    let result = stocks;
    let params = req.query;

    if(params.nam){
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1);
    }

    res.json(result);
});

app.get('/api/stock/:id', (req, res) => {
    res.json(stocks.find(stock => stock.id == req.params.id));
});

const server = app.listen(8086, 'localhost', () => {
    console.log('服务器已启动,地址是:http://localhost:8086');
});

var subscriptions = new Set<any>();

const wsServer = new Server({port: 8085});
wsServer.on("connection", websocket => {
    subscriptions.add(websocket);
});

var messageCount = 0;

setInterval(() => {
    subscriptions.forEach(ws => {
        if(ws.readyState === 1){
            ws.send(JSON.stringify({messageCount: messageCount++}));
        }else{
            subscriptions.delete(ws);
        }
    })
}, 2000);

export class Stock {
    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {

    }
}

const stocks: Stock[] = [
    new Stock(1, "第一只股票", 1.99, 3.5, "这是第一只股票,是我在学习慕课网Angular入门实战时创建的", ["IT", "互联网"]),
    new Stock(2, "第二只股票", 2.99, 4.5, "这是第二只股票,是我在学习慕课网Angular入门实战时创建的", ["金融"]),
    new Stock(3, "第三只股票", 3.99, 2.5, "这是第三只股票,是我在学习慕课网Angular入门实战时创建的", ["IT"]),
    new Stock(4, "第四只股票", 4.99, 1.5, "这是第四只股票,是我在学习慕课网Angular入门实战时创建的", ["互联网"]),
    new Stock(5, "第五只股票", 5.99, 2.4, "这是第五只股票,是我在学习慕课网Angular入门实战时创建的", ["金融"]),
    new Stock(6, "第六只股票", 6.99, 3.5, "这是第六只股票,是我在学习慕课网Angular入门实战时创建的", ["IT", "互联网"]),
    new Stock(7, "第七只股票", 7.99, 5.0, "这是第七只股票,是我在学习慕课网Angular入门实战时创建的", ["IT", "金融"]),
    new Stock(8, "第八只股票", 8.99, 4.5, "这是第八只股票,是我在学习慕课网Angular入门实战时创建的", ["金融", "互联网"]),
];