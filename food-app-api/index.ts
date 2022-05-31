import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const meals: Meal[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const app: Express = express();
const port = process.env.PORT;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  next();
});
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
  res.send('React Food App API');
});

app.get('/meals', (req: Request, res: Response) => {
  res.send(meals);
});

app.post('/order', (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
