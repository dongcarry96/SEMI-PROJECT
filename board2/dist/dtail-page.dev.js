'use strict';
/** data firestore 에서 가져온 데이터 모달창으로 상세조회 하기 */

var _firebaseApp = require("https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js");

var _firebaseFirestore = require("https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js");

var firebaseConfig = {
  apiKey: "AIzaSyCr8bNq6iVioWl4LUwgDMyoaNieYdFyVLc",
  authDomain: "boardtest-174d5.firebaseapp.com",
  databaseURL: "https://boardtest-174d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boardtest-174d5",
  storageBucket: "boardtest-174d5.appspot.com",
  messagingSenderId: "921590231442",
  appId: "1:921590231442:web:b8f515057daf4ed545114b",
  measurementId: "G-MWTSS92ZQR"
};
var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
console.log(app); // 화면이 렌더링되는 것과 스크립트 처리사이에 시간차
// == onload 와 같은 말 
// < 절차를 생각해! >
// 1. 일단 화면이 랜더링 된다. url
//    2. 클릭한 글의 id를 받아온다. 
//        3. 제목에 해당하는 내용이 modal로 상세히 조회된다. 
//            4. 닫기 창을 누르면 바로 list.html 페이지로 이동한다.

var db = (0, _firebaseFirestore.getFirestore)(app);
/** 랜더링 > 클릭한 id 받아온다 */

$(document).ready(function () {});