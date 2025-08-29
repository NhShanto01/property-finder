// insights.js

// Sample data for insights
const insightsData = [
    {
        id: 1,
        title: "10 Ways to Make Your Space Feel Larger",
        category: "Interior Design",
        excerpt: "Simple design tricks that can transform even the smallest apartments into spacious-feeling homes.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        author: {
            name: "Emma Wilson",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            bio: "Emma is a home improvement expert with over 10 years of experience in property renovation and design. She specializes in helping homeowners maximize their property value through strategic renovations."
        },
        date: "May 15, 2023",
        readTime: "5 min read",
        content: `<p>Making a small space feel larger is all about optical illusions and smart design choices. Here are 10 proven strategies to maximize your space:</p>
        <p>1. Use light colors: Light-colored walls and floors make a room feel more open and airy. Soft tones like off-white, light gray, and pale blue can visually expand a space.</p>
        <p>2. Strategic mirror placement: Mirrors reflect light and create the illusion of depth. Place them opposite windows or in narrow hallways to double the visual space.</p>
        <p>3. Multi-functional furniture: Invest in pieces that serve multiple purposes, like ottomans with storage, sofa beds, or drop-leaf tables.</p>
        <p>4. Vertical storage: Utilize wall space with floating shelves and tall bookcases to free up floor space.</p>
        <p>5. Consistent flooring: Using the same flooring throughout creates continuity and makes spaces feel connected and larger.</p>
        <p>6. Strategic lighting: Layer lighting with overhead fixtures, task lighting, and accent lights to eliminate dark corners that make spaces feel smaller.</p>
        <p>7. Furniture with exposed legs: Pieces that show floor space beneath them create a sense of openness.</p>
        <p>8. Minimal window treatments: Avoid heavy drapes that can make windows feel smaller. Instead, opt for sheer curtains or minimalist blinds.</p>
        <p>9. Declutter ruthlessly: Keep surfaces clear and implement smart storage solutions to reduce visual noise.</p>
        <p>10. Create zones: Use area rugs and furniture arrangement to define different areas within an open space.</p>
        <p>By implementing even a few of these strategies, you can dramatically transform how your space feels and functions.</p>`
    },
    {
        id: 2,
        title: "2023 Real Estate Market Predictions",
        category: "Market Trends",
        excerpt: "Where are property prices heading this year? Our experts analyze the current market data.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
        author: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            bio: "Michael is a market analyst with expertise in real estate trends and economic forecasting. He provides data-driven insights to help investors make informed decisions."
        },
        date: "April 28, 2023",
        readTime: "7 min read",
        content: `<p>The 2023 real estate market is showing interesting trends that both buyers and sellers should understand. After the rapid price increases of the past few years, we're seeing a market normalization.</p>
        <p>Key predictions for the remainder of 2023:</p>
        <p>1. Price stabilization: While we don't anticipate significant price drops in most markets, the rapid appreciation of recent years will slow considerably. Some markets may see slight corrections, but widespread declines are unlikely.</p>
        <p>2. Inventory increases: As mortgage rates have risen from historic lows, some markets are seeing increased inventory as demand moderates. This gives buyers more options than they've had in years.</p>
        <p>3. Continued demand in affordable markets: Secondary and tertiary markets with lower price points will continue to see strong demand as remote work enables mobility.</p>
        <p>4. Rental market pressure: With higher mortgage rates keeping some would-be buyers in rental properties, expect continued strong demand (and higher prices) in many rental markets.</p>
        <p>5. Interest rate impact: Mortgage rates will continue to be the wild card. While they've stabilized somewhat, any significant moves up or down will quickly impact buyer demand.</p>
        <p>For sellers, proper pricing and presentation will be more important than ever. For buyers, patience and preparation will be key advantages in a less frenzied market.</p>`
    },
    {
        id: 3,
        title: "Is Now the Right Time to Invest in Rental Properties?",
        category: "Investment",
        excerpt: "Analyzing ROI potential in today's market and which neighborhoods show the most promise.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
        author: {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            bio: "Sarah is a real estate investment specialist with a focus on rental properties and passive income strategies. She helps clients build wealth through strategic property investments."
        },
        date: "April 10, 2023",
        readTime: "8 min read",
        content: `<p>Rental property investment continues to be a popular wealth-building strategy, but is now a good time to enter the market? The answer depends on your goals, market, and strategy.</p>
        <p>Current market conditions present both challenges and opportunities:</p>
        <p>1. Higher acquisition costs: With increased property values and higher mortgage rates, the initial investment required is greater than in recent years.</p>
        <p>2. Strong rental demand: Despite economic uncertainties, rental demand remains strong in most markets, supporting rental rate growth.</p>
        <p>3. Long-term appreciation: Real estate has historically appreciated over time, making it a solid long-term investment despite short-term market fluctuations.</p>
        <p>Promising neighborhoods for rental investment share these characteristics:</p>
        <p>- Proximity to employment centers or universities</p>
        <p>- Growing population and job markets</p>
        <p>- Reasonable property prices relative to rental rates</p>
        <p>- Strong school districts (for family rentals)</p>
        <p>- Neighborhood revitalization efforts</p>
        <p>Before investing, carefully calculate all expenses including mortgage, taxes, insurance, maintenance, vacancies, and management costs. The 1% rule (monthly rent should be at least 1% of purchase price) is harder to achieve in today's market but remains a useful benchmark.</p>
        <p>Consider markets where home prices have moderated but rental demand remains strong. Secondary markets in the Southeast and Southwest continue to show promise for rental investors.</p>`
    },
    {
        id: 4,
        title: "Kitchen Renovation Ideas on a Budget",
        category: "Interior Design",
        excerpt: "Transform your kitchen without breaking the bank with these cost-effective renovation tips.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        author: {
            name: "David Miller",
            avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            bio: "David is a kitchen design expert with a passion for creating beautiful, functional spaces on a budget. He specializes in DIY solutions that deliver high-end results."
        },
        date: "March 22, 2023",
        readTime: "6 min read",
        content: `<p>A kitchen renovation doesn't have to cost a fortune. With strategic updates, you can achieve a fresh, updated look without a complete overhaul.</p>
        <p>Budget-friendly kitchen renovation ideas:</p>
        <p>1. Cabinet refresh: Instead of replacing cabinets, consider painting or refinishing them. New hardware (knobs and pulls) can make a dramatic difference for minimal cost.</p>
        <p>2. Countertop alternatives: While granite and quartz are popular, consider budget-friendly options like butcher block, laminate, or tile. Some modern laminates convincingly mimic more expensive materials.</p>
        <p>3. Backsplash focus: An attractive backsplash can become a focal point. Subway tile is affordable and timeless, or consider peel-and-stick options for a temporary solution.</p>
        <p>4. Lighting updates: Replace outdated fixtures with modern alternatives. Under-cabnament lighting is relatively inexpensive and adds both function and ambiance.</p>
        <p>5. Appliance updates: If your appliances are dated but functional, consider appliance paint or vinyl wraps to give them a new look. When replacement is necessary, look for scratch-and-dent or open-box deals.</p>
        <p>6. Faucet and sink: A new faucet can update the entire sink area. Consider a stylish pull-down model for both function and visual appeal.</p>
        <p>7. Open shelving: Remove some upper cabinet doors to create open shelving for display. This creates an airy feel and allows you to showcase attractive dishware.</p>
        <p>8. DIY where possible: Simple projects like painting, installing backsplash, or updating hardware can often be DIYed to save on labor costs.</p>
        <p>By focusing on high-impact, low-cost changes, you can achieve a kitchen that feels fresh and updated without the expense of a full renovation.</p>`
    },
    {
        id: 5,
        title: "Exploring the Vibrant Arts District",
        category: "Neighborhood Guides",
        excerpt: "A comprehensive guide to one of the city's most creative communities for potential home buyers.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        author: {
            name: "James Rodriguez",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            bio: "James is a neighborhood specialist with extensive knowledge of urban communities and their unique characteristics. He helps buyers find neighborhoods that match their lifestyle preferences."
        },
        date: "March 15, 2023",
        readTime: "9 min read",
        content: `<p>The Arts District has transformed from industrial warehouses to one of the city's most desirable neighborhoods, known for its creative energy, innovative dining, and unique living spaces.</p>
        <p>What makes the Arts District special:</p>
        <p>1. Historic architecture: Many of the neighborhood's industrial buildings have been converted into lofts, galleries, and creative offices, maintaining their character while adding modern amenities.</p>
        <p>2. Thriving arts scene: The neighborhood is home to dozens of galleries, studios, and performance spaces. First Friday art walks draw crowds from across the city.</p>
        <p>3. Culinary destination: The Arts District has become a food lover's paradise, with acclaimed restaurants, craft coffee shops, breweries, and specialty food markets.</p>
        <p>4. Walkable lifestyle: Unlike many parts of the city, the Arts District is highly walkable with most amenities within easy reach.</p>
        <p>5. Community feel: Despite its growth, the neighborhood maintains a strong sense of community with regular events and active neighborhood associations.</p>
        <p>Housing options range from converted lofts in historic buildings to new construction condos and apartments. Prices have risen significantly as the neighborhood has gained popularity, but still represent value compared to some adjacent areas.</p>
        <p>The neighborhood excels in walkability scores and offers good access to public transportation. Future development plans include additional green spaces and pedestrian improvements.</p>
        <p>For those considering a move to the Arts District, expect a vibrant, creative community with excellent amenities but also higher density and more activity than quieter residential neighborhoods.</p>`
    },
    {
        id: 6,
        title: "Creating the Perfect Home Office Setup",
        category: "Interior Design",
        excerpt: "With remote work becoming more common, here's how to design a productive and comfortable workspace.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
        author: {
            name: "Lisa Thompson",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            bio: "Lisa is a workspace design consultant who helps professionals create home offices that boost productivity and well-being. She combines ergonomic principles with aesthetic design."
        },
        date: "February 28, 2023",
        readTime: "7 min read",
        content: `<p>As remote work becomes increasingly common, creating an effective home office has never been more important. A well-designed workspace can significantly impact your productivity, comfort, and work-life balance.</p>
        <p>Essential elements of an effective home office:</p>
        <p>1. Dedicated space: Whenever possible, dedicate a separate room or area exclusively for work. This helps create mental separation between work and personal life.</p>
        <p>2. Proper ergonomics: Invest in a quality chair that supports good posture and a desk at the appropriate height. Your monitor should be at eye level, about an arm's length away.</p>
        <p>3. Adequate lighting: Combine ambient lighting with task lighting to reduce eye strain. Position your desk to take advantage of natural light when possible, but avoid glare on your screen.</p>
        <p>4. Technology setup: Ensure reliable internet connectivity and consider upgrades like a dual monitor setup, quality webcam, and noise-canceling headphones for video calls.</p>
        <p>5. Storage solutions: Keep your workspace organized with adequate storage for documents, supplies, and equipment. This reduces visual clutter that can be distracting.</p>
        <p>6. Personal touches: Add elements that make the space enjoyable—plants, art, or personal items—but avoid excessive decoration that might distract.</p>
        <p>7. Acoustic considerations: If your space is noisy or you take frequent calls, consider acoustic panels or a white noise machine to improve sound quality.</p>
        <p>8. Color psychology: Consider paint colors that promote focus and productivity. Blues and greens are often recommended for workspaces.</p>
        <p>Remember that everyone's needs are different. The ideal home office supports your specific work requirements while providing a comfortable, inspiring environment that helps you do your best work.</p>`
    }
];

