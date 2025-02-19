import express from 'express';
import os from 'os'

const app = express();

app.get('/user', (req, res) => {

    const clientIP = req.headers['x-forwarded-for'];
    const elbIP = req.socket.remoteAddress;
    const containerIP = req.socket.localAddress;
    const containername = os.hostname(); 

    console.log('Hello Amazon ECS User from ribun ne V3');
    res.json({
        serviceName: 'ribun ECS demo v3!!!!!',
        contact: 'ribun@holoc.id.vn',
        clientIP: clientIP,
        elbIP: elbIP,
        containerIP: containerIP,
        containername: containername
    });
});

app.listen(8080, () =>{
    console.log("App started Successfully");
});