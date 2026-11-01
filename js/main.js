/**
 * Sakthi Dental Clinic - Main Application Script
 * Hosur, Tamil Nadu
 * Vanilla JavaScript (No frameworks, no build tools, no remote CDN dependencies)
 * 
 * TODO for Clinic Administration:
 * Please verify the operating hours consistency:
 * The top bar and contact section state 9:00 AM - 7:00 PM, while the facilities
 * list mentions doctors available 9:00 AM - 9:00 PM. Update the relevant constant below
 * once finalized.
 */

// =============================================================================
// 1. DATA COLLECTIONS (Easily editable by clinic staff)
// =============================================================================

const CLINIC_INFO = {
  name: "Sakthi Dental Clinic",
  tagline: "Specialized Dental Care for Women, Children & Families",
  phonePrimary: "+91 9862890897",
  phoneSecondary: "+91 9363298118",
  whatsappNumber: "919862890897",
  email: "info@sakthidentalclinic.in",
  address: "B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India",
  hours: "Sunday to Saturday: 9am to 7pm",
  foundedYear: 2004,
  demoAdminPin: "1234" // DEMO ONLY: Client-side PIN for staff demonstration. Replace with server authentication in production.
};

const TREATMENTS_DATA = [
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    category: "Surgical",
    icon: "🦷",
    shortDescription: "Gentle and pain-managed removal of compromised, decayed, or problematic teeth.",
    fullDescription: "When a tooth cannot be saved through restorative measures, our painless extraction protocol ensures complete safety, comfort, and swift tissue healing. We provide detailed aftercare instructions and restorative replacement consultations."
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    icon: "🔩",
    shortDescription: "Permanent, bio-compatible titanium root replacements for missing natural teeth.",
    fullDescription: "Dental implants offer the gold standard in restoring chewing function and natural smile aesthetics. Built to fuse securely with your jawbone, our implants look, feel, and function just like natural teeth."
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    category: "Restorative",
    icon: "⚡",
    shortDescription: "Single-sitting or multi-stage painless therapy to salvage infected pulp and preserve natural teeth.",
    fullDescription: "Equipped with advanced rotary endodontics and digital apical locators, we clean, disinfect, and seal infected tooth canals with minimal discomfort, relieving severe toothache and preventing tooth loss."
  },
  {
    id: "orthodontic-braces",
    title: "Orthodontic Braces",
    category: "Orthodontics",
    icon: "📏",
    shortDescription: "Traditional metal and aesthetic ceramic brackets to correct teeth alignment and bite harmony.",
    fullDescription: "Comprehensive orthodontic alignment for teens and adults. We correct crooked teeth, crowded spacing, overbites, and underbites with gradual, supervised biomechanical correction."
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    category: "Orthodontics",
    icon: "✨",
    shortDescription: "Virtually invisible, removable custom trays to straighten teeth discreetly.",
    fullDescription: "Modern clear aligners let you straighten your smile without metal wires or diet restrictions. Custom 3D planned trays gradually guide your teeth into optimal harmony while remaining nearly undetectable."
  },
  {
    id: "scaling-polishing",
    title: "Scaling & Polishing",
    category: "General",
    icon: "🧼",
    shortDescription: "Ultrasonic tartar removal and stain cleansing for healthy gums and fresh breath.",
    fullDescription: "Preventive scaling clears stubborn calculus, bacterial plaque, and surface coffee/tea stains that brushing cannot reach. Essential every 6 months to maintain strong gum attachment and avoid periodontal disease."
  },
  {
    id: "dental-fillings",
    title: "Fillings (Tooth-Colored)",
    category: "Restorative",
    icon: "🛡️",
    shortDescription: "Aesthetic composite resin fillings that seamlessly restore decayed cavities.",
    fullDescription: "We use high-grade biocompatible resin composites color-matched exactly to your natural enamel. Our fillings strengthen tooth structure, stop cavity progression, and leave no visible metal appearance."
  },
  {
    id: "crowns-bridges",
    title: "Crowns & Bridges",
    category: "Restorative",
    icon: "👑",
    shortDescription: "Durable zirconia and ceramic caps to protect cracked teeth and span missing gaps.",
    fullDescription: "Precision-milled crowns safeguard brittle root-canal-treated teeth or fractured cusps, while bridges restore chewing capacity across empty tooth spaces without removable plates."
  },
  {
    id: "complete-dentures",
    title: "Dentures",
    category: "Restorative",
    icon: "😁",
    shortDescription: "Comfort-fit partial and complete acrylic/flexible prosthetic dentures.",
    fullDescription: "Custom-molded dentures tailored to your jaw architecture. We focus on lightweight comfort, stable bite retention, and natural aesthetics for elder patients and multi-tooth replacements."
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    icon: "⭐",
    shortDescription: "Safe in-clinic brightening that lifts deep enamel stains and revitalizes radiance.",
    fullDescription: "Professional clinic-grade whitening safely removes years of food, beverage, and aging discolorations. Yields visibly brighter shade results in a single supervised 45-minute appointment."
  },
  {
    id: "paediatric-dentistry",
    title: "Paediatric Dentistry",
    category: "Paediatric",
    icon: "🧸",
    shortDescription: "Fun, friendly, and fear-free dental visits tailored for young children and toddlers.",
    fullDescription: "Gentle dental checkups, fluoride varnishes, cavity sealants, and toothache relief in a patient, cheerful environment. We instill healthy brushing habits early and make visiting the dentist fun."
  },
  {
    id: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal",
    category: "Surgical",
    icon: "🩺",
    shortDescription: "Minimally invasive surgical extraction of impacted or painful third molars.",
    fullDescription: "Impacted wisdom teeth can cause severe jaw swelling, crowding, and recurrent infection. Our skilled oral surgeons perform safe, gentle surgical removals under local anesthesia with smooth recuperation."
  }
];

