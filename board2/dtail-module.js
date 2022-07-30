'use strict';

/** data firestore 에서 가져온 데이터 모달창으로 상세조회 하기 */ 
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import {getFirestore, collection, query, where, getDocs, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCr8bNq6iVioWl4LUwgDMyoaNieYdFyVLc",
  authDomain: "boardtest-174d5.firebaseapp.com",
  databaseURL: "https://boardtest-174d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boardtest-174d5",
  storageBucket: "boardtest-174d5.appspot.com",
  messagingSenderId: "921590231442",
  appId: "1:921590231442:web:b8f515057daf4ed545114b",
  measurementId: "G-MWTSS92ZQR"
};

const app = initializeApp(firebaseConfig);
console.log(app);

// 화면이 렌더링되는 것과 스크립트 처리사이에 시간차
// == onload 와 같은 말 
  
    // < 절차를 생각해! >
    // 1. 일단 화면이 랜더링 된다. url
    //    2. 클릭한 글의 id를 받아온다. 
    //        3. 제목에 해당하는 내용이 modal로 상세히 조회된다. 
    //            4. 닫기 창을 누르면 바로 list.html 페이지로 이동한다.

const db = getFirestore(app);
/** 랜더링 > 클릭한 id 받아온다 */

  $(document).ready(function () {
    let params = new URLSearchParams(document.location.search)
    let id = params.get("id")
    console.log("사용자가 선택한 id "+ id);
    
    const fetchBoard = async(uid) => {
      const boardRef = doc(db, "board", uid);
      const boardSnap = await getDoc(boardRef);  // 데이터 스냅 (하나)를 받아오기 >> 비동기처리로 이루어짐
      if (boardSnap.exists()){
        return boardSnap.data();
      }
        return null;
  }

  const dtailList = fetchBoard(id);
  // dtailList 는 Object Promise 형식으로 출력
  console.log(dtailList);
  // Object Promise를 읽을 수 있는 data로! 
  dtailList.then((value)=>{
      const row = value;
      // row = Object
      // console.log(row["작성자"]);
      const title = row["제목"] 
      const content = row["내용"]
      const writer = row["작성자"]
      const regdate = row["작성일"]
      $("#title").text(title)
      $(".writer").text(writer)
      $(".regdate").text(regdate)
      $(".content").text(content)
  })
  })