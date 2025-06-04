const Header = () => {
  // Sleek black theme styling with photo
  const headerStyle = `
    .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(15, 15, 15, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 16px 0;
      transition: all 0.3s ease;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .profile-photo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    .profile-photo:hover {
      border-color: rgba(255, 255, 255, 0.4);
      transform: scale(1.05);
    }
    .name {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
      margin: 0;
      letter-spacing: -0.5px;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .nav-link {
      color: #b3b3b3;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s ease;
    }
    .nav-link:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.05);
    }
    .nav-link.active {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
    }
    .contact-btn {
      background: linear-gradient(135deg, #333333 0%, #555555 100%);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    .contact-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
      background: linear-gradient(135deg, #444444 0%, #666666 100%);
      border-color: rgba(255, 255, 255, 0.2);
    }
  `;
 
  return (
    <>
      <style>{headerStyle}</style>
      <header className="header">
        <div className="container">
          {/* Logo Section with Profile Photo */}
          <div className="logo">
            <img 
              src="/public/images/icon.jpeg" 
              alt="Rudra Salokhe" 
              className="profile-photo"
            />
            <h1 className="name">Rudra Salokhe</h1>
          </div>
          
          {/* Navigation */}
          <nav className="nav">
            <a href="#about" className="nav-link active">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <button className="contact-btn">Contact</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;