const DOCTORS_DATA = [
  {
    id: "dr-anupriya",
    name: "Dr. Anupriya",
    role: "Chief Dental Surgeon & Founder",
    experience: "20+ Years Clinical Expertise",
    image: "images/doctor-anupriya.svg",
    qualifications: "BDS, Senior Dental Surgeon",
    bio: "Graduated in 2000, refined clinical excellence during 6 foundational years at Mathura Clinic, and founded Sakthi Dental Clinic in Hosur in 2004. Over a decade serving as Consultant at Chandara Hospital Primary Health Center. Passionate about women's and children's oral health.",
    note: "Clinic Founder & Senior Consultant"
  },
  {
    id: "dr-orthodontist",
    name: "Dr. R. Vignesh",
    role: "Orthodontist & Dentofacial Orthopedics",
    experience: "11+ Years Experience",
    image: "images/doctor-team-1.svg",
    qualifications: "MDS - Orthodontics (Qualification details to be verified by clinic)",
    bio: "Specialist in modern self-ligating braces and clear aligner therapies for teens and adults, focusing on functional bite balance and aesthetic facial profiles.",
    note: "Qualification details to be added by the clinic."
  },
  {
    id: "dr-pediatric",
    name: "Dr. S. Kaviya",
    role: "Pediatric Dental Specialist",
    experience: "8+ Years Experience",
    image: "images/doctor-team-2.svg",
    qualifications: "MDS - Paediatric Dentistry (Qualification details to be verified by clinic)",
    bio: "Devoted to making every child's dental appointment cheerful and comfortable. Specializes in preventive sealants, gentle fillings, and habit-breaking therapy.",
    note: "Qualification details to be added by the clinic."
  },
  {
    id: "dr-surgeon",
    name: "Dr. K. Aravind",
    role: "Consultant Oral & Maxillofacial Surgeon",
    experience: "14+ Years Experience",
    image: "images/doctor-team-3.svg",
    qualifications: "MDS - Oral & Maxillofacial Surgery (Qualification details to be verified by clinic)",
    bio: "Expertise in complex surgical impactions, jaw trauma management, and precision dental implant placements with pain-free anesthesia techniques.",
    note: "Qualification details to be added by the clinic."
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Meenakshi Sundaram",
    tag: "Root Canal & Ceramic Crown",
    rating: 5,
    quote: "Dr. Anupriya is extremely patient and reassuring. I had intense tooth pain for two days and was terrified of a root canal, but she performed it with zero pain. The clinic hygiene is top class!"
  },
  {
    name: "Rajesh Kumar",
    tag: "Clear Aligners",
    rating: 5,
    quote: "Started my clear aligners at Sakthi Dental Clinic 6 months ago. The progress has been phenomenal. Transparent pricing, polite front desk, and highly professional treatment in Hosur."
  },
  {
    name: "Pooja & Little Dhruv (5 yrs)",
    tag: "Paediatric Care",
    rating: 5,
    quote: "My 5-year-old was terrified of dental chairs until we came here. The doctors spoke so warmly and gave him balloons and gentle care. He now reminds me when his dental checkup is due!"
  },
  {
    name: "K. Subramanian",
    tag: "Complete Dental Implants",
    rating: 5,
    quote: "At age 68, getting dental implants restored my confidence to eat my favorite foods again. Sakthi Dental Clinic has served our Hosur family for over 15 years with unwavering integrity."
  }
];

const FAQS_DATA = [
  {
    question: "What should I expect during my first dental visit?",
    answer: "Your initial visit includes a thorough oral examination of your teeth, gums, and soft tissues, digital intraoral imaging if necessary, and an open discussion about your oral hygiene and cosmetic goals. We create a transparent treatment roadmap before starting any procedure."
  },
  {
    question: "Will my dental treatment or tooth extraction be painful?",
    answer: "Patient comfort is our highest priority. We use modern topical numbing gels followed by painless localized anesthesia. Most treatments, including extractions and root canals, are virtually pain-free during the procedure, and we provide gentle analgesic guidance for post-care."
  },
  {
    question: "How long does a Root Canal Treatment take?",
    answer: "With our modern rotary endodontic equipment, many routine root canals are completed in a single 45 to 60-minute appointment. For severe or deeply infected cases, we may schedule two sittings to ensure thorough sterilization before permanent crown capping."
  },
  {
    question: "What is the difference between traditional braces and clear aligners?",
    answer: "Traditional braces use metal or ceramic brackets bonded to teeth, making them powerful for severe misalignments. Clear aligners are virtually invisible, custom-molded transparent trays that you can take off while eating and brushing. Our orthodontist helps you choose the best fit for your smile."
  },
  {
    question: "At what age should I bring my child for their first checkup?",
    answer: "The Indian Dental Association and pediatric guidelines recommend a child's first dental visit by their first birthday or when their first baby tooth emerges. Early visits ensure healthy enamel development, detect early cavities, and prevent dental anxiety."
  },
  {
    question: "What should I do in a dental emergency (severe pain or knocked-out tooth)?",
    answer: "Call our emergency helpline immediately (+91 9862890897). If a natural tooth is knocked out, do not scrub the root; preserve it in clean milk or saliva and reach our Hosur clinic within 60 minutes for the highest chance of re-implantation."
  },
  {
    question: "What payment methods are accepted at the clinic?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm), debit/credit cards, cash, and can provide itemized receipts for reimbursement under corporate or private dental insurance policies."
  },
  {
    question: "How can I reschedule or cancel my booked appointment?",
    answer: "You can reschedule or cancel without any cancellation fee. Simply call us at +91 9862890897 or send a quick WhatsApp message at least 3 hours prior so we can allocate the slot to someone in urgent need."
  }
];

