require('dotenv').config();
const express = require('express');
const app = express();
const usersRoutes = require('./Routes/users');
const adminsRoutes = require("./Routes/admins")
const technRoutes = require("./Routes/techns")

app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/admins', adminsRoutes);
app.use('/api/techniciens', technRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
