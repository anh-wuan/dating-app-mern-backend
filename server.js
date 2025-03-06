const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Lấy MongoDB URI từ biến môi trường (các bạn sẽ cấu hình trên Render)
// Nếu không có, bạn có thể để mặc định (nhưng không khuyến cáo cho production)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:Nobitaanhquan2017@cluster0.qhzr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Kết nối tới MongoDB Atlas
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// Một route đơn giản
app.get('/', (req, res) => {
  res.send('Hello from Node.js on Render!');
});

// Lắng nghe ở cổng PORT (Render tự gán biến môi trường PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
