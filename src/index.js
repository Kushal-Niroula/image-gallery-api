const express =  require ('express')
const app = express();
const cors = require('cors');
const routes = require('./routes.js');
app.use(express.static(__dirname+'./../public/'));
app.use(cors());
app.use('/',routes);
app.listen(5000,'localhost',()=>{
  console.log('server listening at port 5000');
})
