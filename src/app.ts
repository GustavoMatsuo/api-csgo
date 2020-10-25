import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.use((req, res) => {
  res.status(404);

  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
});

export default app