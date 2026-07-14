---
name: Aurelian Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ffe2ab'
  on-secondary: '#402d00'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#ffc293'
  on-tertiary: '#4d2600'
  tertiary-container: '#ff9b3f'
  on-tertiary-container: '#6c3800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 2rem
  margin-mobile: 1.5rem
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

This design system embodies the essence of high-end gastronomy—an environment where precision meets passion. The visual language is rooted in **Minimalism** with **Tactile** accents, focusing on cinematic food photography and high-contrast typography to evoke an atmosphere of exclusivity and warmth.

The target audience consists of discerning diners seeking more than just a meal, but a curated experience. The interface should feel like a well-tailored tuxedo: sharp, expensive, and understated. By utilizing deep, light-absorbing backgrounds and metallic accents, the UI recedes to allow the vibrant colors of the cuisine to take center stage.

## Colors

The palette is designed to mimic the lighting of a candlelit dining room. 

- **Foundation:** The deep charcoal background (#0D0D0D) provides a sense of infinite depth, reducing visual noise and emphasizing luxury.
- **Accents:** Warm Gold (#D4AF37) is used for structural flourishes and high-level branding, while Amber (#FFBF00) serves as the primary interactive signal.
- **Highlights:** Soft Orange (#FF8C00) is reserved for micro-interactions and critical calls to action to simulate the glow of an ember.
- **Contrast:** Cream (#F5F5F5) ensures optimal legibility against the dark void, appearing softer and more premium than a clinical pure white.

## Typography

The typography strategy relies on the tension between the classic elegance of **Playfair Display** and the modern, geometric clarity of **Montserrat**.

- **Headlines:** Use Playfair Display for all editorial content and section headers. Its high-contrast strokes and delicate serifs communicate heritage and craftsmanship.
- **Body:** Montserrat is utilized for its exceptional legibility at smaller scales. A generous line-height (1.6 to 1.8) is mandated to prevent dense blocks of text, maintaining the system's "breathable" luxury.
- **Labels:** Small caps with increased letter spacing are used for navigation and metadata to add an institutional, authoritative feel.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop and a fluid, single-column model for mobile.

- **Desktop:** A 12-column grid with a maximum container width of 1200px. High-end design is defined by "The Luxury of Space"—accordingly, vertical gaps between sections are aggressive (8rem) to force focus on one piece of content at a time.
- **Photography:** Images should frequently break the grid or utilize asymmetrical placement to mimic the plating of fine food.
- **Rhythm:** Use an 8px base unit for all micro-spacing. Component internal padding should favor the larger side of the scale to maintain a relaxed, unhurried user flow.

## Elevation & Depth

In a dark UI, traditional shadows are ineffective. Depth is instead conveyed through **Tonal Layering** and **Subtle Outlines**.

- **Base Level:** The background (#0D0D0D).
- **Surface Level:** Cards and containers use a slightly lightened charcoal (#1A1A1A) to distinguish themselves from the void.
- **Defining Edges:** Use 1px borders with low opacity (10-15%) Gold or Amber to define the silhouette of elements. 
- **Active States:** Interactive elements may use a soft "glow" (outer glow with the primary accent color at 5-10% opacity) to suggest light radiating from the element onto the table surface.

## Shapes

The shape language balances architectural rigidity with organic softness. 

- **Containers:** Cards and primary sections utilize a **Rounded (0.5rem)** corner radius, providing a modern touch without appearing overly "bubbly."
- **Interactive Elements:** Buttons and form fields follow the same radius to ensure a cohesive visual family.
- **Imagery:** Food photography should always have crisp edges or very subtle rounding, allowing the organic shapes within the photo to provide the contrast.

## Components

### Buttons
- **Primary:** Solid Amber (#FFBF00) background with dark text. 0.5rem radius. Transitions should be slow (300ms) to reflect a deliberate, premium experience.
- **Secondary:** Transparent background with a 1px Gold (#D4AF37) outline. 
- **Hover:** Primary buttons should deepen in color; secondary buttons should fill with a subtle gold tint.

### Cards
- Minimalist containers with a 1px border (#D4AF37, 20% opacity).
- High-quality image focus occupying the top 60% of the card.
- Text content is center-aligned with generous bottom padding.

### Input Fields
- Underlined style or subtle dark-grey fill.
- Focus state is indicated by the underline turning Gold.
- Placeholder text in a muted grey-gold to maintain the warm theme.

### Lists & Menus
- Menu items use Playfair Display for the dish name and Montserrat for the description.
- Prices are styled with the "label-caps" token, placed as a right-aligned flourish.