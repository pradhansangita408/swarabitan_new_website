const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

const menuToggle = $('#menuToggle'), nav = $('#nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));
$$('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const header = $('#header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 30));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
$$('.reveal').forEach(el => observer.observe(el));

const toast = $('#toast');
function showToast(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(window.toastTimer); window.toastTimer = setTimeout(()=>toast.classList.remove('show'),2600);
}

const audio = $('#demoAudio'), player = $('#miniPlayer'), toggle = $('#playerToggle'), progress = $('#playerProgress'), time = $('#playerTime');
function openPlayer(title='Raghupati Raghav Raja Ram'){
  $('#playerTitle').textContent = title;
  player.classList.add('show');
  audio.play().catch(()=>{});
}
$$('[data-demo-play], #podcastPlay').forEach(btn => btn.addEventListener('click', () => openPlayer(btn.id === 'podcastPlay' ? 'BOM • Beauty of Music' : undefined)));
$$('.hero .btn-light').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); openPlayer('Swarabitan Demo'); }));
$('#playerClose')?.addEventListener('click',()=>{audio.pause();player.classList.remove('show')});
toggle?.addEventListener('click',()=>audio.paused ? audio.play() : audio.pause());
audio.addEventListener('play',()=>toggle.textContent='❚❚');
audio.addEventListener('pause',()=>toggle.textContent='▶');
audio.addEventListener('timeupdate',()=>{
  if(audio.duration){ progress.style.width=(audio.currentTime/audio.duration*100)+'%'; time.textContent=formatTime(audio.currentTime); }
});
function formatTime(s){s=Math.floor(s||0);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

$$('.category').forEach(btn=>btn.addEventListener('click',()=>{
  $$('.category').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  showToast(btn.dataset.category==='all'?'সব সংগীতের সংগ্রহ দেখানো হচ্ছে':btn.querySelector('b').textContent+' নির্বাচন করা হয়েছে');
}));

const quotes=[
  ['শান্ত মনেই ভগবানকে পাওয়া যায়।','স্বামী বিবেকানন্দ'],
  ['সুরের ভিতর দিয়ে মানুষ নিজের সঙ্গে কথা বলে।','Swarabitan Thought'],
  ['যেখানে সত্যিকারের সুর, সেখানে অনুভবের দরজা খুলে যায়।','Swarabitan Thought']
];
let qi=0;
function renderQuote(){ $('#quoteText').textContent=quotes[qi][0]; $('#quoteAuthor').textContent='— '+quotes[qi][1]; }
$('#nextQuote')?.addEventListener('click',()=>{qi=(qi+1)%quotes.length;renderQuote()});
$('#prevQuote')?.addEventListener('click',()=>{qi=(qi-1+quotes.length)%quotes.length;renderQuote()});
$('#shareQuote')?.addEventListener('click',async()=>{
  const text=`${quotes[qi][0]} ${quotes[qi][1]}`;
  if(navigator.share){await navigator.share({title:'Swarabitan Thought',text})}
  else{await navigator.clipboard?.writeText(text);showToast('Quote copied');}
});

$('#referralBtn')?.addEventListener('click',async()=>{
  const link=location.href.split('#')[0]+'?ref=SWARABITAN';
  try{await navigator.clipboard.writeText(link);showToast('Referral link copied!')}
  catch{showToast('Your referral link is ready to share.')}
});
$('#subscribe')?.addEventListener('submit',e=>{e.preventDefault();e.target.reset();showToast('ধন্যবাদ! আপনি Swarabitan updates-এর জন্য যুক্ত হলেন।')});

$$('.gallery-tile').forEach(card=>card.addEventListener('click',()=>showToast('Gallery preview: connect your real video/image URL here.')));
