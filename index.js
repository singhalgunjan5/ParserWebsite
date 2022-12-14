const express = require('express');
const bodyParser=require('body-parser');
const path = require('path'); 
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
})
var text;
var ans;

app.post('/',(req,res)=>{
     text=req.body.name;
     console.log(text);
     const toTextString = require("to-text-string");
     var sls = require('single-line-string');
     var Urls = require('my-name-is-url');
     const result = toTextString(text);
      ans=Urls(result).get();
      var obj={textinput:ans};
    //   res.send(ans);
     res.send(obj);
  
    //  console.log(Urls(result).get());
     
})


app.listen(3000, () => {
  console.log('Server listening on port 3000')
})