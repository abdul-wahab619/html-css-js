// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenu.querySelector("i").classList.toggle("fa-bars");
  mobileMenu.querySelector("i").classList.toggle("fa-times");
});

// Close menu when clicking on a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenu.querySelector("i").classList.add("fa-bars");
    mobileMenu.querySelector("i").classList.remove("fa-times");
  });
});

// Testimonial Slider
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialNav = document.querySelectorAll(".testimonial-nav button");
let currentSlide = 0;

function showSlide(index) {
  testimonialSlider.style.transform = `translateX(-${index * 100}%)`;

  // Update navigation buttons
  testimonialNav.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  currentSlide = index;
}

// Add click events to navigation buttons
testimonialNav.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    showSlide(i);
  });
});

// Auto slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialNav.length;
  showSlide(currentSlide);
}, 5000);

// Pricing Toggle
const toggleBtns = document.querySelectorAll(".toggle-btn");
const prices = document.querySelectorAll(".price");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    toggleBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Update prices based on selection
    const isYearly = btn.textContent.includes("Yearly");

    prices.forEach((price) => {
      const monthlyPrice = price.getAttribute("data-monthly");
      const yearlyPrice = price.getAttribute("data-yearly");

      price.textContent = isYearly ? yearlyPrice : monthlyPrice;
      if (isYearly) {
        price.innerHTML += " <span>/ year</span>";
      } else {
        price.innerHTML += " <span>/ month</span>";
      }
    });
  });
});

// Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Name validation
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Email validation
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Message validation
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  if (message.value.trim() === "") {
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  if (isValid) {
    // Form is valid - here you would typically submit the form
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  }
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        fadeInObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }
);

fadeElements.forEach((element) => {
  fadeInObserver.observe(element);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
