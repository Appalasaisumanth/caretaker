const connection = require('../connection')

function create_table_admin(req, res, next) {
    connection.query("SHOW TABLES LIKE ?", ['admin'], (err, results) => {
        if (err) {
            console.error("Query error:", err);
            return res.status(500).json({ message: 'internal server error' })
        } else if (results.length > 0) {
            console.log(` Table '${tableName}' exists.`);
            return res.status(200).json({ message: 'table exists' })
        } else 
        {
            connection.query(`CREATE TABLE admin(  
                  username varchar(50) UNIQUE PRIMARY KEY ,
                  password varchar(100) );`, (err, results) => {
                if (err) {
                    console.error("Query error:", err);
                    return res.status(500).json({ message: 'internal server error' })
                } else {
                    console.log(` Table created exists.`);
                    return res.status(200).json({ message: 'table created successfully' })

                }
            } );

   }
});
 
}

function create_table_fdo(req, res, next) {
    connection.query("SHOW TABLES LIKE ?", ['fdo'], (err, results) => {
        if (err) {
            console.error("Query error:", err);
            return res.status(500).json({ message: 'internal server error' })
        } else if (results.length > 0) {
            console.log(` Table fdo exists.`);
            return res.status(200).json({ message: 'table exists' })
        } else 
        {
            connection.query(`CREATE TABLE fdo(  
                  username varchar(50) UNIQUE PRIMARY KEY ,
                  password varchar(100) );`, (err, results) => {
                if (err) {
                    console.error("Query error:", err);
                    return res.status(500).json({ message: 'internal server error' })
                } else {
                    console.log(` Table created exists.`);
                    return res.status(200).json({ message: 'table created successfully' })

                }
            } );

   }
});
}

