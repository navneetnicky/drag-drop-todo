const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self';");
    next();
  });

// Routes

const userRouter = require('./routes/user.js')
app.use("/user", userRouter);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
