const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const index = path.join(__dirname, 'fooding/build/index.html')

const { sequelize } = require('./models');
const indexRouter = require('./routes')
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');
const ODlRouter = require('./routes/orderDetail');
const productRouter = require('./routes/product');
const employeeRouter = require('./routes/employee');
const cartRouter = require('./routes/cart');
const categoryRouter = require('./routes/category');
const loginRouter = require('./routes/login')

const Product = require('./models/product')

const router = express.Router();

// 업로드 이미지를 관리하는 스토리지 서버를 연결 -> multer를 사용하겠다
const multer = require("multer");
// 이미지 파일이 요청 오면 어디에 저장할건지 지정
const upload = multer({ 
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            // 어디에 저장할거냐? upload/
            cb(null, 'upload/') // upload폴더 밑에
        },
        filename: function(req, file, cb){
            // 어떤 이름으로 저장할거야?
            // file 객체의 오리지널 이름으로 저장하겠다.
            cb(null, file.originalname)
        }
    })
})

app.use("/upload", express.static("upload"));

app.set('view engine', 'html');

sequelize.sync({ force: false })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));  



// json형식의 데이터를 처리할 수 있게 설정
app.use(express.json());
var cors = require('cors');
// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());


app.use(express.static(path.join(__dirname, 'fooding/build')));

app.get('/', function(req,res){
  res.sendFile(index)
});


app.post('/image', upload.single('image'), (req, res)=>{
  const file = req.file;
  console.log("post(/image) file:",file);
  res.send({
      // imageUrl: "http://localhost:3000/"+file.destination+file.filename
      imageUrl: "http://localhost:8080/"+file.destination+file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
})

app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/login', loginRouter);
app.use('/cart', cartRouter);
// app.use('/category', categoryRouter);


app.get('*', (req, res) => {
  // console.log(res);
  res.sendFile(index)
});

app.listen(8080, function () {
  console.log('8080에서 대기중')
}); 