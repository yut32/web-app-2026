const express = require("express");
const app = express();

app.use(express.json());

// --------------------
// 普通のページ
// --------------------

// トップページ
app.get("/", (req, res) => {
  res.send("トップページです");
});

// 自己紹介ページ
app.get("/about", (req, res) => {
  res.send("自己紹介ページです");
});

// 現在時刻
app.get("/time", (req, res) => {
  const now = new Date().toLocaleString("ja-JP");
  res.send("現在時刻：" + now);
});

// --------------------
// API
// --------------------

// テストAPI
app.get("/api/test", (req, res) => {
  res.json({
    message: "APIが動いています",
    status: "ok"
  });
});

// メッセージ保存用
const messages = [];

// メッセージ一覧取得
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// メッセージ追加
app.post("/api/messages", (req, res) => {
  const { username, text } = req.body;

  const newMessage = {
    id: messages.length + 1,
    username,
    text
  };

  messages.push(newMessage);

  res.json(newMessage);
});

// --------------------
// サーバー起動
// --------------------

app.listen(3000, () => {
  console.log("サーバーが起動しました");
  console.log("http://localhost:3000/api/test");
});