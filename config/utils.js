


const validateParamExists = (fieldName, container) => (req, res, next) => {
  let isValid = true;
  let missingFields = '';
  if (!(fieldName instanceof Array)) {
    fieldName = [fieldName];
  }
  for (let i = 0; i < fieldName.length && isValid; i++) {
    let propName = fieldName[i];
    if (fieldName[i] && fieldName[i].indexOf('.') !== -1) {
      propName = propName.split('.');
      const containerProp = req[container] && req[container][propName[0]] && req[container][propName[0]][propName[1]];
      if (!containerProp && containerProp != 0) {
        isValid = false;
        missingFields += `${fieldName[i]} `;
      }
    } else if (!req[container][propName] && req[container][propName] != 0) {
      isValid = false;
      missingFields += `${fieldName[i]} `;
    }
  }
  if (!isValid) {
    res.status(400).json(`Bad parameter at ${missingFields}`);
    console.error(`Bad parameter at ${missingFields}`);
  } else {
    next();
  }
};

const cleanJsonKeys = (payload) => {
  return payload.map(item => {
    if (item.key) delete item.key;
    if (item.rules) cleanJsonKeys(item.rules);
    return item;
  });
}
module.exports = {
  validateParamExists,
  cleanJsonKeys
}
