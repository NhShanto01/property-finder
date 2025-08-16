
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
        id: 4,
        title: "Estates",
        location: "Mirpur",
        type: "House",
        category: "For Sale",
        beds: 3,
        baths: 2,
        sqft: 1300,
        price: 20500,
        image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Spacious family home in Mirpur with 3 bedrooms and 2 bathrooms. Features a large living area, modern kitchen, and private backyard. Excellent location near schools and shopping centers."
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
        id: 6,
        title: "The Arbors at Brookstone",
        location: "Bashundhara",
        type: "House",
        category: "For Sale",
        beds: 6,
        baths: 4,
        sqft: 3400,
        price: 55500,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxurious property in Bashundhara with 6 bedrooms and 4 bathrooms. This exquisite home features high-end finishes, a gourmet kitchen, and beautiful outdoor spaces. Perfect for large families or those who love to entertain."
    },
    {
        id: 7,
        title: "The Meadows at Riverbend",
        location: "Bashundhara",
        type: "House",
        category: "For Sale",
        beds: 4,
        baths: 4,
        sqft: 2600,
        price: 35500,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Stunning contemporary home in Bashundhara with 4 bedrooms and 4 bathrooms. Features an open floor plan, smart home technology, and a beautiful backyard with a patio. Located in a quiet, family-friendly neighborhood."
    },
    {
        id: 8,
        title: "Greenwood Manor",
        location: "Gazipur",
        type: "House",
        category: "For Sale",
        beds: 3,
        baths: 2,
        sqft: 1000,
        price: 12500,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Charming family home in Gazipur with 3 bedrooms and 2 bathrooms. Features a cozy living room, functional kitchen, and small garden. Great value for first-time home buyers or small families."
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
    {
        id: 10,
        title: "Maple Ridge Villas",
        location: "Ashulia",
        type: "Villas",
        category: "For Sale",
        beds: 5,
        baths: 4,
        sqft: 3400,
        price: 25500,
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxury villas in Ashulia with 5 bedrooms and 4 bathrooms. Each villa features a private garden, modern interiors, and premium finishes. Part of a gated community with excellent amenities."
    },
    {
        id: 11,
        title: "Parkside Retreat",
        location: "Dhanmondi",
        type: "House",
        category: "For Sale",
        beds: 3,
        baths: 2,
        sqft: 1600,
        price: 31500,
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Beautiful home in Dhanmondi with 3 bedrooms and 2 bathrooms. Features a modern design, large windows for natural light, and proximity to Dhanmondi Lake. Ideal for those who want urban living with green spaces nearby."
    }
];

// Function to render properties based on filters
function renderProperties(filters = {}) {
    const propertyListings = document.getElementById('propertyListings');
    propertyListings.innerHTML = '';

    // Filter properties
    let filteredProperties = properties.filter(property => {
        let match = true;

        // Location filter
        if (filters.location && property.location.toLowerCase() !== filters.location.toLowerCase()) {
            match = false;
        }

        // Type filter
        if (filters.type && property.type.toLowerCase() !== filters.type.toLowerCase()) {
            match = false;
        }

        // Category filter
        if (filters.category && property.category.toLowerCase() !== filters.category.toLowerCase()) {
            match = false;
        }

        // Search filter
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            const propertyText = (
                property.title.toLowerCase() +
                property.location.toLowerCase() +
                property.type.toLowerCase() +
                property.category.toLowerCase()
            );
            if (!propertyText.includes(searchTerm)) {
                match = false;
            }
        }

        return match;
    });

    // Render filtered properties
    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'col-md-4';
       
        propertyCard.innerHTML = `
    <div class="property-card">
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
            <a href="property-details.html?id=${property.id}" class="btn btn-primary">View</a>
        </div>
    </div>
`;


        // propertyCard.innerHTML = `
        //             <div class="property-card">
        //                 <img src="${property.image}" class="property-img" alt="${property.title}">
        //                 <div class="p-4">
        //                     <p class="property-location">${property.location}</p>
        //                     <h3>${property.title}</h3>
        //                     <div class="d-flex justify-content-between my-4">
        //                         <p><i class="fas fa-bed me-2"></i> ${property.beds} Bed</p>
        //                         <p><i class="fas fa-bath me-2"></i> ${property.baths} Bath</p>
        //                         <p><i class="fas fa-ruler-combined me-2"></i> ${property.sqft} sqft.</p>


        //                     </div>
        //                     <p class="property-price">${property.price.toLocaleString()} BDT</p>
        //                     <button class="btn btn-primary">View</button>
        //                 </div>
        //             </div>
        //         `;

        propertyListings.appendChild(propertyCard);
    });

    // If no properties match the filters
    if (filteredProperties.length === 0) {
        propertyListings.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <h3>No properties found matching your criteria</h3>
                        <p>Try adjusting your filters or search term</p>
                    </div>
                `;
    }
}

// Initial render
renderProperties();

// Filter event listeners
document.getElementById('locationFilter').addEventListener('change', function () {
    const filters = {
        location: this.value,
        type: document.getElementById('typeFilter').value,
        category: document.getElementById('categoryFilter').value,
        search: document.getElementById('searchInput').value
    };
    renderProperties(filters);
});

document.getElementById('typeFilter').addEventListener('change', function () {
    const filters = {
        location: document.getElementById('locationFilter').value,
        type: this.value,
        category: document.getElementById('categoryFilter').value,
        search: document.getElementById('searchInput').value
    };
    renderProperties(filters);
});

document.getElementById('categoryFilter').addEventListener('change', function () {
    const filters = {
        location: document.getElementById('locationFilter').value,
        type: document.getElementById('typeFilter').value,
        category: this.value,
        search: document.getElementById('searchInput').value
    };
    renderProperties(filters);
});

// Search functionality
document.getElementById('searchButton').addEventListener('click', function () {
    const filters = {
        location: document.getElementById('locationFilter').value,
        type: document.getElementById('typeFilter').value,
        category: document.getElementById('categoryFilter').value,
        search: document.getElementById('searchInput').value
    };
    renderProperties(filters);
});

// Allow Enter key to trigger search
document.getElementById('searchInput').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        const filters = {
            location: document.getElementById('locationFilter').value,
            type: document.getElementById('typeFilter').value,
            category: document.getElementById('categoryFilter').value,
            search: this.value
        };
        renderProperties(filters);
    }
});
