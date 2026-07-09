# 🦚 Aayushi Visuals — Portfolio (HTML / CSS / JS / PHP)

Ye aapki poori portfolio website hai — plain **HTML, CSS, JavaScript aur PHP** mein banayi gayi.
React/Vite ki zaroorat nahi. Bas files upload karo aur chalu.

---

## 📁 Folder Structure

```
public-site/
├── index.html          ← main website (saare sections)
├── send-mail.php       ← contact form ka email backend (PHP hosting par)
├── css/
│   └── style.css       ← premium gold & mauve theme
├── js/
│   └── script.js       ← animations, typing, particles, filters, form
└── images/             ← project images (yahan daalni hain)
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    ├── project4.jpg
    ├── project5.jpg
    └── project6.jpg
```

> ⚠️ **Zaroori — Images:** `public-site/images/` folder mein **project1.jpg, project2.jpg,
> project3.jpg** already ready hain. Baaki teen — **project4.jpg, project5.jpg, project6.jpg** —
> project ke `public/images/` folder se copy karke yahan `public-site/images/` mein daal do.
> (Ye teeno wahan pehle se generated hain.)
>
> Aap chahein to apni **asli design images** bhi in 6 files ke naam se daal sakti ho —
> tab website mein aapka real work dikhega. 🎨

---

## 🚀 Kaise Live Karein

### Option 1 — GitHub Pages (FREE, lekin PHP nahi chalega)
GitHub Pages sirf static files serve karta hai — PHP support nahi karta.
Lekin **contact form phir bhi kaam karega**: static host par form apne aap
aapke email app ko `mailto:` se khol dega (ye already code mein handle hai).

1. GitHub par nayi repo banao (jaise `aayushi-visuals`)
2. `index.html`, `css/`, `js/`, `images/` folders upload karo
   *(send-mail.php upload kar sakte ho, par GitHub Pages use nahi karega)*
3. Settings → Pages → Branch: `main`, folder: `/ (root)` → Save
4. Live link: `https://aayushikeer65.github.io/aayushi-visuals/`

### Option 2 — PHP Hosting (Hostinger, 000webhost, InfinityFree, cPanel)
Agar aap chahte ho ki contact form seedha email bheje (mailto ke bina):

1. Kisi bhi PHP hosting par saari files upload karo (File Manager ya FTP se)
2. `send-mail.php` mein email pehle se set hai: `aayushikeer65@gmail.com`
3. Bas! Form submit karne par email seedha aapke inbox mein aayega.

> 💡 Free PHP hosting options: **InfinityFree**, **000webhost**, **AwardSpace**
> Paid (recommended): **Hostinger** (~₹149/month, custom domain milta hai)

---

## ✏️ Content Kaise Change Karein

Saara text/data **`js/script.js`** file ke top par hai (DATA section):

- **Social links** → `socials` array
- **Skills** → `skillCategories`
- **Projects** → `projects`
- **Services** → `services`
- **Timeline** → `timeline`
- **Testimonials** → `testimonials`
- **Email** → `EMAIL` variable (aur `send-mail.php` mein `$to`)

Phone number aur email cards **`index.html`** ke Contact section mein hain.

---

## 🎨 Theme / Colors Change Karein

`css/style.css` ke top par `:root` mein colors change karo:
```css
--gold: #E8B65A;   /* primary accent */
--rose: #C98A9B;   /* secondary */
--teal: #6FB6AE;   /* tertiary */
```

---

Made with 💜 for Aayushi Keer · Chittorgarh
