// Acts as an accumulator of all admin routes
const express = require('express');

const router = express.Router();

const adminPostApi = require('./adminPostApi');
const commonPostApi = require('./commonPostApi');

// all calls will be forwarded to postApi
// TODO: add different routers for different routes
router.use(adminPostApi);
router.use(commonPostApi);

module.exports = router;
