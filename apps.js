let uid;

function login(){
 auth.signInWithEmailAndPassword(email.value,pass.value)
 .then(r=>{
  uid=r.user.uid;
  start();
 });
}

function register(){
 auth.createUserWithEmailAndPassword(email.value,pass.value)
 .then(r=>{
  uid=r.user.uid;
  db.ref("users/"+uid).set({
    balance:0,
    totalEarn:0,
    totalClick:0
  });
  start();
 });
}

function start(){
 authBox.style.display="none";
 app.style.display="block";
 loadBalance();
}

function loadBalance(){
 db.ref("users/"+uid).on("value",s=>{
  let u=s.val();
  bal.innerText=u.balance;
 });
}

function load(type){
 db.ref(type).once("value",snap=>{
  let html="";
  snap.forEach(d=>{
    html+=`
    <div class="card">
      <h4>${d.val().title}</h4>
      <button onclick="earn('${type}')">Earn</button>
      <div class="ads"></div>
    </div>`;
  });
  content.innerHTML=html;
  loadAds();
 });
}

function earn(type){
 let val={video:1,ads:2,web:2,channel:1}[type];

 db.ref("users/"+uid).once("value",s=>{
  let u=s.val();
  db.ref("users/"+uid).update({
    balance:u.balance+val,
    totalEarn:(u.totalEarn||0)+val,
    totalClick:(u.totalClick||0)+1
  });
 });
}

function dashboard(){
 db.ref("users/"+uid).once("value",s=>{
  let u=s.val();
  content.innerHTML=`
  <div class="card">
    <h3>Total Earn: ${u.totalEarn}</h3>
    <h3>Total Click: ${u.totalClick}</h3>
    <input id="amt" placeholder="Withdraw">
    <button onclick="withdraw()">Withdraw</button>
  </div>`;
 });
}

function withdraw(){
 db.ref("withdraw").push({
  uid:uid,
  amount:parseInt(amt.value),
  status:"pending"
 });
 alert("Request Sent");
}
