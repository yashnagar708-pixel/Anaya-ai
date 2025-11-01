<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Anaya AI</title>
  <style>
    body{margin:0;background:#060606;color:#fff;font-family:Inter,system-ui;display:flex;align-items:center;justify-content:center;height:100vh}
    .card{width:100%;max-width:720px;background:linear-gradient(180deg,#0b0b0b 0%, #070707 100%);border-radius:14px;padding:18px;box-shadow:0 10px 40px rgba(150,50,200,0.08)}
    .messages{height:48vh;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:10px}
    .bubble{max-width:78%;padding:10px 12px;border-radius:12px;background:rgba(255,255,255,0.03);color:#eaeaea}
    .user{align-self:flex-end;background:linear-gradient(90deg,#7c3aed,#ec4899);color:black}
    footer{display:flex;gap:8px;margin-top:12px}
    input{flex:1;padding:10px;border-radius:10px;border:1px solid #222;background:transparent;color:#fff}
    button{padding:8px 12px;border-radius:10px;border:none;background:#7c3aed;color:white;cursor:pointer}
  </style>
</head>
<body>
  <div class="card">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
      <div style="width:48px;height:48px;border-radius:12px;background:linear-gradient(90deg,#7c3aed,#ec4899);display:flex;align-items:center;justify-content:center;color:black;font-weight:700">A</div>
      <div>
        <div style="font-weight:700">Anaya AI</div>
        <div style="font-size:12px;color:#bbb">Smart • Cute • Calm • Slightly Flirty</div>
      </div>
    </div>

    <div id="messages" class="messages"></div>

    <footer>
      <button id="mic">🎤</button>
      <input id="input" placeholder="Type or press mic..." />
      <button id="send">Send</button>
    </footer>
  </div>

<script>
const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('send');
const micBtn = document.getElementById('mic');

function addMsg(text, from='assistant'){
  const d = document.createElement('div');
  d.className = 'bubble ' + (from==='user'?'user':'');
  d.innerText = text;
  messagesEl.appendChild(d);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

addMsg("Hey Yash 😌 — Anaya here. Bol batao, kaisa help karu aaj? 💗");

async function sendText(t){
  addMsg(t,'user');
  inputEl.value = '';
  addMsg('Thinking...','assistant');
  try{
    const res = await fetch('/api/chat', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ prompt: t })
    });
    const js = await res.json();
    const bubbles = Array.from(messagesEl.querySelectorAll('.bubble'));
    for (let i = bubbles.length-1; i>=0; i--){
      if (bubbles[i].innerText === 'Thinking...'){
        bubbles[i].innerText = js.reply;
        break;
      }
    }
    speak(js.reply);
  }catch(e){
    addMsg('Connection error.','assistant');
  }
}

sendBtn.onclick = ()=> sendText(inputEl.value || '');
inputEl.addEventListener('keydown', e => { if(e.key==='Enter') sendText(inputEl.value); });

let rec=null; try {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) { rec = new SR(); rec.lang='en-IN'; rec.onresult = e => { inputEl.value = e.results[0][0].transcript; sendText(inputEl.value); } }
} catch(e){}

micBtn.onclick = ()=> { if(rec){ rec.start(); } };

function speak(text){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-IN';
  const v = window.speechSynthesis.getVoices().find(x => /female|girl|google uk english female/i.test(x.name));
  if(v) u.voice = v;
  window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
}
</script>
</body>
</html>