const GALLERY_DATA = [
  {
    title: "Reception & Waiting Lounge",
    subtitle: "Calm, welcoming, air-conditioned patient reception",
    image: "images/gallery-reception.svg"
  },
  {
    title: "Advanced Dental Operatory",
    subtitle: "Ergonomic dental chair and shadowless surgical lighting",
    image: "images/gallery-operatory.svg"
  },
  {
    title: "Multi-Stage Sterilization Room",
    subtitle: "Class-B autoclaves and 100% sterile packaged pouches",
    image: "images/gallery-sterilization.svg"
  },
  {
    title: "Pediatric Dental Corner",
    subtitle: "Fear-free cheerful setup designed for children",
    image: "images/gallery-pediatric.svg"
  },
  {
    title: "Digital Low-Radiation X-Ray Unit",
    subtitle: "Instant HD digital radiograph sensor diagnostics",
    image: "images/gallery-xray.svg"
  },
  {
    title: "Doctor Consultation Suite",
    subtitle: "Private, unhurried smile planning and consultation",
    image: "images/gallery-consultation.svg"
  }
];

// Generate 30-minute time slots from 9:00 AM to 7:00 PM
function generateTimeSlots() {
  const slots = [];
  const startHour = 9;  // 9 AM
  const endHour = 19;   // 7 PM (19:00)

  for (let hour = startHour; hour < endHour; hour++) {
    for (let min of [0, 30]) {
      const h12 = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? "PM" : "AM";
      const minStr = min === 0 ? "00" : "30";
      const slotString = `${h12}:${minStr} ${ampm}`;
      slots.push(slotString);
    }
  }
  return slots;
}

const ALL_TIME_SLOTS = generateTimeSlots();

// =============================================================================
// 2. STATE & STORAGE MANAGEMENT
// =============================================================================

const STORAGE_KEYS = {
  theme: "sdc_theme",
  appointments: "sdc_appointments",
  messages: "sdc_contact_messages",
  adminAuth: "sdc_admin_auth"
};

// Seed initial sample appointments if none exist
function initializeSampleStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.appointments)) {
    const sampleAppointments = [
      {
        id: "SDC-20261101-9041",
        name: "Sowmya Raman",
        phone: "9876543210",
        email: "sowmya.r@example.com",
        treatment: "Root Canal Therapy",
        dentist: "Dr. Anupriya",
        date: "2026-11-02",
        time: "10:30 AM",
        concern: "Occasional sensitivity in upper left molar",
        status: "Confirmed",
        createdAt: "2026-11-01T09:30:00Z"
      },
      {
        id: "SDC-20261101-7712",
        name: "Karthik Raja",
        phone: "9123456780",
        email: "karthik.raja@example.com",
        treatment: "Orthodontic Braces",
        dentist: "Dr. R. Vignesh",
        date: "2026-11-03",
        time: "04:30 PM",
        concern: "Consultation for lower jaw teeth crowding",
        status: "Pending",
        createdAt: "2026-11-01T10:15:00Z"
      }
    ];
    localStorage.setItem(STORAGE_KEYS.appointments, JSON.stringify(sampleAppointments));
  }

  if (!localStorage.getItem(STORAGE_KEYS.messages)) {
    const sampleMessages = [
      {
        id: "MSG-101",
        name: "Arun Kumar",
        phone: "9845123456",
        email: "arun.k@example.com",
        message: "Wanted to enquire whether invisible aligners are suitable for a 16-year-old?",
        createdAt: "2026-10-31T15:20:00Z"
      }
    ];
    localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(sampleMessages));
  }
}

function getStoredAppointments() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.appointments) || "[]");
  } catch (e) {
    console.error("Error reading stored appointments:", e);
    return [];
  }
}

function saveAppointments(appointments) {
  localStorage.setItem(STORAGE_KEYS.appointments, JSON.stringify(appointments));
}

function getStoredMessages() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.messages) || "[]");
  } catch (e) {
    console.error("Error reading stored messages:", e);
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(messages));
}

// =============================================================================
// 3. THEME TOGGLE (Light / Dark Mode with System Preference & localStorage)
// =============================================================================

function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  
  // 1. Check localStorage; 2. Fall back to prefers-color-scheme
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  let currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
  applyTheme(currentTheme);

  // Listen to system changes if user hasn't explicitly set localStorage
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem(STORAGE_KEYS.theme)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(activeTheme);
      localStorage.setItem(STORAGE_KEYS.theme, activeTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "☀️";
      if (themeToggleBtn) themeToggleBtn.setAttribute("aria-label", "Switch to light theme");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "🌙";
      if (themeToggleBtn) themeToggleBtn.setAttribute("aria-label", "Switch to dark theme");
    }
  }
}

// =============================================================================
// 4. NAVBAR, MOBILE MENU & SCROLL INTERSECTION
// =============================================================================

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinksList = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".navbar__link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (menuToggle && navLinksList) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menuToggle.classList.toggle("is-active");
      navLinksList.classList.toggle("is-open");
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.classList.remove("is-active");
        navLinksList.classList.remove("is-open");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && navLinksList.classList.contains("is-open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.classList.remove("is-active");
        navLinksList.classList.remove("is-open");
      }
    });
  }

  // Active Link Highlighting with IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));
}

// =============================================================================
// 5. SCROLL REVEAL ANIMATIONS & STAT COUNTERS
// =============================================================================

function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-revealed"));
  }

  // Stat Counter Animation
  const statNumbers = document.querySelectorAll(".stat-item__number");
  let animated = false;

  const statsSection = document.getElementById("about");
  if (statsSection && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    }, { threshold: 0.25 });
    statsObserver.observe(statsSection);
  }

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute("data-target"), 10);
      const suffix = stat.getAttribute("data-suffix") || "";
      if (isNaN(target)) return;

      let current = 0;
      const duration = 1800;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = Math.ceil(target / totalSteps);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = `${current.toLocaleString()}${suffix}`;
      }, stepTime);
    });
  }
}

// =============================================================================
// 6. SERVICES / TREATMENTS RENDERING & FILTERING
// =============================================================================

