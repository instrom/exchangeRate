let errHandler = function(err, req, res, next) {
    console.log(err);
    if (err.name === 'ValidationError') {
      let key = Object.keys(err.errors)[0]
      res.status(400).json({ message: `Error: ${err.errors[key].message}` })
    }
    else {
        if(err.status == 400) {
            res.status(400).json({ message: err.message});
        } else if(err.status == 401) {
            res.status(401).json({ message: `Unauthorized Access` })
        } else if(err.status == 404) {
            res.status(404).json({message: `not found`})
        } else {
            res.status(500).json({ message: `Internal server error` })
        }
    }
  }
  
  module.exports = errHandler 