import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";


function Home() {

     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.course-card, .benefit-card, .feature-item').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setMobileMenuOpen(false)
  }
  return (
    <>
      <Navbar />

     {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h1>Unlock Your Potential with SkillUp</h1>
          <p>Learn new skills, shape your professional journey, and get recognized<br />with our learning platform</p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-light">Get Started</a>
            <a href="#courses" onClick={(e) => scrollToSection(e, '#courses')} className="btn btn-outline-light">Explore Courses</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>About SkillUp</h2>
          <p className="about-subtitle">Your journey to excellence starts now</p>
          <div className="about-content">
            <div className="about-text">
              <h3>Empowering Learners Worldwide</h3>
              <p>SkillUp is a premier online learning platform designed to help individuals and organizations excel through well-curated courses and personalized learning experiences. We provide world-class education that transforms careers.</p>
              <p>Our approach to online learning combines rich content with community engagement and real-time interaction for a comprehensive learning experience.</p>
            </div>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <div className="feature-content">
                  <h4>Diverse Course Library</h4>
                  <p>Access vast resources in various areas of multiple disciplines</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h4>Track Your Progress</h4>
                  <p>Monitor your learning path with real-time analytics and insights</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <div className="feature-content">
                  <h4>Expert Instruction</h4>
                  <p>Learn from leading professionals and educators</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-content">
                  <h4>Career Advancement</h4>
                  <p>Get certified skills that propel you to success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose SkillUp?</h2>
          <p className="why-subtitle">Discover what makes us different</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast & Efficient</h3>
              <p>Our streamlined platform offers quick access to quality content without complexity</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Learn Anywhere</h3>
              <p>Access your courses from any device, at any time, wherever you are in the world</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏅</div>
              <h3>Certified Courses</h3>
              <p>Gain recognized certificates upon completion of industry-proven programs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>24/7 Support</h3>
              <p>Connect with tutors, mentors and other students through our support system</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Quality education shouldn't break the bank. We offer courses at prices you can afford</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Personalized Learning</h3>
              <p>Adaptive learning paths tailored to your goals and learning pace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <div className="container">
          <h2>Our Courses</h2>
          <p className="courses-subtitle">Explore our diverse range of learning opportunities</p>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image">💻</div>
              <div className="course-content">
                <span className="course-tag">Beginner</span>
                <h3>Web Development Bootcamp</h3>
                <p>Master HTML, CSS, JavaScript, and modern frameworks</p>
                <div className="course-meta">
                  <span>⏱️ 8 Weeks</span>
                  <span>👥 2.1M+ students</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">📊</div>
              <div className="course-content">
                <span className="course-tag">Advanced</span>
                <h3>Data Analytics Mastery</h3>
                <p>Learn to analyze data, create visualizations and make data-driven decisions</p>
                <div className="course-meta">
                  <span>⏱️ 6 Weeks</span>
                  <span>👥 350K students</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">🎨</div>
              <div className="course-content">
                <span className="course-tag">Design</span>
                <h3>UI/UX Design Fundamentals</h3>
                <p>Create beautiful and user-friendly digital experiences</p>
                <div className="course-meta">
                  <span>⏱️ 4 Weeks</span>
                  <span>👥 1.2M+ students</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">🤖</div>
              <div className="course-content">
                <span className="course-tag">Beginner</span>
                <h3>Machine Learning A-Z</h3>
                <p>Dive into artificial intelligence and machine learning algorithms</p>
                <div className="course-meta">
                  <span>⏱️ 12 Weeks</span>
                  <span>👥 450K students</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">📱</div>
              <div className="course-content">
                <span className="course-tag">Intermediate</span>
                <h3>Mobile App Development</h3>
                <p>Build native and hybrid applications for iOS and Android devices</p>
                <div className="course-meta">
                  <span>⏱️ 10 Weeks</span>
                  <span>👥 780K students</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">📈</div>
              <div className="course-content">
                <span className="course-tag">Business</span>
                <h3>Digital Marketing Strategy</h3>
                <p>Master SEO, social media, and content marketing strategies</p>
                <div className="course-meta">
                  <span>⏱️ 6 Weeks</span>
                  <span>👥 1.8M+ students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">We'd love to hear from you</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Our Location</h4>
                  <p>123 Learning Street<br />Education City, ED 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <p>info@skillup.com<br />support@skillup.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567<br />Mon-Fri 9AM - 6PM</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Write your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SkillUp</h3>
              <p>Empowering learners worldwide with quality education and practical skills.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Us</a></li>
                <li><a href="#courses" onClick={(e) => scrollToSection(e, '#courses')}>Courses</a></li>
                <li><a href="#">Our Tutors</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul className="footer-links">
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SkillUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