function initTreatments() {
  const servicesGrid = document.getElementById("treatmentsGrid");
  const previewGrid = document.getElementById("servicesPreviewGrid");
  const filterChipsContainer = document.getElementById("categoryChips");
  const searchInput = document.getElementById("treatmentSearchInput");

  // Render preview grid (first 4 items for hero overview)
  if (previewGrid) {
    const previewList = TREATMENTS_DATA.slice(0, 4);
    previewGrid.innerHTML = previewList.map(item => createTreatmentCardHtml(item)).join("");
    attachCardModalEvents(previewGrid);
  }

  // Render Category Filter Chips
  const categories = ["All", "General", "Restorative", "Orthodontics", "Surgical", "Cosmetic", "Paediatric"];
  if (filterChipsContainer) {
    filterChipsContainer.innerHTML = categories.map((cat, idx) => `
      <button type="button" class="chip ${idx === 0 ? "active" : ""}" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

    filterChipsContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      filterChipsContainer.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      applyTreatmentsFilter();
    });
  }

  // Search input event
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      applyTreatmentsFilter();
    });
  }

  function applyTreatmentsFilter() {
    const activeChip = filterChipsContainer ? filterChipsContainer.querySelector(".chip.active") : null;
    const selectedCategory = activeChip ? activeChip.getAttribute("data-category") : "All";
    const searchQuery = (searchInput ? searchInput.value : "").trim().toLowerCase();

    const filtered = TREATMENTS_DATA.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) || 
                            item.shortDescription.toLowerCase().includes(searchQuery) ||
                            item.category.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    renderTreatmentsGrid(filtered);
  }

  function renderTreatmentsGrid(items) {
    if (!servicesGrid) return;
    if (items.length === 0) {
      servicesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">No treatments found matching your search</p>
          <p style="font-size: 0.95rem;">Try adjusting your keyword or reset filters to view all procedures.</p>
        </div>
      `;
      return;
    }
    servicesGrid.innerHTML = items.map(item => createTreatmentCardHtml(item)).join("");
    attachCardModalEvents(servicesGrid);
  }

  // Initial render
  renderTreatmentsGrid(TREATMENTS_DATA);
}

function createTreatmentCardHtml(item) {
  return `
    <article class="treatment-card" data-treatment-id="${item.id}" tabindex="0" role="button" aria-label="View details for ${item.title}">
      <div>
        <div class="treatment-card__top">
          <span class="treatment-card__icon" aria-hidden="true">${item.icon}</span>
          <span class="treatment-card__category">${item.category}</span>
        </div>
        <h3 class="treatment-card__title">${item.title}</h3>
        <p class="treatment-card__desc">${item.shortDescription}</p>
      </div>
      <div class="treatment-card__action">
        <span>Learn more &amp; Book</span>
        <span aria-hidden="true">&rarr;</span>
      </div>
    </article>
  `;
}

// Treatment Details Modal
function attachCardModalEvents(container) {
  const cards = container.querySelectorAll(".treatment-card");
  cards.forEach(card => {
    const openModal = () => {
      const treatmentId = card.getAttribute("data-treatment-id");
      const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
      if (treatment) showTreatmentModal(treatment);
    };

    card.addEventListener("click", openModal);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal();
      }
    });
  });
}

function showTreatmentModal(treatment) {
  const modalOverlay = document.getElementById("treatmentModal");
  const modalTitle = document.getElementById("treatmentModalTitle");
  const modalBadge = document.getElementById("treatmentModalCategory");
  const modalBody = document.getElementById("treatmentModalBody");
  const bookTreatmentBtn = document.getElementById("bookThisTreatmentBtn");
  const closeModalBtn = document.getElementById("treatmentModalClose");

  if (!modalOverlay) return;

  modalTitle.textContent = `${treatment.icon} ${treatment.title}`;
  modalBadge.textContent = treatment.category;
  modalBody.textContent = treatment.fullDescription;

  modalOverlay.classList.add("is-active");
  document.body.style.overflow = "hidden";
  closeModalBtn.focus();

  // Handle "Book this treatment" click
  bookTreatmentBtn.onclick = () => {
    closeTreatmentModal();
    const treatmentSelect = document.getElementById("bookTreatment");
    if (treatmentSelect) {
      treatmentSelect.value = treatment.title;
    }
    const bookSection = document.getElementById("book");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.getElementById("bookName")?.focus();
      }, 500);
    }
  };

  // Close handlers
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeTreatmentModal();
    }
  };

  function closeTreatmentModal() {
    modalOverlay.classList.remove("is-active");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeyDown);
  }

  closeModalBtn.onclick = closeTreatmentModal;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeTreatmentModal();
  };

  document.addEventListener("keydown", handleKeyDown);
}

// =============================================================================
// 7. DOCTORS TEAM RENDERING
// =============================================================================

function initDoctors() {
  const doctorsGrid = document.getElementById("doctorsGrid");
  const doctorSelect = document.getElementById("bookDoctor");

  if (doctorsGrid) {
    doctorsGrid.innerHTML = DOCTORS_DATA.map(doc => `
      <article class="doctor-card">
        <div class="doctor-card__image">
          <img src="${doc.image}" alt="${doc.name} - ${doc.role}" loading="lazy">
        </div>
        <div class="doctor-card__body">
          <h3 class="doctor-card__name">${doc.name}</h3>
          <p class="doctor-card__role">${doc.role}</p>
          <p class="doctor-card__experience">🏅 ${doc.experience}</p>
          <p class="doctor-card__bio">${doc.bio}</p>
          <p class="doctor-card__note">ℹ️ ${doc.note}</p>
          <button type="button" class="btn btn--secondary btn--sm btn--full" onclick="selectDoctorAndBook('${doc.name}')">
            Consult with ${doc.name.split(' ')[1] || doc.name}
          </button>
        </div>
      </article>
    `).join("");
  }

  // Populate Doctor select in Booking form
  if (doctorSelect) {
    doctorSelect.innerHTML = `
      <option value="">-- Choose Preferred Dentist --</option>
      ${DOCTORS_DATA.map(doc => `<option value="${doc.name}">${doc.name} (${doc.role})</option>`).join("")}
    `;
  }

  // Populate Treatments select in Booking form
  const treatmentSelect = document.getElementById("bookTreatment");
  if (treatmentSelect) {
    treatmentSelect.innerHTML = `
      <option value="">-- Select Required Treatment --</option>
      ${TREATMENTS_DATA.map(t => `<option value="${t.title}">${t.title} [${t.category}]</option>`).join("")}
    `;
  }
}

