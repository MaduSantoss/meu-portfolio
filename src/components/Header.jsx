import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// --- ESTILOS ---

const HeaderContainer = styled(motion.header)`
  width: 100%;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0; left: 0; 
  z-index: 9999;
  
  background: rgba(5, 5, 5, 0.6);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) { padding: 15px 20px; }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  z-index: 10000;

  span.brackets {
    color: var(--accent-color);
    font-weight: 900;
  }
  
  span.name {
    background: linear-gradient(90deg, #fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover { opacity: 0.9; text-shadow: 0 0 10px rgba(138, 79, 255, 0.5); }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${props => (props.$active ? 'white' : 'var(--text-secondary)')};
  position: relative;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover { color: white; }

  &::after {
    content: '';
    position: absolute;
    width: ${props => (props.$active ? '100%' : '0%')}; 
    height: 2px;
    bottom: -5px; left: 0;
    background: var(--accent-gradient);
    transition: 0.3s;
  }
  
  &:hover::after { width: 100%; }
`;

const Button = styled(motion.a)`
  background: ${props => (props.$active ? 'var(--accent-color)' : 'rgba(138, 79, 255, 0.1)')};
  
  border: 1px solid var(--accent-color);
  color: white;
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  
  @media (max-width: 768px) { display: none; }

  &:hover {
    background: var(--accent-color);
    box-shadow: 0 0 15px rgba(138, 79, 255, 0.4);
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  z-index: 10000;
  @media (max-width: 768px) { display: block; }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100vh;
  background: #0f0f14;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  padding-top: 120px; 
  align-items: center;
  gap: 40px;
  z-index: 9998;
`;

const MobileLink = styled.a`
  font-size: 1.5rem;
  color: ${props => (props.$active ? 'var(--accent-color)' : 'white')};
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  
  &:hover {
    color: var(--accent-color);
    transform: scale(1.1);
  }
`;

// --- LÓGICA DO COMPONENTE ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return; 
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -150 && rect.top < window.innerHeight / 2) {
            setActiveSection(sectionId);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo href="#home">
        <span className="brackets">&lt;</span>
        <span className="brackets">/&gt;</span>
      </Logo>

      <Nav>
        <NavLink href="#home" $active={activeSection === 'home'}>Home</NavLink>
        <NavLink href="#about" $active={activeSection === 'about'}>Sobre mim</NavLink>
        <NavLink href="#skills" $active={activeSection === 'skills'}>Tecnologias</NavLink> 
        <NavLink href="#projects" $active={activeSection === 'projects'}>Projetos</NavLink>
        
        <Button 
          href="#contact" 
          $active={activeSection === 'contact'}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Vamos Conversar
        </Button>
      </Nav>

      <MobileMenuIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <MobileLink href="#home" onClick={toggle} $active={activeSection === 'home'}>Home</MobileLink>
            <MobileLink href="#about" onClick={toggle} $active={activeSection === 'about'}>Sobre mim</MobileLink>
            <MobileLink href="#skills" onClick={toggle} $active={activeSection === 'skills'}>Tecnologias</MobileLink>
            <MobileLink href="#projects" onClick={toggle} $active={activeSection === 'projects'}>Projetos</MobileLink>
            
            <a 
              href="#contact" 
              onClick={toggle}
              style={{ 
                color: activeSection === 'contact' ? 'white' : 'var(--accent-color)', 
                background: activeSection === 'contact' ? 'var(--accent-color)' : 'transparent',
                border: '1px solid var(--accent-color)',
                padding: '10px 30px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}
            >
              Vamos Conversar
            </a>
          </MobileMenu>
        )}
      </AnimatePresence>

    </HeaderContainer>
  );
};

export default Header;