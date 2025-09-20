document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const clearBtn = document.getElementById("clearBtn");
  const msgInput = document.getElementById("msgInput");
  const chatWindow = document.getElementById("chatWindow");

function appendMessage(text, type) {
  const div = document.createElement("div");
  div.classList.add("message", type); // type = "user" หรือ "bot"
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
  function botReply(userMsg) {
    let reply = "ขอโทษครับ ฉันยังไม่เข้าใจ";
    if (/สวัสดี/i.test(userMsg)) reply = "สวัสดีครับ มีอะไรให้ช่วยมั้ย?";
    if (/สมัคร|รับสมัคร/i.test(userMsg)) reply = "ตอนนี้เปิดรับสมัคร 1 ต.ค. 2568 เป็นต้นไปครับ";
    if (/เวลา|เปิด|ปิด/i.test(userMsg)) reply = "เปิดทำการ จันทร์–ศุกร์ 8:30–16:30 ครับ";
    if (/ติดต่อ/i.test(userMsg)) reply = "ติดต่อได้ที่เบอร์ 02-123-4567 หรืออีเมล info@college.ac.th";
    return reply;
  }

sendBtn?.addEventListener("click", () => {
  const msg = msgInput.value.trim();
  if (!msg) return;
  appendMessage(msg, "user");           // ข้อความผู้ใช้
  appendMessage(botReply(msg), "bot");  // ข้อความบอท
  msgInput.value = "";
});

  clearBtn?.addEventListener("click", () => {
    chatWindow.innerHTML = "";
  });

  msgInput?.addEventListener("keypress", e => {
    if (e.key === "Enter") sendBtn.click();
  });
});
