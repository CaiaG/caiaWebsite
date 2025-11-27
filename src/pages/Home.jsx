function Home() {
  return (
    // Removed all styling except for a simple padding/color setup
    <div style={{ padding: '2rem', color: 'black' }}>
      
      {/* main title*/}
      <h1>Caia Gelli</h1>

      {/* ========================================================== */}
      {/* 2. ABOUT SECTION*/}
      <hr style={{ margin: '30px 0' }} />
      <h2>2. About</h2>
      <p>[Penn grad blah blah]</p>
      
      {/* 3. FEATURED PROJECTS */}
      <hr style={{ margin: '30px 0' }} />
      <h2> Projects </h2>

      {/* === SPH PROJECT === */}      
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '2rem', 
          padding: '1.5rem', 
          border: '1px solid #D1D5DB',
          borderRadius: '8px', 
          backgroundColor: '#F9FAFB',
          margin: '20px 0' 
      }}>
      
          <div> 
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Data Visualization Dashboard</h3>
              {/* Placeholder Image (You will replace this URL with your project's image) */}
              <img 
                  src="/assets/redsequence.png" 
                  style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: '6px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
                  }}
              />
          </div>

          {/* B. PROJECT DESCRIPTION AND DETAILS */}
          <div>
              {/* Description */}
              <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                  bee boo
              </p>

              {/* Technologies List */}
              <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Technologies Used:</strong>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                      <li>**Frontend:** React, D3.js (for custom charts)</li>
                      <li>**Styling:** Tailwind CSS (for layout and utilities)</li>
                      <li>**State:** Zustand</li>
                      <li>**APIs:** Mock Service Worker (MSW)</li>
                  </ul>
              </div>

              {/* Links */}
              <div>
                  <a href="#" style={{ 
                      color: '#1E40AF', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                      marginRight: '1rem' 
                  }}>
                      View Live Demo &rarr;
                  </a>
                  <a href="#" style={{ 
                      color: '#6B7280', 
                      textDecoration: 'underline' 
                  }}>
                      View Code on GitHub
                  </a>
              </div>
          </div>
      </div>



      {/* 4. GRAPHICS / HOUDINI WORK */}
      <hr style={{ margin: '30px 0' }} />
      <h2>4. Graphics / Houdini Work</h2>
      <p>[Placeholder: Visual effects, 3D modeling, or creative portfolio pieces.]</p>
      
      {/* 5. SOFTWARE PROJECTS */}
      <hr style={{ margin: '30px 0' }} />
      <h2>5. Software Projects</h2>
      <p>[Placeholder: Code-based projects, web applications, and repositories.]</p>

      {/* 6. EXPERIENCE */}
      <hr style={{ margin: '30px 0' }} />
      <h2>6. Experience</h2>
      <p>[Placeholder: Professional work history, internships, and roles.]</p>

      {/* 7. SKILLS */}
      <hr style={{ margin: '30px 0' }} />
      <h2>7. Skills</h2>
      <p>[Placeholder: Technical proficiencies (languages, frameworks, tools).]</p>

      {/* 8. CONTACT */}
      <hr style={{ margin: '30px 0' }} />
      <h2>8. Contact</h2>
      <p>[Placeholder]</p>
      {/* ========================================================== */}

    </div>
  );
}

export default Home;

/*
Hero
About
Research Projects
Graphics / Houdini Work
Software Projects
Experience
Skills
Contact
*/