// DOM elements
const insightsContainer = document.getElementById('insights-container');
const paginationContainer = document.getElementById('pagination-container');
const filterButtons = document.querySelectorAll('.filter-button');
const insightsListing = document.getElementById('insights-listing');
const blogDetail = document.getElementById('blog-detail');
const backButton = document.getElementById('back-button');

// Blog detail elements
const blogCategory = document.getElementById('blog-category');
const blogTitle = document.getElementById('blog-title');
const blogAuthorAvatar = document.getElementById('blog-author-avatar');
const blogAuthorName = document.getElementById('blog-author-name');
const blogDate = document.getElementById('blog-date');
const blogReadTime = document.getElementById('blog-read-time');
const blogImage = document.getElementById('blog-image');
const blogText = document.getElementById('blog-text');
const authorBioAvatar = document.getElementById('author-bio-avatar');
const authorBioName = document.getElementById('author-bio-name');
const authorBioText = document.getElementById('author-bio-text');

// State variables
let currentPage = 1;
let currentFilter = 'all';
const itemsPerPage = 3;

// Check if we're opening a specific blog from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    if (blogId) {
        // Show blog detail if ID is in URL
        showBlogDetail(parseInt(blogId));
    } else {
        // Show insights listing
        renderInsights();
        renderPagination();
    }
    setupEventListeners();
});

