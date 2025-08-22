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

        // Function to get property ID from URL
        function getPropertyIdFromUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            return parseInt(urlParams.get('id'));
        }

        // Function to find property by ID
        function findPropertyById(id) {
            return properties.find(property => property.id === id);
        }

        // Function to render property details
        function renderPropertyDetails(property) {
            const propertyContent = document.getElementById('propertyContent');

            if (!property) {
                propertyContent.innerHTML = `
                    <div class="container py-5 text-center">
                        <h2>Property Not Found</h2>
                        <p>The property you're looking for doesn't exist.</p>
                        <a href="index.html" class="btn btn-primary">Back to Listings</a>
                    </div>
                `;
                return;
            }

            propertyContent.innerHTML = `
                <!-- Property Hero Section -->
                <section class="property-hero">
                    <div class="container">
                        <p class="text-uppercase text-secondary fw-bold mb-2">${property.location}</p>
                        <h1 class="property-title">${property.title}</h1>
                        <p class="property-price">${property.price.toLocaleString()} BDT</p>
                        
                        <div class="property-meta">
                            <span class="property-meta-item"><i class="fas fa-bed me-2"></i> ${property.beds} Bed</span>
                            <span class="property-meta-item"><i class="fas fa-bath me-2"></i> ${property.baths} Bath</span>
                            <span class="property-meta-item"><i class="fas fa-ruler-combined me-2"></i> ${property.sqft} sqft</span>
                        </div>
                        
                        <div class="property-features">
                            <span class="property-feature">${property.type}</span>
                            <span class="property-feature">${property.category}</span>
                        </div>
                    </div>
                </section>

                <!-- Property Content -->
                <section class="container property-section">
                    <div class="row">
                        <div class="col-lg-8">
                            <h2 class="section-title mt-4">Description</h2>
                            <div class="property-description">
                                <p>${property.description}</p>
                            </div>
                            
                            <h2 class="section-title">Gallery</h2>
                            <div class="gallery">
                                <div class="gallery-item">
                                    <img src="${property.image}" alt="${property.title}" class="gallery-img">
                                </div>
                                <div class="gallery-item">
                                    <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Living Room" class="gallery-img">
                                </div>
                                
                            </div>
                            
                            <h2 class="section-title">Property Details</h2>
                            <div class="info-grid">
                                <div class="info-card">
                                    <h3 class="info-card-title">Property Type</h3>
                                    <p>${property.type}</p>
                                </div>
                                <div class="info-card">
                                    <h3 class="info-card-title">Category</h3>
                                    <p>${property.category}</p>
                                </div>
                                <div class="info-card">
                                    <h3 class="info-card-title">Bedrooms</h3>
                                    <p>${property.beds}</p>
                                </div>
                                <div class="info-card">
                                    <h3 class="info-card-title">Bathrooms</h3>
                                    <p>${property.baths}</p>
                                </div>
                                <div class="info-card">
                                    <h3 class="info-card-title">Area</h3>
                                    <p>${property.sqft} sqft</p>
                                </div>
                                <div class="info-card">
                                    <h3 class="info-card-title">Location</h3>
                                    <p>${property.location}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="agent-card">
                                <div>
                                    <a href="/contact.html" class="text-decoration-none btn-primary">
                                        <i class="fas fa-phone-alt me-2"></i> Contact US
                                    </a>
                                </div>
                            </div>
                            
                            <div class="bg-light p-4 rounded mb-4">
                                <h3 class="mb-4">Schedule a Tour</h3>
                                <div class="mb-3">
                                    <label for="tourDate" class="form-label">Select Date</label>
                                    <input type="date" class="form-control" id="tourDate">
                                </div>
                                <div class="mb-3">
                                    <label for="tourTime" class="form-label">Select Time</label>
                                    <select class="form-select" id="tourTime">
                                        <option>9:00 AM</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>1:00 PM</option>
                                        <option>2:00 PM</option>
                                        <option>3:00 PM</option>
                                        <option>4:00 PM</option>
                                    </select>
                                </div>
                                <button class="btn-primary w-100" id="scheduleTour">Schedule Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Similar Properties -->
                <section class="similar-properties">
                    <div class="container">
                        <h2 class="section-title text-center">Similar Properties</h2>
                        <div class="row" id="similarProperties">
                            <!-- Similar properties will be loaded here -->
                        </div>
                    </div>
                </section>
            `;

            // Add event listeners after rendering
            document.getElementById('scheduleTour').addEventListener('click', function () {
                const date = document.getElementById('tourDate').value;
                const time = document.getElementById('tourTime').value;

                if (!date) {
                    alert('Please select a date for your tour');
                    return;
                }

                alert(`Tour scheduled for ${date} at ${time}. We'll contact you to confirm.`);
            });

            // document.querySelector('.btn-contact').addEventListener('click', function () {
            //     alert('Connecting you with the agent...');
            // });

            // Render similar properties
            renderSimilarProperties(property.id);
        }

        // Function to render similar properties
        function renderSimilarProperties(currentPropertyId) {
            const similarPropertiesContainer = document.getElementById('similarProperties');
            if (!similarPropertiesContainer) return;

            // Filter properties from the same location, excluding the current one
            const similarProperties = properties.filter(p =>
                p.location === properties.find(prop => prop.id === currentPropertyId).location &&
                p.id !== currentPropertyId
            ).slice(0, 2);

            if (similarProperties.length === 0) {
                similarPropertiesContainer.innerHTML = `
                    <div class="col-12 text-center py-3">
                        <p>No similar properties found</p>
                    </div>
                `;
                return;
            }

            similarPropertiesContainer.innerHTML = '';

            similarProperties.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'col-md-4 border border-2 me-2';
                propertyCard.innerHTML = `
                    <div class="property-card">
                        <img src="${property.image}" class="property-img img-fluid" alt="${property.title}">
                        <div class="p-4">
                            <p class="property-location">${property.location}</p>
                            <h3>${property.title}</h3>
                            <div class="d-flex justify-content-between my-4">
                                <p><i class="fas fa-bed me-2"></i> ${property.beds} Bed</p>
                                <p><i class="fas fa-bath me-2"></i> ${property.baths} Bath</p>
                                <p><i class="fas fa-ruler-combined me-2"></i> ${property.sqft} sqft.</p>
                            </div>
                            <p class="property-price">${property.price.toLocaleString()} BDT</p>
                            <a href="property-details.html?id=${property.id}" class="btn-primary text-decoration-none">View</a>
                        </div>
                    </div>
                `;
                similarPropertiesContainer.appendChild(propertyCard);
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function () {
            const propertyId = getPropertyIdFromUrl();
            const property = findPropertyById(propertyId);
            renderPropertyDetails(property);
        });