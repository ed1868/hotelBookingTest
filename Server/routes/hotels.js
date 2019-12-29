
const express = require('express');

const router = express.Router();


const Hotel = require('../Models/Hotel');



router.get('/', (req, res, next) => {
  Hotel.find({}, (err, hotels) => {
    if (hotels == null) {
      return res.json({ message: 'No Hotels Up in Here' });
    }
    return res.status(200).json({ hotels });
  });
});

module.exports = router;