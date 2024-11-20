import sql from 'mssql';

const config = {
    user: 'sa',
    password: 'AutodeskVault@26200',
    server: 'localhost',
    database: 'DB_SECTORIALCATEGORIAS',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.log(error);
    }
}