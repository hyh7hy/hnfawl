(()=>{
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
if(btn&&nav){
 const set=o=>{nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.textContent=o?'CLOSE':'MENU'};
 btn.addEventListener('click',()=>set(!nav.classList.contains('open')));
 nav.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){set(false);btn.focus()}});
}
document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());
const f=document.getElementById('contact-form');
if(f){
 const st=document.getElementById('status');
 const rules={name:v=>v.trim()?'':'Enter your name.',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())?'':'Enter a valid email address.',type:v=>v?'':'Choose a project type.',message:v=>v.trim().length>=10?'':'Write at least a short message (10 characters).'};
 f.addEventListener('submit',async e=>{
  e.preventDefault();let bad=null;
  Object.keys(rules).forEach(k=>{const el=f.elements[k],m=rules[k](el.value),out=document.getElementById(k+'-err');out.textContent=m;el.setAttribute('aria-invalid',!!m);if(m&&!bad)bad=el});
  if(bad){bad.focus();st.textContent='Please fix the highlighted fields.';return}
  const url=f.dataset.endpoint;
  if(!url){st.textContent='Not sent. No form service is connected yet, so this message was not delivered.';return}
  try{const r=await fetch(url,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)});
   if(!r.ok)throw 0;st.textContent='Message sent.';f.reset()}catch{st.textContent='Message not sent. Please try again later.'}
 });
}
})();
