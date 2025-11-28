function Home() {

  const categoryGridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', 
      gap: '2rem', 
      margin: '20px 0'
  };

  const projectCardStyle = {
      padding: '1rem', 
      borderRadius: '4px', 
      backgroundColor: '#3B8EA5', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between', 
      minHeight: '50px',
      minWidth: '50px'
  };

  const linkStyle = { 
    color: '#1E40AF', 
    fontWeight: 'bold',
    textDecoration: 'none', 
    whiteSpace: 'nowrap' 
  };

    const dividerStyle = {
      margin: '30px 0', 
      border: 'none', 
      height: '0', 
      borderTop: '5px double #2D728F', 
  };


  const jobEntryStyle = { marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #2D728F', textAlign: 'left' };
  const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' };
  const titleStyle = { fontSize: '1.25rem', fontWeight: '600', margin: '0', color: '#1F2937' };
  const dateStyle = { color: '#6B7280', fontSize: '0.9rem', fontWeight: '500', minWidth: '120px', textAlign: 'right' };
  const companyStyle = { color: '#4B5563', fontSize: '1rem', fontStyle: 'italic', margin: '0.5rem 0 0.75rem 0' };
  const listStyle = { listStyleType: 'disc', marginLeft: '20px', paddingLeft: '0', lineHeight: '1.6' };
  const skillCategoryTitleStyle = { textAlign: 'left', fontSize: '1.2rem' };
  const skillsListStyle = { listStyleType: 'disc', marginLeft: '20px', paddingLeft: '0', lineHeight: '1.6', textAlign: 'left' };
  return (
    <>
      {/* GLOBAL CSS RESET: This is necessary to remove default browser margin/padding */}
      <style>{`
        body, html {
          background-color: #f5ee9e; /* Ensure the very root is also covered */
        }
      `}</style>
    <div style={{color: 'black' , backgroundColor: '#f5ee9e', minHeight: '100vh', padding: '1rem'}}>
      
      {/* main title*/}
      <h1 style={{margin: '0.1rem'}}>Caia Gelli</h1>
      <div style={{justifyContent: 'center'}}>
                    <a href="https://www.linkedin.com/in/caia-gelli-14b6a3225/" style={{ 
                        color: '#1E40AF', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 

                    }}>
                        Linkedin &
                    </a>
                    <a href="https://github.com/CaiaG" style={{ 
                        color: '#1E40AF', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        {' '}Github
                    </a>
                    
                </div>
      <div style={dividerStyle}></div>

      {/* 2. ABOUT SECTION*/}

      <h2>Software Engineering | Computer Graphics</h2>
      <p style={{margin: '1rem', marginInlineStart: '10rem', marginInlineEnd: '10rem'}}>I graduated from the University of Pennsylvania with a BSE in Digital Media Design. I am currently exploring software engineer roles that cater to my interests in simulation and graphics!</p>

      
      {/* 3. FEATURED PROJECTS */}
      <div style={dividerStyle}></div>
      <h2> Featured Projects </h2>

      {/* === SPH PROJECT === */}      
      <div style={categoryGridStyle}>
        <div style={{...projectCardStyle, border: '2px solid #2d728f'}}>
            <div> 
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Smoothed Particle Hydrodynamics Implementation in Houdini</h3>
              <img 
                  src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg" 
                  style={{ 
                      maxWidth: '80%', 
                      height: 'auto', 
                      borderRadius: '3px',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)' 
                  }}
              />
            </div>

            <div>
                {/* Description */}
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                  Custom SPH solver with pressure, viscosity, and surface tension.
                </p>
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                  Supports 3K+ particles at 30 FPS.
                </p><p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                  Applies XSPH smoothing, hybrid pressure solvers, and dynamic time stepping for stability.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a href="https://github.com/CaiaG/SPHFluidSimulation-in-Houdini" style={{ 
                      color: '#000f3fff', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                    }}>
                        Code{' '}|
                    </a>
                    <a href="https://docs.google.com/presentation/d/16x6bA4EYJor1JWqmlA5Iz0BD-3cVK-eLnIrsPnyrGdA/edit?usp=sharing" style={{ 
                      color: '#000f3fff', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                    }}>
                      Presentation{' '}|
                    </a>
                  
                    <a href="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/ProjectSpecificationGuideFinalDraft.pdf" style={{ 
                      color: '#000f3fff', 
                      fontWeight: 'bold',
                      textDecoration: 'none', 
                    }}>
                      Writeup
                    </a>
                </div>
            </div>
        </div>

        {/* === Interactive Computer graphics === */} 
        <div style={{...projectCardStyle, border: '1px solid #2d728f'}}>
    
            <div style={{ textAlign: 'center' }}> 
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Interactive Computer Graphics</h3>
              <img 
                  src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg" 
                  style={{ 
                      maxWidth: '60%', 
                      height: 'auto', 
                      borderRadius: '3px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
                  }}
              />
            </div>

            <div>
                {/* Description */}
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                    Mini Minecraft using C++ and OpenGL: procedural terrain, texturing and L system implementations.
                </p>
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                    Rasterizer in OpenGL & Ray/Path tracer using Monte Carlo approximation.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a href="https://www.artstation.com/caiagelli9" style={{ 
                        color: '#000f3fff', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Portfolio
                    </a>
                </div>
            </div>
        </div>

        {/* === Working Search engine === */} 
        <div style={{...projectCardStyle, border: '1px solid #2d728f'}}>

            <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Distributed Search Engine</h3>

                {/* Description */}
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                    Full-stack search engine with distributed crawling, indexing, and ranking across 50k+ pages.
                </p>
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                    Scalable inverted index with hash-based partitioning; ranks 5k+ terms with TF-IDF and PageRank.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a href="https://github.com/CaiaG/DistributedSearchEngine" style={{ 
                        color: '#000f3fff', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                    }}>
                        Sample Code
                    </a>
                </div>
            </div>
        </div>

        {/* === 3D MRI Age Classification === */} 
        <div style={{...projectCardStyle, border: '1px solid #2d728f'}}>

            <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>3D MRI Feature Analysis</h3>

                {/* Description */}
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                    Built a 3D MRI preprocessing and classification pipeline using SimpleITK and MONAI.
                </p>
                <p style={{ lineHeight: '1', marginBottom: '0.5rem' }}>
                    Data trained on a DenseNet3D and evaluted with accuracy & confusion matrix for features such as age, and gender.
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a href="https://github.com/CaiaG/MRIclassificationpipeline" style={{ 
                        color: '#000f3fff', 
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
