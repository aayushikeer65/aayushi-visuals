/* =========================================================
   Aayushi Visuals — script.js
   ========================================================= */

/* ---------- DATA ---------- */
const EMAIL = "aayushikeer65@gmail.com";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/designeraayushi9" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/aayushikeer" },
  { label: "Twitter",   href: "https://x.com/Aayushiaayu36" },
];

const socialIcons = {
  Instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88Zm6.75-8.93a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z"/></svg>',
  LinkedIn: '<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  Twitter: '<svg viewBox="0 0 24 24"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25H8.1l4.71 6.23 5.43-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z"/></svg>',
};

const typingRoles = ["Graphic Designer", "Visual Storyteller", "Brand Stylist", "Illustrator"];

const skillCategories = [
  { title: "Brand & Identity", icon: "🎨", skills: [["Logo Design",96],["Brand Identity",92],["Visual Systems",88]] },
  { title: "Illustration", icon: "✏️", skills: [["Digital Illustration",90],["Indian Motifs & Patterns",94],["Character Art",82]] },
  { title: "UI / UX Design", icon: "📱", skills: [["Web & App UI",87],["Wireframing",85],["Prototyping",80]] },
  { title: "Tools & Software", icon: "🧰", skills: [["Adobe Photoshop",95],["Adobe Illustrator",93],["Figma & Canva",90]] },
];

const projects = [
  { title:"Divine Brand Identity", cat:"Branding", img:"images/project1.jpg", tags:["Logo","Identity","Stationery"], desc:"A complete brand identity blending sacred Indian motifs with clean modern form." },
  { title:"Leela Social Campaign", cat:"Social", img:"images/project2.jpg", tags:["Instagram","Templates","Ad Set"], desc:"A vibrant social campaign inspired by the play of color and rhythm." },
  { title:"Poster & Print Series", cat:"Print", img:"images/project3.jpg", tags:["Poster","Typography","Print"], desc:"Traditional illustration meeting expressive modern typography." },
  { title:"Mandala Packaging", cat:"Branding", img:"images/project4.jpg", tags:["Packaging","Foil","Luxury"], desc:"Luxury packaging with intricate mandala detailing and gold foil." },
  { title:"Bansuri Illustration", cat:"Illustration", img:"images/project5.jpg", tags:["Digital Art","Illustration"], desc:"A digital ode to the flute — where color becomes melody." },
  { title:"Celebration Invites", cat:"Print", img:"images/project6.jpg", tags:["Invitation","Event","Calligraphy"], desc:"Elegant event branding with modern calligraphy and Indian motifs." },
];
const filters = ["All","Branding","Social","Print","Illustration"];

const services = [
  { icon:"🪷", title:"Brand Identity Design", desc:"Logos, visual systems and brand guidelines that give your business a soul." },
  { icon:"🖌️", title:"Illustration & Artwork", desc:"Custom digital illustrations rooted in Indian aesthetics and modern craft." },
  { icon:"📲", title:"Social Media Design", desc:"Scroll-stopping campaigns, templates and ad creatives that convert." },
  { icon:"🖼️", title:"Print & Packaging", desc:"Posters, invitations, packaging and print collateral, sketch to delivery." },
];

const timeline = [
  { year:"2024 — Present", title:"Independent Design Studio", place:"Aayushi Visuals", type:"Experience", desc:"Leading brand identity, illustration and campaign projects for clients across India." },
  { year:"2022 — 2024", title:"Senior Graphic Designer", place:"Creative Agency", type:"Experience", desc:"Crafted visual identities and social campaigns for growing brands and startups." },
  { year:"2020 — 2022", title:"Graphic Designer", place:"Design Firm, Chittorgarh", type:"Experience", desc:"Delivered print, digital and branding work with a focus on cultural storytelling." },
  { year:"2017 — 2020", title:"Bachelor of Fine Arts", place:"Design & Visual Communication", type:"Education", desc:"Specialised in visual communication, illustration and traditional Indian art forms." },
];

const testimonials = [
  { name:"Riya Sharma", role:"Founder, Bloom Studio", quote:"Aayushi translated our vision into a brand that feels both sacred and modern. Every detail sings." },
  { name:"Karan Mehta", role:"Marketing Lead, Nivaan", quote:"Her social campaigns doubled our engagement. The colors, the rhythm — pure magic." },
  { name:"Ananya Verma", role:"Creative Director", quote:"Working with Aayushi feels like collaborating with an artist and a strategist at once." },
  { name:"Dev Patel", role:"Owner, Terracotta Co.", quote:"The packaging she designed made our product stand out on every shelf. Truly premium work." },
];

/* ---------- LOADER ---------- */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 1400);
});

/* ---------- YEAR ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- THEME TOGGLE ---------- */
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

/* ---------- MOBILE MENU ---------- */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

/* ---------- NAVBAR SCROLL ---------- */
const header = document.getElementById("header");
const progress = document.getElementById("progress");
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  const h = document.documentElement;
  progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  toTop.classList.toggle("show", window.scrollY > 600);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- TYPING EFFECT ---------- */
(function type() {
  const el = document.getElementById("typed");
  let i = 0, txt = "", del = false;
  function tick() {
    const cur = typingRoles[i % typingRoles.length];
    txt = del ? cur.slice(0, txt.length - 1) : cur.slice(0, txt.length + 1);
    el.textContent = txt;
    let speed = del ? 45 : 95;
    if (!del && txt === cur) { speed = 1300; del = true; }
    else if (del && txt === "") { del = false; i++; speed = 300; }
    setTimeout(tick, speed);
  }
  tick();
})();

