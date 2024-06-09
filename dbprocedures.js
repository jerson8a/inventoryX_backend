var config = require('./dbconfig');
const sql = require('mssql');
const { get } = require('./pool-manager');

async function insertUser(extId, firstName, lastName, email) {
    try {
        const pool = await get('default', config);
        return pool.request()
                                .input('UserId', sql.Int, 0)
                                .input('ExternalId', sql.VarChar, extId)
                                .input('FirstName', sql.VarChar, firstName)
                                .input('LastName', sql.VarChar, lastName)
                                .input('Email', sql.VarChar, email)
                                .execute('[sec].[spX_InsertUser]')
                                .then((response) => {
                                    return response.recordset;
                                })

    } catch (error) {
        console.log(error);
    }
}

async function getCategories() {
    try {
        const pool = await get('default', config);
        return pool.request().execute('[cnf].[spX_ObtenerCategorias]')
                            .then((response) => {
                                return response.recordset;
                            })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    insertUser,
    getCategories,
}