// Helper to pre-select doctor and jump to book section
window.selectDoctorAndBook = function(doctorName) {
  const doctorSelect = document.getElementById("bookDoctor");
  if (doctorSelect) {
    doctorSelect.value = doctorName;
  }
  const bookSection = document.getElementById("book");
  if (bookSection) {
    bookSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      document.getElementById("bookName")?.focus();
    }, 400);
  }
};

// =============================================================================
// 8. TESTIMONIALS CAROUSEL (Vanilla JS Slider)
// =============================================================================

function initTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const prevBtn = document.getElementById("testimonialPrev");
  const nextBtn = document.getElementById("testimonialNext");
  const dotsContainer = document.getElementById("testimonialDots");
  const sliderBox = document.getElementById("testimonialsSlider");

  if (!track || TESTIMONIALS_DATA.length === 0) return;

  // Render slides
  track.innerHTML = TESTIMONIALS_DATA.map(item => `
    <div class="testimonial-slide">
      <div class="testimonial-slide__stars" aria-label="5 stars rating">★★★★★</div>
      <blockquote class="testimonial-slide__quote">"${item.quote}"</blockquote>
      <div class="testimonial-slide__author">${item.name}</div>
      <div class="testimonial-slide__tag">${item.tag} · Verified Patient</div>
    </div>
  `).join("");

  // Render dots
  dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, idx) => `
    <button type="button" class="slider-dot ${idx === 0 ? "active" : ""}" aria-label="Slide ${idx + 1}" data-index="${idx}"></button>
  `).join("");

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideCount = TESTIMONIALS_DATA.length;

  function updateSlider(index) {
    currentIndex = (index + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    const dots = dotsContainer.querySelectorAll(".slider-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      updateSlider(currentIndex + 1);
    }, 5500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => {
    updateSlider(currentIndex - 1);
    startAutoplay();
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    updateSlider(currentIndex + 1);
    startAutoplay();
  });

  dotsContainer.addEventListener("click", (e) => {
    const dot = e.target.closest(".slider-dot");
    if (!dot) return;
    const index = parseInt(dot.getAttribute("data-index"), 10);
    updateSlider(index);
    startAutoplay();
  });

  // Pause on hover or focus
  if (sliderBox) {
    sliderBox.addEventListener("mouseenter", stopAutoplay);
    sliderBox.addEventListener("mouseleave", startAutoplay);
    sliderBox.addEventListener("focusin", stopAutoplay);
    sliderBox.addEventListener("focusout", startAutoplay);
  }

  startAutoplay();
}

// =============================================================================
// 9. GALLERY & ACCESSIBLE LIGHTBOX
// =============================================================================

function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  if (!galleryGrid) return;

  // Render gallery items
  galleryGrid.innerHTML = GALLERY_DATA.map((item, idx) => `
    <div class="gallery-item" tabindex="0" role="button" aria-label="Enlarge ${item.title}" data-index="${idx}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-item__overlay">
        <h4 class="gallery-item__title">${item.title}</h4>
        <span class="gallery-item__tag">${item.subtitle}</span>
      </div>
    </div>
  `).join("");

  let currentGalleryIndex = 0;

  function openLightbox(index) {
    currentGalleryIndex = (index + GALLERY_DATA.length) % GALLERY_DATA.length;
    const item = GALLERY_DATA[currentGalleryIndex];
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = `${item.title} — ${item.subtitle}`;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
    document.addEventListener("keydown", handleLightboxKeyDown);
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleLightboxKeyDown);
  }

  function handleLightboxKeyDown(e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(currentGalleryIndex - 1);
    if (e.key === "ArrowRight") openLightbox(currentGalleryIndex + 1);
  }

  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    const index = parseInt(item.getAttribute("data-index"), 10);
    openLightbox(index);
  });

  galleryGrid.addEventListener("keydown", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const index = parseInt(item.getAttribute("data-index"), 10);
      openLightbox(index);
    }
  });

  if (lightboxClose) lightboxClose.onclick = closeLightbox;
  if (lightboxPrev) lightboxPrev.onclick = () => openLightbox(currentGalleryIndex - 1);
  if (lightboxNext) lightboxNext.onclick = () => openLightbox(currentGalleryIndex + 1);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
}

// =============================================================================
// 10. FAQS ACCORDION (Accessible button + aria-expanded, one open at a time)
// =============================================================================

