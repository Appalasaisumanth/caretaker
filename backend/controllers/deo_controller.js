const connection = require('../connection')
const bcrypt = require('bcrypt');
async function populate_deo(req, res) {
    try {

        connection.query("SELECT * FROM deo", async (err2, result2) => {
            if (err2) 
                {
                console.error("Error fetching deo:", err2);
                return res.status(500).json({ error: "Failed to fetch deos" });
            } 
            if (result2.length > 0) {
                return res.status(200).json({ message: "already exist", deos: result2 });
            }
      

        let values = [];

        for (let i = 0; i < 5; i++) {
            const username = `deo${i + 1}`;
            const password = await bcrypt.hash(`deo${i + 1}@123`, 12);
            values.push(`('${username}', '${password}')`);
        }

        const query = `INSERT INTO deo (username, password) VALUES ${values.join(", ")};`;

        connection.query(query, (err, result) => {
            if (err) {
                console.error("Error inserting deos:", err);
                return res.status(500).json({ error: "Failed to insert deos" });
            }

            console.log("deos created successfully");
            connection.query("SELECT * FROM deo", (err2, result2) => {
                if (err2) {
                    console.error("Error fetching deos:", err2);
                    return res.status(500).json({ error: "Failed to fetch deos" });
                }

                return res.status(200).json({ deos: result2 });
            });
        });
    });

    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
module.exports = {
    populate_deo
}