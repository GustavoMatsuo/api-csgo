import http from 'http'
import mongoose from 'mongoose'
import * as dotenv from "dotenv";

import app from './app'

dotenv.config()

mongoose.connect(`${process.env.DB_URL}`, {useNewUrlParser: true,  useUnifiedTopology: true})
  .then(
    () => {
      console.log('Database connected')
      const PORT = 3000
      const HOST = '0.0.0.0'

      app.listen(PORT, HOST, () => console.log('Server ON'))

      http.createServer(app);
    },
    (err) => console.log('error connect')
  );
