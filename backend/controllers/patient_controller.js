const connection = require('../connection')
const bcrypt = require('bcrypt');
async function populate_patient(req, res) {
    try {

        connection.query("SELECT * FROM patient", (err2, result2) => 
            {
            if (err2) {
                console.error("Error fetching patients:", err2);
                return res.status(500).json({ error: "Failed to fetch patients" });
            } if (result2.length>0)
{
            return res.status(200).json({ message:"already exist",patients: result2 });
}
        });
    
        let values = [];

        for (let i = 0; i < 10; i++) {
            const username = `patient${i + 1}`;
            const password = await bcrypt.hash(`patient${i + 1}@123`, 12);
            values.push(`(${i+1},'${username}', '${password}', '1234567890' )`);
        }

        const query = `INSERT INTO patient (id,name, password,contact) VALUES ${values.join(", ")};`;

        connection.query(query, (err, result) => {
            if (err) {
                console.error("Error inserting patients:", err);
                return res.status(500).json({ error: "Failed to insert patients" });
            }

            console.log("patients created successfully");
            connection.query("SELECT * FROM patient", (err2, result2) => {
                if (err2) {
                    console.error("Error fetching patients:", err2);
                    return res.status(500).json({ error: "Failed to fetch patients" });
                }

                return res.status(200).json({ patients: result2 });
            });
        });

    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports={
    populate_patient

}