// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// NAVBAR SCROLL EFFECT
const nav = document.querySelector("nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scroll for navigation links
navItems.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const navHeight = nav.offsetHeight;

    window.scrollTo({
      top: targetSection.offsetTop - navHeight,
      behavior: "smooth",
    });
  });
});

// Navbar entrance animation
gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.5,
});

gsap.from(".logo", {
  scale: 0,
  rotation: -180,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 0.8,
});

gsap.from(".nav-links li", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "back.out(1.7)",
  delay: 1,
});

// 💖 CUSTOM EMOJI CURSOR WITH TRAIL - Optimized
const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");
const hoverImage = document.querySelector(".hover-image");
const trails = [
  document.querySelector(".trail-1"),
  document.querySelector(".trail-2"),
  document.querySelector(".trail-3"),
  document.querySelector(".trail-4"),
];

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let hoverImgX = 0;
let hoverImgY = 0;

const trailPositions = trails.map(() => ({ x: 0, y: 0 }));

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
  cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

  // Animate hover image with smooth follow
  if (hoverImage.classList.contains("active")) {
    hoverImgX += (mouseX - hoverImgX) * 0.1;
    hoverImgY += (mouseY - hoverImgY) * 0.1;
    hoverImage.style.transform = `translate(${hoverImgX}px, ${hoverImgY}px) translate(-50%, -50%)`;
  }

  // Animate trail emojis
  trails.forEach((trail, index) => {
    const delay = (index + 1) * 0.08;
    trailPositions[index].x +=
      (mouseX - trailPositions[index].x) * (0.15 - delay);
    trailPositions[index].y +=
      (mouseY - trailPositions[index].y) * (0.15 - delay);

    trail.style.transform = `translate(${trailPositions[index].x}px, ${trailPositions[index].y}px) translate(-50%, -50%)`;
    trail.style.opacity = "0.7";
  });

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover Image on Name
const nameTitle = document.querySelector("#home h1");

nameTitle.addEventListener("mouseenter", () => {
  hoverImage.classList.add("active");
  gsap.to(hoverImage, {
    scale: 1,
    rotation: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  });
});

nameTitle.addEventListener("mouseleave", () => {
  gsap.to(hoverImage, {
    scale: 0.8,
    rotation: -10,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      hoverImage.classList.remove("active");
    },
  });
});

// Cursor hover effect
const interactiveElements = document.querySelectorAll(
  "button, .work-card, .service-visual"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorDot.classList.add("hover");
    gsap.to(cursor, { scale: 1.5, duration: 0.3 });
  });

  el.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("hover");
    gsap.to(cursor, { scale: 1, duration: 0.3 });
  });
});

// 🌈 SCROLL BACKGROUND COLOR TRANSITION
gsap.to("body", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
  backgroundColor: "#ffb3d9",
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

// 🎈 FLOATING PARTICLES ANIMATION - Optimized
gsap.to(".particle-1", {
  y: -40,
  x: 30,
  rotation: 360,
  scale: 1.2,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  force3D: true,
});

gsap.to(".particle-2", {
  y: 50,
  x: -40,
  rotation: -360,
  scale: 0.8,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  force3D: true,
});

gsap.to(".particle-3", {
  y: -60,
  x: 40,
  scale: 1.4,
  duration: 9,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  force3D: true,
});

// 🌟 HOME SECTION ANIMATIONS
gsap.from("#home h1", {
  x: -200,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  delay: 0.3,
});

gsap.from("#home .subtitle", {
  x: -200,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  delay: 0.6,
});

gsap.from("#home .btn", {
  scale: 0,
  opacity: 0,
  rotation: -180,
  duration: 0.8,
  ease: "back.out(2)",
  delay: 0.9,
});

// Particles entrance animation
gsap.from(".particle", {
  scale: 0,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
  ease: "back.out(1.7)",
});

// 📜 WORKS SECTION ANIMATIONS
gsap.from(".works-header h2", {
  scrollTrigger: {
    trigger: ".works-header",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".works-header p", {
  scrollTrigger: {
    trigger: ".works-header",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

// 🃏 WORK CARDS - Enhanced animations
gsap.from(".work-card", {
  scrollTrigger: {
    trigger: ".work-grid",
    start: "top 75%",
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out",
});

// Work images parallax on scroll
gsap.utils.toArray(".work-image").forEach((img) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    y: -30,
    ease: "none",
  });
});

// 💎 SERVICES SECTION
gsap.from(".services-intro h2", {
  scrollTrigger: {
    trigger: ".services-intro",
    start: "top 80%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
});

gsap.from(".services-intro p", {
  scrollTrigger: {
    trigger: ".services-intro",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

// Service Items Animation
gsap.utils.toArray(".service-item").forEach((item, index) => {
  const content = item.querySelector(".service-content");
  const visual = item.querySelector(".service-visual");

  gsap.from(content, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    x: index % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(visual, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    scale: 0,
    opacity: 0,
    rotation: 180,
    duration: 1,
    ease: "back.out(1.7)",
  });
});

// 💫 Connect Section
gsap.from("#connect h2", {
  scrollTrigger: {
    trigger: "#connect",
    start: "top 70%",
  },
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
});

gsap.from("#connect p", {
  scrollTrigger: {
    trigger: "#connect",
    start: "top 70%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

gsap.from("#connect .btn", {
  scrollTrigger: {
    trigger: "#connect",
    start: "top 70%",
  },
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "back.out(1.7)",
});

// 🧲 MAGNETIC EFFECT ON TITLE
const magneticTitle = document.querySelector("#home h1");

magneticTitle.addEventListener("mousemove", (e) => {
  const rect = magneticTitle.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / 8;
  const y = (e.clientY - rect.top - rect.height / 2) / 8;

  gsap.to(magneticTitle, {
    x: x,
    y: y,
    duration: 0.4,
    ease: "power2.out",
  });
});

magneticTitle.addEventListener("mouseleave", () => {
  gsap.to(magneticTitle, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "elastic.out(1, 0.4)",
  });
});

// 🎪 BUTTON ANIMATIONS
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    gsap
      .timeline()
      .to(this, {
        scale: 0.85,
        duration: 0.1,
        ease: "power2.in",
      })
      .to(this, {
        scale: 1.1,
        duration: 0.2,
        ease: "back.out(3)",
      })
      .to(this, {
        scale: 1,
        duration: 0.1,
      });
  });
});

// 🎨 WORK CARD 3D TILT & Image Effects - Optimized
document.querySelectorAll(".work-card").forEach((card) => {
  const img = card.querySelector(".work-image");
  let rafId = null;

  card.addEventListener("mousemove", function (e) {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(this, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        force3D: true,
      });

      // Parallax effect on image
      if (img) {
        gsap.to(img, {
          x: (x - centerX) / 15,
          y: (y - centerY) / 15,
          duration: 0.3,
          force3D: true,
        });
      }

      rafId = null;
    });
  });

  card.addEventListener("mouseleave", function () {
    gsap.to(this, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
      force3D: true,
    });

    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
        force3D: true,
      });
    }
  });
});

// 🎯 Service Visual Magnetic Effect
document.querySelectorAll(".service-visual").forEach((visual) => {
  visual.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 5;
    const y = (e.clientY - rect.top - rect.height / 2) / 5;

    gsap.to(this, {
      x: x,
      y: y,
      duration: 0.3,
    });
  });

  visual.addEventListener("mouseleave", function () {
    gsap.to(this, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  });
});
