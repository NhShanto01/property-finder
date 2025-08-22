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
];

  function renderProperties(properties) {
    const propertyListings = document.getElementById('propertyListings');
    propertyListings.innerHTML = '';

    properties.forEach(property => {
      const propertyCard = document.createElement('div');
      propertyCard.className = 'property-card';
      propertyCard.innerHTML = `
        <img src="${property.image}" class="property-img" alt="${property.title}">
        <div class="p-4">
          <p class="property-location">${property.location}</p>
          <h3>${property.title}</h3>
          <div class="d-flex justify-content-between my-4">
            <p><i class="fas fa-bed me-2"></i> ${property.beds} Bed</p>
            <p><i class="fas fa-bath me-2"></i> ${property.baths} Bath</p>
            <p><i class="fas fa-ruler-combined me-2"></i> ${property.sqft} sqft.</p>
          </div>
          <p class="property-price">${property.price.toLocaleString()} BDT</p>
          <button class="btn btn-primary">View</button>
        </div>
      `;
      propertyListings.appendChild(propertyCard);
    });
  }
