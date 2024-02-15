const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const personSchema = new Schema({ // 스키마 객체 생성
    name : String,
    age : Number,
    email : { type : String, required: true },
});

module.exports = mongoose.model('Person', personSchema); // 모델 객체 생성

/*
스키마 Schema 란? DB 내에서 어떤 구조로 데이터가 저장되는가를 일컫는 말
*/