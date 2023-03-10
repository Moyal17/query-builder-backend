const db = require("../models");
const QueryStringParser = require("../config/QueryStringParser").QueryStringParser;
const Query = db.query;
const page = 'queryController';
const utils = require('../config/utils');


const getUserQueries = async (req, res) => {
  const func = 'getUserQueries';
  try {
    let response = [];
    const queryData = await Query.findAll({ where: { userId: req.user.id }})
    if (queryData && queryData.length > 0) {
      response = queryData.map((obj) => {
        const query = obj.dataValues;
        query.jsonQuery = JSON.parse(query.jsonQuery);
        const { userId, updatedAt, ...restQuery } = query;
        return restQuery;
      });
    }
    res.status(200).json(response);
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
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
      res.status(419).send({message: 'cant parse query Id'});
    }
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
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
    res.status(419).send({message: e.message});
  }
};

const createQuery = async (req, res) => {
  const func = 'createQuery';
  try {
    const payloadJson = utils.cleanJsonKeys([...req.body.jsonQuery])
    const queryBody = {
      ...req.body,
      jsonQuery: JSON.stringify(payloadJson),
      userId: req.user.id
    };
    // Save Query in database
    const data = await Query.create(queryBody)
    res.status(200).json(data.dataValues);
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
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
    res.status(419).send({message: e.message});
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
    res.status(419).send({message: e.message});
  }
};

module.exports = {
  getUserQueries,
  getQueryById,
  executeQuery,
  createQuery,
  updateQuery,
  removeQuery
}
