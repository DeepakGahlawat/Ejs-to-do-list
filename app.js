const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var items =['eggs','fish','butter'];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/', (req, res) => {
 
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var today= new Date()
  var currentDay=weekday[today.getDay()]

  var options ={
    weekday: 'long',
    day:'numeric',
    month: 'long'
  }
  var day= today.toLocaleDateString('en-us',options)
  res.render('list',{KindOfDay:day,newlistitems: items})

})
app.post('/',function(req,res){
     item= req.body.newitem;
     items.push(item);
     res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})