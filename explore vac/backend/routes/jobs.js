router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
                j.id, j.libelle, j.poste, j.lieu, j.logo, j.salaire, j.date_limite,
                q.description AS qualification
            FROM jobs j
            LEFT JOIN qualifications q ON j.id = q.job_id
        `);

        // Regrouper les qualifications par job
        const grouped = {};
        rows.forEach(row => {
            if (!grouped[row.id]) {
                grouped[row.id] = {
                    id: row.id,
                    libelle: row.libelle,
                    poste: row.poste,
                    lieu: row.lieu,
                    logo: row.logo,
                    salaire: row.salaire,
                    date_limite: row.date_limite,
                    qualification: []
                };
            }
            if (row.qualification) {
                grouped[row.id].qualification.push(row.qualification);
            }
        });

        res.json(Object.values(grouped));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});
