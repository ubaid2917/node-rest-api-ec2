require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const errorHandler = require("./middlewares/error");


// Connect to DB
connectDB();

// Express App
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// Routes 

app.use("/api/users", userRoutes);

app.use('/api/products', (req, res) => {
  res.json(
    [
      {
        "_id": "65f1a001",
        "name": "Wireless Bluetooth Headphones",
        "description": "High-quality over-ear wireless headphones with noise cancellation.",
        "price": 89.99,
        "category": "Electronics",
        "brand": "SoundMax",
        "stock": 120,
        "rating": 4.5,
        "createdAt": "2026-02-24T10:00:00Z"
      },
      {
        "_id": "65f1a002",
        "name": "Smart Fitness Watch",
        "description": "Water-resistant fitness tracker with heart rate monitor.",
        "price": 59.99,
        "category": "Wearables",
        "brand": "FitPro",
        "stock": 75,
        "rating": 4.2,
        "createdAt": "2026-02-24T10:05:00Z"
      },
      {
        "_id": "65f1a003",
        "name": "Gaming Mechanical Keyboard",
        "description": "RGB backlit mechanical keyboard with blue switches.",
        "price": 129.99,
        "category": "Accessories",
        "brand": "KeyMaster",
        "stock": 50,
        "rating": 4.7,
        "createdAt": "2026-02-24T10:10:00Z"
      },
      {
        "_id": "65f1a004",
        "name": "4K Ultra HD Monitor",
        "description": "27-inch 4K UHD monitor with IPS display and HDR support.",
        "price": 349.99,
        "category": "Electronics",
        "brand": "ViewTech",
        "stock": 30,
        "rating": 4.6,
        "createdAt": "2026-02-24T10:15:00Z"
      },
      {
        "_id": "65f1a005",
        "name": "Portable Power Bank 20000mAh",
        "description": "Fast-charging power bank with dual USB output.",
        "price": 39.99,
        "category": "Accessories",
        "brand": "ChargeUp",
        "stock": 200,
        "rating": 4.3,
        "createdAt": "2026-02-24T10:20:00Z"
      }

    ]);
}); 

// app.use('/api/new-products', (req, res) => {
//   return res.status(500).json({ message: "Rollback test: forced 500" });
// });

app.get("/api/posts", (req,res)=> {
  res.json([
    {
      "_id": "65f1a006",
      "title": "Top 10 Tech Gadgets of 2026",
      "content": "Discover the latest and greatest tech gadgets that are making waves in 2026. From smart home devices to cutting-edge wearables, we’ve got you covered with our comprehensive list of must-have tech products.",
      "author": "Tech Guru",
      "createdAt": "2026-02-24T11:00:00Z"
    },
    {
      "_id": "65f1a007",
      "title": "How to Stay Productive While Working from Home",
      "content": "Working from home can be both a blessing and a challenge. In this article, we share practical tips and strategies to help you stay focused, organized, and productive while navigating the remote work lifestyle.",
      "author": "Productivity Expert",
      "createdAt": "2026-02-24T 11:05:00Z"
    },      
  ]);
})


app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
