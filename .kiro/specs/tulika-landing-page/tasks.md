# Implementation Plan

-   [x] 1. Project Setup and File Structure

    -   Create new CSS file (assets/css/style-new.css) with basic structure and color variables
    -   Create new JavaScript file (assets/js/script-new.js) with minimal carousel initialization
    -   Link new files to index-new.html without modifying existing links
    -   _Requirements: 9.1, 9.2, 9.3_

-   [x] 2. About Section Implementation

    -   [x] 2.1 Create About section HTML structure with L-shaped layout

        -   Build HTML markup for About section following wireframe L-shape design
        -   Add semantic HTML elements (section, div, h2, p) with proper class names
        -   Include placeholder content about Tulika Dutta's nutrition expertise
        -   _Requirements: 1.1, 1.3_

    -   [x] 2.2 Style About section with CSS

        -   Implement L-shaped layout using CSS Grid or Flexbox
        -   Apply existing color scheme (#253B2F) and typography
        -   Ensure responsive design across all device sizes
        -   Add hover effects and transitions using existing animation patterns
        -   _Requirements: 1.2, 1.4, 1.5_

-   [x] 3. Services Carousel Implementation










    -   [x] 3.1 Create Services carousel HTML structure



        -   Build Swiper carousel HTML markup with service cards
        -   Add static content for nutrition services (Child Growth, Meal Planning, etc.)
        -   Include carousel navigation elements (arrows, pagination)
        -   _Requirements: 2.1, 2.2_



    -   [ ] 3.2 Style Services carousel and initialize functionality
        -   Apply CSS styling consistent with existing carousel patterns
        -   Initialize Swiper carousel in script-new.js with basic configuration
        -   Ensure responsive behavior and proper card spacing
        -   _Requirements: 2.3, 2.4, 2.5_

-   [ ] 4. Case Studies Carousel Implementation

    -   [ ] 4.1 Create Case Studies carousel HTML structure

        -   Build Swiper carousel with green rectangular cards
        -   Add static success story content and metrics
        -   Include carousel navigation controls
        -   _Requirements: 3.1, 3.3_

    -   [ ] 4.2 Style Case Studies carousel with green theme
        -   Apply #253B2F green color scheme to cards
        -   Style carousel with existing design patterns
        -   Implement responsive carousel behavior
        -   _Requirements: 3.2, 3.4, 3.5_

-   [ ] 5. Testimonials Carousel Implementation

    -   [ ] 5.1 Create Testimonials carousel HTML structure

        -   Build Swiper carousel for client feedback display
        -   Add static testimonial content with client names and reviews
        -   Include carousel navigation and pagination
        -   _Requirements: 4.1, 4.2_

    -   [ ] 5.2 Style Testimonials carousel
        -   Apply existing theme styling to testimonial cards
        -   Configure smooth carousel transitions
        -   Ensure responsive design across devices
        -   _Requirements: 4.3, 4.4, 4.5_

-   [ ] 6. Certificates Carousel Implementation

    -   [ ] 6.1 Create Certificates carousel HTML structure

        -   Build Swiper carousel for professional credentials display
        -   Add static certificate content with institution names and dates
        -   Include carousel navigation controls
        -   _Requirements: 5.1, 5.2_

    -   [ ] 6.2 Style Certificates carousel
        -   Apply consistent styling with existing carousel patterns
        -   Implement responsive carousel behavior
        -   Style certificate cards professionally
        -   _Requirements: 5.3, 5.4, 5.5_

-   [ ] 7. FAQ Accordion Implementation

    -   [ ] 7.1 Create FAQ accordion HTML structure

        -   Build Bootstrap accordion using existing "child_growth_accordian" pattern
        -   Add static FAQ content relevant to nutrition and wellness
        -   Include proper accordion item structure with headers and bodies
        -   _Requirements: 6.1, 6.2_

    -   [ ] 7.2 Style FAQ accordion
        -   Apply existing accordion styling and theme consistency
        -   Ensure smooth expand/collapse transitions
        -   Style according to existing accordion patterns from services page
        -   _Requirements: 6.3, 6.4, 6.5_

-   [ ] 8. Blog Carousel Implementation

    -   [ ] 8.1 Create Blog carousel HTML structure

        -   Build Swiper carousel with green rectangular cards for blog posts
        -   Add static blog post content with titles and descriptions
        -   Include carousel navigation controls
        -   _Requirements: 7.1, 7.3_

    -   [ ] 8.2 Style Blog carousel with green theme
        -   Apply #253B2F green color scheme to blog cards
        -   Implement responsive carousel behavior
        -   Style blog cards with existing design patterns
        -   _Requirements: 7.2, 7.4, 7.5_

-   [ ] 9. Contact Form Implementation

    -   [ ] 9.1 Create Contact Form HTML structure

        -   Build static contact form with essential fields (name, email, phone, message)
        -   Use existing form styling patterns from current website
        -   Include form labels and proper semantic structure
        -   _Requirements: 8.1, 8.2_

    -   [ ] 9.2 Style Contact Form
        -   Apply existing form styling and theme consistency
        -   Ensure responsive design and accessibility
        -   Style form as display prototype (no functionality required)
        -   _Requirements: 8.3, 8.4, 8.5_

-   [ ] 10. Final Integration and Polish

    -   [ ] 10.1 Integrate all sections into cohesive landing page

        -   Ensure proper section spacing and flow
        -   Verify all carousels are properly initialized
        -   Test accordion functionality with existing Bootstrap behavior
        -   _Requirements: 10.1, 10.3_

    -   [ ] 10.2 Responsive design optimization and testing
        -   Test all sections across desktop, tablet, and mobile devices
        -   Optimize carousel responsive breakpoints
        -   Ensure proper accessibility with ARIA labels
        -   Verify performance with existing animation libraries
        -   _Requirements: 10.2, 10.4, 10.5_
