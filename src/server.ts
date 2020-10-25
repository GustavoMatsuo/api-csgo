import http from 'http'
import mongoose from 'mongoose'
import * as dotenv from "dotenv";

import app from './app'

dotenv.config()

mongoose.connect(`${process.env.DB_URL}`, {useNewUrlParser: true,  useUnifiedTopology: true})
  .then(
    () => {
      console.log('Database connected')

      app.listen(process.env.PORT || 3000, () => console.log('Server ON'))

      http.createServer(app);
    },
    (err) => console.log('error connect')
  );