/* ---------- PARTICLES ---------- */
(function particles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  const colors = ["#E8B65A", "#C98A9B", "#6FB6AE"];
  let dots = [];
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  for (let i = 0; i < 55; i++) {
    dots.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 2 + .6, c: colors[Math.floor(Math.random() * 3)],
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = d.c; ctx.globalAlpha = .55; ctx.fill();
    });
    ctx.globalAlpha = .12; ctx.strokeStyle = "#E8B65A";
    for (let i = 0; i < dots.length; i++)
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        if (Math.hypot(dx, dy) < 120) {
          ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
        }
      }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener("resize", resize);
})();

/* ---------- RENDER: SKILLS ---------- */
document.getElementById("skillsGrid").innerHTML = skillCategories.map(cat => `
  <div class="skill-card glass reveal">
    <div class="skill-head"><span class="skill-icon">${cat.icon}</span><h3>${cat.title}</h3></div>
    ${cat.skills.map(([name, lvl]) => `
      <div class="bar-row"><div class="bar-top"><span class="text-muted">${name}</span><span class="pct">${lvl}%</span></div>
      <div class="bar"><span data-level="${lvl}"></span></div></div>`).join("")}
  </div>`).join("");

/* ---------- RENDER: SERVICES ---------- */
document.getElementById("servicesGrid").innerHTML = services.map(s => `
  <div class="service-card glass reveal">
    <div class="service-icon">${s.icon}</div>
    <h3>${s.title}</h3><p>${s.desc}</p>
  </div>`).join("");

/* ---------- RENDER: TIMELINE ---------- */
document.getElementById("timeline").innerHTML = timeline.map(t => `
  <div class="tl-item reveal">
    <div class="tl-card glass">
      <div class="tl-meta"><span class="tl-type ${t.type === "Education" ? "edu" : "exp"}">${t.type}</span><span class="tl-year">${t.year}</span></div>
      <h3>${t.title}</h3><div class="place">${t.place}</div><div class="desc">${t.desc}</div>
    </div>
  </div>`).join("");

/* ---------- RENDER: WORK + FILTERS ---------- */
const workGrid = document.getElementById("workGrid");
function renderWork(cat) {
  workGrid.innerHTML = projects.filter(p => cat === "All" || p.cat === cat).map(p => `
    <article class="work-card glass reveal in">
      <div class="work-thumb"><span class="work-cat">${p.cat}</span><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="work-body"><h3>${p.title}</h3><p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>`).join("");
}
document.getElementById("filters").innerHTML = filters.map((f, i) =>
  `<button class="filter ${i === 0 ? "active" : ""}" data-f="${f}">${f}</button>`).join("");
document.getElementById("filters").addEventListener("click", e => {
  if (!e.target.classList.contains("filter")) return;
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderWork(e.target.dataset.f);
});
renderWork("All");

/* ---------- RENDER: TESTIMONIALS ---------- */
document.getElementById("testiSlides").innerHTML = testimonials.map((t, i) => `
  <div class="testi-card glass ${i === 0 ? "active" : ""}">
    <div class="testi-mark">"</div>
    <p class="testi-quote">${t.quote}</p>
    <div class="testi-person"><span class="testi-avatar">${t.name[0]}</span>
      <div><div class="name">${t.name}</div><div class="role">${t.role}</div></div></div>
  </div>`).join("");
document.getElementById("testiDots").innerHTML = testimonials.map((_, i) =>
  `<button class="dot ${i === 0 ? "active" : ""}" data-i="${i}"></button>`).join("");
let ti = 0;
const slides = () => document.querySelectorAll(".testi-card");
const tdots = () => document.querySelectorAll(".dot");
function showTesti(n) {
  slides().forEach((s, i) => s.classList.toggle("active", i === n));
  tdots().forEach((d, i) => d.classList.toggle("active", i === n));
  ti = n;
}
document.getElementById("testiDots").addEventListener("click", e => {
  if (e.target.dataset.i) showTesti(+e.target.dataset.i);
});
setInterval(() => showTesti((ti + 1) % testimonials.length), 5000);

/* ---------- RENDER: SOCIALS ---------- */
const socialHTML = socials.map(s =>
  `<a class="social-btn" href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">${socialIcons[s.label]}</a>`).join("");
document.getElementById("socialRow1").innerHTML = socialHTML;
document.getElementById("socialRow2").innerHTML = socialHTML;

/* ---------- COUNTERS ---------- */
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = target >= 60 ? "+" : "+";
  let start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / 1800, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- SCROLL REVEAL + BAR + COUNTER ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    e.target.querySelectorAll?.("[data-level]").forEach(b => b.style.width = b.dataset.level + "%");
    e.target.querySelectorAll?.("[data-count]").forEach(c => animateCount(c));
    if (e.target.hasAttribute?.("data-count")) animateCount(e.target);
    io.unobserve(e.target);
  }, { threshold: .25 });
}, { threshold: .2 });
document.querySelectorAll(".reveal, [data-count]").forEach(el => io.observe(el));

/* ---------- CONTACT FORM (fallback to mailto if PHP not available) ---------- */
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", async (e) => {
  // If hosting supports PHP, let it submit normally by NOT preventing default.
  // For static hosts (GitHub Pages), fall back to mailto.
  const isStatic = location.protocol === "file:" || location.hostname.includes("github.io");
  if (isStatic) {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent(d.get("subject") || `Inquiry from ${d.get("name")}`);
    const body = encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    formMsg.textContent = "✓ Opening your email app...";
    formMsg.className = "form-msg ok";
  }
});
