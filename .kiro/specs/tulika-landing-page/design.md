# Design Document

## Overview

This design document outlines the technical approach for building Tulika Dutta's new landing page. The page will be constructed using existing assets and design patterns, with new custom code isolated in dedicated files. The design follows the provided wireframe while maintaining consistency with the current website's theme and functionality.

## Architecture

### File Structure
```
├── index-new.html (modified)
├── assets/
│   ├── css/
│   │   ├── style-new.css (new)
│   │   └── [existing CSS files - unchanged]
│   └── js/
│       ├── script-new.js (new)
│       └── [existing JS files - unchanged]
```

### Design Principles
- **Consistency**: Use existing color scheme (#253B2F green theme)
- **Reusability**: Leverage existing carousel and accordion components
- **Maintainability**: Isolate new code in separate files
- **Responsiveness**: Ensure mobile-first responsive design
- **Performance**: Reuse existing assets to minimize load time

## Components and Interfaces

### 1. About Section
**Layout**: L-shaped design as per wireframe
**Components**:
- Hero text area (left side of L)
- Image/visual element (right side of L)
- Professional description content
- Call-to-action button

**CSS Classes**:
```css
.about-section-new
.about-content-wrapper
.about-text-area
.about-visual-area
.about-cta-button
```

### 2. Services Carousel
**Component**: Swiper carousel using existing swiper-bundle.min.js
**Features**:
- Multiple service cards
- Navigation arrows
- Pagination dots
- Responsive breakpoints

**HTML Structure**:
```html
<div class="swiper services-swiper-new">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Service Card</div>
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
```

### 3. Case Studies Carousel
**Component**: Swiper carousel with green card design
**Features**:
- Green rectangular cards (#253B2F)
- Success metrics display
- Client story highlights
- Responsive grid within carousel

### 4. Testimonials Carousel
**Component**: Swiper carousel for client feedback
**Features**:
- Client photo and name
- Review text
- Rating display (optional)
- Auto-play functionality

### 5. Certificates Carousel
**Component**: Swiper carousel for credentials
**Features**:
- Certificate images/thumbnails
- Institution names
- Achievement dates
- Professional descriptions

### 6. FAQ Accordion
**Component**: Bootstrap accordion (existing pattern)
**Reference**: "child_growth_accordian" from services.html
**Features**:
- Expandable/collapsible sections
- Smooth transitions
- Consistent styling with existing theme

**HTML Structure** (based on existing pattern):
```html
<div class="accordion faq-accordion-new" id="faqAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
        Question Text
      </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse">
      <div class="accordion-body">Answer Text</div>
    </div>
  </div>
</div>
```

### 7. Blog Carousel
**Component**: Swiper carousel with green cards
**Features**:
- Blog post thumbnails
- Title and excerpt
- Publication date
- Read more links

### 8. Contact Form
**Component**: Standard form with existing styling
**Features**:
- Name, email, phone, message fields
- Form validation
- Submit button with existing button styling
- Success/error feedback

## Content Structure

### Static HTML Content
All content will be hardcoded directly in HTML with no dynamic data generation:

- **Services**: Static HTML cards with fixed content
- **Case Studies**: Static HTML cards with sample success stories
- **Testimonials**: Static HTML cards with sample client reviews
- **Certificates**: Static HTML cards with sample credentials
- **FAQ**: Static HTML accordion with sample questions/answers
- **Blog**: Static HTML cards with sample blog posts
- **Contact Form**: Static HTML form fields (display only)

## Error Handling

### Carousel Initialization
- Check if swiper-bundle.min.js is loaded
- Fallback to static grid if carousel fails
- Console error logging for debugging

### Form Display
- **Static Form Only**: Contact form for visual prototype only
- **No Validation**: Form fields for display purposes
- **No Processing**: No actual form submission functionality
- **Styling Focus**: Emphasis on visual design and layout

### Image Loading
- Lazy loading for carousel images
- Fallback placeholder images
- Alt text for accessibility

## Testing Strategy

### Component Testing
1. **Carousel Functionality**
   - Test navigation controls
   - Verify responsive behavior
   - Check auto-play features
   - Validate touch/swipe gestures

2. **Accordion Functionality**
   - Test expand/collapse behavior
   - Verify smooth transitions
   - Check keyboard navigation
   - Validate ARIA attributes

3. **Form Functionality**
   - Test field validation
   - Verify submission process
   - Check error handling
   - Validate success feedback

### Responsive Testing
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Testing
- Page load speed
- Carousel smooth transitions
- Image optimization
- CSS/JS minification impact

## Implementation Phases

### Phase 1: Setup and About Section
1. Create style-new.css and script-new.js files
2. Link new files to index-new.html
3. Implement About section with L-shaped layout
4. Test responsive behavior

### Phase 2: Carousel Sections
1. Implement Services carousel
2. Implement Case Studies carousel
3. Implement Certificates carousel
4. Implement Testimonials carousel
5. Implement Blog carousel

### Phase 3: Static Components
1. Implement FAQ accordion (display only)
2. Implement Contact form (static prototype)
3. Add basic CSS animations and transitions

### Phase 4: Polish and Optimization
1. Fine-tune responsive design
2. Add animations and transitions
3. Optimize performance
4. Cross-browser testing
5. Accessibility improvements

## Technical Specifications

### CSS Methodology
- **External CSS Only**: All styles in style-new.css file, no inline styles
- **Static HTML Content**: All text and content hardcoded in HTML
- **Bootstrap Integration**: Use existing Bootstrap classes where possible
- **BEM Naming**: Follow BEM convention for new custom classes
- **Prototype Approach**: Focus on visual presentation, not functionality

### JavaScript Approach
- **Minimal JS Usage**: Only for carousel initialization and basic animations
- **No Dynamic Content**: All content will be static HTML, no JS-generated elements
- **No Inline Scripts**: All JavaScript code in script-new.js file only
- **Prototype Focus**: Simple carousel initialization and existing animation library usage
- **No Form Processing**: Contact form for display only (prototype)

### Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small devices */ }
@media (min-width: 768px) { /* Medium devices */ }
@media (min-width: 992px) { /* Large devices */ }
@media (min-width: 1200px) { /* Extra large devices */ }
```

### Color Scheme Implementation
```css
:root {
  --primary-green: #253B2F;
  --light-green-bg: #EEF0E5;
  --gradient-start: #086cf4;
  --gradient-end: #01f3b0;
  --light-gray: #EDEDED;
  --white: #fff;
}
```

This design ensures a systematic approach to building the landing page while maintaining consistency with existing patterns and providing a clear roadmap for implementation.