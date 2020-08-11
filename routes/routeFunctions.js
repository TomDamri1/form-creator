const Field = require('../models/FieldSchema');

const createFields = async (fields) => {
    let fieldIdArray = []
    for (let index = 0; index < fields.length; index++) {
        const fieldData = new Field({
            order: fields[index].id,
            fieldLabel: fields[index].fieldLabel,
            inputName: fields[index].inputName,
            inputType: fields[index].inputType,
        })
        try {
            await fieldData.save();
            fieldIdArray.push(fieldData._id);
        } 
        catch (error) {
            return "Error";
        }
    }
    return fieldIdArray;
}


module.exports = createFields;