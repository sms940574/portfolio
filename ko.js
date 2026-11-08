// Review-only Korean subtitles: visible only with ?ko in the URL. Delete this file + its <script> tag to remove.
(async()=>{
  if(!new URLSearchParams(location.search).has('ko'))return;
  const map=await fetch('ko.json').then(r=>r.json()).catch(()=>({}));
  const st=document.createElement('style');
  st.textContent='.ko-sub{display:block;font-family:-apple-system,"Apple SD Gothic Neo",sans-serif!important;font-size:12.5px!important;font-weight:400!important;font-style:normal!important;letter-spacing:0!important;text-transform:none!important;line-height:1.45!important;color:#d03a7a!important;margin-top:4px;-webkit-text-stroke:0!important;text-shadow:none!important;white-space:normal!important}a .ko-sub,button .ko-sub,.btn .ko-sub{display:inline;margin-left:6px}';
  document.head.appendChild(st);
  const N=t=>t.replace(/\s+/g,' ').trim(),done=[];
  document.querySelectorAll('body *').forEach(e=>{
    if(/^(SCRIPT|STYLE)$/.test(e.tagName)||done.some(d=>d.contains(e)))return;
    const k=map[N(e.textContent)];if(!k)return;
    const s=document.createElement('span');s.className='ko-sub';s.textContent=k;e.appendChild(s);done.push(e);
  });
})();
