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
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Smoothed Particle Hydrodynamics Implementation in Houdini</h3>
              <img 
                  src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg" 
                  style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: '3px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
                  }}
              />
          </div>

          <div>
              {/* Description */}
              <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                  Custom SPH solver with pressure, viscosity, and surface tension 
              </p>
              <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                  Supports 3K+ particles at 30 FPS
              </p><p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                  Applies XSPH smoothing, hybrid pressure solvers, and dynamic time stepping for stability
              </p>

              {/* Links */}
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <a href="https://github.com/CaiaG/SPHFluidSimulation-in-Houdini" style={{ 
                      color: '#1E40AF', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                  }}>
                    Code{' '}|
                  </a>
                  <a href="https://docs.google.com/presentation/d/16x6bA4EYJor1JWqmlA5Iz0BD-3cVK-eLnIrsPnyrGdA/edit?usp=sharing" style={{ 
                      color: '#1E40AF', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                  }}>
                    Presentation{' '}|
                  </a>
                  
                  <a href="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/ProjectSpecificationGuideFinalDraft.pdf" style={{ 
                      color: '#1E40AF', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                  }}>
                    Writeup
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