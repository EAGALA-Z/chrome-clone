import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IoIosTimer } from 'react-icons/io'
import { FaPaintRoller, FaTools, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { TbShieldSearch } from 'react-icons/tb'
import { MdOutlineSpeed } from 'react-icons/md'
import { FiX } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)


export default function AnimatedFeatures() {
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [activeNav, setActiveNav] = useState('Updates')

  
  const [slideIndex, setSlideIndex] = useState(0)
  const [detailIndex, setDetailIndex] = useState(0)
  const [slideStopped, setSlideStopped] = useState(false)
  const [detailStopped, setDetailStopped] = useState(false)
  
  const [fastIndex, setFastIndex] = useState(0)

  const [safeExpanded, setSafeExpanded] = useState(null)
  const [builtExpanded, setBuiltExpanded] = useState(null)

  const [stickyNavVisible, setStickyNavVisible] = useState(false)

  const assets = [
    '/src/assets/mockup-laptop.jpg',
    '/src/assets/mockup-phone.jpg',
    '/src/assets/logo-g.png',
    '/src/assets/logo-t.png',
    '/src/assets/logo-a.png',
    '/src/assets/pm.png',
    '/src/assets/automatic-image.png',
    '/src/assets/chrome.png',
    '/src/assets/customise-your.png',
    '/src/assets/browse-across.png',
    '/src/assets/save-time.png',
    '/src/assets/google-chrome-wallpaper.png',
    '/src/assets/google-chrome-wallpaper2.png',
    '/src/assets/google-chrome-wallpaper3.png',
    '/src/assets/image-1.jpg',
    '/src/assets/image-2.jpeg',
    '/src/assets/image-3.jpg',
    '/src/assets/image-4.jpg',
    '/src/assets/image-5.jpg',
    '/src/assets/image-6.jpg',
    '/src/assets/image-7.jpg'
  ]

  useEffect(() => {
    let count = 0
    if (!assets || assets.length === 0) {
      setLoaded(true)
      return
    }
    assets.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = img.onerror = () => {
        count++
        if (count === assets.length) setLoaded(true)
      }
    })
  }, [])

  const sliderImages = [
    '/src/assets/google-chrome-wallpaper2.png',
    '/src/assets/google-chrome-wallpaper3.png',
    '/src/assets/google-chrome-wallpaper.png'
  ]

  const details = [
    {
      title: 'Customise your Chrome',
      desc: 'Personalise your web browser with themes, dark mode and other options built just for you.',
      btn: 'Explore themes',
      img: '/src/assets/customise-your.png'
    },
    {
      title: 'Browse across devices',
      desc: 'Sign in to Chrome on any device to access your bookmarks, saved passwords and more.',
      btn: 'Learn more',
      img: '/src/assets/browse-across.png'
    },
    {
      title: 'Save time with autofill',
      desc: 'Use Chrome to save addresses, passwords and more to quickly autofill your details.',
      btn: 'Get started',
      img: '/src/assets/save-time.png'
    }
  ]

  // Fast items
  const fastItems = [
    {
      title: 'Prioritise performance',
      desc: 'Chrome is built for performance. Optimise your experience with features like Energy Saver and Memory Saver.',
      img: 'https://www.google.com/chrome/static/images/homepage/fast/devices_tablet-2x.webp',
      cta: 'Learn more about Memory and Energy Saver'
    },
    {
      title: 'Stay on top of tabs',
      desc: 'Chrome has tools to help you manage the tabs you’re not quite ready to close. Group, label, and colour-code your tabs to stay organised and work faster.',
      img: 'https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_tablet-2x.webp',
      cta: 'Learn more'
    },
    {
      title: 'Optimised for your device',
      desc: 'Chrome is built to work with your device across platforms. That means a smooth experience on whatever you’re working with.',
      img: 'https://www.google.com/chrome/static/images/homepage/fast/devices_tablet-2x.webp',
      cta: 'Learn more'
    }
  ]

  // Safe items
  const safeItems = [
    {
      id: 1,
      title: 'PASSWORD MANAGER',
      desc: 'Use strong passwords on every site.',
      img: 'https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2-2x.webp',
      expandedImg: 'https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp',
      expandedText:
        'Chrome has Google Password Manager built in, which makes it simple to save, manage and protect your passwords online. It also helps you create stronger passwords for every account you use.',
      blueBg: true
    },
    {
      id: 2,
      title: 'ENHANCED SAFE BROWSING',
      desc: "Browse with the confidence that you're staying safer online.",
      img: '',
      expandedImg: 'https://www.google.com/chrome/static/images/v2/gallery/malware-alert-2x.webp',
      expandedText:
        "Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections.",
      blueBg: false
    },
    {
      id: 3,
      title: 'PRIVACY GUIDE',
      desc: 'Keep your privacy under your control with easy-to-use settings.',
      img: '',
      expandedImg: 'https://www.google.com/chrome/static/images/v2/gallery/privacy-guide-2x.webp',
      expandedText:
        'Chrome makes it easy to understand exactly what you’re sharing online and who you’re sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings.',
      blueBg: false
    },
    {
      id: 4,
      title: 'SAFETY CHECK',
      desc: 'Check your safety level in real time with just one click.',
      img: 'https://www.google.com/chrome/static/images/v2/gallery/google-safety-2x.webp',
      expandedImg: 'https://www.google.com/chrome/static/images/v2/gallery/google-safety-2x.webp',
      expandedText:
        "Chrome's Safety Check confirms the overall security and privacy of your browsing experience, including your saved passwords, extensions and settings.",
      blueBg: true
    }
  ]

  // Built items
  const built = [
    {
      id: 1,
      title: 'Google Search',
      shortDesc: 'The search bar you love, built right in.',
      img: 'https://www.google.com/chrome/static/images/v2/gallery/search-front_tablet-2x.webp',
      expandedImg: 'https://www.google.com/chrome/static/images/v2/gallery/search-back-2x.webp',
      expandedText:
        "Access a world of knowledge at your fingertips. Check the weather, solve math equations, and get instant search results, all contained inside your browser’s address bar."
    },
    {
      id: 2,
      title: 'Google Workspace',
      shortDesc: 'Get things done, with or without Wi-Fi.',
      img: null,
      expandedImg: 'https://www.google.com/chrome/static/images/v2/gallery/offline-2x.webp',
      expandedText:
        'Get things done in Gmail, Google Docs, Google Slides, Google Sheets, Google Translate and Google Drive, even without an Internet connection.'
    }
  ]

  const faqs = [
    'How do I make Chrome my default web browser?',
    'How can I customise Chrome?',
    "What are Chrome's safety settings?",
    'What is Chrome’s password manager?',
    'How do I add a browser extension to Chrome?',
    'How do I update Chrome?'
  ]

  const footerGroups = [
    { heading: 'Chrome Family', links: ['Chromebooks', 'Chromecast', 'Chrome Web Store', 'Enterprise'] },
    {
      heading: 'Other Platforms',
      links: [
        'Download Chrome Browser',
        'Chrome Browser for Enterprise',
        'Chrome Devices',
        'ChromeOS',
        'Google Cloud',
        'Google Workspace',
        'Education'
      ]
    },
    {
      heading: 'Explore',
      links: [
        'Google Chrome Browser',
        'Devices',
        'Dev and Partners',
        'Chromium',
        'Chrome Web Store',
        'Chrome Experiments',
        'Chrome Beta',
        'Chrome Dev',
        'Chrome Canary'
      ]
    },
    { heading: 'Support', links: ['Chrome Help', 'Update Chrome', 'Chrome Tips', 'Google Chrome Blog'] }
  ]

  const rootRef = useRef(null)
  useEffect(() => {
    if (!loaded) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }
        )
      })

      const track = document.querySelector('.image-slider .slider-track')
      if (track) {
        gsap.to(track, {
          xPercent: -35,
          ease: 'none',
          scrollTrigger: { trigger: '.image-slider', start: 'top bottom', end: 'bottom top', scrub: 1 }
        })
      }

      const vid = document.querySelector('.fast-section video')
      if (vid) {
        gsap.to(vid, {
          y: -60,
          ease: 'none',
          scrollTrigger: { trigger: '.fast-section', start: 'top bottom', end: 'bottom top', scrub: true }
        })
      }
    }, rootRef)

    return () => ctx.revert()
  }, [loaded])

  useEffect(() => {
    if (slideStopped) return
    const id = setInterval(() => setSlideIndex((s) => (s + 1) % sliderImages.length), 5000)
    return () => clearInterval(id)
  }, [slideStopped])

  useEffect(() => {
    if (detailStopped) return
    const id = setInterval(() => setDetailIndex((d) => (d + 1) % details.length), 5000)
    return () => clearInterval(id)
  }, [detailStopped])

  useEffect(() => {
    const handler = () => {
      const el = document.querySelector('.discover-updates')
      if (!el) return
      setStickyNavVisible(el.getBoundingClientRect().top <= 0)
    }
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const prevFast = () => setFastIndex((i) => (i === 0 ? fastItems.length - 1 : i - 1))
  const nextFast = () => setFastIndex((i) => (i === fastItems.length - 1 ? 0 : i + 1))

  if (!loaded) {
    return (
      <div className="preloader-root">
        <div className="preloader-card">
          <div className="spinner" aria-hidden />
          <div className="preloader-text">Loading assets — 100%</div>
        </div>
      </div>
    )
  }

  return (
    <div className="animated-root" ref={rootRef}>
      {/* Header */}
      <header className="header reveal">
        <div className="header-left">
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            &#9776;
          </button>
          <img src="/src/assets/chrome.png" alt="Chrome Logo" className="logo" />
          <span className="header-title">Chrome</span>
        </div>

        <nav className="top-nav">
          {['Updates', 'Yours', 'Safe', 'Fast', 'By Google', 'Download'].map((tab) => (
            <button key={tab} onClick={() => setActiveNav(tab)} className={activeNav === tab ? 'active' : ''}>
              {tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Side menu */}
      <div className={`side-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <aside className={`side-menu ${menuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            &times;
          </button>
          <nav className="menu-links">
            <a href="#">Safety</a>
            <a href="#">By Google</a>
            <a href="#">Extensions</a>
          </nav>

          <div className="menu-footer">
            <img src="/src/assets/chrome.png" alt="Chrome" className="menu-logo" />
            <h3>The browser built to be yours</h3>
            <button className="download-btn">Download Chrome</button>
            <p>For Windows 11/10 64-bit</p>
          </div>
        </aside>
      </div>

      {/* Hero */}
      <section className="hero reveal">
        <div className="hero-inner">
          <img src="/src/assets/chrome.png" alt="Chrome Logo" className="logo-in" />
          <h1 className="hero-title">The browser</h1>
          <h1 className="hero-title">built to be yours</h1>
          <div className="hero-cta">
            <button className="download-btn">Download Chrome</button>
            <p className="hero-sub">I want to update Chrome — For Windows 11/10 64-bit</p>
            <p className="hero-sub">For Windows 11/64-bits</p>
            <p className="hero-sub">Help make Google Chrome better by automatically sending usage <br/> statistics and crash reports to Google.Learn more</p>
            <p className="hero-sub">By downloading Chrome, you agree to the Google Terms of Servixe and<br/> Chrome and ChromeOs Additional Terms of Service</p>
          </div>
        </div>
      </section>

      {/* Image slider (scroll-driven) */}
      <section className="image-slider reveal">
        <div className="slider-track">
          {['/src/assets/image-1.jpg', '/src/assets/image-2.jpeg', '/src/assets/image-3.jpg', '/src/assets/image-4.jpg', '/src/assets/image-5.jpg', '/src/assets/image-6.jpg', '/src/assets/image-7.jpg'].map((s, i) => (
            <div className="slide" key={i}>
              <img src={s} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Discover updates header */}
      <section className="discover-updates reveal">
        <div className="updates-header">
          <h1 className="hero-title">Discover the latest</h1>
          <h1 className="hero-title">
            <IoIosTimer className="timer-icon" /> updates from Chrome
          </h1>
        </div>
      </section>

      {/* sticky mini nav */}
      {stickyNavVisible && (
        <div className="updates-nav sticky">
          {['Updates', 'Yours', 'Safe', 'Fast', 'By Google', 'Download'].map((tab) => (
            <button
              key={tab}
              className={activeNav === tab ? 'active' : ''}
              onClick={() => {
                setActiveNav(tab)
                const el = document.querySelector('.discover-updates')
                if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Updates content */}
      <section className="updates-content reveal">
        <div className="left-side">
          <h3>Updates</h3>
          <h4>Automatic updates</h4>
          <p>There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.</p>
          <a href="#">Learn about automatic updates</a>
          <img src="/src/assets/automatic-image.png" alt="Automatic update illustration" />
        </div>
        <div className="right-side">
          <h3>Latest</h3>
          <h4>New from Chrome</h4>
          <p>Chrome regularly updates with tools and features that make it faster and easier to use.</p>
          <a href="#">Learn what’s new on Chrome</a>
          <img src="/src/assets/chrome.png" alt="Chrome new features" />
        </div>
      </section>

      <section className="yours-section reveal">

        <h1 className="hero-title">Make it <FaPaintRoller className="paint-icon--inline" /> yours and</h1>
        <h1 className="hero-title">and take it with you</h1>
        <br/>
        <div className="slider-section">
          <img src={sliderImages[slideIndex]} alt="Slider" onClick={() => setSlideStopped(true)} style={{ cursor: 'pointer' }} />
        </div>

        <div className="details-section">
          <div className="details-content" onClick={() => setDetailStopped(true)}>
            <img src={details[detailIndex].img} alt="Detail" />
            <div className="text-content">
              <h3>{details[detailIndex].title}</h3>
              <p>{details[detailIndex].desc}</p>
              <button>{details[detailIndex].btn}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Safe section */}
      <section className="safe-section reveal">
        <div className='safe-header'>
             <h1 className="hero-title">Stay <TbShieldSearch className="shield-icon" /> safe while you browse</h1>
        </div>
       
        <div className="safe-grid">
          {safeItems.map((it) => (
            <div key={it.id} className={`safe-item ${it.blueBg ? 'blue-bg' : ''}`}>
              <div className="default-view">
                {it.img && <img src={it.img} alt={it.title} />}
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <div className="buttons">
                  <button onClick={() => setSafeExpanded(it.id)}>+</button>
                  <button onClick={() => setSafeExpanded(null)}>×</button>
                </div>
              </div>

              {safeExpanded === it.id && (
                <div className="expanded-view">
                  {it.expandedImg && <img src={it.expandedImg} alt={it.title} />}
                  <p>{it.expandedText}</p>
                  <a href="#">Learn more about {it.title}</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="fast-section reveal">
        <div className="fast-header">
          <h1 className='hero-title'>The <MdOutlineSpeed className="speed-icon" /> fast way to do things online
          </h1>
        </div>

        <div className="video-container">
          <video src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm" autoPlay loop muted playsInline />
        </div>

        <div className="fast-carousel">
          <button className="fast-arrow left" onClick={prevFast} aria-label="Previous">◀</button>

          <div className="fast-slide" key={fastIndex}>
            <div className="fast-text">
              <h2>{fastItems[fastIndex].title}</h2>
              <p>{fastItems[fastIndex].desc}</p>
              <a href="#">{fastItems[fastIndex].cta}</a>
            </div>
            <div className="fast-image">
              <img src={fastItems[fastIndex].img} alt={fastItems[fastIndex].title} />
            </div>
          </div>

          <button className="fast-arrow right" onClick={nextFast} aria-label="Next">▶</button>
        </div>
      </section>

      {/* Built section */}
      <section className="built-section reveal">
        <div className="built-header">
          <h1>
            <FaTools className="tools-icon" /> built by Google
          </h1>
        </div>

        <div className="google-ai">
          <div className="ai-copy">
            <h2>GOOGLE AI</h2>
            <p>Access AI superpowers while you browse.</p>
            <p>
              Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we’re innovating new technologies responsibly.
            </p>
            <a href="#">Explore Google AI</a>
          </div>
          <div className="ai-image">
            <img src="https://www.google.com/chrome/static/images/v2/gallery/ai_desktop-2x.webp" alt="Google AI" />
          </div>
        </div>

        <div className="built-items">
          {built.map((b) => (
            <div key={b.id} className="built-item" onClick={() => setBuiltExpanded(builtExpanded === b.id ? null : b.id)}>
              <div className="default-view">
                {b.img && <img src={b.img} alt={b.title} />}
                <h3>{b.title}</h3>
                <p>{b.shortDesc}</p>
              </div>

              {builtExpanded === b.id && (
                <div className="expanded-view">
                  {b.expandedImg && <img src={b.expandedImg} alt={b.title} />}
                  <p>{b.expandedText}</p>
                  <a href="#">Learn more</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="question-section reveal">
        <div className="faq-header">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((q, i) => (
            <div className="faq-item" key={i}>
              {q}
            </div>
          ))}
        </div>

        <div className="download-section">
          <h3>Take your browser with you</h3>
          <p>Download Chrome on your mobile device or tablet and sign into your account for the same browser experience, everywhere.</p>
          <button className="download-btn">Download Chrome</button>
          <div className="qr-code">
            <img src="https://www.google.com/chrome/static/images/v2/homepage/qr-code.png" alt="QR" />
            <p>Get Chrome for your phone</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section reveal">
        <div className="follow-us">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FiX /></a>
          </div>
        </div>

        <div className="footer-links">
          {footerGroups.map((g, idx) => (
            <div className="link-section" key={idx}>
              <h4>{g.heading}</h4>
              <ul>
                {g.links.map((l, i) => (
                  <li key={i}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
