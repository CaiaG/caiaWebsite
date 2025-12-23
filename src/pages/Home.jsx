function Home() {


  const projectCardStyle = {
      minWidth: '380px',
      maxWidth: '400px',
      flexShrink: 0,
      scrollSnapAlign: 'start', 
      padding: '1.25rem', 
      border: 'none', 
      borderRadius: '12px', 
      backgroundColor: '#3B8EA5', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
  };

  const techPlaceholderBase = {
      width: '100%',
      aspectRatio: '16/10',
      borderRadius: '8px',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      border: '1px solid #334155',
      position: 'relative',
      overflow: 'hidden'
  };

  const gridOverlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    pointerEvents: 'none'
  };

  const gridOverlayStyle2 = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(#0000000a 1px, transparent 1px), linear-gradient(90deg, #0000000a 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    pointerEvents: 'none'
  };

    const dividerStyle = {
      margin: '30px 0', 
      border: 'none', 
      height: '0', 
      borderTop: '5px double #2D728F', 
  };

   const heroSectionStyle = {
    backgroundColor: '#2d728f', // Different color for the top part
    padding: '4rem 2rem',
    borderBottom: '1px solid #e5e7eb',
    textAlign: 'left',
    color: '#fdf9d2ff'
  };

  // abandoning the grid
  const horizontalScrollContainer = {
      display: 'flex',
      overflowX: 'auto',
      gap: '2rem',
      padding: '10px 5px 30px 5px',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
  };


  const jobEntryStyle = { marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #2D728F', textAlign: 'left' };
  const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' };
  const titleStyle = { fontSize: '1.25rem', fontWeight: '600', margin: '0', color: '#1F2937' };
  const dateStyle = { color: '#6B7280', fontSize: '0.9rem', fontWeight: '500', minWidth: '120px', textAlign: 'right' };
  const companyStyle = { color: '#4B5563', fontSize: '1rem', fontStyle: 'italic', margin: '0.5rem 0 0.75rem 0' };
  const listStyle = { listStyleType: 'disc', marginLeft: '20px', paddingLeft: '0', lineHeight: '1.6' };
  const skillCategoryTitleStyle = { textAlign: 'left', fontSize: '1.2rem' };
  const skillsListStyle = { listStyleType: 'disc', marginLeft: '20px', paddingLeft: '0', lineHeight: '1.6', textAlign: 'left' };
  
  
  
  // STARTS
  
  
  return (
    <>
      <style>{`
        body, html { margin: 0; background-color:#2d728f; }
        .no-scrollbar::-webkit-scrollbar { display: none; }

        .project-card {
            border-radius: 20px;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        box-shadow 0.4s ease, 
                        background-color 0.4s ease, 
                        border-radius 0.4s ease !important;
        }

        .project-card:hover { 
            transform: scale(1.03);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4); 
            background-color: #347d92;
            border-radius: 20px !important;
        }
      `}</style>
      
      <div style={heroSectionStyle}>
        {/* main title*/}
        <h1>Caia Gelli</h1>
        <div>
            <a href="https://www.linkedin.com/in/caia-gelli-14b6a3225/" style={{ 
                        color: '#1e3158ff', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Linkedin &
            </a>
            <a href="https://github.com/CaiaG" style={{ 
                        color: '#1e3158ff', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        {' '}Github
            </a>
            {/* 2. ABOUT SECTION*/}

            <h2>Software Engineering | Computer Graphics</h2>
            <p>I graduated from the University of Pennsylvania with a BSE in Digital Media Design. I am currently exploring software engineer roles that cater to my interests in simulation and graphics!</p>

        </div>
        
      </div>

      
    <div style={{color: 'black' , backgroundColor: '#fdf9d2ff', minHeight: '100vh', padding: '1rem'}}>
      
      
      {/* 3. FEATURED PROJECTS */}
      <div style={dividerStyle}></div>
      <h2> Featured Projects </h2>

      {/* === SPH PROJECT === */}      
      <div style={horizontalScrollContainer}>
        <div className="project-card" style={{...projectCardStyle, border: '1px solid #2d728f'}}>
            <div> 
              <img 
                  src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg" 
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
              />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0 0 0.5rem 0' , textAlign: 'left'}}>Smoothed Particle Hydrodynamics Implementation in Houdini</h3>

                {/* Description */}

                <p style={{ fontSize: '1rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.2',  textAlign: 'left', margin: '0 0 0.5rem 0' }}>
                  A custom SPH solver with pressure, viscosity, and surface tension. 
                  It applies XSPH smoothing, hybrid pressure solvers, and dynamic time stepping for stability.
                  Supports 3K+ particles at 30 FPS.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.9rem'}}>
                    <a href="https://github.com/CaiaG/SPHFluidSimulation-in-Houdini" style={{ 
                      color: '#1e3158ff', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                    }}>
                        Code{' '}|
                    </a>
                    <a href="https://docs.google.com/presentation/d/16x6bA4EYJor1JWqmlA5Iz0BD-3cVK-eLnIrsPnyrGdA/edit?usp=sharing" style={{ 
                      color: '#1e3158ff', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                    }}>
                      Presentation{' '}|
                    </a>
                  
                    <a href="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/ProjectSpecificationGuideFinalDraft.pdf" style={{ 
                      color: '#1e3158ff', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                    }}>
                      Writeup
                    </a>
                </div>
            </div>
        </div>

        {/* === Interactive Computer graphics === */} 
        <div className="project-card" style={{...projectCardStyle, border: '1px solid #2d728f'}}>
    
            <div style={{ textAlign:  'center' }}> 
              <img 
                  src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg" 
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' ,textAlign: 'left'}}>Interactive Computer Graphics</h3>
                {/* Description */}
                <p style={{ fontSize: '1rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.2',  textAlign: 'left', margin: '0 0 0.5rem 0' }}>
                    Portfolio including: Mini Minecraft using C++ and OpenGL (procedural terrain, texturing and L system implementations),
                    Rasterizer in OpenGL & Ray/Path tracer using Monte Carlo approximation,
                    3D Modeling, etc.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.9rem'}}>
                    <a href="https://www.artstation.com/caiagelli9" style={{ 
                        color: '#1e3158ff', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Portfolio
                    </a>
                </div>
            </div>
        </div>

        {/* === Working Search engine === */} 
        <div className="project-card" style={{...projectCardStyle, border: '1px solid #2d728f'}}>
            <div style={{ ...techPlaceholderBase, background: '#0f172a', color: '#38bdf8' }}>
                <div style={gridOverlayStyle}></div>
                <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 640 640" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginBottom: '10px' }}
                  >
                    <path d="M310.6 194.3L243.4 222.5L243.4 107.2L188.7 297.5L243.4 273.3L243.4 403.6L310.6 194.3zM227.4 97.6L226.1 102.3L210.9 155.2C170.6 170.7 142 209.8 142 255.5C142 307.8 176.3 351.4 225.4 361L225.4 414.6C147.5 404.1 90 336.4 90 255.6C90 175.1 149.8 108.4 227.4 97.6zM538.8 544.8C527.6 556 515.7 557.1 510.2 555.3C504.8 553.5 483.1 535.4 449.8 510.9C416.5 486.3 416.2 475.2 406.8 454.2C397.4 433.3 376.4 411.6 349.3 401.8L339.6 387.1C314.9 404 286.6 414 258.3 415.8L260.4 409.2L276.3 359.7C322.8 347.8 357.2 305.7 357.2 255.5C357.2 201 318.8 153.4 261.2 148.4L261.2 96.3C344.4 101.4 410 170.8 410 255.6C410 289.2 398.8 320.3 381 346L395.6 355.6C405.4 382.7 427.1 403.6 448 413C468.9 422.4 480.2 422.7 504.8 456C529.4 489.2 547.5 510.9 549.3 516.3C551.1 521.7 550 533.6 538.8 544.8zM528.9 526.9C528.9 522.5 525.3 518.9 520.9 518.9C516.5 518.9 512.9 522.5 512.9 526.9C512.9 531.3 516.5 534.9 520.9 534.9C525.3 534.9 528.9 531.3 528.9 526.9z"/>
                  </svg>
                    <div style={{ fontFamily: 'monospace', opacity: 0.8 }}>DISTRIBUTED SEARCH</div>
              </div>
              </div>
            <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' , textAlign: 'left'}}>Distributed Search Engine</h3>

                {/* Description */}
                <p style={{fontSize: '1rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.2',  textAlign: 'left', margin: '0 0 0.5rem 0' }}>
                    A full-stack search engine with distributed crawling, indexing, and ranking across 50k+ pages. 
                    Includes scalable inverted index with hash-based partitioning that ranks 5k+ terms with TF-IDF and PageRank.
                </p>
                

                {/* Links */}
                <div style={{  display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.9rem'}}>
                    <a href="https://github.com/CaiaG/DistributedSearchEngine" style={{ 
                        color: '#1e3158ff', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Sample Code
                    </a>
                </div>
            </div>
        </div>

        {/* === 3D MRI Age Classification === */} 
        <div className="project-card" style={{...projectCardStyle, border: '1px solid #2d728f'}}>
            <div style={{ ...techPlaceholderBase, background: '#abf0e8ff', color: '#22524dff' }}>
                <div style={gridOverlayStyle2}></div>
                <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-brain-circuit-icon lucide-brain-circuit">
                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                        <path d="M9 13a4.5 4.5 0 0 0 3-4"/>
                        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                        <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                        <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                        <path d="M12 13h4"/>
                        <path d="M12 18h6a2 2 0 0 1 2 2v1"/>
                        <path d="M12 8h8"/>
                        <path d="M16 8V5a2 2 0 0 1 2-2"/>
                        <circle cx="16" cy="13" r=".5"/>
                        <circle cx="18" cy="3" r=".5"/>
                        <circle cx="20" cy="21" r=".5"/>
                        <circle cx="20" cy="8" r=".5"/>
                    </svg>
                    <h3 style={{ fontSize: '0.7rem', fontWeight: '600', marginBottom: '1rem' , textAlign: 'left'}}>MRI FEATURE ANALYSIS</h3>

                </div>
              </div>
            <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' , textAlign: 'left'}}>3D MRI Feature Analysis</h3>

                {/* Description */}
                <p style={{fontSize: '1rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.2',  textAlign: 'left', margin: '0 0 0.5rem 0' }}>
                    Built a 3D MRI preprocessing and classification pipeline using SimpleITK and MONAI. 
                    Trained the MRI data on a DenseNet3D and evaluted with accuracy & confusion matrix for features such as age, and gender.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.9rem'}}>
                    <a href="https://github.com/CaiaG/MRIclassificationpipeline" style={{ 
                        color: '#1e3158ff',  
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Sample Code
                    </a>
                </div>
            </div>
        </div>

      </div>

      {/* 6. EXPERIENCE */}
      <div style={dividerStyle}></div>
      <h2>Experience</h2>


      {/* === JOB ENTRY A === */}
      <div style={jobEntryStyle}>
          <div style={headerStyle}>
              <h4 style={titleStyle}>Realtime Software Engineering Intern</h4>
              <span style={dateStyle}>June 2025 – August 2025</span>
          </div>
          <p style={companyStyle}>Arthrex | Naples, FL</p>
          <ul style={listStyle}>
              <li>Prototyped a virtual assistant in Unreal Engine with custom C++ TTS/ASR pipelines containerized in Docker; demoed to AR/VR team lead on Arthrex’s Holodeck virtual production stage using Pixera for 3D projection</li>
              <li>Integrated and tested real time AI speech tools: Convai, NVIDIA ACE, Kokoro (via FastAPI), and NVIDIA Parakeet</li>
              <li>Prototyped 5 interactive AR ads for Arthrex Vet team using the ImagineWebAR plugin for Unity</li>
          </ul>
      </div>

      {/* === JOB ENTRY B === */}
      <div style={jobEntryStyle}>
          <div style={headerStyle}>
              <h4 style={titleStyle}>Research Assistant for Department of Radiology</h4>
              <span style={dateStyle}>June 2024 – September 2024</span>
          </div>
          <p style={companyStyle}>Penn Medicine | Remote</p>
          <ul style={listStyle}>
              <li>Used Monai framework on ~500 MRI images to identify features that predict the development of Alzheimer's.</li>
              <li>Implemented models with DenseNet architecture to improve predictive accuracy from 50% to 85%.</li>
          </ul>
      </div>

      {/* === JOB ENTRY C === */}
      <div style={{...jobEntryStyle, border: 'none'}}>
          <div style={headerStyle}>
              <h4 style={titleStyle}>CS Intern</h4>
              <span style={dateStyle}>June 2023 – July 2023</span>
          </div>
          <p style={companyStyle}>University of Ghana Noguchi Memorial Institute for Medical Research | Ghana, Accra</p>
          <ul style={listStyle}>
              <li>Optimized food recognition AI (FRANI) to support nutrition programs in Global South schools.</li>
              <li>Consolidated 100+ class labels and boosted model performance by using Fastai, WandB, and Optuna.</li>
          </ul>
      </div>
          <div style={dividerStyle}></div>
     
      {/* 7. SKILLS */}
      <h2></h2>
        {/* Category 1: Programming Languages */}
          <div>
              <p style={skillCategoryTitleStyle}>Programming Languages</p>
              <ul style={skillsListStyle}>
                  <li>C/C++, Java, Python, Vite/React, SQL, R, GLSL </li>
              </ul>
              <p style={skillCategoryTitleStyle}>3D Graphics</p>
              <ul style={skillsListStyle}>
                  <li>Maya, Blender, ZBrush, Houdini, Unity, Unreal Engine</li>
              </ul>
           </div>
      <div style={dividerStyle}></div>

      {/* 8. CONTACT */}
      <h2>Contact</h2>
      <a>caiaygelli@gmail.com</a>
      <div style={{justifyContent: 'center'}}>
                    <a href="https://www.linkedin.com/in/caia-gelli-14b6a3225/" style={{ 
                        color: '#1E40AF', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Linkedin
                    </a>
                </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <a href="https://github.com/CaiaG" style={{ 
                        color: '#1E40AF', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Github
                    </a>
                </div>
                
    </div>
    </>
  );
}

export default Home;
