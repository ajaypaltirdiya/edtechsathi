const Lead = require('../models/leadModel');

const createLead = (req,res) => {
    const { name, mobileNumber, lookingFor, wantToLiveIn } = req.body;
    if (!name || !mobileNumber || !lookingFor || !wantToLiveIn) {
        return res.json({success:false, message: 'Name, mobile number, and want to live in are required' });
    }

    Lead.create(name, mobileNumber, lookingFor, wantToLiveIn.join(','), (err,result) => {
        if(err){
            return res.json(err);
        }
        res.status(201).send({success : true, message : 'Form Submitted Successfully.', data:{id: result.insertId, name, mobileNumber, lookingFor, wantToLiveIn } });
    })
}

const getAllLeads = (req,res) => {
    Lead.findAll((err, results) => {
        if(err){
            return res.send(err);
        }
        res.status(200).send(results);
    });
}


module.exports = {createLead,getAllLeads};