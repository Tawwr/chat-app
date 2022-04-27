import cors from 'cors';
import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import http from 'http';
import AppDataSource from './data-source';
import { authRouter } from './routes/auth';
import { Server } from 'socket.io';
dotenv.config();
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('Server is running');
});
app.use('/auth', authRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  const userId = socket.handshake.query.id;
  socket.join(userId);
  console.log(`User ${userId} connected`);
   
  socket.on('send-message', (payload) => {
    //TODO: ssend message to all group recipients
    io.to("3").emit('update-ui', payload)
  });
});

server.listen(process.env.PORT || 8181, async () => {
    await AppDataSource.initialize();
    console.log('connected to DB');
  });