function initFaqs() {
  const faqContainer = document.getElementById("faqContainer");
  if (!faqContainer) return;

  faqContainer.innerHTML = FAQS_DATA.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? "is-open" : ""}">
      <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? "true" : "false"}" aria-controls="faq-ans-${idx}">
        <span>${faq.question}</span>
        <span class="faq-trigger__icon" aria-hidden="true">▼</span>
      </button>
      <div id="faq-ans-${idx}" class="faq-content" role="region">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join("");

  faqContainer.addEventListener("click", (e) => {
    const trigger = e.target.closest(".faq-trigger");
    if (!trigger) return;

    const currentItem = trigger.closest(".faq-item");
    const isCurrentlyOpen = currentItem.classList.contains("is-open");

    // Close all items (one open at a time requirement)
    faqContainer.querySelectorAll(".faq-item").forEach(item => {
      item.classList.remove("is-open");
      item.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
    });

    // If it wasn't open, open it
    if (!isCurrentlyOpen) {
      currentItem.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
}

// =============================================================================
// 11. BOOKING FORM & APPOINTMENT ENGINE
// =============================================================================

function initBookingForm() {
  const form = document.getElementById("appointmentForm");
  const dateInput = document.getElementById("bookDate");
  const doctorSelect = document.getElementById("bookDoctor");
  const slotsContainer = document.getElementById("slotsGrid");
  const selectedSlotHidden = document.getElementById("bookSelectedSlot");
  const successCard = document.getElementById("bookingSuccessCard");

  if (!form || !dateInput) return;

  // Set min date to today's date (local format YYYY-MM-DD)
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDateStr = `${yyyy}-${mm}-${dd}`;
  dateInput.min = minDateStr;
  dateInput.value = minDateStr;

  // Render slots on init and when date or doctor changes
  updateAvailableSlots();
  dateInput.addEventListener("change", updateAvailableSlots);
  doctorSelect.addEventListener("change", updateAvailableSlots);

  function updateAvailableSlots() {
    const selectedDate = dateInput.value;
    const selectedDentist = doctorSelect.value;
    const appointments = getStoredAppointments();

    // Find slots already booked for this dentist and date
    const bookedSlots = appointments
      .filter(apt => apt.date === selectedDate && (!selectedDentist || apt.dentist === selectedDentist) && apt.status !== "Cancelled")
      .map(apt => apt.time);

    slotsContainer.innerHTML = ALL_TIME_SLOTS.map(slot => {
      const isBooked = bookedSlots.includes(slot);
      const isSelected = selectedSlotHidden.value === slot;
      return `
        <button type="button" 
                class="slot-btn ${isBooked ? "is-booked" : ""} ${isSelected ? "is-selected" : ""}" 
                data-slot="${slot}" 
                ${isBooked ? "disabled aria-label='Slot already booked'" : ""}>
          ${slot}
        </button>
      `;
    }).join("");
  }

  // Handle slot click
  slotsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".slot-btn");
    if (!btn || btn.disabled) return;

    slotsContainer.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("is-selected"));
    btn.classList.add("is-selected");
    selectedSlotHidden.value = btn.getAttribute("data-slot");
    clearFieldError("bookSlotError");
  });

  // Handle Form Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById("bookName");
    const phoneInput = document.getElementById("bookPhone");
    const emailInput = document.getElementById("bookEmail");
    const treatmentSelect = document.getElementById("bookTreatment");
    const consentCheckbox = document.getElementById("bookConsent");
    const submitBtn = document.getElementById("bookSubmitBtn");

    // 1. Full Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      showFieldError("bookNameError", "Please enter your full legal name (at least 3 characters).");
      isValid = false;
    } else {
      clearFieldError("bookNameError");
    }

    // 2. Mobile validation (10-digit Indian mobile number: starts with 6-9)
    const phoneVal = phoneInput.value.trim().replace(/[\s\-]/g, "");
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(phoneVal)) {
      showFieldError("bookPhoneError", "Please enter a valid 10-digit Indian mobile number (e.g. 9862890897).");
      isValid = false;
    } else {
      clearFieldError("bookPhoneError");
    }

    // 3. Treatment
    if (!treatmentSelect.value) {
      showFieldError("bookTreatmentError", "Please select the required dental treatment.");
      isValid = false;
    } else {
      clearFieldError("bookTreatmentError");
    }

    // 4. Dentist
    if (!doctorSelect.value) {
      showFieldError("bookDoctorError", "Please select your preferred dentist or consultant.");
      isValid = false;
    } else {
      clearFieldError("bookDoctorError");
    }

    // 5. Date
    if (!dateInput.value) {
      showFieldError("bookDateError", "Please pick an appointment date.");
      isValid = false;
    } else if (dateInput.value < minDateStr) {
      showFieldError("bookDateError", "Appointment date cannot be in the past.");
      isValid = false;
    } else {
      clearFieldError("bookDateError");
    }

    // 6. Time slot
    if (!selectedSlotHidden.value) {
      showFieldError("bookSlotError", "Please select an available 30-minute time slot.");
      isValid = false;
    } else {
      clearFieldError("bookSlotError");
    }

    // 7. Consent checkbox
    if (!consentCheckbox.checked) {
      showFieldError("bookConsentError", "Consent is required to manage your appointment securely.");
      isValid = false;
    } else {
      clearFieldError("bookConsentError");
    }

    if (!isValid) return;

    // Loading State
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>⏳ Processing appointment...</span>`;

    setTimeout(() => {
      // Generate reference
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const cleanDate = dateInput.value.replace(/-/g, "");
      const bookingRef = `SDC-${cleanDate}-${randomCode}`;

      const appointment = {
        id: bookingRef,
        name: nameInput.value.trim(),
        phone: phoneVal,
        email: emailInput.value.trim() || "Not provided",
        treatment: treatmentSelect.value,
        dentist: doctorSelect.value,
        date: dateInput.value,
        time: selectedSlotHidden.value,
        concern: document.getElementById("bookConcern").value.trim() || "None",
        status: "Confirmed",
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      const appointments = getStoredAppointments();
      appointments.unshift(appointment);
      saveAppointments(appointments);

      // Reset loading state and form
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.style.display = "none";

      // Render Confirmation Card
      showSuccessCard(appointment);

      // Re-render admin table if open
      renderAdminAppointments();
    }, 600);
  });

  function showSuccessCard(apt) {
    successCard.innerHTML = `
      <div class="booking-success__icon" aria-hidden="true">🎉</div>
      <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--text-heading);">Appointment Confirmed!</h3>
      <p style="color: var(--text-muted);">Thank you, <strong>${apt.name}</strong>. Your consultation has been scheduled with <strong>${apt.dentist}</strong>.</p>
      
      <div>
        <span class="booking-success__ref">Booking ID: ${apt.id}</span>
      </div>

      <div class="booking-success__details">
        <dl>
          <dt>Treatment:</dt>
          <dd>${apt.treatment}</dd>
          <dt>Dentist:</dt>
          <dd>${apt.dentist}</dd>
          <dt>Date &amp; Time:</dt>
          <dd><strong>${apt.date} at ${apt.time}</strong></dd>
          <dt>Contact Mobile:</dt>
          <dd>+91 ${apt.phone}</dd>
          <dt>Clinic Location:</dt>
          <dd>B2/8, SBM Layout, Anthivadi, Hosur</dd>
        </dl>
      </div>

      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
        <a href="${buildWhatsAppLink(apt)}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--lg">
          💬 Confirm on WhatsApp
        </a>
        <button type="button" class="btn btn--secondary btn--lg" id="bookAnotherBtn">
          Book Another Visit
        </button>
      </div>
    `;

    successCard.classList.add("is-visible");
    successCard.scrollIntoView({ behavior: "smooth" });

    document.getElementById("bookAnotherBtn").onclick = () => {
      form.reset();
      selectedSlotHidden.value = "";
      updateAvailableSlots();
      successCard.classList.remove("is-visible");
      form.style.display = "block";
    };
  }

  function buildWhatsAppLink(apt) {
    const text = encodeURIComponent(
      `Hello Sakthi Dental Clinic! I have booked an appointment.\n\n` +
      `*Reference:* ${apt.id}\n` +
      `*Patient Name:* ${apt.name}\n` +
      `*Treatment:* ${apt.treatment}\n` +
      `*Dentist:* ${apt.dentist}\n` +
      `*Date:* ${apt.date}\n` +
      `*Time Slot:* ${apt.time}\n` +
      `*Phone:* ${apt.phone}\n\n` +
      `Please confirm my slot. Thank you!`
    );
    return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`;
  }

  function showFieldError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearFieldError(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  }
}

