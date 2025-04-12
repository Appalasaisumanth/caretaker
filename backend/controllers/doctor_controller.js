const connection = require('../connection')
const bcrypt = require('bcrypt');
async function populate_doctors(req, res) {
    try {

        connection.query("SELECT * FROM doctor", (err2, result2) => 
            {
            if (err2) {
                console.error("Error fetching doctors:", err2);
                return res.status(500).json({ error: "Failed to fetch doctors" });
            } if (result2.length>0)
{
            return res.status(200).json({ message:"already exist",doctors: result2 });
}
        });
    
        let values = [];
       let  departments=['cardiology','general','dentist','neurology','radiology'];

        for (let i = 0; i < 10; i++) {

            const username = `doctor${i + 1}`;
            
            const password = await bcrypt.hash(`doctor${i + 1}@123`, 12);
            values.push(`(${i+1},'${username}','M.B.B.S,M.D in ${departments[i%5]}',${10+i%2}, '${password}','${departments[i%5]}')`);
        }

        const query = `INSERT INTO doctor (id,name,qualification,experience, password,department) VALUES ${values.join(", ")};`;

        connection.query(query, (err, result) => {
            if (err) {
                console.error("Error inserting doctors:", err);
                return res.status(500).json({ error: "Failed to insert doctors" });
            }

            console.log("doctors created successfully");
            connection.query("SELECT * FROM doctor", (err2, result2) => {
                if (err2) {
                    console.error("Error fetching doctors:", err2);
                    return res.status(500).json({ error: "Failed to fetch doctors" });
                }

                return res.status(200).json({ doctors: result2 });
            });
        });

    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
module.exports={
    populate_doctors
}