// Render insights based on current filter and page
function renderInsights() {
    insightsContainer.innerHTML = '';
    
    const filteredData = currentFilter === 'all' 
        ? insightsData 
        : insightsData.filter(insight => 
            insight.category.toLowerCase().replace(' ', '-') === currentFilter);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
    
    if (paginatedData.length === 0) {
        insightsContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
                <h3>No insights found</h3>
                <p>Try selecting a different filter or check back later for new content.</p>
            </div>
        `;
        return;
    }
    
    paginatedData.forEach(insight => {
        const insightElement = document.createElement('article');
        insightElement.className = 'insight-card';
        insightElement.dataset.id = insight.id;
        
        insightElement.innerHTML = `
            <div class="card-image">
                <img src="${insight.image}" alt="${insight.title}">
            </div>
            <div class="card-content">
                <span class="card-category">${insight.category}</span>
                <h3 class="card-title">${insight.title}</h3>
                <p class="card-excerpt">${insight.excerpt}</p>
                <div class="card-meta">
                    <div class="author">
                        <img src="${insight.author.avatar}" alt="${insight.author.name}" class="author-avatar">
                        <span>${insight.author.name}</span>
                    </div>
                    <span>${insight.date}</span>
                </div>
            </div>
        `;
        
        insightsContainer.appendChild(insightElement);
    });
}

// Render pagination buttons
function renderPagination() {
    paginationContainer.innerHTML = '';
    
    const filteredData = currentFilter === 'all' 
        ? insightsData 
        : insightsData.filter(insight => 
            insight.category.toLowerCase().replace(' ', '-') === currentFilter);
    
    const filteredPages = Math.ceil(filteredData.length / itemsPerPage);
    
    if (filteredPages <= 1) return;
    
    // Previous button
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.className = 'pagination-button';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderInsights();
            renderPagination();
            window.scrollTo({ top: insightsContainer.offsetTop - 100, behavior: 'smooth' });
        });
        paginationContainer.appendChild(prevButton);
    }
    
    // Page number buttons
    for (let i = 1; i <= filteredPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderInsights();
            renderPagination();
            window.scrollTo({ top: insightsContainer.offsetTop - 100, behavior: 'smooth' });
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Next button
    if (currentPage < filteredPages) {
        const nextButton = document.createElement('button');
        nextButton.className = 'pagination-button';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderInsights();
            renderPagination();
            window.scrollTo({ top: insightsContainer.offsetTop - 100, behavior: 'smooth' });
        });
        paginationContainer.appendChild(nextButton);
    }
}

// Show blog detail view
function showBlogDetail(insightId) {
    const insight = insightsData.find(item => item.id === insightId);
    
    if (!insight) {
        // If blog not found, redirect to insights listing
        window.location.href = 'insights.html';
        return;
    }
    
    // Hide insights listing and show blog detail
    insightsListing.style.display = 'none';
    blogDetail.style.display = 'block';
    
    // Populate blog detail content
    blogCategory.textContent = insight.category;
    blogTitle.textContent = insight.title;
    blogAuthorAvatar.src = insight.author.avatar;
    blogAuthorAvatar.alt = insight.author.name;
    blogAuthorName.textContent = insight.author.name;
    blogDate.textContent = insight.date;
    blogReadTime.textContent = insight.readTime;
    blogImage.src = insight.image;
    blogImage.alt = insight.title;
    blogText.innerHTML = insight.content;
    
    // Populate author bio
    authorBioAvatar.src = insight.author.avatar;
    authorBioAvatar.alt = insight.author.name;
    authorBioName.textContent = `About ${insight.author.name}`;
    authorBioText.textContent = insight.author.bio;
    
    // Update URL without reloading the page
    const newUrl = `${window.location.pathname}?id=${insightId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Go back to insights listing
function goBackToListing() {
    insightsListing.style.display = 'block';
    blogDetail.style.display = 'none';
    
    // Update URL without reloading the page
    const newUrl = window.location.pathname;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter and reset to page 1
            currentFilter = this.dataset.filter;
            currentPage = 1;
            
            // Re-render insights and pagination
            renderInsights();
            renderPagination();
        });
    });
    
    // Insight card clicks
    insightsContainer.addEventListener('click', function(e) {
        const card = e.target.closest('.insight-card');
        if (card) {
            const insightId = parseInt(card.dataset.id);
            showBlogDetail(insightId);
        }
    });
    
    // Back button
    backButton.addEventListener('click', goBackToListing);
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');
        
        if (blogId) {
            showBlogDetail(parseInt(blogId));
        } else {
            goBackToListing();
        }
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Here you would typically send the email to your server
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}