//JS for Navbar 

// This variable tracks if the user is "signed in"
  let signedIn = false;

  // Example: after user signs in, set signedIn to true
  function signInUser() {
    signedIn = true;
    alert("You are now signed in!");
    // hide the Sign-In button
    document.getElementById('signInLink').style.display = 'none';
  }


  //JS for Property Listings
const properties = [
    {
      id: 1,
      title: "Noor E Garden",
      location: "Uttara",
      type: "House",
      category: "For Sale",
      beds: 4,
      baths: 3,
      sqft: 2000,
      price: 22500,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "This beautiful house in Uttara features 4 bedrooms and 3 bathrooms with modern amenities. The property includes a spacious living area, modern kitchen, and a lovely garden. Perfect for families looking for comfort and style in a prime location."
    },
    {
      id: 2,
      title: "Willow Cottage",
      location: "Ashulia",
      type: "Cottage",
      category: "For Sale",
      beds: 4,
      baths: 3,
      sqft: 1800,
      price: 18500,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Charming cottage in Ashulia with 4 bedrooms and 3 bathrooms. Features a cozy living space, fireplace, and beautiful outdoor area. Ideal for those seeking a peaceful retreat with modern conveniences."
    },
    {
      id: 3,
      title: "Sunset Villa",
      location: "Gulshan",
      type: "House",
      category: "For Sale",
      beds: 3,
      baths: 2,
      sqft: 1500,
      price: 27500,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Elegant villa in the heart of Gulshan with 3 bedrooms and 2 bathrooms. Features premium finishes, a modern kitchen, and a rooftop terrace with stunning sunset views. Perfect for urban living with a touch of luxury."
    },
    {
        id: 5,
        title: "The NEO",
        location: "Uttara",
        type: "Apartment",
        category: "For Rent",
        beds: 4,
        baths: 4,
        sqft: 2500,
        price: 34500,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Modern luxury apartment in Uttara with 4 bedrooms and 4 bathrooms. Features floor-to-ceiling windows, high-end appliances, and access to building amenities including pool and gym. Perfect for executive living."
    },
    {
        id: 9,
        title: "Pineview Residences",
        location: "Uttara",
        type: "Apartment",
        category: "For Rent",
        beds: 3,
        baths: 2,
        sqft: 1200,
        price: 16500,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Modern apartment in Uttara with 3 bedrooms and 2 bathrooms. Features a spacious balcony, modern kitchen appliances, and 24/7 security. Great rental option for professionals or small families."
    },
  ];

  const container = document.getElementById("propertyContainer");
  const tabs = document.querySelectorAll("#propertyTab .nav-link");

  // Render cards dynamically
  function renderProperties(filter = "All") {
    container.innerHTML = "";
    const filtered = filter === "All" ? properties : properties.filter(p => p.category === filter);

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-12 text-center"><p>No properties found for ${filter}</p></div>`;
      return;
    }

    filtered.forEach(p => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card property-card h-100 shadow-sm">
            <img src="${p.image}" class="card-img-top" alt="${p.title}">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <p class="text-muted"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
              <div class="property-details d-flex justify-content-between mb-2">
                <span><i class="fas fa-bed"></i> ${p.beds} Beds</span>
                <span><i class="fas fa-bath"></i> ${p.baths} Baths</span>
                <span><i class="fas fa-ruler-combined"></i> ${p.sqft} sqft</span>
              </div>
              <p class="fw-bold">BDT ${p.price.toLocaleString()}</p>
              <p class="small text-muted">${p.description.substring(0,100)}...</p>
            </div>
            <div class="card-footer bg-transparent">
              <a href="#" class="btn btn-primary w-100">View Property</a>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Initial load
  renderProperties();

  // Tab click events
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProperties(tab.dataset.category);
    });
  });

// Review Slider
  const autoplayMs = 3500; // mobile autoplay interval
    const mobileQuery = '(max-width: 575.98px)';

    // ====== Elements ======
    const slider = document.getElementById('testimonialSlider');
    const track  = slider.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    // ====== State ======
    let index = 0;
    let itemsPerView = getItemsPerView();
    let slideWidthPx = computeSlideWidth();
    let autoTimer = null;

    // ====== Helpers ======
    function getItemsPerView() {
      // read CSS var --ipv from .slider
      const ipv = getComputedStyle(slider).getPropertyValue('--ipv').trim();
      const n = parseFloat(ipv) || 1;
      return Math.max(1, Math.min(3, n));
    }

    function computeSlideWidth() {
      // width of ONE step = visible width / itemsPerView
      const visibleWidth = slider.clientWidth;
      return visibleWidth / itemsPerView;
    }

    function updateTransform() {
      // infinite wrap
      const maxIndex = slides.length - 1;
      if (index < 0) index = slides.length - 1;
      if (index > maxIndex) index = 0;

      track.style.transform = `translateX(${-index * slideWidthPx}px)`;
    }

    function next() { index += 1; updateTransform(); }
    function prev() { index -= 1; updateTransform(); }

    function isMobile() {
      return window.matchMedia(mobileQuery).matches;
    }

    function startAutoplayIfMobile() {
      stopAutoplay();
      if (isMobile()) {
        autoTimer = setInterval(next, autoplayMs);
      }
    }
    function stopAutoplay() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    // ====== Event bindings ======
    btnNext.addEventListener('click', () => { next(); if (isMobile()) startAutoplayIfMobile(); });
    btnPrev.addEventListener('click', () => { prev(); if (isMobile()) startAutoplayIfMobile(); });

    // Pause/resume on touch (mobile UX)
    track.addEventListener('touchstart', stopAutoplay, { passive: true });
    track.addEventListener('touchend',   startAutoplayIfMobile, { passive: true });

    // Recompute on resize/orientation change
    window.addEventListener('resize', () => {
      const newIpv = getItemsPerView();
      if (newIpv !== itemsPerView) {
        itemsPerView = newIpv;
      }
      slideWidthPx = computeSlideWidth();
      updateTransform();
      startAutoplayIfMobile();
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });

    // ====== Init ======
    slideWidthPx = computeSlideWidth();
    updateTransform();
    startAutoplayIfMobile();
