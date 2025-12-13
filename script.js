const classes = [
  { grade: "6", time: "7am–8am" },
  { grade: "7", time: "8am–9am" },
  { grade: "8", time: "9am–10am" },
  { grade: "9", time: "3pm–4pm" },
  { grade: "10", time: "4pm–5pm" },
  { grade: "11", time: "5pm–6pm" }
];

const container = document.getElementById("classDetails");

classes.forEach(c=>{
  const div = document.createElement("div");
  div.className = "box";
  div.innerHTML = `
    <h3>Grade ${c.grade}</h3>
    <div class="time">${c.time}</div>
    <div class="small">Monthly Payment</div>
    <div><span class="payment">600/-</span></div>
  `;
  container.appendChild(div);
});

function registerUser(){
  const name = prompt("Student Name?");
  const grade = prompt("Grade?");
  const phone = prompt("Phone?");
  if(!name || !grade || !phone){
    alert("All details required!");
    return;
  }
  const msg =
    `🎓 New Student Registration%0A👤 Name: ${name}%0A📘 Grade: ${grade}%0A📞 Phone: ${phone}`;
  window.open("https://wa.me/94757462709?text="+msg,"_blank");
}

function shareFlyerLink(){
  const link = window.location.href;
  navigator.share
    ? navigator.share({ url: link })
    : prompt("Copy this link:", link);
}
