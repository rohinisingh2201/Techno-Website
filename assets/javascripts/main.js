document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /*  
      Template name    : Technoit - IT Solutions & Business Services Multipurpose Responsive Website Template
      Author           : ZRTHEMES
      Version          : 1.0
      File Description : Main JS file of the template
    */

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  const darkModeButton = document.getElementById("darkmode-button");

  darkModeButton.addEventListener("click", toggleMode);

  function toggleMode() {
    let buttonText = darkModeButton.innerHTML;
    var element = document.body;
    if (buttonText === '<i class="bi bi-moon-fill"></i>') {
      element.classList.add("dark");
      darkModeButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      element.classList.remove("dark");
      darkModeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add("sticked");
        if (nextElement) nextElement.classList.add("sticked-header-offset");
      } else {
        selectHeader.classList.remove("sticked");
        if (nextElement) nextElement.classList.remove("sticked-header-offset");
      }
    };
    window.addEventListener("load", headerFixed);
    document.addEventListener("scroll", headerFixed);
  }

  const scrollTop2 = document.querySelector("#header");
  if (scrollTop2) {
    const togglescrollTop = function () {
      window.scrollY > 50
        ? scrollTop2.classList.add("stikcy-menu")
        : scrollTop2.classList.remove("stikcy-menu");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop2.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }
  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll("#navbar a");

  function navbarlinksActive() {
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 50;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
});


// slider code   
document.addEventListener("DOMContentLoaded", function () {
  let wrapper = document.querySelector(".news-wrapper");
  let items = document.querySelectorAll(".news-item");
  let index = 0;

  function scrollNews() {
      index = (index + 1) % items.length;
      wrapper.style.transform = `translateY(-${index * 80}px)`;
  }

  setInterval(scrollNews, 4000); // Scroll every 5 seconds
});



// chatbot code
document.getElementById("chatbot-btn").addEventListener("click", function () {
  let chatbox = document.getElementById("chatbox");
  let isChatOpen = chatbox.style.display === "flex";

  chatbox.style.display = isChatOpen ? "none" : "flex";

  if (!isChatOpen) {
      initializeChat(); // Show welcome message when opening
  }
});

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chatbox").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function () {
  sendMessage();
});

// Listen for "Enter" key press to send message
document.getElementById("chat-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      sendMessage();
  }
});

// Function to send message when "Send" button or "Enter" key is pressed
function sendMessage() {
  let inputField = document.getElementById("chat-input");
  let userMessage = inputField.value.trim();

  if (userMessage !== "") {
      addMessage("You", userMessage);
      getBotResponse(userMessage);
      inputField.value = "";
  }
}

// Function to initialize chat with a welcome message
function initializeChat() {
  let chatMessages = document.getElementById("chat-messages");

  // Avoid duplicate welcome messages
  if (chatMessages.children.length === 0) {
      setTimeout(() => addMessage("Assistant", "Hi, how can I help you?👋 "), 500);
  }
}

// Function to add user and bot messages to the chat
function addMessage(sender, message, isHtml = false) {
  let chatMessages = document.getElementById("chat-messages");
  let newMessage = document.createElement("div");
  
  if (isHtml) {
      newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
  } else {
      newMessage.textContent = `${sender}: ${message}`;
  }

  newMessage.style.padding = "5px";
  newMessage.style.margin = "5px";
  chatMessages.appendChild(newMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle bot responses
function getBotResponse(userMessage) {
  let botResponse = "I'm not sure how to answer that.";

  // Dictionary of responses
  let responses = {
      "hello": "Hi there! How can I assist you?",
      "hi": "Hi there! How can I assist you?",
      "hey": "Hi there! How can I assist you?",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "your name": "I'm an AI Assistant!",
      "bye": "Goodbye! Have a great day!",
      "report": `You can report cyber crime by calling the Cyber Helpline Number 1930 or visit <a href="https://cybercrime.gov.in" target="_blank">https://cybercrime.gov.in</a>.`,
      "how to report cyber crime": `Call Cyber Helpline Number 1930 or visit <a href="https://cybercrime.gov.in" target="_blank">https://cybercrime.gov.in</a>.`,
      "report cyber crime": `You can report cyber crime by calling the Cyber Helpline Number 1930 or visit <a href="https://cybercrime.gov.in" target="_blank">https://cybercrime.gov.in</a>.`,
      "cyber crime": `Cyber crimes can be reported at <a href="https://cybercrime.gov.in" target="_blank">https://cybercrime.gov.in</a> or by calling 1930.`
  };

  // Normalize user input
  userMessage = userMessage.toLowerCase().trim();
  console.log("User input:", userMessage); // Debugging

  // Direct match
  if (responses[userMessage]) {
      botResponse = responses[userMessage];
  } else {
      // Check for partial matches using keywords
      for (let key in responses) {
          if (userMessage.includes(key)) {
              botResponse = responses[key];
              break; // Stop checking once we find a match
          }
      }
  }

  console.log("Bot response:", botResponse); // Debugging
  setTimeout(() => addMessage("Assistant", botResponse, true), 500); // Set isHtml = true for clickable links
}

function prevSlide(type) {
  let slides = document.querySelectorAll(`.${type}-slider img, .${type}-slider video`);
  let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  slides[activeIndex].classList.remove('active');
  let newIndex = (activeIndex - 1 + slides.length) % slides.length;
  slides[newIndex].classList.add('active');
}
function nextSlide(type) {
  let slides = document.querySelectorAll(`.${type}-slider img, .${type}-slider video`);
  let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  slides[activeIndex].classList.remove('active');
  let newIndex = (activeIndex + 1) % slides.length;
  slides[newIndex].classList.add('active');
}

// document.addEventListener("DOMContentLoaded", function () {
//   let wrapper = document.querySelector(".news-wrapper");
//   let items = document.querySelectorAll(".news-item");

//   // Duplicate items to make seamless scrolling
//   items.forEach(item => {
//       let clone = item.cloneNode(true);
//       wrapper.appendChild(clone);
//   });
// });
