const hstore = require('pg-hstore')();
const db = require("../models");
const QueryStringParser = require("../config/QueryStringParser").QueryStringParser;
const Query = db.query;
const page = 'queryController';
const utils = require('../config/utils');


const getUserQueries = async (req, res) => {
  const func = 'getUserQueries';
  try {
    const queryData = await Query.findAll()
    const response = queryData.map((obj) => {
      obj.dataValues.jsonQuery = JSON.parse(obj.dataValues.jsonQuery);
      return obj.dataValues;
    });
    res.status(200).json(response);
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

const getQueryById = async (req, res, next) => {
  const func = 'getQueryById';
  try {
    if (parseInt(req.query.id)) {
      const queryId = parseInt(req.query.id);
      const queryData = await Query.findByPk(queryId);
      // parsing query to Json
      queryData.dataValues.jsonQuery = JSON.parse(queryData.dataValues.jsonQuery);
      req.queryData = queryData.dataValues;
      console.log('queryData: ', req.queryData);
      next();
    } else {
      console.log(`${page}, ${func} || cant parseInt`);
      res.status(419).json();
    }
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

const executeQuery = async (req, res) => {
  const func = 'executeQuery';
  try {
    const QueryModel = db[req.queryData.model];
    const sequelizeQuery = QueryStringParser(req.queryData.jsonQuery);
    const data = await QueryModel.findAll({ where: sequelizeQuery })
    const response = data.map((obj) => obj.dataValues);
    res.status(200).json(response);
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

const createQuery = async (req, res) => {
  const func = 'createQuery';
  try {
    const payloadJson = utils.cleanJsonKeys([...req.body.jsonQuery])
    const queryBody = {
      ...req.body,
      jsonQuery: JSON.stringify(payloadJson),
    };
    // Save Query in database
    const data = await Query.create(queryBody)
    res.status(200).json(data.dataValues);
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

const updateQuery = async (req, res) => {
  const func = 'updateQuery';
  try {
    const id = req.body.id;
    const payloadJson = utils.cleanJsonKeys([...req.body.jsonQuery])
    const queryBody = { ...req.body, jsonQuery: JSON.stringify(payloadJson) };
    const data = await Query.update(queryBody, {where: { id: id }})
    res.status(200).end();
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

const removeQuery = async (req, res) => {
  const func = 'removeQuery';
  try {
    const id = req.params.id;
    await Query.destroy({ where: { id: id } });
    res.status(200).end();
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

// Find all published Queries
const findAllPublished = (req, res) => {
  Query.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};

module.exports = {
  getUserQueries,
  getQueryById,
  executeQuery,
  createQuery,
  updateQuery,
  removeQuery
}
