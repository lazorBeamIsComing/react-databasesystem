const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req,res)=> {
    res.send([{
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/any',
        'name': '홍길동1',
        'birthday' : '970319',
        'gender': '남자',
        'job' : '고수'
      },
      {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/any',
        'name': '홍길동2',
        'birthday' : '922222',
        'gender': '남자',
        'job' : '머학생'
      },
      {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/any',
        'name': '홍길동3',
        'birthday' : '933333',
        'gender': '남자',
        'job' : '대학생'
      }
      ]
      )
});

app.listen(port, () => console.log(`Listening on port ${port}`));