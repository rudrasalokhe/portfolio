const Contact = () => {
  const contacts = [
    {
      name: "Email",
      answer: "rudrasalokhe100@gmail.com",
      link: "mailto:rudrasalokhe100@gmail.com"
    },
    {
      name: "X",
      answer: "https://x.com/rs2006_05",
      link: "https://x.com/rs2006_05"
    },
  ];
     
  // Sleek black theme styling
  const contactStyle = `
    .contact-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
      backdrop-filter: blur(20px);
    }
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .contact-title {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 32px 0;
      letter-spacing: -0.5px;
    }
    .contact-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    .contact-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    .contact-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.05);
    }
    .contact-name {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 8px 0;
      letter-spacing: -0.3px;
    }
    .contact-answer {
      color: #b3b3b3;
      margin: 0 0 16px 0;
      font-size: 14px;
      word-break: break-all;
    }
    .contact-link {
      background: rgba(255, 255, 255, 0.05);
      color: #e5e5e5;
      padding: 10px 18px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      display: inline-block;
    }
    .contact-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }
  `;
 
  return (
    <>
      <style>{contactStyle}</style>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact</h2>
          <div className="contact-grid">
            {contacts.map(cont => (
              <div key={cont.name} className="contact-card">
                <h3 className="contact-name">{cont.name}</h3>
                <p className="contact-answer">{cont.answer}</p>
                <a 
                  href={cont.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;