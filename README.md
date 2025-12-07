# 🎬 StreamFlix - Premium Streaming Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, feature-rich streaming platform interface inspired by Netflix, built with vanilla HTML, CSS, and JavaScript. StreamFlix offers an immersive user experience with dynamic carousels, web series management, and responsive design.

![StreamFlix Preview](https://via.placeholder.com/1200x600/0a0a0a/e50914?text=StreamFlix+Premium+Streaming)

## ✨ Features

### 🎯 Core Features
- **Dynamic Hero Carousel**: Interactive movie/series carousel with smooth transitions and vertical/horizontal navigation
- **Continue Watching**: Track viewing progress with visual progress bars
- **Web Series Management**: Comprehensive episode listing with season navigation
- **Advanced Search**: Real-time search with dynamic results and filtering
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **User Authentication**: Complete login/register system with form validation
- **Category Browsing**: Organized content by genres and categories

### 🎨 UI/UX Features
- Smooth animations and transitions
- Glassmorphism effects
- Neon glow accents
- Dark theme optimized for viewing
- Hover effects and interactive elements
- Mobile-friendly hamburger menu
- Custom scrollbars
- Back-to-top button

### 📺 Content Sections
- **Hero Section**: Featured content with auto-rotating carousel
- **Continue Watching**: Resume your viewing experience
- **Upcoming Movies**: Preview upcoming releases
- **Top 10 Movies**: Trending content rankings
- **Browse Categories**: Explore by genre
- **Web Series Hub**: Detailed episode guides with season selection
- **Live TV Channels**: Stream live content
- **Trending Now**: Daily, weekly, and monthly trends
- **Suggested For You**: Personalized recommendations

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for customization)
- Text editor or IDE (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayMondal45/streamflix.git
   cd streamflix
   ```

2. **Project Structure**
   ```
   streamflix/
   ├── index.html          # Main homepage
   ├── login.html          # Login page
   ├── register.html       # Registration page
   ├── style.css           # Main stylesheet
   ├── script.js           # Core JavaScript functionality
   └── img/                # Image assets folder
       ├── Game_of_Thrones.jpg
       ├── stranger.jpg
       ├── breaking_bad.jpg
       ├── intersteller.jpg
       ├── dark.jpg
       └── the_dark_knight.jpg
   ```

3. **Add Required Images**
   
   Place hero background images in the `img/` folder with the following names:
   - `Game_of_Thrones.jpg`
   - `stranger.jpg`
   - `breaking_bad.jpg`
   - `intersteller.jpg`
   - `dark.jpg`
   - `the_dark_knight.jpg`

4. **Launch the Application**
   
   Simply open `index.html` in your web browser:
   ```bash
   # Using default browser
   open index.html
   
   # Or using a local server (recommended)
   python -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

## 📖 Usage Guide

### Navigation
- **Desktop**: Use the top navigation bar to browse sections
- **Mobile**: Access the hamburger menu for full navigation
- **Search**: Click the search icon to find movies and series
- **User Profile**: Access profile, settings, and logout options

### Carousel Controls
- **Desktop**: Use vertical arrows on the right side or click movie cards
- **Mobile**: Swipe horizontally through movie posters
- **Auto-play**: Carousel automatically centers on the active movie

### Web Series Navigation
- **Season Selection**: Click season tabs to view episodes
- **Episode Playback**: Click any episode to simulate playback
- **Series Switching**: Use navigation arrows to browse series

### Search Functionality
```javascript
// Search supports:
- Movie titles
- Series names
- Genres
- Partial matches
```

### Continue Watching
- Horizontal scroll through your viewing history
- Progress bars show completion percentage
- Click any card to resume watching

## 🛠️ Customization

### Adding New Movies

Edit `script.js` and add to the `carouselMovies` array:

```javascript
{
  title: "Your Movie Title",
  rating: "⭐ 8.5/10",
  genres: ["Action", "Drama"],
  duration: "2h 30m",
  description: "Your movie description here...",
  cast: "Director: Name | Cast: Actor1, Actor2",
  video: "https://your-video-url.com",
  hero_bg: "img/your_background.jpg",
  poster: "https://your-poster-url.com"
}
```

### Adding Web Series

Add series to `webSeriesData` array:

```javascript
{
  id: 3,
  title: "Your Series",
  description: "Series description...",
  rating: "8.5/10",
  year: "2024",
  seasons: 2,
  episodes: 16,
  rank: 3,
  image: "https://series-image-url.com",
  genres: ["Drama", "Thriller"],
  seasonsData: {
    1: [
      {
        episode: 1,
        title: "Episode Title",
        duration: "45m",
        image: "episode-thumbnail-url"
      }
      // ... more episodes
    ]
  }
}
```

### Theming

Modify CSS variables in `style.css`:

```css
:root {
  --primary: #e50914;              /* Main brand color */
  --neon-red: #ff073a;             /* Accent color */
  --dark-bg: #0a0a0a;              /* Background */
  --dark-card: #141414;            /* Card background */
  --text-white: #ffffff;           /* Primary text */
  --text-gray: #d1d0cf;            /* Secondary text */
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Desktop XL | 1400px+ | Large monitors |
| Desktop | 1200px+ | Standard desktops |
| Laptop | 992px+ | Laptops |
| Tablet | 768px+ | Tablets |
| Mobile L | 576px+ | Large phones |
| Mobile M | 400px+ | Standard phones |
| Mobile S | <400px | Small phones |

## 🎨 Design Features

### Glassmorphism
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Neon Glow Effects
```css
.neon-border {
  border: 1px solid #ff073a;
  box-shadow: 0 0 5px #ff073a, 
              0 0 10px #ff073a, 
              0 0 15px #ff073a;
}
```

### Smooth Animations
- Fade-in effects for content loading
- Slide-in animations for navigation
- Hover transformations for interactive elements
- Carousel transitions with cubic-bezier easing

## 🔧 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

## 📦 Dependencies

### External Libraries

1. **Font Awesome** (v6.4.0)
   - Icons for UI elements
   - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

2. **Swiper.js** (v10)
   - Content carousels
   - CDN: `https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css`
   - JS: `https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js`

3. **Google Fonts**
   - Inter: Main body font
   - Orbitron: Heading font
   - Roboto: Auth pages font

### No Build Process Required
All dependencies are loaded via CDN - no npm, webpack, or build tools needed!

## 🎯 Key JavaScript Functions

### Carousel Management
```javascript
setupCarousel()           // Initialize main carousel
updateCarouselContent()   // Update displayed content
centerActiveCard()        // Center active movie card
```

### Search Functionality
```javascript
setupSearch()             // Initialize search system
// Real-time filtering with debouncing
```

### Web Series Management
```javascript
setupWebSeries()          // Initialize series section
updateSeriesDisplay()     // Update series information
updateEpisodesList()      // Load episode data
```

### User Interface
```javascript
setupUserDropdown()       // User profile menu
setupMobileMenu()         // Mobile navigation
setupContinueWatching()   // Continue watching section
```

## 🔐 Authentication System

### Login Page Features
- Email/phone validation
- Password visibility toggle
- Remember me functionality
- Forgot password flow
- In-memory user storage (demo purposes)

### Registration Page Features
- Multi-step form validation
- Password strength requirements
- Confirmation matching
- Success/error messaging
- Netflix-inspired UI

### Form Validation
```javascript
// Email validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Password requirements
- Minimum 6 characters
- Maximum 60 characters
- Required for all accounts
```

## 🎬 Data Structure Examples

### Movie Object
```javascript
{
  title: String,
  image: String (URL),
  rating: String,
  duration: String,
  age: String,
  quality: String,
  category: String,
  genre: String
}
```

### Series Object
```javascript
{
  id: Number,
  title: String,
  description: String,
  rating: String,
  year: String,
  seasons: Number,
  episodes: Number,
  rank: Number,
  image: String (URL),
  genres: Array,
  seasonsData: Object
}
```

## 🚧 Known Issues & Limitations

1. **Video Playback**: Currently uses placeholder alerts (integrate actual video player)
2. **Backend**: No server-side functionality (client-side only)
3. **User Data**: Stored in memory (no persistence)
4. **Image Loading**: Some images use placeholder URLs
5. **Authentication**: Demo authentication (not secure for production)

## 🔮 Future Enhancements

- [ ] Video player integration
- [ ] Backend API integration
- [ ] User profile management
- [ ] Watchlist functionality
- [ ] Rating and review system
- [ ] Social sharing features
- [ ] Multi-language support
- [ ] Content recommendations algorithm
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Analytics tracking
- [ ] Progressive Web App (PWA) support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Use semantic HTML5
- Follow BEM CSS methodology where applicable
- Comment complex JavaScript logic
- Maintain responsive design principles
- Test on multiple browsers before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 StreamFlix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👨‍💻 Author

**Jay Mondal**
- 📧 Email: [jaymondals953@gmail.com](mailto:jaymondals953@gmail.com)
- 💻 GitHub: [@jayMondal45](https://github.com/jayMondal45)
- 🔗 Portfolio: [github.com/jayMondal45](https://github.com/jayMondal45)

## 👏 Acknowledgments

- Inspired by Netflix's user interface design
- Font Awesome for icon library
- Swiper.js for carousel functionality
- Google Fonts for typography
- Unsplash for placeholder images
- The open-source community

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/jayMondal45/streamflix/issues)
- **Discussions**: [GitHub Discussions](https://github.com/jayMondal45/streamflix/discussions)
- **Email**: [jaymondals953@gmail.com](mailto:jaymondals953@gmail.com)
- **GitHub**: [@jayMondal45](https://github.com/jayMondal45)

## 📊 Project Statistics

- **Lines of Code**: ~3,500+
- **Files**: 5 core files
- **Components**: 15+ interactive sections
- **Responsive Breakpoints**: 6
- **Browser Compatibility**: 5 major browsers
- **Dependencies**: 3 external libraries

## 🎓 Learning Resources

If you're new to web development, check out these resources:

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

---

<div align="center">

**Built with ❤️ by [Jay Mondal](https://github.com/jayMondal45)**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/jayMondal45/streamflix/issues) · [Request Feature](https://github.com/jayMondal45/streamflix/issues) · [Contact Me](mailto:jaymondals953@gmail.com)

</div>
