import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CGProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  {/* Helper function */}
  const renderMedia = (project) => {
    const src = project.img || project.video;

    if (!src) {
      return (
        <div style={techPlaceholderBase}>
          <div style={gridOverlayStyle}></div>
          <div style={{ zIndex: 1, fontFamily: 'monospace', opacity: 0.85 }}>
            {project.label}
          </div>
        </div>
      );
    }

    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');

    if (isVideo) {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            aspectRatio: '16/10',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1rem',
            backgroundColor: '#1e3158',
          }}
        />
      );
    }

    return (
      <img
        src={src}
        alt={project.title}
        style={{
          width: '100%',
          aspectRatio: '16/10',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem',
          backgroundColor: '#1e3158',
        }}
      />
    );
  };

  const getImageSrc = (project) => {
    if (project.img) return project.img;
    if (project.demoUrl) {
      return `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.demoUrl)}?w=800&h=500`;
    }
    return null;
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

  const projects = [
    // --- TIER 1: CORE C++ & GRAPHICS SYSTEMS ---
    {
      id: 3,
      title: "Monte Carlo Path Tracer",
      year: "'24",
      description: "Physically-based Monte Carlo Path Tracer built from scratch in C++ and GLSL. Solves the rendering equation with global illumination, specular reflection/transmission, Cook-Torrance BSDFs, and Multiple Importance Sampling (MIS).",
      tags: ["C++", "GLSL", "RAY TRACING", "MIS", "PBR"],
      label: "PATH TRACER",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-full.jpg"
    },
    {
      id: 1,
      title: "SPH Fluid Simulation & Procedural River",
      year: "'25",
      description: "Custom Smoothed Particle Hydrodynamics liquid simulator and river pipeline in Houdini using VEX wrangles. Implements pressure, viscosity, and surface tension models supporting 3K+ particles at 30 FPS via XSPH smoothing.",
      tags: ["HOUDINI", "VEX", "SIMULATION", "C++"],
      label: "SPH FLUID SIM",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg"
    },
    {
      id: 2,
      title: "Mini Minecraft Engine",
      year: "'24",
      description: "Voxel game engine built in C++ and GLSL focusing on real-time rendering performance. Features procedural terrain generation across 4 biomes, multithreaded chunking, custom block texturing pipelines, and L-systems.",
      tags: ["C++", "GLSL", "OPENGL", "PROCEDURAL"],
      label: "MINI MINECRAFT",
      videoSrc: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/Mini%20Minecraft%20-%20Made%20with%20Clipchamp.mp4"

    },
    {
      id: 5,
      title: "GLSL Raymarcher & SDF Scene",
      year: "'24",
      description: "High-performance Signed Distance Field (SDF) ray-marching engine in GLSL and C++. Supports infinite domain repetition, dynamic CSG geometry, Cook-Torrance BSDF, and approximated subsurface scattering.",
      tags: ["GLSL", "C++", "SDF", "RAY MARCHING"],
      label: "GLSL RAYMARCHER",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg"
    },

    // --- TIER 2: ADVANCED SHADING & RENDERING ---
    {
      id: 6,
      title: "PBR Material Pipeline",
      year: "'24",
      description: "Physically-based material shading engine integrated into a custom path tracer. Implements complete texture attribute pipelines (albedo, roughness, metallic, normal mapping, AO) grounded in microfacet theory.",
      tags: ["C++", "PBR", "SHADERS", "RAY TRACING"],
      label: "PBR MATERIALS",
      videoSrc: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/pbrrec.mp4"
    },
    {
      id: 7,
      title: "Analytical Water Shader",
      year: "'26",
      description: "Real-time water shader on Shadertoy using multi-layered wave equations with golden-ratio phase shifts, ray-marched heightfield intersection, Horizon AO, and multi-sample Subsurface Scattering.",
      tags: ["GLSL", "SHADERTOY", "RAY MARCHING"],
      label: "WATER SHADER",
      videoSrc: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/wadasahder.mp4"
    },
    {
      id: 14,
      title: "C++ Software Rasterizer",
      year: "'24",
      description: "Built-from-scratch CPU software rasterization pipeline in C++. Implements core graphics stages including vertex processing, triangle clipping, perspective-correct attribute interpolation, and z-buffering.",
      tags: ["C++", "RASTERIZATION", "PIPELINE"],
      label: "SOFTWARE RASTERIZER",
      img: null
    },
    {
      id: 4,
      title: "CPU/GPU Ray Tracer",
      year: "'24",
      description: "Custom ray tracing engine built from scratch in C++ and GLSL. Implements ray-object intersection mathematics, acceleration structures, and illumination models for high-fidelity image synthesis.",
      tags: ["C++", "GLSL", "RAY TRACING"],
      label: "RAY TRACER",
      img: null
    },

    // --- TIER 3: TECHNICAL ART & PROCEDURAL WORKFLOWS ---
    {
      id: 11,
      title: "Dragon Blood Tree Kit & UE5 HISMs",
      year: "'26",
      description: "Procedural fractal tree generator in Blender integrated into Unreal Engine 5 using Hierarchical Instanced Static Meshes (HISMs) and multi-level LOD systems optimized for real-time rendering.",
      tags: ["UE5", "BLENDER", "PROCEDURAL", "HISMs"],
      label: "DRAGON TREE KIT",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/treerev1.png"
    },
    {
      id: 9,
      title: "Houdini Procedural Landscape",
      year: "'26",
      description: "Large-scale forested terrain generation pipeline in Houdini. Uses heightfield operators for land shaping, intelligent point scattering for vegetation, and custom ambient lighting pipelines.",
      tags: ["HOUDINI", "PROCEDURAL", "ENVIRONMENT"],
      label: "PROCEDURAL TERRAIN",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-hillytreespostprocessed-min.webp"
    },
    {
      id: 13,
      title: "Mario Custom Shaders & Post-Processing",
      year: "'24",
      description: "Shader suite featuring Blinn-Phong, procedural chrome, and MatCap materials on a Mario model, alongside full post-processing pipelines including Gaussian blur, bloom, and color filtering.",
      tags: ["GLSL", "SHADERS", "POST-PROCESSING"],
      label: "MARIO SHADERS",
      videoSrc: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/MarioShaders.mp4"
    },

    // --- TIER 4: 3D ASSETS & ENVIRONMENT STUDIES ---
    {
      id: 10,
      title: "Damascus Sword Asset",
      year: "'26",
      description: "High-fidelity Damascus steel 3D asset featuring custom interpolated noise texture maps for folded-steel patterns, paired with custom PBR material networks for leather, gold, and rope.",
      tags: ["BLENDER", "PBR", "3D MODELING"],
      label: "DAMASCUS SWORD",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sword3.webp"
    },
    {
      id: 8,
      title: "Residential Environment Study",
      year: "'26",
      description: "Architectural study of a multi-story residential building based on photographic reference. Built in Blender with parameterized material networks for precise spatial and texture definition.",
      tags: ["BLENDER", "3D MODELING", "TEXTURING"],
      label: "RESIDENTIAL STUDY",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-shackwip-1.webp"
    },
    {
      id: 12,
      title: "Pink Room Interior Environment",
      year: "'24",
      description: "Stylized architectural interior environment study. Focuses on color palette cohesion, dramatic lighting composition, and mood recreation based on photographic reference.",
      tags: ["3D MODELING", "LIGHTING", "ENVIRONMENT"],
      label: "PINK ROOM STUDY",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-caiagellienvfinal.jpg"
    },
    {
      id: 15,
      title: "3D Subterranean Cave Scene",
      year: null,
      description: "Organic cave environment sculpted using noise-driven displacement maps and geometric deformation. Features material networks contrasting wet and dry stone surfaces.",
      tags: ["3D MODELING", "TEXTURING", "ENVIRONMENT"],
      label: "3D CAVE SCENE",
      img: "https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia_gelli_EV_01.jpg"
    },

    // --- TIER 5: WORK IN PROGRESS ---
    {
      id: 16,
      title: "Procedural Erosion in Houdini",
      year: "'26",
      isWip: true,
      description: "In-progress Houdini system prototyping noise-based weathering and volume erosion to simulate dust accumulation and natural weathering on 3D assets.",
      tags: ["HOUDINI", "VEX", "PROCEDURAL", "WIP"],
      label: "PROCEDURAL EROSION",
      img: null
    },
    
  ];

  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  };

  const projectCardStyle = {
    padding: '1.25rem',
    borderRadius: '14px',
    backgroundColor: '#3B8EA5',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    border: '1px solid #2d728f',
    textAlign: 'left',
  };

  const techTagStyle = {
    backgroundColor: '#1e3158',
    color: '#fdf9d2',
    fontSize: '0.72rem',
    fontWeight: '700',
    padding: '0.2rem 0.55rem',
    borderRadius: '4px',
    letterSpacing: '0.04em',
    fontFamily: 'monospace',
  };

  const wipTagStyle = {
    backgroundColor: '#8B263E',
    color: '#fdf9d2',
    fontSize: '0.72rem',
    fontWeight: '800',
    padding: '0.2rem 0.55rem',
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
    background: '#1e3158',
    color: '#38bdf8',
  };

  const gridOverlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
  };

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

        .cg-card {
          border-radius: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .cg-card:hover { 
          transform: translateY(-6px) scale(1.02) !important;
          box-shadow: 0 0 25px rgba(41, 135, 160, 0.6) !important;
          background-color: #51a4bb !important;
          border-radius: 20px !important;
        }

        .back-btn {
          background-color: #1e3158;
          color: #fdf9d2;
          border: 1px solid #3B8EA5;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-btn:hover {
          background-color: #2d728f;
          transform: translateX(-3px);
        }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        isolation: 'isolate',
      }}>
        {/* Header Navigation Banner */}
        <div style={{ backgroundColor: '#2d728f', padding: '2.5rem 0 2rem 0', position: 'relative' }}>
          <div style={pageContainerStyle}>
            <button className="back-btn" onClick={() => navigate('/')}>
              ← Back to Main Portfolio
            </button>
            <h1 style={{ fontSize: '2.75rem', fontWeight: '800', margin: '1.25rem 0 0.5rem 0', color: '#fdf9d2', lineHeight: '1.1' }}>
              Computer Graphics Projects
            </h1>
           <p style={{ color: '#fdf9d2', fontSize: '1.05rem', margin: '1.0rem auto 0.5rem auto', opacity: 0.9, maxWidth: '800px', lineHeight: '1.5', textAlign: 'center' }}>
            Real-time rendering engines, physically-based ray tracers, procedural environment systems, VEX fluid solvers, and custom GLSL shader pipelines.
          </p>
          </div>
        </div>

        {/* Projects Grid (3 Cards Per Row) */}
        <div style={{ backgroundColor: '#fdf9d2ff', minHeight: '80vh', padding: '2.5rem 0 4rem 0' }}>
          <div style={pageContainerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {projects.map((project) => (
              <div key={project.id} className="cg-card" style={projectCardStyle}>
                {project.videoSrc ? (
                  <video
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      aspectRatio: '16/10',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      backgroundColor: '#1e3158',
                    }}
                  />
                ) : getImageSrc(project) ? (
                  <img
                    src={getImageSrc(project)}
                    alt={project.title}
                    style={{
                      width: '100%',
                      aspectRatio: '16/10',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      backgroundColor: '#1e3158',
                    }}
                  />
                ) : (
                  <div style={techPlaceholderBase}>
                    <div style={gridOverlayStyle}></div>
                    <div style={{ zIndex: 1, fontFamily: 'monospace', opacity: 0.85 }}>
                      {project.label}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: '#0F172A', lineHeight: '1.25' }}>
                    {project.title}
                  </h3>
                  {project.year && (
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1e3158', fontFamily: 'monospace' }}>
                      {project.year}
                    </span>
                  )}
                </div>

                  <p style={{ fontSize: '0.92rem', color: '#1f2734ff', flexGrow: 1, lineHeight: '1.45', textAlign: 'left', margin: '0 0 1rem 0' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={tag === 'WIP' ? wipTagStyle : techTagStyle}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CGProjects;