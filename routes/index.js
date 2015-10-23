var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react"),
	ReactDomServer = require('react-dom/server'),
    App = React.createFactory(require("../public/javascripts/components/app"));

/* GET home page. */
router.get('/', function(req, res) {
  var markup = ReactDomServer.renderToString(App());      

  res.render('index', { 
    title: 'Express',
    markup: markup 
  });
});

module.exports = router;