function create_table_deo(req, res, next) {
    connection.query("SHOW TABLES LIKE ?", ['deo'], (err, results) => {
        if (err) {
            console.error("Query error:", err);
            return res.status(500).json({ message: 'internal server error' })
        } else if (results.length > 0) {
            console.log(` Table 'deo' exists.`);
            return res.status(200).json({ message: 'table exists' })
        } else 
        {
            connection.query(`CREATE TABLE deo(  
                  username varchar(50) UNIQUE PRIMARY KEY ,
                  password varchar(100) );`, (err, results) => {
                if (err) {
                    console.error("Query error:", err);
                    return res.status(500).json({ message: 'internal server error' })
                } else {
                    console.log(` Table created exists.`);
                    return res.status(200).json({ message: 'table created successfully' })

                }
            } );

   }
});
}











    function create_table_doctor(req, res, next) {
      const tableName = "doctor"; // Define the table name
    
      connection.query("SHOW TABLES LIKE ?", [tableName], (err, results) => {
        if (err) {
          console.error("Query error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
    
        if (results.length > 0) {
          console.log(`Table '${tableName}' already exists.`);
          return res.status(200).json({ message: "Table already exists" });
        } else {
          const createTableQuery = `
            CREATE TABLE ${tableName} (
              id INT PRIMARY KEY AUTO_INCREMENT,
              name VARCHAR(50),
              qualification VARCHAR(40),
              experience INT,
              password VARCHAR(40)
            );
          `;
    
          connection.query(createTableQuery, (err2, result) => {
            if (err2) {
              console.error("Error creating table:", err2);
              return res.status(500).json({ error: "Failed to create table" });
            }
    
            console.log(` Table '${tableName}' created successfully.`);
            return res.status(200).json({ message: "Table created successfully" });
          });
        }
      });
    }




    function create_table_patient(req, res, next) {
      const tableName = "patient"; // Define the table name
    
      connection.query("SHOW TABLES LIKE ?", [tableName], (err, results) => {
        if (err) {
          console.error("Query error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
    
        if (results.length > 0) {
          console.log(`Table '${tableName}' already exists.`);
          return res.status(200).json({ message: "Table already exists" });
        } else {
          const createTableQuery = `
            CREATE TABLE ${tableName} (
              id INT PRIMARY KEY AUTO_INCREMENT,
              name VARCHAR(50),
              password varchar(50),
              contact varchar(10)
            );
          `;
    
          connection.query(createTableQuery, (err2, result) => {
            if (err2) {
              console.error("Error creating table:", err2);
              return res.status(500).json({ error: "Failed to create table" });
            }
    
            console.log(` Table '${tableName}' created successfully.`);
            return res.status(200).json({ message: "Table created successfully" });
          });
        }
      });
    }


    function create_table_appointments(req, res, next) {
      const tableName = "appointment";
    
      connection.query("SHOW TABLES LIKE ?", [tableName], (err, results) => {
        if (err) {
          console.error("Query error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
    
        if (results.length > 0) {
          console.log(`Table '${tableName}' already exists.`);
          return res.status(200).json({ message: "Table already exists" });
        } else {
          const createTableQuery = `
            CREATE TABLE ${tableName} (
              aid INT PRIMARY KEY AUTO_INCREMENT,
              pid INT,
              did INT,
              time TIME,
              date DATE,
              FOREIGN KEY (pid) REFERENCES patient(id),
              FOREIGN KEY (did) REFERENCES doctor(id)
            );
          `;
    
          connection.query(createTableQuery, (err2, result) => {
            if (err2) {
              console.error("Error creating table:", err2);
              return res.status(500).json({ error: "Failed to create table" });
            }
    
            console.log(`Table '${tableName}' created successfully.`);
            return res.status(200).json({ message: "Table created successfully" });
          });
        }
      });
    }
    
    function create_table_treatment(req, res, next) {
      const tableName = "treatment";
    
      connection.query("SHOW TABLES LIKE ?", [tableName], (err, results) => {
        if (err) {
          console.error("Query error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
    
        if (results.length > 0) {
          console.log(`Table '${tableName}' already exists.`);
          return res.status(200).json({ message: "Table already exists" });
        } else {
          const createTableQuery = `
            CREATE TABLE ${tableName} (
              aid INT,
              details varchar(100),
              FOREIGN KEY (aid) REFERENCES appointment(aid)
            );
          `;
    
          connection.query(createTableQuery, (err2, result) => {
            if (err2) {
              console.error("Error creating table:", err2);
              return res.status(500).json({ error: "Failed to create table" });
            }
    
            console.log(`Table '${tableName}' created successfully.`);
            return res.status(200).json({ message: "Table created successfully" });
          });
        }
      });
    }
    
    function create_table_test(req, res, next) {
      const tableName = "test";
    
      connection.query("SHOW TABLES LIKE ?", [tableName], (err, results) => {
        if (err) {
          console.error("Query error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
    
        if (results.length > 0) {
          console.log(`Table '${tableName}' already exists.`);
          return res.status(200).json({ message: "Table already exists" });
        } else {
          const createTableQuery = `
            CREATE TABLE ${tableName} (
              aid INT,
              details varchar(100),
              FOREIGN KEY (aid) REFERENCES appointment(aid)
            )
          `;
    
          connection.query(createTableQuery, (err2, result) => {
            if (err2) {
              console.error("Error creating table:", err2);
              return res.status(500).json({ error: "Failed to create table" });
            }
    
            console.log(`Table '${tableName}' created successfully.`);
            return res.status(200).json({ message: "Table created successfully" });
          });
        }
      });
    }

    function create_table_room(req, res, next) {
        const tableName = "room";
      
        connection.query("SHOW TABLES LIKE ?", [tableName], (err, results) => {
          if (err) {
            console.error("Query error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
          }
      
          if (results.length > 0) {
            console.log(`Table '${tableName}' already exists.`);
            return res.status(200).json({ message: "Table already exists" });
          } else {
            const createTableQuery = `
              CREATE TABLE ${tableName} (
                id INT AUTO_INCREMENT PRIMARY KEY,
                pid int,
                details varchar(100),
                start_time DATETIME,
                end_time DATETIME,
                FOREIGN KEY (pid) REFERENCES patient(id)
              );
            `;
      
            connection.query(createTableQuery, (err2, result) => {
              if (err2) {
                console.error("Error creating table:", err2);
                return res.status(500).json({ error: "Failed to create table" });
              }
      
              console.log(`Table '${tableName}' created successfully.`);
              return res.status(200).json({ message: "Table created successfully" });
            });
          }
        });
      }
    
module.exports = {
        create_table_admin,
        create_table_appointments,
        create_table_doctor,
        create_table_patient,
        create_table_treatment,
        create_table_test,
        create_table_deo,
        create_table_fdo,
        create_table_room
    };