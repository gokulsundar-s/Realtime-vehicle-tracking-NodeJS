const mysql = require('mysql2');
// const data = require('./t')
const exp = require('express');
const bodyParser = require('body-parser');
const app = exp();
app.listen(8000);
app.use(bodyParser.json());
// Create a MySQL connection pool
const pool = mysql.createPool({
  host: '10.1.72.13',
  user: 'root',
  password: 'dhanaeswaran2004',
  database: 'pharmacymanagement',
  waitForConnections: true,
  connectionLimit: 10, // Adjust the number of connections as needed
  queueLimit: 0
});
const insertData = (data) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }

    const sql = 'UPDATE location SET latitude = ?, longitude = ? WHERE busid = ?';
    const values = [data.latitude, data.longitude,2]; // Replace with your data values

    connection.query(sql, values, (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error('Error inserting data:', err);
      }
      
      console.log('Data inserted successfully:', result);
    });
  });
}
app.get('/', (req, res) => {
  res.sendFile('F:/Sem - 5/SIH/findlocation/demo1.html');
});
app.post('/insert',(req,res)=>{
// Insert data into the database
console.log("come");

  const { latitude, longitude } = req.body;
  console.log(latitude, longitude )
  insertData({latitude, longitude})
});


// Example data to insert
// let datatoInsert;



// Insert the data into the database
// console.log(dataToInsert);