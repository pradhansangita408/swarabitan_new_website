# Swarabitan Single Page Website

This is a responsive single-page redesign built around the live Swarabitan site's existing information architecture.

Core order preserved:
1. Hero
2. Swarabitan's Tale / Story
3. Why Swarabitan
4. Learn Music
5. Music Gifts / Referral
6. App CTA
7. FAQ
8. Footer

Additional sections added without removing the core story:
- Bengali music categories
- BOM / Beauty of Music podcast
- Daily motivation / quotes
- User testimonials
- Music gallery
- Referral rewards interaction
- Sticky mini audio player
- Responsive mobile navigation
- Scroll reveal animations

## Important production notes
- Replace demo audio at `assets/app.js` with your licensed Swarabitan audio.
- Replace CSS illustration blocks with licensed Swarabitan photographs/videos.
- The referral button is front-end only. Connect it to your real referral API/database.
- The newsletter form is front-end only. Connect it to your email service/API.
- Replace placeholder testimonial names/content with verified testimonials.
- Replace any unverified statistics with actual analytics before publishing.
- Google Play CTA currently points to:
  https://play.google.com/store/apps/details?id=com.swara

## Run
Open `index.html` in a browser or serve the folder from any static web server.

## Suggested production stack
Frontend: HTML/CSS/JavaScript or your existing PHP stack
Backend: PHP + MySQL
Media: CDN/object storage
Auth/referral: PHP API + MySQL
Analytics: GA4 / server-side analytics
