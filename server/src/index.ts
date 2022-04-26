import cors from 'cors';
import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import { Server } from 'socket.io';
import AppDataSource from './data-source';
import { authRouter } from './routes/auth';
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

  socket.on('send-message', ({ recipients, text }) => {
    console.log({ recipients, text });
  });
});

server.listen(process.env.PORT || 8181, async () => {
  await AppDataSource.initialize();
  console.log('connected to DB');
});
