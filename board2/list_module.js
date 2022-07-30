'use strict';
//  data firestore 에서 데이터 가져온 후 목록에 표시하기
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import {getFirestore, getDocs, collection} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";



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

// incloud firestore 
const db = getFirestore(app);
let num=0;
console.log(db);


// 데이터 읽어오기 
const querySnapshot = await getDocs(collection(db, "board"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);

  const template = `
                    <tr>
                      <th scope="row">${++num}</th>
                      <td>
                          <a class="title-URL" href="/board2/dtail-page.html?id=${doc.id}">
                          ${doc.data().제목}
                          </a>
                      </td>
                      <td>${doc.data().작성자}</td>
                      <td>${doc.data().작성일}</td>
                    </tr>
                    `
  $(".board-content").append(template);
});

//////////////////////////////////////////////////////////////////////////////////////////
/******************************** 이벤트 처리 모음 함수 ********************************* */
/* 검색기능 #btn-search누른다. ====> text-search의 내용을 firebase에 전송해서 화면에 구현
    경우의 수
    - 1) ^제목^ 옵션으로 검색할 경우
    - 2) ^작성자^ 옵션으로 검색할 경우 
*/
const btn_search = document.querySelector('#btn-search')
btn_search.addEventListener('mouseover',()=>{
  alert('🔍 버튼에 mouseover감지됨. text-search내용 검색결과 ui로 띄울 예정');  
})









