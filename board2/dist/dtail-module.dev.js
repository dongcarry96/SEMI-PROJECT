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

$(document).ready(function () {
  var params = new URLSearchParams(document.location.search);
  var id = params.get("id");
  console.log("사용자가 선택한 id " + id);

  var fetchBoard = function fetchBoard(uid) {
    var boardRef, boardSnap;
    return regeneratorRuntime.async(function fetchBoard$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            boardRef = (0, _firebaseFirestore.doc)(db, "board", uid);
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _firebaseFirestore.getDoc)(boardRef));

          case 3:
            boardSnap = _context.sent;

            if (!boardSnap.exists()) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", boardSnap.data());

          case 6:
            return _context.abrupt("return", null);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var dtailList = fetchBoard(id); // dtailList 는 Object Promise 형식으로 출력

  console.log(dtailList); // Object Promise를 읽을 수 있는 data로! 

  dtailList.then(function (value) {
    var row = value; // row = Object
    // console.log(row["작성자"]);

    var title = row["제목"];
    var content = row["내용"];
    var writer = row["작성자"];
    var regdate = row["작성일"];
    $("#title").text(title);
    $(".writer").text(writer);
    $(".regdate").text(regdate);
    $(".content").text(content);
  });
});