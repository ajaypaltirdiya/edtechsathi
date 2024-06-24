const db = require('../config/db');

const Leads = {
    create : (name, mobileNumber, lookingFor, wantToLiveIn, callback) => {
        const sql = 'INSERT INTO leads (name, mobile_number, looking_for, want_to_live_in) VALUE (?, ?, ?, ?)';
        db.query(sql, [name, mobileNumber, lookingFor, wantToLiveIn], (err, result) => {
            callback(err,result);
        });
    },
    findAll : (callback) => {
        const sql = 'SELECT * FROM leads';
        db.query(sql,(err,result) => {
            callback(err,result);
        });
    },
    findById : (id,callback) => {
        const sql = 'SELECT * FROM leads WHERE id = ?';
        db.query(sql,[id], (err,result) => {
            callback(err,result);
        });
    },
    update : (id, name, mobileNumber, lookingFor, wantToLiveIn, callback) => {
        const sql = 'UPDATE leads SET name = ?, mobile_number = ?, looking_for = ?, want_to_live_in = ? WHERE id = ?';
        db.query(sql,[name, mobileNumber, lookingFor, wantToLiveIn, id],(err,result) => {
            callback(err,result);
        });
    },
    delete : (id,callback) => {
        const sql = 'DELETE FROM leads WHERE id = ?';
        db.query(sql,[id],(err,result) => {
            callback(err,result);
        });
    }
}

module.exports = Leads;