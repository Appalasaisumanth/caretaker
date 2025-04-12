const connection = require('../connection')
const bcrypt = require('bcrypt');
async function populate_fdo(req, res) {
    try {

        connection.query("SELECT * FROM fdo",async (err2, result2) => 
            {
            if (err2) {
                console.error("Error fetching fdo:", err2);
                return res.status(500).json({ error: "Failed to fetch fdos" });
            } if (result2.length>0)
{
            return res.status(200).json({ message:"already exist",fdos: result2 });
}
       
        let values = [];

        for (let i = 0; i < 5; i++) {
            const username = `fdo${i + 1}`;
            const password = await bcrypt.hash(`fdo${i + 1}@123`, 12);
            values.push(`('${username}', '${password}')`);
        }

        const query = `INSERT INTO fdo (username, password) VALUES ${values.join(", ")};`;

        connection.query(query, (err, result) => {
            if (err) {
                console.error("Error inserting fdos:", err);
                return res.status(500).json({ error: "Failed to insert fdos" });
            }

            console.log("fdos created successfully");
            connection.query("SELECT * FROM fdo", (err2, result2) => {
                if (err2) {
                    console.error("Error fetching fdos:", err2);
                    return res.status(500).json({ error: "Failed to fetch fdos" });
                }

                return res.status(200).json({ fdos: result2 });
            });
        });
    });
    
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
module.exports={
    populate_fdo
}