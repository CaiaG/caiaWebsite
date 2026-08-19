import React, { useRef, useState, useEffect } from 'react';
import HeroBackground from '../components/HeroBackground';

function Home() {
  const scrollRef = useRef(null);
  const [isDragging, setDragging] = useState(false);

  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    velocity: 0,
    lastX: 0,
    rafId: null,
  });

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'A') return;
    e.preventDefault();
    setDragging(true);

    cancelAnimationFrame(dragInfo.current.rafId);

    dragInfo.current.startX = e.pageX - scrollRef.current.offsetLeft;
    dragInfo.current.scrollLeft = scrollRef.current.scrollLeft;
    dragInfo.current.lastX = e.pageX;
    dragInfo.current.velocity = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragInfo.current.startX) * 1.5;

    dragInfo.current.velocity = e.pageX - dragInfo.current.lastX;
    dragInfo.current.lastX = e.pageX;

    scrollRef.current.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const smoothMotion = () => {
    if (Math.abs(dragInfo.current.velocity) > 0.01) {
      scrollRef.current.scrollLeft -= dragInfo.current.velocity * 15;
      dragInfo.current.velocity *= 0.95;
      dragInfo.current.rafId = requestAnimationFrame(smoothMotion);
    }
  };

  const handleMouseLeave = () => {
    setDragging(false);
    smoothMotion();
  };

  const handleMouseUp = () => {
    setDragging(false);
    smoothMotion();
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(dragInfo.current.rafId);
  }, []);

  // --- STYLES ---
  const pageContainerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 1.5rem',
  };

  const heroSectionStyle = {
    padding: '4rem 0 3rem 0',
    textAlign: 'left',
    color: '#fdf9d2',
  };

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: '800',
    margin: '0 0 1rem 0',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  };

  const heroSubtitleStyle = {
    fontSize: '1.35rem',
    fontWeight: '600',
    margin: '1rem 0 0.5rem 0',
  };

  const sectionHeaderStyle = {
    color: '#1e4d61',
    fontSize: '1.85rem',
    fontWeight: '700',
    margin: '2.5rem 0 1.5rem 0',
    textAlign: 'left',
  };

  const projectCardStyle = {
    minWidth: '340px',
    maxWidth: '360px',
    flexShrink: 0,
    padding: '1.25rem',
    borderRadius: '16px',
    backgroundColor: '#3B8EA5',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    border: '1px solid #2d728f',
    textAlign: 'left',
  };

  const horizontalScrollContainer = {
    display: 'flex',
    overflowX: 'auto',
    gap: '1.5rem',
    padding: '1.5rem 0 1.5rem 0',
    cursor: isDragging ? 'grabbing' : 'grab',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  const techTagStyle = {
    backgroundColor: '#1e3158',
    color: '#fdf9d2',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    letterSpacing: '0.05em',
    fontFamily: 'monospace',
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
    overflow: 'hidden',
  };

  const gridOverlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
  };

  const gridOverlayStyle2 = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(#0000000a 1px, transparent 1px), linear-gradient(90deg, #0000000a 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
  };

  const dividerStyle = {
    margin: '2.5rem 0',
    border: 'none',
    height: '0',
    borderTop: '2px solid #2D728F33',
  };

  const jobEntryStyle = {
    marginBottom: '2rem',
    paddingLeft: '1.25rem',
    borderLeft: '4px solid #2D728F',
    textAlign: 'left',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const titleStyle = {
    fontSize: '1.15rem',
    fontWeight: '600',
    margin: '0',
    color: '#1F2937',
  };

  const dateStyle = {
    color: '#6B7280',
    fontSize: '0.85rem',
    fontWeight: '500',
  };

  const companyStyle = {
    color: '#4B5563',
    fontSize: '0.95rem',
    fontStyle: 'italic',
    margin: '0.25rem 0 0.75rem 0',
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '1.25rem',
    paddingLeft: '0',
    lineHeight: '1.5',
    fontSize: '0.95rem',
    color: '#1f2734',
  };

  const skillCategoryTitleStyle = {
    textAlign: 'left',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#1E4D61',
    margin: '1.25rem 0 0.5rem 0',
  };

  const linkStyle = {
    color: '#1e3158ff',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const svgPattern = `
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
    <rect fill='%23ffffff' width='24' height='24'/>
    <defs>
        <linearGradient id='a' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='0' stop-color='%232d728f'/>
        <stop offset='1' stop-color='%23244F67'/>
        </linearGradient>
    </defs>
    <pattern id='b' width='18' height='15' patternUnits='userSpaceOnUse'>
        <circle fill='%23ffffff' cx='9' cy='9' r='9'/>
    </pattern>
    <rect width='100%' height='100%' fill='url(%23a)'/>
    <rect width='100%' height='100%' fill='url(%23b)' fill-opacity='0.04'/>
    </svg>
  `;
  const encodedDataUri = `url("data:image/svg+xml;utf8,${svgPattern.replace(/\n/g, '').replace(/\s+/g, ' ')}")`;

  return (
    <div>
      <style>{`
        body, html { 
          margin: 0; 
          background-image: ${encodedDataUri};
          background-attachment: fixed;
          background-size: cover;
          background-color: #2d728f; 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }

        .project-card {
          border-radius: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .project-card:hover { 
          transform: translateY(-6px);
          box-shadow: 0 0 25px rgba(41, 135, 160, 0.6) !important;
          background-color: #51a4bb !important;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    <div style={{maxWidth: '1100px',margin: '2rem auto', borderRadius: '10px', overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)',position: 'relative',isolation: 'isolate',
    }}>
        {/* Hero Outer Wrapper */}
        <div style={{ backgroundColor: '#2d728f', boxShadow: '0 0px 30px rgba(0, 0, 0, 0.15)',
            position: 'relative',overflow: 'hidden',isolation: 'isolate' }}>
            
            <HeroBackground />
            <div style={{ ...pageContainerStyle, zIndex: 10, position: 'relative'}}>
            <div style={heroSectionStyle}>
                
                <h1 style={heroTitleStyle}>Caia Gelli</h1>
                <div style={{ fontSize: '0.95rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href="https://www.linkedin.com/in/caia-gelli-14b6a3225/" style={{...linkStyle, color:' #0c1a1c'}}>
                    LinkedIn
                </a>
                <span style={{ color: '#0c1a1c' }}>|</span>
                <a href="https://github.com/CaiaG" style={{...linkStyle, color:' #0c1a1c'}}>
                    GitHub
                </a>
                </div>

                <h2 style={heroSubtitleStyle}>Software Engineering | Computer Graphics</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '750px', margin: '0.5rem 0 0 0' }}>
                Penn DMD graduate bridging C++ software development with 3D production pipelines. 
                Specializing in real-time rendering, custom shaders, and procedural texturing—open 
                to Graphics Software Engineering, Technical Art, and Shading/LookDev roles.
                </p>
            </div>
            </div>
        </div>

        {/* Main Content Area */}
        <div style={{ backgroundColor: '#fdf9d2ff', minHeight: '100vh', padding: '2rem 0 4rem 0'}}>
            <div style={pageContainerStyle}>

            
            {/* Featured Projects */}
            <h2 style={sectionHeaderStyle}>Featured Projects</h2>

            <div
                style={horizontalScrollContainer}
                className="no-scrollbar"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {/* Project 1 */}
                <div className="project-card" style={projectCardStyle}>
                <img
                    src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg"
                    alt="SPH Implementation"
                    style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    Smoothed Particle Hydrodynamics Implementation in Houdini
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    A custom SPH solver with pressure, viscosity, and surface tension. It applies XSPH smoothing, hybrid pressure solvers, and dynamic time stepping for stability. Supports 3K+ particles at 30 FPS.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>HOUDINI</span>
                    <span style={techTagStyle}>VEX</span>
                    <span style={techTagStyle}>C++</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://github.com/CaiaG/SPHFluidSimulation-in-Houdini" style={linkStyle}>Code</a>
                    <span style={{ color: '#1e3158ff' }}>|</span>
                    <a href="https://docs.google.com/presentation/d/16x6bA4EYJor1JWqmlA5Iz0BD-3cVK-eLnIrsPnyrGdA/edit?usp=sharing" style={linkStyle}>Presentation</a>
                    <span style={{ color: '#1e3158ff' }}>|</span>
                    <a href="https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/ProjectSpecificationGuideFinalDraft.pdf" style={linkStyle}>Writeup</a>
                </div>
                </div>

                {/* Project 2 */}
                <div className="project-card" style={projectCardStyle}>
                <img
                    src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg"
                    alt="Interactive Computer Graphics"
                    style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    Interactive Computer Graphics
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    Portfolio including: Mini Minecraft using C++ and OpenGL (procedural terrain, texturing and L-system implementations), Rasterizer in OpenGL & Ray/Path tracer using Monte Carlo approximation, 3D Modeling, etc.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>C++</span>
                    <span style={techTagStyle}>GLSL</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://www.artstation.com/caiagelli9" style={linkStyle}>Portfolio</a>
                </div>
                </div>

                {/* Project 3 */}
                <div className="project-card" style={projectCardStyle}>
                <img
                    src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/treerev1.png"
                    alt="Dragon's Blood Tree Kit"
                    style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    Dragon's Blood Tree Kit (In Progress)
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    Procedural modular foliage kit for a dragon's blood tree, synthesized in Unreal Engine and experimenting with different techniques to optimize performance. Uses an L-system branching algorithm to replicate the unique branching pattern and umbrella shape canopy.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>Unreal Engine</span>
                    <span style={techTagStyle}>Blender</span>
                    <span style={techTagStyle}>L-Systems</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://app.milanote.com/1W3ZZU1Qvua02H/dragon-tree?p=m441fkw92yV" style={linkStyle}>Progress Board</a>
                </div>
                </div>

                {/* Project 4 */}
                <div className="project-card" style={projectCardStyle}>
                <img
                    src="https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/IMG_9258.JPEG"
                    alt="Virtual Assistant"
                    style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    Virtual Assistant for OR Planner
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    Prototype for the assistant of an Operation Room planning application made in Unreal Engine. Integrates Convai and Kokoro (via FastAPI) for real-time voice interaction and character animation. Demoed on virtual production stage.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>Unreal Engine</span>
                    <span style={techTagStyle}>FastAPI</span>
                    <span style={techTagStyle}>Docker</span>
                    <span style={techTagStyle}>Python</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://github.com/CaiaG/TTSandASRforVirtualAssistantProject" style={linkStyle}>Code & Demo</a>
                </div>
                </div>

                {/* Project 5 */}
                <div className="project-card" style={projectCardStyle}>
                <div style={{ ...techPlaceholderBase, background: '#243252', color: '#38bdf8' }}>
                    <div style={gridOverlayStyle}></div>
                    <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <svg width="64" height="64" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '8px',  }}><path opacity="0.4" d="M64 64h64v16H80v48H64V64zm320 0h64v64h-16V80h-48V64zM64 384h16v48h48v16H64v-64zm384 0v64h-64v-16h48v-48h16z" /><path opacity="0.25" d="M128 128h256v16H128zm0 240h256v16H128zm0-240v256h-16V128zm256 0v256h16V128z" /><circle cx="128" cy="128" r="8" /><circle cx="384" cy="128" r="8" /><circle cx="128" cy="384" r="8" /><circle cx="384" cy="384" r="8" /><circle cx="256" cy="176" r="14" /><path d="M248 188h16v24h-16z" /><path d="M256 200c-66.3 0-120 53.7-120 120h240c0-66.3-53.7-120-120-120z" /><path d="M112 332h288v16c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-16z" /><path d="M360 190l6 18 18 6-18 6-6 18-6-18-18-6 18-6z" />
                    <path opacity="0.7" d="M160 210l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" /></svg>
                    <div style={{ fontFamily: 'monospace', opacity: 0.8 }}>OPTAIMEAL Prototype</div>
                    </div>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    OPTAIMEAL Prototype
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    OPTAIMEAL is a full-stack meal planning and logistics web application built with React, TypeScript, FastAPI, and SQLite that 
                    streamlines custom menu curation and scheduling.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>SQL</span>
                    <span style={techTagStyle}>Python</span>
                    <span style={techTagStyle}>TypeScript</span>
                    <span style={techTagStyle}>FastAPI</span>
                    <span style={techTagStyle}>React</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://github.com/CaiaG/Optaimeal-Prototype/tree/dev" style={linkStyle}>Github</a>
                </div>
                </div>

                {/* Project 6 */}
                <div className="project-card" style={projectCardStyle}>
                <div style={{ ...techPlaceholderBase, background: '#0f172a', color: '#38bdf8' }}>
                    <div style={gridOverlayStyle}></div>
                    <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <svg width="50" height="50" viewBox="0 0 640 640" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '8px' }}>
                        <path d="M310.6 194.3L243.4 222.5L243.4 107.2L188.7 297.5L243.4 273.3L243.4 403.6L310.6 194.3zM227.4 97.6L226.1 102.3L210.9 155.2C170.6 170.7 142 209.8 142 255.5C142 307.8 176.3 351.4 225.4 361L225.4 414.6C147.5 404.1 90 336.4 90 255.6C90 175.1 149.8 108.4 227.4 97.6zM538.8 544.8C527.6 556 515.7 557.1 510.2 555.3C504.8 553.5 483.1 535.4 449.8 510.9C416.5 486.3 416.2 475.2 406.8 454.2C397.4 433.3 376.4 411.6 349.3 401.8L339.6 387.1C314.9 404 286.6 414 258.3 415.8L260.4 409.2L276.3 359.7C322.8 347.8 357.2 305.7 357.2 255.5C357.2 201 318.8 153.4 261.2 148.4L261.2 96.3C344.4 101.4 410 170.8 410 255.6C410 289.2 398.8 320.3 381 346L395.6 355.6C405.4 382.7 427.1 403.6 448 413C468.9 422.4 480.2 422.7 504.8 456C529.4 489.2 547.5 510.9 549.3 516.3C551.1 521.7 550 533.6 538.8 544.8zM528.9 526.9C528.9 522.5 525.3 518.9 520.9 518.9C516.5 518.9 512.9 522.5 512.9 526.9C512.9 531.3 516.5 534.9 520.9 534.9C525.3 534.9 528.9 531.3 528.9 526.9z"/>
                    </svg>
                    <div style={{ fontFamily: 'monospace', opacity: 0.8 }}>DISTRIBUTED SEARCH</div>
                    </div>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    Distributed Search Engine
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    A full-stack search engine with distributed crawling, indexing, and ranking across 50k+ pages. Includes scalable inverted index with hash-based partitioning that ranks 5k+ terms with TF-IDF and PageRank.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>Distributed Systems</span>
                    <span style={techTagStyle}>Java</span>
                    <span style={techTagStyle}>PageRank</span>
                    <span style={techTagStyle}>Indexing</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://github.com/CaiaG/DistributedSearchEngine" style={linkStyle}>Sample Code</a>
                </div>
                </div>

                {/* Project 7 */}
                <div className="project-card" style={projectCardStyle}>
                <div style={{ ...techPlaceholderBase, background: '#abf0e8ff', color: '#22524dff' }}>
                    <div style={gridOverlayStyle2}></div>
                    <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
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
                    <div style={{ fontFamily: 'monospace', opacity: 0.8, fontSize: '0.75rem' }}>MRI FEATURE ANALYSIS</div>
                    </div>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', margin: '0 0 0.5rem 0', textAlign: 'left', color: '#0F172A' }}>
                    3D MRI Feature Analysis
                </h3>
                <p style={{ fontSize: '0.98 rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.4', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    Built a 3D MRI preprocessing and classification pipeline using SimpleITK and MONAI. Trained the MRI data on a DenseNet3D and evaluated with accuracy & confusion matrix for features such as age and gender.
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={techTagStyle}>Python</span>
                    <span style={techTagStyle}>DenseNet3D</span>
                    <span style={techTagStyle}>Monai</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="https://github.com/CaiaG/MRIclassificationpipeline" style={linkStyle}>Sample Code</a>
                </div>
                </div>
            </div>

            {/* Experience */}
            <div style={dividerStyle}></div>
            <h2 style={sectionHeaderStyle}>Experience</h2>

            <div>
                {/* Job Entry 1 */}
                <div style={jobEntryStyle}>
                <div style={headerStyle}>
                    <h3 style={titleStyle}>Realtime Software Engineering Intern</h3>
                    <span style={dateStyle}>June 2025 – August 2025</span>
                </div>
                <p style={companyStyle}>Arthrex | Naples, FL</p>
                <ul style={listStyle}>
                    <li>Prototyped a virtual assistant in Unreal Engine with custom C++ TTS/ASR pipelines containerized in Docker; demoed to AR/VR team lead on Arthrex’s Holodeck virtual production stage using Pixera for 3D projection.</li>
                    <li>Integrated and tested real-time AI speech tools: Convai, NVIDIA ACE, Kokoro (via FastAPI), and NVIDIA Parakeet.</li>
                    <li>Prototyped 5 interactive AR ads for Arthrex Vet team using the ImagineWebAR plugin for Unity.</li>
                </ul>
                </div>

                {/* Job Entry 2 */}
                <div style={jobEntryStyle}>
                <div style={headerStyle}>
                    <h3 style={titleStyle}>Research Assistant for Department of Radiology</h3>
                    <span style={dateStyle}>June 2024 – September 2024</span>
                </div>
                <p style={companyStyle}>Penn Medicine | Remote</p>
                <ul style={listStyle}>
                    <li>Used MONAI framework on ~500 MRI images to identify features that predict the development of Alzheimer's.</li>
                    <li>Implemented models with DenseNet architecture to improve predictive accuracy from 50% to 85%.</li>
                </ul>
                </div>

                {/* Job Entry 3 */}
                <div style={jobEntryStyle}>
                <div style={headerStyle}>
                    <h3 style={titleStyle}>CS Intern</h3>
                    <span style={dateStyle}>June 2023 – July 2023</span>
                </div>
                <p style={companyStyle}>University of Ghana Noguchi Memorial Institute for Medical Research | Ghana, Accra</p>
                <ul style={listStyle}>
                    <li>Optimized food recognition AI (FRANI) to support nutrition programs in Global South schools.</li>
                    <li>Consolidated 100+ class labels and boosted model performance by using Fastai, WandB, and Optuna.</li>
                </ul>
                </div>
            </div>

            {/* Skills */}
            <div style={dividerStyle}></div>
            <h2 style={sectionHeaderStyle}>Skills</h2>

            <p style={skillCategoryTitleStyle}>Programming Languages</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {['C/C++', 'Java', 'Python', 'Vite/React', 'SQL', 'R', 'GLSL'].map((skill) => (
                <span
                    key={skill}
                    style={{
                    backgroundColor: '#2d728f',
                    color: '#fdf9d2',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '16px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    }}
                >
                    {skill}
                </span>
                ))}
            </div>

            <p style={skillCategoryTitleStyle}>3D Graphics & Tools</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {['Maya', 'Blender', 'ZBrush', 'Houdini', 'Unity', 'Unreal Engine'].map((skill) => (
                <span
                    key={skill}
                    style={{
                    backgroundColor: '#2d728f',
                    color: '#fdf9d2',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '16px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    }}
                >
                    {skill}
                </span>
                ))}
            </div>

            {/* Contact */}
            <div style={dividerStyle}></div>
            <h2 style={sectionHeaderStyle}>Contact</h2>

            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
                <a href="mailto:caiaygelli@gmail.com" style={{ ...linkStyle, fontSize: '1rem' }}>
                caiaygelli@gmail.com
                </a>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem' }}>
                <a href="https://www.linkedin.com/in/caia-gelli-14b6a3225/" style={linkStyle}>
                    LinkedIn
                </a>
                <span style={{ color: '#1e3158ff' }}>|</span>
                <a href="https://github.com/CaiaG" style={linkStyle}>
                    GitHub
                </a>
                </div>
            </div>

            {/* Footer attribution */}
            <div style={{ marginTop: '4rem', textAlign: 'left' }}>
                <a
                href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/"
                style={{
                    color: '#6B7280',
                    fontWeight: '400',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                }}
                >
                Free SVG Backgrounds and Patterns by SVGBackgrounds.com
                </a>
            </div>

            </div>
        </div>
        </div>
    </div>
  );
}

export default Home;