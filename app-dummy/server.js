import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.send('pong');
});

app.post('/api/echo', (req, res) => {
    res.json({ received: req.body });
});

app.listen(3000, () => {
    console.log('API dummy listening at http://localhost:3000');
});