// =============================================================================
// 12. CONTACT FORM
// =============================================================================

function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusCard = document.getElementById("contactSuccessCard");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("contactPhone").value.trim().replace(/[\s\-]/g, "");
    const message = document.getElementById("contactMessage").value.trim();

    let hasError = false;

    if (!name || name.length < 2) {
      document.getElementById("contactNameError").textContent = "Please enter your name.";
      hasError = true;
    } else {
      document.getElementById("contactNameError").textContent = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById("contactEmailError").textContent = "Please enter a valid email address.";
      hasError = true;
    } else {
      document.getElementById("contactEmailError").textContent = "";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
      document.getElementById("contactPhoneError").textContent = "Please enter a valid 10-digit Indian phone number.";
      hasError = true;
    } else {
      document.getElementById("contactPhoneError").textContent = "";
    }

    if (!message || message.length < 10) {
      document.getElementById("contactMessageError").textContent = "Message must be at least 10 characters.";
      hasError = true;
    } else {
      document.getElementById("contactMessageError").textContent = "";
    }

    if (hasError) return;

    // Save message to localStorage
    const messages = getStoredMessages();
    const newMsg = {
      id: `MSG-${Date.now().toString().slice(-4)}`,
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString()
    };
    messages.unshift(newMsg);
    saveMessages(messages);

    // Show inline success message
    form.reset();
    statusCard.style.display = "block";
    statusCard.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      statusCard.style.display = "none";
    }, 6000);

    // Refresh admin messages
    renderAdminMessages();
  });
}

// =============================================================================
// 13. STAFF ADMIN AREA (PIN Gate, Appointments & Messages Manager, CSV Export)
// =============================================================================

function initAdminArea() {
  const gateBox = document.getElementById("adminGate");
  const dashboard = document.getElementById("adminDashboard");
  const pinInput = document.getElementById("adminPinInput");
  const unlockBtn = document.getElementById("adminUnlockBtn");
  const pinError = document.getElementById("adminPinError");
  const lockBtn = document.getElementById("adminLockBtn");
  const exportBtn = document.getElementById("adminExportCsvBtn");

  // Tab switching (Appointments vs Messages)
  const tabAppointments = document.getElementById("adminTabAppointments");
  const tabMessages = document.getElementById("adminTabMessages");
  const viewAppointments = document.getElementById("adminViewAppointments");
  const viewMessages = document.getElementById("adminViewMessages");

  if (!gateBox || !dashboard) return;

  // Check persisted session
  if (sessionStorage.getItem(STORAGE_KEYS.adminAuth) === "true") {
    unlockAdmin();
  }

  unlockBtn.addEventListener("click", handleUnlock);
  pinInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleUnlock();
  });

  function handleUnlock() {
    if (pinInput.value === CLINIC_INFO.demoAdminPin) {
      sessionStorage.setItem(STORAGE_KEYS.adminAuth, "true");
      unlockAdmin();
      pinError.textContent = "";
      pinInput.value = "";
    } else {
      pinError.textContent = "Incorrect PIN. (Demo PIN: 1234)";
    }
  }

  function unlockAdmin() {
    gateBox.style.display = "none";
    dashboard.classList.add("is-unlocked");
    renderAdminAppointments();
    renderAdminMessages();
  }

  if (lockBtn) {
    lockBtn.addEventListener("click", () => {
      sessionStorage.removeItem(STORAGE_KEYS.adminAuth);
      dashboard.classList.remove("is-unlocked");
      gateBox.style.display = "block";
    });
  }

  // Tabs
  if (tabAppointments && tabMessages) {
    tabAppointments.addEventListener("click", () => {
      tabAppointments.classList.add("active");
      tabMessages.classList.remove("active");
      viewAppointments.style.display = "block";
      viewMessages.style.display = "none";
    });

    tabMessages.addEventListener("click", () => {
      tabMessages.classList.add("active");
      tabAppointments.classList.remove("active");
      viewAppointments.style.display = "none";
      viewMessages.style.display = "block";
    });
  }

  // Filter & Search listeners
  const searchInput = document.getElementById("adminSearchInput");
  const statusFilter = document.getElementById("adminStatusFilter");
  const dateFilter = document.getElementById("adminDateFilter");

  if (searchInput) searchInput.addEventListener("input", renderAdminAppointments);
  if (statusFilter) statusFilter.addEventListener("change", renderAdminAppointments);
  if (dateFilter) dateFilter.addEventListener("change", renderAdminAppointments);

  // CSV Export
  if (exportBtn) {
    exportBtn.addEventListener("click", exportAppointmentsCsv);
  }
}

