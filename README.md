# N7 Digital Banking Platform

This is assignment submission by Aaditya Basisth.


## Project Structure & Components

We've adopted a highly modular architecture for this project. Instead of building monolithic pages, we've broken down the interface into focused, reusable pieces. Each section of the page is a component.

Here are the core components that make up the page (located in `src/components/`):
- **Header & Footer:** The navigation and bottom links.
- **Hero:** The main introductory section.
- **Solutions, CloudBanking, EfficientBanking, DigitalBanking:** Sections detailing our core offerings.
- **Insights & CaseStudies:** Areas showcasing our knowledge and past successes.
- **CtaSection:** The final call-to-action block.

By building parts of the page as individual components, the codebase is much easier to maintain, scale, and understand.

## Smooth Scrolling & Animations

To make the user experience feel premium and fluid, we've integrated two awesome libraries:
- **[Lenis Scroll](https://lenis.studiofreight.com/):** This handles the smooth scrolling experience, replacing the clunky default browser scroll with something buttery smooth. 
- **[Framer Motion](https://www.framer.com/motion/):** We use this to bring our components to life with dynamic, interactive animations.

##  Design & Aesthetics

All the text, spacing, and color details you see are extracted directly from our **Figma** designs. We wanted to make sure the final product looks exactly as the figma design provided.
The website is responsive across various devices.

---

*To run the project locally, just run `npm install` followed by `npm run dev`.*
