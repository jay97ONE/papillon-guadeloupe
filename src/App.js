import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('particuliers');
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const servicesParticuliers = [
    {
      title: "Visite Conseil Personnalisée",
      description: "Analyse de votre terrain et conseils d'experts pour optimiser votre aménagement paysager selon vos besoins et votre budget.",
      price: "À partir de 225€ TTC",
      duration: "2h à domicile",
      includes: [
        "Analyse complète du terrain",
        "Conseils personnalisés d'agencement",
        "Préconisations végétales adaptées au climat",
        "Proposition de matériaux",
        "Croquis d'idées d'aménagement"
      ]
    },
    {
      title: "Conception Complète 3D",
      description: "Création d'un aménagement paysager sur mesure avec plans techniques et visualisations 3D réalistes.",
      price: "Sur devis",
      duration: "3-4 semaines",
      includes: [
        "Plans de masse et plantation légendaires",
        "Rendus 3D plusieurs points de vue",
        "Palette végétale détaillée",
        "Documents techniques complets",
        "Accompagnement dans la réalisation"
      ]
    }
  ];

  const servicesProfessionnels = [
    {
      title: "Études Paysagères Complexes",
      description: "Conception d'aménagements paysagers pour projets d'envergure : hôtels, résidences, espaces publics.",
      price: "Sur devis",
      duration: "4-8 semaines",
      includes: [
        "Étude d'impact environnemental",
        "Plans techniques conformes aux normes",
        "Modélisation 3D photo-réaliste",
        "Vidéos 3D de présentation",
        "Accompagnement réglementaire"
      ]
    },
    {
      title: "Maîtrise d'Œuvre Paysagère",
      description: "Suivi complet de vos projets d'aménagement, de la conception à la réalisation avec nos partenaires qualifiés.",
      price: "Sur devis",
      duration: "Variable",
      includes: [
        "Coordination des intervenants",
        "Suivi de chantier",
        "Contrôle qualité",
        "Réception des travaux",
        "Garantie de conformité"
      ]
    }
  ];

  const documentsInclus = [
    {
      category: "Documents papiers",
      items: [
        "Plan de masse légendaire",
        "Plan de plantation légendaire", 
        "Palette végétale et quantitatif",
        "Images 3D plusieurs points de vue",
        "Proposition de mobiliers extérieurs",
        "Documents techniques",
        "Palette matériaux et quantitatif",
        "Plan avec cotation"
      ]
    },
    {
      category: "Documents numériques",
      items: [
        "Rendus 3D plusieurs points de vue (différentes saisonnalités)",
        "Visualisation horaires variables (jour/nuit)",
        "Dossier de présentation PDF",
        "Plans techniques en PDF",
        "Vidéo 3D (différentes saisonnalités)",
        "Fichiers sources modifiables"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Papillon Guadeloupe Création a transformé notre espace extérieur en véritable havre de paix. Leur expertise technique et leur créativité ont dépassé nos attentes.",
      author: "Marie D., Propriétaire villa Les Abymes",
      rating: 5
    },
    {
      quote: "Collaboration parfaite pour l'aménagement de notre complexe hôtelier. Plans 3D précis, respect des délais et rendu exceptionnel.",
      author: "Jean-Luc P., Directeur Hôtel Tropical Resort",
      rating: 5
    },
    {
      quote: "Service professionnel de A à Z. La visite conseil nous a permis d'optimiser notre budget et d'obtenir le jardin de nos rêves.",
      author: "Sophie L., Résidence Gosier",
      rating: 5
    }
  ];

  const highlights = [
    { title: "Expertise Tropicale", description: "Connaissance approfondie de la flore et du climat guadeloupéen", icon: "🌺" },
    { title: "Visualisation 3D", description: "Rendus photo-réalistes pour valider votre projet avant réalisation", icon: "🎨" },
    { title: "Accompagnement Complet", description: "De la conception à la réalisation avec nos partenaires qualifiés", icon: "🤝" }
  ];

  const [portfolioSliders, setPortfolioSliders] = useState([50, 50, 50, 50, 50, 50]);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const portfolio = [
    {
      id: 1,
      title: "Villa moderne - Transformation complète",
      before: "https://images.unsplash.com/photo-1673370491774-42a963ca1ffd?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1758812647166-6d4166137f19?w=600&h=400&fit=crop",
      category: "Particulier",
      location: "Les Abymes",
      description: "Transformation complète d'un jardin résidentiel avec création d'espaces de vie extérieurs, piscine paysagère et végétation tropicale.",
      services: ["Conception 3D", "Plans techniques", "Suivi de réalisation"]
    },
    {
      id: 2,
      title: "Hôtel de luxe - Aménagement tropical",
      before: "https://images.unsplash.com/photo-1598693452686-a428df8f83cd?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?w=600&h=400&fit=crop",
      category: "Professionnel",
      location: "Saint-François",
      description: "Aménagement paysager complet d'un complexe hôtelier 4 étoiles avec jardins thématiques, espaces détente et parcours botaniques.",
      services: ["Étude paysagère", "Maîtrise d'œuvre", "Coordination", "Suivi travaux"]
    },
    {
      id: 3,
      title: "Résidence privée - Jardin zen tropical",
      before: "https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?w=600&h=400&fit=crop",
      category: "Particulier",
      location: "Gosier",
      description: "Création d'un jardin zen avec bassins, végétation exotique et espaces de méditation dans un esprit tropical contemporain.",
      services: ["Visite conseil", "Conception 3D", "Palette végétale"]
    },
    {
      id: 4,
      title: "Restaurant tropical - Terrasse paysagée",
      before: "https://images.unsplash.com/photo-1598693452686-a428df8f83cd?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?w=600&h=400&fit=crop",
      category: "Professionnel",
      location: "Sainte-Anne",
      description: "Aménagement d'une terrasse de restaurant avec végétation luxuriante, éclairage d'ambiance et espaces clients optimisés.",
      services: ["Étude commerciale", "Conception 3D", "Éclairage paysager"]
    },
    {
      id: 5,
      title: "Villa familiale - Jardin et piscine",
      before: "https://images.unsplash.com/photo-1673370491774-42a963ca1ffd?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1758812647166-6d4166137f19?w=600&h=400&fit=crop",
      category: "Particulier",
      location: "Baie-Mahault",
      description: "Réaménagement complet d'un jardin familial avec zone piscine, aire de jeux enfants et espaces de détente parents.",
      services: ["Visite conseil", "Plans techniques", "Coordination travaux"]
    },
    {
      id: 6,
      title: "Résidence touristique - Jardins communs",
      before: "https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1640627349323-82aa2da94150?w=600&h=400&fit=crop",
      category: "Professionnel",
      location: "Le Moule",
      description: "Conception des espaces verts d'une résidence de vacances avec jardins partagés, aires de détente et cheminements piétons.",
      services: ["Étude paysagère", "Plans directeurs", "Maîtrise d'œuvre"]
    }
  ];

  const filteredPortfolio = selectedCategory === 'Tous' 
    ? portfolio 
    : portfolio.filter(p => p.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { line-height: 1.6; color: #1f2937; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleAnimation {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-scale-bg {
          animation: scaleAnimation 20s ease-in-out infinite alternate;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          font-size: 1rem;
          text-decoration: none;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #16a34a, #059669);
          color: white;
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(22, 163, 74, 0.4);
        }
        
        .btn-outline-white {
          background: rgba(255, 255, 255, 0.95);
          color: #15803d;
          border: 2px solid #16a34a;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .btn-outline-white:hover {
          background: #16a34a;
          color: white;
        }
        
        .btn-secondary {
          background: white;
          color: #15803d;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .btn-secondary:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid white;
          color: white;
        }
        
        .btn-outline:hover {
          background: white;
          color: #15803d;
        }
        
        .card-hover {
          transition: all 0.3s;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .icon-hover:hover {
          transform: scale(1.2) rotate(10deg);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tab {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .tab.active {
          background: #16a34a;
          color: white;
          border-color: #16a34a;
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2rem !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #16a34a, #059669)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)'
            }}>🦋</div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a' }}>Papillon Guadeloupe</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Création Paysagère</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['home', 'services', 'realisations', 'processus', 'contact'].map(page => (
              <a 
                key={page}
                href="#" 
                onClick={() => setCurrentPage(page)} 
                style={{ 
                  color: currentPage === page ? '#16a34a' : '#4b5563', 
                  textDecoration: 'none', 
                  fontWeight: 500,
                  transition: 'color 0.3s'
                }}
              >
                {page === 'home' ? 'Accueil' : page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            ))}
            <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>Demander un devis</button>
          </nav>
        </div>
      </header>

      {/* HOME PAGE - Avec animations complètes */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="animate-scale-bg" style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1758612120966-b20c01160c7b?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.4), transparent)'
            }} />

            <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', zIndex: 10 }}>
              <div style={{ maxWidth: '900px' }}>
                <div className="animate-fade-in-up" style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(to right, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '2rem',
                  color: 'white',
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  🌺 Spécialiste des Jardins Tropicaux
                </div>

                <h1 className="hero-title animate-fade-in-up delay-200" style={{
                  fontSize: '4rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2,
                  opacity: 0
                }}>
                  Architecte paysagiste de{' '}
                  <span className="gradient-text" style={{ 
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    jardins d'exception
                  </span>
                  {' '}en Guadeloupe
                </h1>

                <p className="animate-fade-in-up delay-400" style={{
                  fontSize: '1.25rem',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '2rem',
                  maxWidth: '700px',
                  lineHeight: 1.8,
                  opacity: 0
                }}>
                  De la conception 3D à la réalisation, nous donnons vie à vos projets d'aménagement paysager 
                  avec l'expertise d'un climat tropical unique et la passion du détail.
                </p>

                <div className="animate-fade-in-up delay-600" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', opacity: 0 }}>
                  <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
                    Obtenir un devis gratuit
                  </button>
                  <button className="btn btn-outline-white" onClick={() => setCurrentPage('realisations')}>
                    Découvrir nos réalisations
                  </button>
                </div>

                <div className="animate-fade-in delay-800" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', opacity: 0 }}>
                  {['Visualisation 3D incluse', 'Expertise climat tropical', 'Suivi personnalisé'].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      color: 'white'
                    }}>
                      <svg style={{ width: '20px', height: '20px', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, white, #f0fdf4)' }} id="highlights" data-animate>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  borderRadius: '2rem',
                  color: '#15803d',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Pourquoi nous choisir ?
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Une expertise unique en Guadeloupe
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Nous combinons passion du paysagisme, expertise tropicale et technologies modernes pour créer des jardins d'exception.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {highlights.map((item, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid #e5e7eb',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div className="icon-hover" style={{ 
                      fontSize: '4rem', 
                      marginBottom: '1rem',
                      transition: 'transform 0.3s'
                    }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#6b7280', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Services */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>Nos Services</div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Des solutions pour tous vos projets
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Particuliers ou professionnels, nous avons la solution adaptée à vos besoins.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                {[
                  { icon: '🏠', title: 'Particuliers', desc: 'Pour votre résidence', items: ['Visite conseil personnalisée', 'Conception 3D complète', 'À partir de 225€ TTC'], bg: '#dbeafe' },
                  { icon: '🏢', title: 'Professionnels', desc: 'Projets d\'envergure', items: ['Études paysagères complexes', 'Maîtrise d\'œuvre paysagère', 'Hôtels, résidences, espaces publics'], bg: '#d1fae5' }
                ].map((cat, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: cat.bg,
                        borderRadius: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem'
                      }}>{cat.icon}</div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cat.title}</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{cat.desc}</p>
                      </div>
                    </div>
                    <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                      {cat.items.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0', fontSize: '0.875rem' }}>
                          <svg style={{ width: '16px', height: '16px', color: '#16a34a', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setCurrentPage('services')}>
                      Découvrir nos services
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(135deg, #16a34a, #059669)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }} id="stats" data-animate>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==")',
              opacity: 0.4
            }} />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                {[
                  { num: '50+', label: 'Projets réalisés', delay: '0s' },
                  { num: '15+', label: 'Clients professionnels', delay: '0.1s' },
                  { num: '98%', label: 'Clients satisfaits', delay: '0.2s' },
                  { num: '10+', label: 'Ans d\'expérience', delay: '0.3s' }
                ].map((stat, i) => (
                  <div key={i} style={{ animationDelay: stat.delay, opacity: 0 }} className={isVisible.stats ? 'animate-scale-in' : ''}>
                    <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem' }}>{stat.num}</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #f8fafc, white)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  borderRadius: '2rem',
                  color: '#15803d',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>Témoignages</div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  La satisfaction de nos clients
                </h2>
                <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                  Découvrez les retours de nos clients qui nous ont fait confiance
                </p>
              </div>

              <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: 'white',
                padding: '3rem',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '2px solid #e5e7eb'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} style={{ width: '20px', height: '20px', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                    "{testimonials[testimonialsIndex].quote}"
                  </blockquote>
                  <footer style={{ fontWeight: 600 }}>— {testimonials[testimonialsIndex].author}</footer>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                  <button
                    onClick={() => setTestimonialsIndex(i => i === 0 ? testimonials.length - 1 : i - 1)}
                    style={{
                      background: 'white',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >←</button>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTestimonialsIndex(i)}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: i === testimonialsIndex ? '#16a34a' : '#d1d5db',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setTestimonialsIndex(i => i === testimonials.length - 1 ? 0 : i + 1)}
                    style={{
                      background: 'white',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >→</button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(135deg, #16a34a, #059669)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==")',
              opacity: 0.3
            }} />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', textAlign: 'center' }}>
              <div className="animate-float" style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}>🦋</div>
              
              <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Prêt à transformer votre espace extérieur ?
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons 
                donner vie à vos projets d'aménagement paysager tropical.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-secondary" onClick={() => setCurrentPage('contact')}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Demander un devis gratuit
                </button>
                <button className="btn btn-outline" onClick={() => setCurrentPage('realisations')}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Voir nos réalisations
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SERVICES PAGE - Version complète du document 5 */}
      {currentPage === 'services' && (
        <>
          {/* Hero Services */}
          <section style={{
            marginTop: '80px',
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #f0fdf4, #dbeafe)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
              <button 
                onClick={() => setCurrentPage('home')} 
                style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour
              </button>
              
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                border: '1px solid #16a34a',
                borderRadius: '2rem',
                color: '#16a34a',
                marginBottom: '1rem',
                fontSize: '0.875rem'
              }}>
                Nos Services
              </div>
              
              <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                Des solutions sur mesure pour chaque projet
              </h1>
              <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                Que vous soyez particulier ou professionnel, nous adaptons notre expertise à vos besoins spécifiques.
              </p>
            </div>
          </section>

          {/* Tabs Services */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              
              {/* Tab Headers */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                maxWidth: '500px',
                margin: '0 auto 3rem'
              }}>
                <button
                  className={`tab ${activeTab === 'particuliers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('particuliers')}
                >
                  Particuliers
                </button>
                <button
                  className={`tab ${activeTab === 'professionnels' ? 'active' : ''}`}
                  onClick={() => setActiveTab('professionnels')}
                >
                  Professionnels
                </button>
              </div>

              {/* Particuliers Content */}
              {activeTab === 'particuliers' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Services pour Particuliers</h2>
                    <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                      Transformez votre espace extérieur en véritable havre de paix.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {servicesParticuliers.map((service, i) => (
                      <div key={i} className="card-hover" style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        border: '2px solid #e5e7eb',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, flex: 1 }}>{service.title}</h3>
                          <span style={{
                            background: '#f0fdf4',
                            color: '#16a34a',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 600
                          }}>
                            {service.price}
                          </span>
                        </div>
                        
                        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{service.description}</p>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                          ⏱️ Durée : {service.duration}
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Inclus dans cette prestation :</h4>
                          <ul style={{ listStyle: 'none' }}>
                            {service.includes.map((item, idx) => (
                              <li key={idx} style={{
                                display: 'flex',
                                alignItems: 'start',
                                gap: '0.5rem',
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem'
                              }}>
                                <svg style={{ width: '16px', height: '16px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setCurrentPage('contact')}>
                          Demander ce service
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Professionnels Content */}
              {activeTab === 'professionnels' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Services pour Professionnels</h2>
                    <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                      Accompagnement technique pour vos projets d'envergure.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {servicesProfessionnels.map((service, i) => (
                      <div key={i} className="card-hover" style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        border: '2px solid #e5e7eb',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, flex: 1 }}>{service.title}</h3>
                          <span style={{
                            background: '#f0fdf4',
                            color: '#16a34a',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 600
                          }}>
                            {service.price}
                          </span>
                        </div>
                        
                        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{service.description}</p>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                          ⏱️ Durée : {service.duration}
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Prestations incluses :</h4>
                          <ul style={{ listStyle: 'none' }}>
                            {service.includes.map((item, idx) => (
                              <li key={idx} style={{
                                display: 'flex',
                                alignItems: 'start',
                                gap: '0.5rem',
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem'
                              }}>
                                <svg style={{ width: '16px', height: '16px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setCurrentPage('contact')}>
                          Demander un devis
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Documents Inclus */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Livrables
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Documents inclus dans nos prestations
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Vous recevez un dossier complet avec tous les éléments nécessaires.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {documentsInclus.map((section, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: '#16a34a',
                        color: 'white',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '1.25rem'
                      }}>
                        {i + 1}
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{section.category}</h3>
                    </div>

                    <ul style={{ listStyle: 'none' }}>
                      {section.items.map((item, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          fontSize: '0.875rem'
                        }}>
                          <svg style={{ width: '20px', height: '20px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pourquoi nous choisir */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Nos Avantages
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  Pourquoi choisir Papillon Guadeloupe ?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {[
                  { icon: '🌺', title: 'Expertise Tropicale', desc: 'Connaissance approfondie du climat et de la flore guadeloupéenne pour des aménagements parfaitement adaptés.', bg: '#fef3c7' },
                  { icon: '🎨', title: 'Visualisation 3D', desc: 'Rendus photo-réalistes et vidéos 3D pour visualiser votre projet avant sa réalisation.', bg: '#dbeafe' },
                  { icon: '🤝', title: 'Accompagnement Complet', desc: 'De la conception à la réalisation, avec nos partenaires qualifiés et notre réseau local.', bg: '#e9d5ff' }
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: item.bg,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      marginBottom: '1rem'
                    }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Additionnels */}
          <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #eff6ff, white)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Services Complémentaires
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  Découvrez nos autres services
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {[
                  {
                    icon: '🌿',
                    title: 'Entretien Paysager',
                    desc: 'Services d\'entretien régulier pour particuliers et collectivités',
                    items: ['Interventions ponctuelles ou régulières', 'Photos avant/après de nos interventions'],
                    color: '#16a34a',
                    borderColor: '#16a34a'
                  },
                  {
                    icon: '🚜',
                    title: 'Location Motoculteur',
                    desc: 'Motoculteur professionnel avec ou sans opérateur',
                    items: ['Matériel professionnel 9 CV', 'Dès 120€/jour, essence incluse'],
                    color: '#ea580c',
                    borderColor: '#ea580c'
                  }
                ].map((service, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{service.title}</h3>
                    <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{service.desc}</p>
                    <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                      {service.items.map((item, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0',
                          fontSize: '0.875rem'
                        }}>
                          <svg style={{ width: '16px', height: '16px', color: service.color, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="btn" style={{ width: '100%', background: service.color, color: 'white' }} onClick={() => setCurrentPage(i === 0 ? 'entretien' : 'location')}>
                      En savoir plus
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #16a34a, #059669)',
                color: 'white',
                padding: '4rem 2rem',
                borderRadius: '1rem'
              }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Prêt à démarrer votre projet ?
                </h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
                  Contactez-nous pour discuter de vos besoins et recevoir une proposition personnalisée.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn" style={{ background: 'white', color: '#16a34a' }} onClick={() => setCurrentPage('contact')}>
                    Demander un devis
                  </button>
                  <button className="btn btn-outline" onClick={() => setCurrentPage('home')}>
                    Voir notre processus
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* REALISATIONS PAGE - Version complète avec Before/After slider */}
      {currentPage === 'realisations' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #f0fdf4, #dbeafe)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <button 
                onClick={() => setCurrentPage('home')} 
                style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour
              </button>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Nos Réalisations
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Des transformations spectaculaires
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Découvrez comment nous transformons les espaces extérieurs avec des aménagements paysagers adaptés au climat tropical.
                </p>
              </div>
            </div>
          </section>

          {/* Filter Buttons */}
          <section style={{ padding: '2rem 0', background: 'white', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                {['Tous', 'Particulier', 'Professionnel'].map((cat) => (
                  <button
                    key={cat}
                    className="btn"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      background: selectedCategory === cat ? 'linear-gradient(135deg, #16a34a, #059669)' : 'white',
                      color: selectedCategory === cat ? 'white' : '#16a34a',
                      border: selectedCategory === cat ? 'none' : '2px solid #16a34a',
                      minWidth: '120px'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {filteredPortfolio.map((project, idx) => (
                  <div key={project.id} className="card-hover" style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}>
                    {/* Before/After Comparison Container */}
                    <div style={{ position: 'relative', height: '300px', overflow: 'hidden', background: '#f3f4f6' }}>
                      {/* Before Image */}
                      <img 
                        src={project.before} 
                        alt={`${project.title} - avant`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      
                      {/* After Image with Clip */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        clipPath: `inset(0 ${100 - portfolioSliders[idx]}% 0 0)`
                      }}>
                        <img 
                          src={project.after} 
                          alt={`${project.title} - après`}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>

                      {/* Slider Control */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={portfolioSliders[idx]}
                        onChange={(e) => {
                          const newSliders = [...portfolioSliders];
                          newSliders[idx] = Number(e.target.value);
                          setPortfolioSliders(newSliders);
                        }}
                        style={{
                          position: 'absolute',
                          bottom: '1rem',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '90%',
                          height: '8px',
                          background: `linear-gradient(to right, #22c55e 0%, #22c55e ${portfolioSliders[idx]}%, rgba(255,255,255,0.3) ${portfolioSliders[idx]}%, rgba(255,255,255,0.3) 100%)`,
                          borderRadius: '4px',
                          cursor: 'pointer',
                          appearance: 'none',
                          WebkitAppearance: 'none'
                        }}
                      />

                      {/* Category Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}>
                        {project.category}
                      </div>

                      {/* Before/After Labels */}
                      <div style={{
                        position: 'absolute',
                        bottom: '0.5rem',
                        left: '0.5rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem'
                      }}>
                        Avant
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '0.5rem',
                        right: '0.5rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem'
                      }}>
                        Après
                      </div>
                    </div>

                    {/* Project Details */}
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, flex: 1 }}>{project.title}</h3>
                        <span style={{
                          background: '#f0fdf4',
                          color: '#16a34a',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}>
                          {project.location}
                        </span>
                      </div>

                      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        {project.description}
                      </p>

                      <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Services réalisés :</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {project.services.map((service, i) => (
                            <span key={i} style={{
                              background: '#f3f4f6',
                              color: '#4b5563',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '0.25rem',
                              fontSize: '0.75rem',
                              fontWeight: 500
                            }}>
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '1rem',
                        borderTop: '1px solid #e5e7eb',
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        <span>Glissez pour comparer</span>
                        <span>{portfolioSliders[idx]}% après</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPortfolio.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <p style={{ color: '#6b7280' }}>Aucune réalisation trouvée pour cette catégorie.</p>
                </div>
              )}
            </div>
          </section>

          {/* Stats Section */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Nos chiffres clés</h2>
                <p style={{ color: '#6b7280' }}>L'expérience au service de vos projets</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {[
                  { num: '50+', label: 'Projets réalisés' },
                  { num: '15+', label: 'Hôtels & résidences' },
                  { num: '98%', label: 'Clients satisfaits' },
                  { num: '10+', label: 'Années d\'expérience' }
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.5rem' }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Teaser */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Notre Méthode
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Comment nous créons ces transformations
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem' }}>
                  Chaque projet suit une méthodologie éprouvée en 3 étapes : analyse, conception et accompagnement.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => setCurrentPage('services')}>
                    Découvrir notre processus
                  </button>
                  <button className="btn btn-secondary" onClick={() => setCurrentPage('contact')}>
                    Démarrer mon projet
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #16a34a, #059669)',
                color: 'white',
                padding: '4rem 2rem',
                borderRadius: '1rem'
              }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Votre projet sera notre prochaine réalisation
                </h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
                  Rejoignez nos clients satisfaits et transformez votre espace extérieur en jardin d'exception adapté au climat tropical de la Guadeloupe.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn" style={{ background: 'white', color: '#16a34a' }} onClick={() => setCurrentPage('contact')}>
                    Commencer mon projet
                  </button>
                  <button className="btn btn-outline" onClick={() => setCurrentPage('services')}>
                    Voir nos services
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ENTRETIEN PAYSAGER PAGE - Version complète */}
      {currentPage === 'entretien' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.5), transparent)'
            }} />

            <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', zIndex: 10 }}>
              <button 
                onClick={() => setCurrentPage('services')} 
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour aux services
              </button>

              <div style={{ maxWidth: '700px' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: '2rem',
                  color: 'white',
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  🌿 Entretien Paysager Professionnel
                </div>

                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2
                }}>
                  Services d'Entretien Paysager{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Particuliers & Collectivités
                  </span>
                </h1>

                <p style={{
                  fontSize: '1.25rem',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '2rem',
                  lineHeight: 1.8
                }}>
                  Confiez l'entretien de vos espaces verts à nos experts. Interventions régulières ou ponctuelles, 
                  pour des jardins toujours impeccables en Guadeloupe.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => { window.location.hash = 'devis'; }}>
                    Demander un devis gratuit
                  </button>
                  <button className="btn btn-outline" onClick={() => { window.location.hash = 'avant-apres'; }}>
                    Voir nos réalisations
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Particuliers */}
          <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, white, #f0fdf4)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Pour Particuliers
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Nos services d'entretien pour votre jardin
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Des prestations sur mesure adaptées à vos besoins et à votre budget
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '🌿', title: 'Tonte de pelouse', desc: 'Tonte régulière avec ramassage des déchets verts, bordures nettes', tarif: 'À partir de 35€' },
                  { icon: '✂️', title: 'Taille de haies & arbustes', desc: 'Taille d\'entretien et de formation, respect des périodes de végétation', tarif: 'Sur devis' },
                  { icon: '🍂', title: 'Débroussaillage', desc: 'Nettoyage des terrains envahis, évacuation des déchets verts', tarif: 'À partir de 45€/h' },
                  { icon: '💐', title: 'Entretien massifs', desc: 'Désherbage, paillage, taille, fertilisation adaptée au climat tropical', tarif: 'Forfait mensuel' },
                  { icon: '🌺', title: 'Plantation & rempotage', desc: 'Conseil et plantation de végétaux adaptés, rempotage de plantes', tarif: 'Sur devis' },
                  { icon: '💧', title: 'Installation arrosage', desc: 'Mise en place et entretien de systèmes d\'arrosage automatique', tarif: 'Sur devis' }
                ].map((service, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{service.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>{service.desc}</p>
                    <span style={{
                      display: 'inline-block',
                      background: '#d1fae5',
                      color: '#15803d',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}>
                      {service.tarif}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                  💚 Contrats d'entretien annuels disponibles avec tarifs préférentiels
                </p>
                <button className="btn btn-primary" onClick={() => { window.location.hash = 'devis'; }}>
                  Obtenir un devis personnalisé
                </button>
              </div>
            </div>
          </section>

          {/* Services Collectivités */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Pour Collectivités
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Solutions professionnelles pour espaces collectifs
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Partenaire de confiance pour l'entretien de vos espaces verts professionnels
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {[
                  {
                    icon: '🏢',
                    title: 'Espaces verts collectifs',
                    desc: 'Entretien régulier des espaces communs en résidences et copropriétés',
                    advantages: ['Contrat annuel', 'Planning défini', 'Équipe dédiée']
                  },
                  {
                    icon: '🏛️',
                    title: 'Collectivités publiques',
                    desc: 'Maintenance des parcs, jardins publics, et espaces municipaux',
                    advantages: ['Normes de sécurité', 'Intervention rapide', 'Matériel professionnel']
                  },
                  {
                    icon: '🏨',
                    title: 'Hôtels & Résidences',
                    desc: 'Service premium pour établissements touristiques et de prestige',
                    advantages: ['Intervention discrète', 'Résultat impeccable', 'Flexibilité horaires']
                  },
                  {
                    icon: '🏪',
                    title: 'Commerces & Bureaux',
                    desc: 'Valorisation de l\'image de marque par des espaces verts soignés',
                    advantages: ['Devis personnalisé', 'Facturation simplifiée', 'Service régulier']
                  }
                ].map((service, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '3rem' }}>{service.icon}</div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{service.title}</h3>
                        <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1rem' }}>{service.desc}</p>
                      </div>
                    </div>

                    <div>
                      {service.advantages.map((advantage, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.5rem',
                          fontSize: '0.875rem'
                        }}>
                          <svg style={{ width: '16px', height: '16px', color: '#16a34a', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {advantage}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem', maxWidth: '700px', margin: '3rem auto 0' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #16a34a, #059669)',
                  color: 'white',
                  padding: '2.5rem',
                  borderRadius: '1rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Vous êtes une collectivité ?
                  </h3>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    Bénéficiez d'un accompagnement sur mesure et de tarifs adaptés à vos besoins
                  </p>
                  <button className="btn" style={{ background: 'white', color: '#16a34a' }} onClick={() => { window.location.hash = 'devis'; }}>
                    Demander un devis collectivité
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Avant/Après */}
          <section id="avant-apres" style={{ padding: '5rem 0', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Nos Réalisations
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Avant / Après : La transformation de vos espaces
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Découvrez le résultat de nos interventions d'entretien paysager
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {[
                  {
                    before: 'https://images.unsplash.com/photo-1748864794465-d169e6ac2707?w=600',
                    after: 'https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?w=600',
                    title: 'Jardin résidentiel - Les Abymes',
                    desc: 'Débroussaillage complet, tonte, et taille des haies'
                  },
                  {
                    before: 'https://images.unsplash.com/photo-1666091090647-750ddca8bf75?w=600',
                    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
                    title: 'Espace collectif - Gosier',
                    desc: 'Transformation d\'un espace vert négligé en jardin d\'agrément'
                  },
                  {
                    before: 'https://images.unsplash.com/photo-1748864794465-d169e6ac2707?w=600',
                    after: 'https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?w=600',
                    title: 'Hôtel - Sainte-Anne',
                    desc: 'Entretien mensuel avec taille ornementale des végétaux'
                  }
                ].map((project, i) => (
                  <div key={i} style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                      <div>
                        <div style={{
                          position: 'relative',
                          borderRadius: '1rem',
                          overflow: 'hidden',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}>
                          <img src={project.before} alt={`Avant - ${project.title}`} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
                          <div style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            background: '#ef4444',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.25rem',
                            fontWeight: 600,
                            fontSize: '0.875rem'
                          }}>
                            AVANT
                          </div>
                        </div>
                      </div>

                      <div>
                        <div style={{
                          position: 'relative',
                          borderRadius: '1rem',
                          overflow: 'hidden',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}>
                          <img src={project.after} alt={`Après - ${project.title}`} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
                          <div style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            background: '#16a34a',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.25rem',
                            fontWeight: 600,
                            fontSize: '0.875rem'
                          }}>
                            APRÈS
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.title}</h3>
                      <p style={{ color: '#6b7280' }}>{project.desc}</p>
                    </div>

                    {i < 2 && <div style={{ borderBottom: '1px solid #e5e7eb', marginTop: '3rem' }} />}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Formulaire Devis */}
          <section id="devis" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #f0fdf4, white)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Demande de Devis
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Obtenez votre devis gratuit en 24h
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Remplissez ce formulaire et recevez une estimation personnalisée pour vos besoins d'entretien
                </p>
              </div>

              <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'white',
                padding: '3rem',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <form onSubmit={(e) => { e.preventDefault(); alert('Merci ! Nous vous contacterons sous 24h avec votre devis.'); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nom complet *</label>
                      <input required type="text" placeholder="Votre nom" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email *</label>
                      <input required type="email" placeholder="votre@email.com" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Téléphone *</label>
                      <input required type="tel" placeholder="+590 690 XX XX XX" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Type de client *</label>
                      <select required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                        <option value="">Sélectionnez</option>
                        <option value="particulier">Particulier</option>
                        <option value="copropriete">Copropriété</option>
                        <option value="collectivite">Collectivité publique</option>
                        <option value="hotel">Hôtel / Résidence</option>
                        <option value="commerce">Commerce / Bureau</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Type de service *</label>
                      <select required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                        <option value="">Sélectionnez</option>
                        <option value="tonte">Tonte de pelouse</option>
                        <option value="taille">Taille de haies/arbustes</option>
                        <option value="debroussaillage">Débroussaillage</option>
                        <option value="massifs">Entretien massifs</option>
                        <option value="complet">Entretien complet</option>
                        <option value="ponctuel">Intervention ponctuelle</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Superficie (m²)</label>
                      <input type="text" placeholder="Ex: 500" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Fréquence souhaitée *</label>
                    <select required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                      <option value="">Sélectionnez</option>
                      <option value="ponctuelle">Intervention ponctuelle</option>
                      <option value="mensuelle">Mensuelle</option>
                      <option value="bimensuelle">Bi-mensuelle</option>
                      <option value="hebdomadaire">Hebdomadaire</option>
                      <option value="annuel">Contrat annuel</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Détails de votre projet</label>
                    <textarea rows="5" placeholder="Décrivez vos besoins, l'état actuel de votre espace vert, vos attentes..." style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                  </div>

                  <button type="submit" className="btn" style={{ width: '100%', background: 'linear-gradient(135deg, #16a34a, #059669)', color: 'white', padding: '1rem', fontSize: '1.125rem' }}>
                    Envoyer ma demande de devis
                  </button>

                  <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    📞 Réponse sous 24h • Devis gratuit et sans engagement
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section style={{
            padding: '4rem 0',
            background: 'linear-gradient(135deg, #16a34a, #059669)',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                Besoin d'une intervention rapide ?
              </h3>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                Contactez-nous directement au +590 690 XX XX XX
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn" style={{ background: 'white', color: '#16a34a' }} onClick={() => setCurrentPage('contact')}>
                  Nous contacter
                </button>
                <button className="btn btn-outline" onClick={() => setCurrentPage('services')}>
                  Tous nos services
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* LOCATION MOTOCULTEUR PAGE - Version complète */}
      {currentPage === 'location' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1725916631452-b411a5991fce?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), transparent)'
            }} />

            <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', zIndex: 10 }}>
              <button 
                onClick={() => setCurrentPage('services')} 
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour aux services
              </button>

              <div style={{ maxWidth: '700px' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'rgba(234, 88, 12, 0.2)',
                  border: '1px solid rgba(234, 88, 12, 0.4)',
                  borderRadius: '2rem',
                  color: 'white',
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  🚜 Location Matériel Professionnel
                </div>

                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2
                }}>
                  Location de Motoculteur{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #fb923c, #fbbf24)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    avec Opérateur Qualifié
                  </span>
                </h1>

                <p style={{
                  fontSize: '1.25rem',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '2rem',
                  lineHeight: 1.8
                }}>
                  Préparez vos terrains rapidement et efficacement avec notre motoculteur professionnel 
                  et notre opérateur expérimenté. Service disponible en Guadeloupe.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button className="btn" style={{ background: '#ea580c', color: 'white' }} onClick={() => { window.location.hash = 'tarifs'; }}>
                    Voir les tarifs
                  </button>
                  <button className="btn btn-outline" onClick={() => { window.location.hash = 'devis'; }}>
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Caractéristiques */}
          <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, white, #fff7ed)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #ea580c',
                  borderRadius: '2rem',
                  color: '#ea580c',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Équipement Professionnel
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Motoculteur professionnel haute performance
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Matériel robuste et fiable, adapté aux terrains tropicaux de Guadeloupe
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { icon: '⚙️', titre: 'Puissance', valeur: '9 CV', desc: 'Moteur essence 4 temps professionnel' },
                  { icon: '📏', titre: 'Largeur de travail', valeur: '60-90 cm', desc: 'Ajustable selon vos besoins' },
                  { icon: '🌱', titre: 'Profondeur', valeur: 'Jusqu\'à 30 cm', desc: 'Labour professionnel efficace' },
                  { icon: '⚡', titre: 'Vitesse', valeur: '2 vitesses', desc: 'Avant + Marche arrière' },
                  { icon: '🔧', titre: 'Équipement', valeur: 'Fraises rotatives', desc: 'Fraises renforcées pour tous terrains' },
                  { icon: '💪', titre: 'Capacité', valeur: '500-2000 m²/jour', desc: 'Selon la nature du terrain' }
                ].map((carac, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{carac.icon}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>{carac.titre}</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ea580c', marginBottom: '0.5rem' }}>{carac.valeur}</div>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{carac.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: 'linear-gradient(to right, #fff7ed, #fef3c7)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '2px solid #fed7aa'
              }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>✨</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Matériel professionnel entretenu
                    </h3>
                    <p style={{ color: '#6b7280' }}>
                      Notre motoculteur est entretenu régulièrement et vérifié avant chaque location. 
                      Pièces d'usure changées systématiquement, huile et filtres neufs, fraises affûtées. 
                      Garantie de bon fonctionnement à 100%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Avantages */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #ea580c',
                  borderRadius: '2rem',
                  color: '#ea580c',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Les Avantages
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  Pourquoi louer notre motoculteur ?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {[
                  { icon: '⏱️', titre: 'Gain de temps considérable', desc: 'Un motoculteur professionnel travaille 10x plus vite qu\'à la main', stats: '90% de temps économisé' },
                  { icon: '💰', titre: 'Solution économique', desc: 'Louez uniquement quand vous en avez besoin sans investissement', stats: 'Dès 120€/jour' },
                  { icon: '👷', titre: 'Avec opérateur qualifié', desc: 'Notre professionnel assure le travail dans les règles de l\'art', stats: '15 ans d\'expérience' },
                  { icon: '🎯', titre: 'Travail professionnel', desc: 'Résultat impeccable pour vos plantations et aménagements', stats: 'Qualité garantie' },
                  { icon: '🌿', titre: 'Préparation optimale', desc: 'Sol parfaitement ameubli et aéré pour vos cultures', stats: 'Meilleur rendement' },
                  { icon: '🛡️', titre: 'Sans risque', desc: 'Matériel assuré et entretenu, aucun souci de panne', stats: '100% opérationnel' }
                ].map((avantage, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                      <div style={{ fontSize: '3rem' }}>{avantage.icon}</div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{avantage.titre}</h3>
                        <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1rem' }}>{avantage.desc}</p>
                        <span style={{
                          display: 'inline-block',
                          background: '#fff7ed',
                          color: '#c2410c',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: 600
                        }}>
                          {avantage.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tarifs */}
          <section id="tarifs" style={{ padding: '5rem 0', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #ea580c',
                  borderRadius: '2rem',
                  color: '#ea580c',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Tarifs Location
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Nos formules de location
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
                  Tarifs transparents • Essence incluse • Matériel assuré
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto 3rem' }}>
                {[
                  { formule: 'Demi-journée', duree: '4 heures', sans: '80€', avec: '160€', surface: 'Jusqu\'à 300 m²', badge: '' },
                  { formule: 'Journée', duree: '8 heures', sans: '120€', avec: '280€', surface: 'Jusqu\'à 800 m²', badge: 'Populaire' },
                  { formule: 'Weekend', duree: '2 jours', sans: '200€', avec: '500€', surface: 'Jusqu\'à 1500 m²', badge: '' },
                  { formule: 'Semaine', duree: '5 jours', sans: '450€', avec: '1100€', surface: 'Grands terrains', badge: 'Meilleur prix' }
                ].map((tarif, i) => (
                  <div key={i} style={{
                    position: 'relative',
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: tarif.badge ? '2px solid #ea580c' : '2px solid #e5e7eb',
                    boxShadow: tarif.badge ? '0 10px 30px rgba(234, 88, 12, 0.2)' : '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    {tarif.badge && (
                      <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#ea580c',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        {tarif.badge}
                      </div>
                    )}
                    <div style={{ textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{tarif.formule}</h3>
                      <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1.5rem' }}>{tarif.duree}</p>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Sans opérateur</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#ea580c' }}>{tarif.sans}</div>
                      </div>
                      
                      <div style={{ paddingTop: '1rem', borderTop: '1px solid #e5e7eb', marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Avec opérateur</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#16a34a' }}>{tarif.avec}</div>
                      </div>
                      
                      <div style={{
                        paddingTop: '1rem',
                        borderTop: '1px solid #e5e7eb',
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        📐 {tarif.surface}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                background: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <p style={{ marginBottom: '0.5rem' }}>✅ Essence incluse dans tous les tarifs</p>
                  <p style={{ marginBottom: '0.5rem' }}>✅ Matériel assuré et entretenu</p>
                  <p style={{ marginBottom: '0.5rem' }}>✅ Formation à l'utilisation (location sans opérateur)</p>
                  <p style={{ marginBottom: '0.5rem' }}>✅ Caution de 300€ (chèque non encaissé)</p>
                  <p>✅ Réduction de 10% pour les locations de 2 semaines et plus</p>
                </div>
              </div>
            </div>
          </section>

          {/* Formulaire Devis */}
          <section id="devis" style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #ea580c',
                  borderRadius: '2rem',
                  color: '#ea580c',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Réservation
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Réserver votre motoculteur
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
                  Réponse sous 24h • Disponibilité en temps réel • Devis gratuit
                </p>
              </div>

              <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'white',
                padding: '3rem',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <form onSubmit={(e) => { e.preventDefault(); alert('Merci ! Nous vous confirmons votre réservation sous 24h.'); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nom complet *</label>
                      <input required type="text" placeholder="Votre nom" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email *</label>
                      <input required type="email" placeholder="votre@email.com" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Téléphone *</label>
                      <input required type="tel" placeholder="+590 690 XX XX XX" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date souhaitée *</label>
                      <input required type="date" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Durée de location *</label>
                      <select required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                        <option value="">Sélectionnez</option>
                        <option value="demi-journee">Demi-journée (4h)</option>
                        <option value="journee">Journée (8h)</option>
                        <option value="weekend">Weekend (2 jours)</option>
                        <option value="semaine">Semaine (5 jours)</option>
                        <option value="autre">Autre durée</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Surface à travailler (m²)</label>
                      <input type="text" placeholder="Ex: 500" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Avec opérateur professionnel ? *</label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="operateur" value="oui" defaultChecked style={{ width: '16px', height: '16px' }} />
                        <span>Oui, avec opérateur (recommandé)</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="operateur" value="non" style={{ width: '16px', height: '16px' }} />
                        <span>Non, location seule</span>
                      </label>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Détails du projet</label>
                    <textarea rows="5" placeholder="Décrivez votre projet : type de terrain, nature du sol, objectif du travail..." style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                  </div>

                  <button type="submit" className="btn" style={{ width: '100%', background: 'linear-gradient(135deg, #ea580c, #f59e0b)', color: 'white', padding: '1rem', fontSize: '1.125rem' }}>
                    Envoyer ma demande de réservation
                  </button>

                  <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    📞 Réponse sous 24h • Réservation confirmée après vérification de disponibilité
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section style={{
            padding: '4rem 0',
            background: 'linear-gradient(135deg, #ea580c, #f59e0b)',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                Besoin d'informations complémentaires ?
              </h3>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                Contactez-nous au +590 690 XX XX XX ou visitez notre page services
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn" style={{ background: 'white', color: '#ea580c' }} onClick={() => setCurrentPage('contact')}>
                  Nous contacter
                </button>
                <button className="btn btn-outline" onClick={() => setCurrentPage('services')}>
                  Tous nos services
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* PROCESSUS PAGE - Version complète */}
      {currentPage === 'processus' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #f0fdf4, #dbeafe)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <button 
                onClick={() => setCurrentPage('home')} 
                style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour
              </button>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Notre Processus
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Une méthodologie éprouvée en 3 étapes
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  De l'analyse initiale à la remise des documents finaux, nous vous accompagnons à chaque étape de votre projet.
                </p>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {[
                  {
                    step: 1,
                    title: "Analyse & Conception",
                    subtitle: "Étude approfondie de votre projet",
                    duration: "1-2 semaines",
                    description: "Questionnaire personnalisé, visite sur site et analyse des contraintes techniques. Échange approfondi sur vos besoins et attentes.",
                    details: [
                      "Relevé des mesures précises",
                      "Analyse du terrain et de l'exposition",
                      "Étude des contraintes techniques",
                      "Identification des besoins et souhaits",
                      "Devis personnalisé détaillé"
                    ],
                    icon: "📋"
                  },
                  {
                    step: 2,
                    title: "Création & Visualisation",
                    subtitle: "Conception de votre jardin idéal",
                    duration: "2-4 semaines",
                    description: "Esquisse initiale, puis projet 3D complet avec possibilité de modifications jusqu'à validation finale.",
                    details: [
                      "Esquisse d'aménagement initial",
                      "Rendus 3D photo-réalistes",
                      "Plusieurs points de vue",
                      "Modifications incluses",
                      "Validation finale du projet"
                    ],
                    icon: "🎨"
                  },
                  {
                    step: 3,
                    title: "Remise & Accompagnement",
                    subtitle: "Concrétisation de votre projet",
                    duration: "1 semaine + suivi",
                    description: "Livraison des documents complets et accompagnement pour la réalisation avec nos partenaires ou en autonomie.",
                    details: [
                      "Plans techniques détaillés",
                      "Liste des matériaux et quantitatifs",
                      "Palette végétale adaptée",
                      "Recommandations d'entretien",
                      "Mise en relation avec nos partenaires"
                    ],
                    icon: "🚀"
                  }
                ].map((step, index) => (
                  <div key={step.step} style={{
                    display: 'grid',
                    gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    gap: '2rem',
                    alignItems: 'center'
                  }}>
                    {/* Step Content */}
                    <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                      <div style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1.5rem' }}>
                          <div style={{
                            width: '64px',
                            height: '64px',
                            background: '#16a34a',
                            color: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            flexShrink: 0
                          }}>
                            {step.step}
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                              {step.title}
                            </h3>
                            <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                              {step.subtitle}
                            </p>
                            <span style={{
                              display: 'inline-block',
                              background: '#f3f4f6',
                              color: '#4b5563',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '1rem',
                              fontSize: '0.875rem',
                              fontWeight: 600
                            }}>
                              Durée : {step.duration}
                            </span>
                          </div>
                        </div>

                        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                          {step.description}
                        </p>

                        <div>
                          <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>
                            Détails de cette étape :
                          </h4>
                          <ul style={{ listStyle: 'none' }}>
                            {step.details.map((detail, i) => (
                              <li key={i} style={{
                                display: 'flex',
                                alignItems: 'start',
                                gap: '0.5rem',
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem'
                              }}>
                                <svg style={{ width: '20px', height: '20px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Step Visual */}
                    <div style={{ order: index % 2 === 0 ? 2 : 1, textAlign: 'center' }}>
                      <div style={{
                        width: '128px',
                        height: '128px',
                        margin: '0 auto',
                        background: '#d1fae5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem',
                        marginBottom: '1.5rem'
                      }}>
                        {step.icon}
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#6b7280' }}>
                        Étape {step.step} : {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Documents Remis */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Livrables
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Documents remis en fin de projet
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Vous recevez un dossier complet avec tous les éléments nécessaires pour concrétiser votre aménagement paysager.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                  {
                    title: "Plans et Documents Techniques",
                    items: [
                      "Plan de masse légendé",
                      "Plan de plantation détaillé",
                      "Plans avec cotations précises",
                      "Coupes et élévations",
                      "Documents techniques conformes"
                    ]
                  },
                  {
                    title: "Visualisations 3D",
                    items: [
                      "Rendus 3D haute définition",
                      "Plusieurs points de vue",
                      "Différentes saisonnalités",
                      "Visualisations jour/nuit",
                      "Vidéo 3D de présentation"
                    ]
                  },
                  {
                    title: "Guides et Préconisations",
                    items: [
                      "Palette végétale détaillée",
                      "Quantitatifs précis",
                      "Palette matériaux avec références",
                      "Guide d'entretien",
                      "Proposition de mobiliers"
                    ]
                  }
                ].map((category, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: '#16a34a',
                        color: 'white',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700
                      }}>
                        {i + 1}
                      </div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{category.title}</h3>
                    </div>

                    <ul style={{ listStyle: 'none' }}>
                      {category.items.map((item, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          fontSize: '0.875rem'
                        }}>
                          <svg style={{ width: '20px', height: '20px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Options de Réalisation */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Après la Conception
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  3 options pour concrétiser votre projet
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Une fois le travail de conception validé, vous avez le choix pour la réalisation selon vos préférences et votre budget.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                  {
                    title: "Réalisation Autonome",
                    description: "Vous réalisez vous-même l'aménagement de votre terrain avec nos plans et conseils.",
                    icon: "🔨",
                    advantages: [
                      "Économies sur la main d'œuvre",
                      "Réalisation à votre rythme",
                      "Satisfaction personnelle",
                      "Support conseil inclus"
                    ]
                  },
                  {
                    title: "Professionnel de votre choix",
                    description: "Vous faites appel à un paysagiste ou artisan de votre choix avec nos documents.",
                    icon: "🤝",
                    advantages: [
                      "Liberté de choix du prestataire",
                      "Négociation directe des tarifs",
                      "Plans techniques fournis",
                      "Support si questions"
                    ]
                  },
                  {
                    title: "Partenaire Recommandé",
                    description: "Nous vous recommandons un paysagiste partenaire adapté pour réaliser votre projet.",
                    icon: "⭐",
                    advantages: [
                      "Professionnel qualifié et vérifié",
                      "Connaissance de nos méthodes",
                      "Suivi de chantier inclus",
                      "Garantie de conformité"
                    ]
                  }
                ].map((option, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      margin: '0 auto 1rem',
                      background: '#d1fae5',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      {option.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {option.title}
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1.5rem' }}>
                      {option.description}
                    </p>

                    <div style={{ textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                        Avantages :
                      </h4>
                      <ul style={{ listStyle: 'none' }}>
                        {option.advantages.map((advantage, idx) => (
                          <li key={idx} style={{
                            display: 'flex',
                            alignItems: 'start',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            fontSize: '0.875rem'
                          }}>
                            <svg style={{ width: '16px', height: '16px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Préparation du Rendez-vous */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    border: '1px solid #16a34a',
                    borderRadius: '2rem',
                    color: '#16a34a',
                    marginBottom: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    Préparation
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Documents à préparer pour le rendez-vous
                  </h2>
                  <p style={{ color: '#6b7280' }}>
                    Pour optimiser notre première rencontre et vous proposer la meilleure solution.
                  </p>
                </div>

                <div style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                      <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Documents techniques :</h3>
                      <ul style={{ listStyle: 'none' }}>
                        {[
                          "Permis de construire (si applicable)",
                          "Plans des réseaux existants",
                          "Plans d'architecte de la maison",
                          "Acte de vente avec réglementation"
                        ].map((doc, i) => (
                          <li key={i} style={{
                            display: 'flex',
                            alignItems: 'start',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            fontSize: '0.875rem'
                          }}>
                            <svg style={{ width: '16px', height: '16px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                            </svg>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Informations complémentaires :</h3>
                      <ul style={{ listStyle: 'none' }}>
                        {[
                          "PLU ou règlement de lotissement",
                          "Photos actuelles du terrain",
                          "Budget approximatif envisagé"
                        ].map((doc, i) => (
                          <li key={i} style={{
                            display: 'flex',
                            alignItems: 'start',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            fontSize: '0.875rem'
                          }}>
                            <svg style={{ width: '16px', height: '16px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                            </svg>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{
                    background: '#dbeafe',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #93c5fd'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>
                      <strong>💡 Conseil :</strong> Si vous ne disposez pas de tous ces documents, ce n'est pas bloquant ! 
                      Nous nous adaptons à votre situation et vous guidons dans les démarches nécessaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #16a34a, #059669)',
                color: 'white',
                padding: '4rem 2rem',
                borderRadius: '1rem'
              }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Prêt à démarrer votre projet ?
                </h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
                  Notre processus éprouvé garantit un résultat à la hauteur de vos attentes. 
                  Contactez-nous pour programmer votre première visite conseil.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn" style={{ background: 'white', color: '#16a34a' }} onClick={() => setCurrentPage('contact')}>
                    Démarrer mon projet
                  </button>
                  <button className="btn btn-outline" onClick={() => setCurrentPage('services')}>
                    Voir nos services
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CONTACT PAGE - Version complète professionnelle */}
      {currentPage === 'contact' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #f0fdf4, #dbeafe)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <button 
                onClick={() => setCurrentPage('home')} 
                style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour
              </button>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Contact
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Démarrons votre projet ensemble
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Racontez-nous votre vision et recevez une proposition personnalisée sous 24h. Premier échange téléphonique offert.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                {/* Contact Form */}
                <div style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Demande de devis gratuit
                  </h2>
                  <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '0.875rem' }}>
                    Plus votre demande est détaillée, plus notre proposition sera précise et adaptée.
                  </p>

                  <form onSubmit={(e) => { e.preventDefault(); alert('Merci ! Notre équipe vous contactera sous 24h.'); }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Nom complet *</label>
                        <input required type="text" placeholder="Votre nom" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Téléphone</label>
                        <input type="tel" placeholder="0690 XX XX XX" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email *</label>
                      <input required type="email" placeholder="votre@email.com" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Type de service *</label>
                        <select required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                          <option value="">Sélectionnez votre besoin</option>
                          <option value="visite-conseil">Visite conseil (particulier)</option>
                          <option value="conception-3d">Conception complète 3D</option>
                          <option value="etude-pro">Étude paysagère (professionnel)</option>
                          <option value="maitrise">Maîtrise d'œuvre</option>
                          <option value="autre">Autre / Je ne sais pas</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Localisation</label>
                        <select style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                          <option value="">Votre commune</option>
                          <option value="les-abymes">Les Abymes</option>
                          <option value="baie-mahault">Baie-Mahault</option>
                          <option value="gosier">Le Gosier</option>
                          <option value="sainte-anne">Sainte-Anne</option>
                          <option value="saint-francois">Saint-François</option>
                          <option value="moule">Le Moule</option>
                          <option value="petit-bourg">Petit-Bourg</option>
                          <option value="capesterre">Capesterre-Belle-Eau</option>
                          <option value="basse-terre">Basse-Terre</option>
                          <option value="pointe-a-pitre">Pointe-à-Pitre</option>
                          <option value="autre">Autre commune</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Budget approximatif</label>
                        <select style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                          <option value="">Votre budget</option>
                          <option value="moins-5k">Moins de 5 000€</option>
                          <option value="5k-15k">5 000€ - 15 000€</option>
                          <option value="15k-30k">15 000€ - 30 000€</option>
                          <option value="30k-50k">30 000€ - 50 000€</option>
                          <option value="plus-50k">Plus de 50 000€</option>
                          <option value="non-defini">Pas encore défini</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Urgence du projet</label>
                        <select style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}>
                          <option value="">Délai souhaité</option>
                          <option value="urgent">Urgent (moins de 1 mois)</option>
                          <option value="rapide">Rapide (1-3 mois)</option>
                          <option value="normal">Normal (3-6 mois)</option>
                          <option value="flexible">Flexible (plus de 6 mois)</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Description de votre projet *</label>
                      <textarea required rows="6" placeholder="Décrivez votre terrain actuel, vos envies d'aménagement, vos contraintes, l'usage souhaité de l'espace... Plus vous êtes précis, mieux nous pourrons vous conseiller !" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }} />
                    </div>

                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                        <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                          Envoyer ma demande
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={() => window.location.href = 'mailto:papillonguadeloupe1@gmail.com'}>
                          Écrire directement
                        </button>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
                        Nous nous engageons à vous répondre dans les 24h ouvrées.
                      </p>
                    </div>
                  </form>
                </div>

                {/* Contact Information */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Contact Direct */}
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contact direct
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Téléphone</div>
                        <a href="tel:+590690XXXXXX" style={{ color: '#16a34a', textDecoration: 'none' }}>+590 690 XX XX XX</a>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Du lundi au vendredi, 8h-18h</div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Email</div>
                        <a href="mailto:papillonguadeloupe1@gmail.com" style={{ color: '#16a34a', textDecoration: 'none' }}>papillonguadeloupe1@gmail.com</a>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Réponse sous 24h</div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Zone d'intervention</div>
                        <div style={{ color: '#6b7280' }}>Toute la Guadeloupe</div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Déplacements inclus dans nos tarifs</div>
                      </div>
                    </div>
                  </div>

                  {/* Tarifs */}
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Nos tarifs</h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                      Tarification transparente pour nos principales prestations
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                          <div>
                            <div style={{ fontWeight: 600 }}>Visite Conseil</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Analyse terrain + conseils personnalisés</div>
                          </div>
                          <span style={{
                            background: '#f3f4f6',
                            color: '#4b5563',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                          }}>
                            À partir de 225€
                          </span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>⏱️ 2h</div>
                        <ul style={{ fontSize: '0.75rem', color: '#6b7280', listStyle: 'none', padding: 0 }}>
                          <li>• Supplément selon surface du terrain</li>
                          <li>• Frais de déplacement selon localisation</li>
                          <li>• Option ambiance 3D : +100€ TTC</li>
                        </ul>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                          <div>
                            <div style={{ fontWeight: 600 }}>Conception 3D Complète</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Plans + rendus 3D + documents techniques</div>
                          </div>
                          <span style={{
                            background: '#f3f4f6',
                            color: '#4b5563',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                          }}>
                            Sur devis
                          </span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>⏱️ 3-4 semaines</div>
                        <ul style={{ fontSize: '0.75rem', color: '#6b7280', listStyle: 'none', padding: 0 }}>
                          <li>• Tarif selon complexité du projet</li>
                          <li>• Modifications illimitées incluses</li>
                          <li>• Vidéo 3D : nous consulter</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pourquoi nous choisir */}
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                      Pourquoi nous choisir ?
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        { title: 'Expertise tropicale', desc: 'Connaissance approfondie du climat et de la flore locale' },
                        { title: 'Visualisation 3D', desc: 'Rendus photo-réalistes pour valider votre projet' },
                        { title: 'Accompagnement complet', desc: 'De la conception à la réalisation avec nos partenaires' },
                        { title: 'Réactivité', desc: 'Réponse rapide et suivi personnalisé de chaque projet' }
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                          <svg style={{ width: '20px', height: '20px', color: '#16a34a', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <div style={{ fontWeight: 600 }}>{item.title}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    border: '1px solid #16a34a',
                    borderRadius: '2rem',
                    color: '#16a34a',
                    marginBottom: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    Questions Fréquentes
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
                    Réponses à vos questions
                  </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                  {[
                    { q: 'Quelle est votre zone d\'intervention ?', a: 'Nous intervenons sur toute la Guadeloupe. Les frais de déplacement sont inclus dans nos tarifs pour la plupart des communes.' },
                    { q: 'Combien coûte une visite conseil ?', a: 'À partir de 225€ TTC pour une visite de 2h avec analyse du terrain et conseils personnalisés. Supplément selon surface et localisation.' },
                    { q: 'Proposez-vous la réalisation des travaux ?', a: 'Nous concevons les projets et vous recommandons des partenaires qualifiés pour la réalisation, ou vous pouvez choisir votre propre prestataire.' },
                    { q: 'Dans quels délais recevrai-je ma réponse ?', a: 'Nous nous engageons à vous répondre dans les 24h ouvrées pour un premier contact et organiser rapidement une visite ou un échange téléphonique.' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>{item.q}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FAQ PAGE - Version complète */}
      {currentPage === 'faq' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #f0fdf4, #dbeafe)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <button 
                onClick={() => setCurrentPage('home')} 
                style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour
              </button>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Questions Fréquentes
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Toutes les réponses à vos questions
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Vous avez des interrogations ? Retrouvez ici les réponses aux questions les plus fréquentes
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {[
                  {
                    category: "Services & Tarifs",
                    questions: [
                      {
                        q: "Quels sont vos tarifs pour une visite conseil ?",
                        a: "Nos visites conseil démarrent à 225€ TTC pour 2h. Ce tarif inclut l'analyse complète du terrain, des conseils personnalisés, et des préconisations végétales. Des suppléments peuvent s'appliquer selon la surface et la localisation."
                      },
                      {
                        q: "Proposez-vous des devis gratuits ?",
                        a: "Oui ! Le premier contact et l'échange téléphonique sont gratuits. Après discussion de votre projet, nous vous envoyons un devis détaillé sans engagement dans les 48h."
                      },
                      {
                        q: "Que comprend le service de conception 3D ?",
                        a: "Notre service de conception 3D inclut : plans de masse, rendus 3D photo-réalistes de plusieurs points de vue, palette végétale détaillée, documents techniques, et accompagnement jusqu'à validation finale. Modifications illimitées incluses."
                      },
                      {
                        q: "Réalisez-vous les travaux d'aménagement ?",
                        a: "Nous sommes spécialisés dans la conception. Nous vous recommandons des partenaires qualifiés pour la réalisation ou vous pouvez choisir votre propre prestataire avec nos plans."
                      }
                    ]
                  },
                  {
                    category: "Zone d'intervention",
                    questions: [
                      {
                        q: "Dans quelles communes intervenez-vous ?",
                        a: "Nous intervenons sur toute la Guadeloupe : Grande-Terre, Basse-Terre, et les îles. Les frais de déplacement sont inclus pour la plupart des communes."
                      },
                      {
                        q: "Y a-t-il des frais de déplacement ?",
                        a: "Les déplacements sont inclus dans nos tarifs pour la plupart des communes de Guadeloupe. Un supplément peut s'appliquer pour les zones très éloignées ou difficiles d'accès."
                      }
                    ]
                  },
                  {
                    category: "Processus & Délais",
                    questions: [
                      {
                        q: "Combien de temps prend un projet de conception ?",
                        a: "Un projet de conception 3D complet prend généralement entre 3 et 4 semaines : 1-2 semaines pour l'analyse, 2-3 semaines pour la conception, puis 1 semaine pour les ajustements finaux."
                      },
                      {
                        q: "Dans quel délai répondez-vous aux demandes ?",
                        a: "Nous nous engageons à répondre à toute demande dans les 24h ouvrées. Pour les demandes urgentes, nous organisons un échange téléphonique dans les meilleurs délais."
                      },
                      {
                        q: "Puis-je demander des modifications sur le projet 3D ?",
                        a: "Absolument ! Les modifications sont illimitées et incluses dans notre prestation jusqu'à ce que vous soyez entièrement satisfait du résultat."
                      },
                      {
                        q: "Que se passe-t-il après la conception ?",
                        a: "Après validation du projet, vous recevez tous les documents (plans, 3D, quantitatifs, palette végétale). Nous vous mettons en relation avec nos partenaires ou vous êtes libre de réaliser avec le prestataire de votre choix."
                      }
                    ]
                  },
                  {
                    category: "Expertise & Spécificités",
                    questions: [
                      {
                        q: "Pourquoi choisir un paysagiste spécialisé en climat tropical ?",
                        a: "Le climat tropical guadeloupéen nécessite une expertise spécifique : choix de plantes adaptées aux cyclones, gestion de l'humidité, sélection d'espèces résistantes à la sécheresse et au sel. Notre connaissance locale garantit la pérennité de votre aménagement."
                      },
                      {
                        q: "Travaillez-vous avec des plantes locales ?",
                        a: "Oui, nous privilégions les plantes endémiques et adaptées au climat local. Cela garantit une meilleure résistance, moins d'entretien, et un respect de la biodiversité guadeloupéenne."
                      },
                      {
                        q: "Proposez-vous des solutions éco-responsables ?",
                        a: "Absolument ! Nous concevons des jardins durables : récupération d'eau de pluie, paillage naturel, compostage, plantes mellifères pour les pollinisateurs, et limitation des produits chimiques."
                      }
                    ]
                  },
                  {
                    category: "Pour les professionnels",
                    questions: [
                      {
                        q: "Travaillez-vous avec des hôtels et résidences ?",
                        a: "Oui, nous avons une expertise solide en projets professionnels : hôtels, résidences touristiques, restaurants, espaces publics. Nous gérons les études paysagères complexes et la maîtrise d'œuvre."
                      },
                      {
                        q: "Proposez-vous un suivi de chantier ?",
                        a: "Oui, notre service de maîtrise d'œuvre paysagère inclut le suivi complet du chantier, la coordination des intervenants, le contrôle qualité, et la réception des travaux."
                      },
                      {
                        q: "Pouvez-vous vous adapter à un budget spécifique ?",
                        a: "Oui, nous travaillons avec vous pour optimiser votre budget. Nous proposons des solutions par phases, des alternatives de matériaux, et une priorisation des aménagements selon vos contraintes financières."
                      }
                    ]
                  }
                ].map((category, catIndex) => (
                  <div key={catIndex} style={{ marginBottom: '3rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>{category.category}</h2>
                      <div style={{ height: '4px', width: '80px', background: 'linear-gradient(to right, #16a34a, #059669)', borderRadius: '2px' }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {category.questions.map((item, qIndex) => (
                        <details key={qIndex} style={{
                          background: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          padding: '1.5rem',
                          transition: 'all 0.3s'
                        }}>
                          <summary style={{
                            fontWeight: 600,
                            fontSize: '1.125rem',
                            cursor: 'pointer',
                            listStyle: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <span>{item.q}</span>
                            <span style={{ fontSize: '1.5rem', color: '#16a34a' }}>+</span>
                          </summary>
                          <div style={{
                            marginTop: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid #e5e7eb',
                            color: '#6b7280',
                            lineHeight: 1.7
                          }}>
                            {item.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                background: 'white',
                padding: '3rem',
                borderRadius: '1rem',
                border: '2px solid #e5e7eb',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#d1fae5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <svg style={{ width: '32px', height: '32px', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Vous ne trouvez pas votre réponse ?
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                  Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
                    Nous contacter
                  </button>
                  <button className="btn btn-secondary" onClick={() => window.location.href = 'tel:+590690XXXXXX'}>
                    Appelez-nous
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* À PROPOS PAGE - Version complète */}
      {currentPage === 'apropos' && (
        <>
          {/* Hero Section */}
          <section style={{
            marginTop: '80px',
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #f0fdf4, #dbeafe)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <button 
                onClick={() => setCurrentPage('home')} 
                style={{
                  background: 'white',
                  border: '2px solid #e5e7eb',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontWeight: 600
                }}
              >
                ← Retour
              </button>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  À Propos
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Notre Histoire & Notre Vision
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                  Depuis plus de 10 ans, nous façonnons les jardins d'exception de la Guadeloupe
                </p>
              </div>
            </div>
          </section>

          {/* Notre Histoire */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Notre Histoire</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#6b7280', lineHeight: 1.7 }}>
                    <p>
                      Papillon Guadeloupe Création est née de la passion de <strong>BRUDEY JEROME</strong> pour 
                      l'aménagement paysager tropical. Après avoir étudié 6 ans en métropole, 
                      il décide de revenir en Guadeloupe pour créer des jardins qui respectent 
                      et valorisent la biodiversité locale.
                    </p>
                    <p>
                      Notre approche unique combine expertise technique, créativité artistique et 
                      technologies modernes de visualisation 3D. Nous croyons que chaque espace 
                      extérieur peut devenir un havre de paix qui reflète la personnalité de ses propriétaires.
                    </p>
                    <p>
                      Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 50 projets, 
                      des jardins privés aux espaces paysagers d'hôtels de luxe.
                    </p>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
                      Discutons de votre projet
                    </button>
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{
                    aspectRatio: '1/1',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                      alt="Notre équipe"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-1.5rem',
                    right: '-1.5rem',
                    background: '#16a34a',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>10+</div>
                    <div style={{ fontSize: '0.875rem' }}>Années d'expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Nos Valeurs
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  Ce qui nous guide au quotidien
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {[
                  {
                    icon: '🌱',
                    title: 'Respect de l\'environnement',
                    description: 'Nous privilégions les plantes locales et les pratiques durables'
                  },
                  {
                    icon: '🎨',
                    title: 'Créativité & Innovation',
                    description: 'Chaque projet est unique et conçu sur mesure'
                  },
                  {
                    icon: '🤝',
                    title: 'Écoute & Proximité',
                    description: 'Votre satisfaction est au cœur de nos préoccupations'
                  },
                  {
                    icon: '⚡',
                    title: 'Réactivité',
                    description: 'Réponse sous 24h et suivi personnalisé'
                  }
                ].map((value, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{value.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Notre Équipe */}
          <section style={{ padding: '5rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid #16a34a',
                  borderRadius: '2rem',
                  color: '#16a34a',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Notre Équipe
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  Les experts qui donnent vie à vos projets
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {[
                  {
                    name: 'BRUDEY JEROME',
                    role: 'Architecte Paysagiste',
                    description: '15 ans d\'expérience en conception paysagère tropicale',
                    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
                  },
                  {
                    name: 'Équipe Conception',
                    role: 'Conceptrice 3D',
                    description: 'Experte en visualisation et modélisation 3D',
                    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
                  },
                  {
                    name: 'Équipe Projet',
                    role: 'Chef de Projet',
                    description: 'Coordination et suivi de chantiers',
                    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
                  }
                ].map((member, i) => (
                  <div key={i} className="card-hover" style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                      <img 
                        src={member.image}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{member.name}</h3>
                      <span style={{
                        display: 'inline-block',
                        background: '#f3f4f6',
                        color: '#4b5563',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '1rem'
                      }}>
                        {member.role}
                      </span>
                      <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(to bottom right, #16a34a, #059669)',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Envie de travailler avec nous ?
              </h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                Rejoignez les nombreux clients satisfaits qui nous font confiance
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn" style={{ background: 'white', color: '#16a34a' }} onClick={() => setCurrentPage('contact')}>
                  Démarrer un projet
                </button>
                <button className="btn btn-outline" onClick={() => setCurrentPage('realisations')}>
                  Voir nos réalisations
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer - Design moderne inspiré de l'image */}
      <footer style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        padding: '4rem 0 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Pattern background subtil */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          {/* Contenu principal du footer */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            
            {/* Colonne 1 - Logo & Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)',
                  border: '2px solid rgba(34, 197, 94, 0.3)'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1749829537470-929d6cf1213d?w=200" 
                    alt="Papillon Guadeloupe"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                    Papillon Guadeloupe
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#22c55e', fontWeight: 600 }}>
                    Création Paysagère
                  </div>
                </div>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: 1.7 }}>
                Architecte paysagiste en Guadeloupe, nous concevons des jardins d'exception parfaitement adaptés au climat tropical.
              </p>
            </div>

            {/* Colonne 2 - Services */}
            <div>
              <h4 style={{ 
                color: '#22c55e', 
                fontSize: '1rem', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Services
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { text: 'Conception paysagère', page: 'services' },
                  { text: 'Entretien paysager', page: 'entretien' },
                  { text: 'Location motoculteur', page: 'location' },
                  { text: 'Tous nos services', page: 'services' }
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        setCurrentPage(item.page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{ 
                        color: '#cbd5e1', 
                        textDecoration: 'none', 
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ color: '#22c55e' }}>→</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 - Informations */}
            <div>
              <h4 style={{ 
                color: '#22c55e', 
                fontSize: '1rem', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Informations
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { text: 'À propos', page: 'apropos' },
                  { text: 'Nos réalisations', page: 'realisations' },
                  { text: 'Notre processus', page: 'processus' },
                  { text: 'FAQ', page: 'faq' }
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        setCurrentPage(item.page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{ 
                        color: '#cbd5e1', 
                        textDecoration: 'none', 
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ color: '#22c55e' }}>→</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 4 - Contact */}
            <div>
              <h4 style={{ 
                color: '#22c55e', 
                fontSize: '1rem', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg style={{ width: '18px', height: '18px', color: '#22c55e', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+590690XXXXXX" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                    +590 690 XX XX XX
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg style={{ width: '18px', height: '18px', color: '#22c55e', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:papillonguadeloupe1@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none', wordBreak: 'break-word' }}>
                    papillonguadeloupe1@gmail.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg style={{ width: '18px', height: '18px', color: '#22c55e', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ color: '#cbd5e1' }}>Toute la Guadeloupe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '2rem' }} />

          {/* Bas du footer */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '0.875rem'
          }}>
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ color: '#94a3b8' }}>
                © 2025 <span style={{ color: '#22c55e', fontWeight: 600 }}>PAPILLON GUADELOUPE SASU</span>. Tous droits réservés.
              </div>
              <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🌺 Aménagement paysager professionnel en Guadeloupe • SIRET : 830 230 603 00011
              </div>
            </div>

            {/* Liens secondaires */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem',
              fontSize: '0.813rem',
              flexWrap: 'wrap'
            }}>
              {[
                { text: 'À propos', page: 'apropos' },
                { text: 'FAQ', page: 'faq' },
                { text: 'Mentions légales', page: 'home' },
                { text: 'Contact', page: 'contact' }
              ].map((item, i) => (
                <a 
                  key={i}
                  href="#" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setCurrentPage(item.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ 
                    color: '#94a3b8', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = '#22c55e'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