function renderAdminAppointments() {
  const tableBody = document.getElementById("adminAppointmentsBody");
  if (!tableBody) return;

  const searchVal = (document.getElementById("adminSearchInput")?.value || "").toLowerCase().trim();
  const statusVal = document.getElementById("adminStatusFilter")?.value || "All";
  const dateVal = document.getElementById("adminDateFilter")?.value || "";

  const allAppointments = getStoredAppointments();

  const filtered = allAppointments.filter(apt => {
    const matchesSearch = !searchVal || 
      apt.id.toLowerCase().includes(searchVal) ||
      apt.name.toLowerCase().includes(searchVal) ||
      apt.phone.includes(searchVal) ||
      apt.treatment.toLowerCase().includes(searchVal);
    const matchesStatus = statusVal === "All" || apt.status === statusVal;
    const matchesDate = !dateVal || apt.date === dateVal;
    return matchesSearch && matchesStatus && matchesDate;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No appointments found matching your filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(apt => {
    const badgeClass = {
      Pending: "status-badge--pending",
      Confirmed: "status-badge--confirmed",
      Completed: "status-badge--completed",
      Cancelled: "status-badge--cancelled"
    }[apt.status] || "status-badge--pending";

    return `
      <tr>
        <td><strong>${apt.id}</strong></td>
        <td>
          <div style="font-weight: 600;">${apt.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${apt.phone}</div>
        </td>
        <td>${apt.treatment}</td>
        <td>${apt.dentist}</td>
        <td>
          <div>${apt.date}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${apt.time}</div>
        </td>
        <td>
          <span class="status-badge ${badgeClass}">${apt.status}</span>
        </td>
        <td>
          <select onchange="updateAppointmentStatus('${apt.id}', this.value)" style="padding: 0.2rem 0.4rem; font-size: 0.78rem; border-radius: 4px; margin-right: 4px;">
            <option value="Confirmed" ${apt.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
            <option value="Completed" ${apt.status === "Completed" ? "selected" : ""}>Completed</option>
            <option value="Pending" ${apt.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="Cancelled" ${apt.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
          </select>
          <button type="button" class="table-btn table-btn--delete" onclick="deleteAppointment('${apt.id}')" title="Delete record">🗑️</button>
        </td>
      </tr>
    `;
  }).join("");
}

window.updateAppointmentStatus = function(aptId, newStatus) {
  const appointments = getStoredAppointments();
  const index = appointments.findIndex(a => a.id === aptId);
  if (index !== -1) {
    appointments[index].status = newStatus;
    saveAppointments(appointments);
    renderAdminAppointments();
  }
};

window.deleteAppointment = function(aptId) {
  if (confirm(`Are you sure you want to delete appointment record ${aptId}?`)) {
    let appointments = getStoredAppointments();
    appointments = appointments.filter(a => a.id !== aptId);
    saveAppointments(appointments);
    renderAdminAppointments();
  }
};

function renderAdminMessages() {
  const tableBody = document.getElementById("adminMessagesBody");
  if (!tableBody) return;

  const messages = getStoredMessages();

  if (messages.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No contact messages received yet.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = messages.map(msg => `
    <tr>
      <td><strong>${msg.id}</strong></td>
      <td>
        <div style="font-weight: 600;">${msg.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${msg.createdAt ? msg.createdAt.split("T")[0] : ""}</div>
      </td>
      <td>
        <div><a href="tel:${msg.phone}">${msg.phone}</a></div>
        <div style="font-size: 0.8rem; color: var(--text-muted);"><a href="mailto:${msg.email}">${msg.email}</a></div>
      </td>
      <td style="max-width: 300px; white-space: normal;">${msg.message}</td>
      <td>
        <button type="button" class="table-btn table-btn--delete" onclick="deleteMessage('${msg.id}')">🗑️ Delete</button>
      </td>
    </tr>
  `).join("");
}

window.deleteMessage = function(msgId) {
  if (confirm("Delete this contact enquiry?")) {
    let messages = getStoredMessages();
    messages = messages.filter(m => m.id !== msgId);
    saveMessages(messages);
    renderAdminMessages();
  }
};

function exportAppointmentsCsv() {
  const appointments = getStoredAppointments();
  if (appointments.length === 0) {
    alert("No appointments to export.");
    return;
  }

  const headers = ["Reference ID", "Patient Name", "Phone", "Email", "Treatment", "Dentist", "Date", "Time", "Status", "Concern"];
  const rows = appointments.map(a => [
    `"${a.id}"`,
    `"${a.name.replace(/"/g, '""')}"`,
    `"${a.phone}"`,
    `"${a.email}"`,
    `"${a.treatment}"`,
    `"${a.dentist}"`,
    `"${a.date}"`,
    `"${a.time}"`,
    `"${a.status}"`,
    `"${(a.concern || "").replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Sakthi_Dental_Appointments_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// 14. PRIVACY POLICY COLLAPSIBLE & BACK TO TOP BUTTON
// =============================================================================

function initPrivacyToggle() {
  const privacyToggleBtn = document.getElementById("privacyToggleBtn");
  const privacyBody = document.getElementById("privacyBody");
  const privacyIcon = document.getElementById("privacyToggleIcon");

  if (privacyToggleBtn && privacyBody) {
    privacyToggleBtn.addEventListener("click", () => {
      const isExpanded = privacyToggleBtn.getAttribute("aria-expanded") === "true";
      privacyToggleBtn.setAttribute("aria-expanded", String(!isExpanded));
      privacyBody.style.display = isExpanded ? "none" : "block";
      if (privacyIcon) privacyIcon.textContent = isExpanded ? "➕" : "➖";
    });
  }
}

function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initFooterYear() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// =============================================================================
// 15. APPLICATION BOOTSTRAP
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initializeSampleStorage();
  initTheme();
  initNavbar();
  initScrollAnimations();
  initTreatments();
  initDoctors();
  initTestimonials();
  initGallery();
  initFaqs();
  initBookingForm();
  initContactForm();
  initAdminArea();
  initPrivacyToggle();
  initBackToTop();
  initFooterYear();
});

