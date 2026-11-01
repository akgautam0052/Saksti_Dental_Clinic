# Sakthi Dental Clinic — Official Website

> **Location:** B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India  
> **Contact:** +91 9862890897 / +91 9363298118 | info@sakthidentalclinic.in  
> **Founded:** 2004 by Dr. Anupriya (Chief Dental Surgeon & Senior Consultant)

A complete, responsive, single-page website for **Sakthi Dental Clinic**, built strictly with **vanilla HTML5, CSS3, and JavaScript**. Zero dependencies, zero build steps, zero external CDNs (except Google Fonts with native system fallbacks). Works seamlessly by simply double-clicking `index.html` in any modern web browser or hosting on any static web server.

---

## 📁 Folder Structure

```text
/
├── index.html              # Main semantic HTML5 single-page structure
├── css/
│   └── style.css           # Custom CSS variables, responsive layout, animations, light/dark themes
├── js/
│   └── main.js             # Data collections, state, reactive booking engine, carousel, modals
├── images/                 # Local SVGs for brand logo, illustrations, team, and clinic gallery
│   ├── logo.svg            # Purple heart motif with tooth emblem
│   ├── hero-dentistry.svg  # Hero dental illustration
│   ├── doctor-anupriya.svg # Dr. Anupriya profile illustration
│   ├── doctor-team-1.svg   # Orthodontics specialist illustration
│   ├── doctor-team-2.svg   # Pediatric dentistry specialist illustration
│   ├── doctor-team-3.svg   # Oral & maxillofacial surgeon illustration
│   ├── gallery-reception.svg
│   ├── gallery-operatory.svg
│   ├── gallery-sterilization.svg
│   ├── gallery-pediatric.svg
│   ├── gallery-xray.svg
│   └── gallery-consultation.svg
└── README.md               # Documentation and maintenance guide
```

---

## 🎨 How to Switch or Customize Theme Colours

Theme colours and styling tokens are defined at the very top of [`css/style.css`](file:///css/style.css) using CSS Custom Properties (`:root` for Light Mode and `[data-theme="dark"]` for Dark Mode).

### Light Mode (`:root`):
```css
:root {
  /* Brand Palette (Purple Heart Motif + Teal Accent) */
  --primary: #7C3AED;        /* Main Soft Violet */
  --primary-hover: #6D28D9;
  --primary-soft: #F5F3FF;
  --accent: #0D9488;         /* Medical Teal */
  --accent-soft: #F0FDFA;

  /* Surfaces & Text */
  --bg-main: #FAFAFC;
  --bg-surface: #FFFFFF;
  --text-main: #334155;
  --text-heading: #1E1B4B;
}
```

### Dark Mode (`[data-theme="dark"]`):
```css
[data-theme="dark"] {
  --primary: #A78BFA;
  --primary-soft: #2E1065;
  --accent: #2DD4BF;
  --bg-main: #0B0F19;
  --bg-surface: #111827;
  --text-main: #E2E8F0;
  --text-heading: #F8FAFC;
}
```

- **Theme Detection & Memory:** The site automatically defaults to the visitor's operating system setting (`prefers-color-scheme`), and persists any manual toggle preference (sun/moon icon in the navbar) in `localStorage.getItem("sdc_theme")`.

---

## 📝 How to Edit Data Arrays

All clinic content (treatments, doctor profiles, testimonials, FAQs, clinic contact info) is kept at the very top of [`js/main.js`](file:///js/main.js) in organized arrays and objects.

### 1. Clinic General Info & Hours
Locate `CLINIC_INFO` in `js/main.js`:
```javascript
const CLINIC_INFO = {
  name: "Sakthi Dental Clinic",
  phonePrimary: "+91 9862890897",
  whatsappNumber: "919862890897",
  hours: "Sunday to Saturday: 9am to 7pm",
  demoAdminPin: "1234" // Change this demo PIN as needed
};
```

> **Note on Operating Hours:** The header and contact sections display *9:00 AM to 7:00 PM*, while the facilities list mentions *Doctors available daily (9 AM - 9 PM)*. Update the relevant constant once clinic management confirms exact duty times.

### 2. Treatments List
Add, remove, or modify items in `TREATMENTS_DATA`:
```javascript
{
  id: "dental-implants",
  title: "Dental Implants",
  category: "Restorative", // General, Restorative, Orthodontics, Surgical, Cosmetic, Paediatric
  icon: "🔩",
  shortDescription: "Permanent, bio-compatible titanium root replacements...",
  fullDescription: "Detailed procedure overview shown in the popup modal..."
}
```

### 3. Doctor Profiles
Update team members in `DOCTORS_DATA`:
```javascript
{
  id: "dr-anupriya",
  name: "Dr. Anupriya",
  role: "Chief Dental Surgeon & Founder",
  experience: "20+ Years Clinical Expertise",
  image: "images/doctor-anupriya.svg",
  qualifications: "BDS, Senior Dental Surgeon",
  bio: "Graduated in 2000, refined clinical excellence...",
  note: "Clinic Founder & Senior Consultant"
}
```

### 4. Testimonials & FAQs
Edit patient reviews in `TESTIMONIALS_DATA` and frequently asked questions in `FAQS_DATA`. The testimonials carousel and accordion update automatically.

---

## 📷 How to Replace Images with Clinic Photographs

1. Export your high-resolution clinic photos in standard web formats (`.jpg`, `.png`, or `.webp`).
2. Place the photos into the `/images/` directory:
   - Replace `images/doctor-anupriya.svg` with `images/doctor-anupriya.jpg`
   - Replace gallery photos:
     - `gallery-reception.jpg`
     - `gallery-operatory.jpg`
     - `gallery-sterilization.jpg`
     - `gallery-pediatric.jpg`
     - `gallery-xray.jpg`
     - `gallery-consultation.jpg`
3. Update the file paths in [`js/main.js`](file:///js/main.js) under `DOCTORS_DATA` and `GALLERY_DATA`.

---

## 🔐 Staff Admin Portal & Offline Booking Storage

- **Staff Access:** Click "Staff" in the navbar or scroll to `#admin`. Enter demo PIN: `1234` *(clearly marked as demo-only client-side gate)*.
- **Appointments & Contact Messages:** Stored locally in browser `localStorage` under `sdc_appointments` and `sdc_contact_messages`.
- **Status Updates:** Staff can update statuses (`Pending`, `Confirmed`, `Completed`, `Cancelled`) or delete test records.
- **CSV Export:** One-click "📥 Export CSV" button to download all booking records into a spreadsheet.
- **Instant WhatsApp Confirmation:** After a patient books an appointment, a "Confirm on WhatsApp" button opens a pre-formatted WhatsApp chat (`wa.me/919862890897`) with their booking reference, chosen doctor, and date/time.

---

## ♿ Accessibility & Standards

- Semantic HTML5 landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Full keyboard navigation (Tab navigation, Esc to close modals/lightbox, arrow keys for lightbox navigation).
- ARIA live announcements, `aria-expanded`, `aria-controls`, and `role="dialog"`.
- Validated WCAG AA contrast in both light and dark modes.
- Media queries for `prefers-reduced-motion: reduce`.

