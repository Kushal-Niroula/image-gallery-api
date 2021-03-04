//imports
const express =  require ('express')
const app = express();
const cors = require('cors');
const routes = require('./routes.js');
const {PORT} = require('./env.js');

//making public folder static
app.use(express.static(__dirname+'./../public/'));

app.use(cors());
app.use('/',routes);

// starting the server
app.listen(PORT,'localhost',()=>{
  console.log(`server listening at port ${PORT}`);
})
