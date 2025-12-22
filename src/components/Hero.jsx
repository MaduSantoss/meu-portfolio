import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroImg from '../assets/img_profile.jpg'; 


const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 160px 20px 100px;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 120px;
  }
`;

const ContentLeft = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const Greeting = styled(motion.span)`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent-color);
  background: rgba(138, 79, 255, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(138, 79, 255, 0.2);
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 15px;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) { font-size: 2.8rem; }
`;

const JobTitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 25px;
  @media (max-width: 768px) { font-size: 1.4rem; }
`;

const Description = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  max-width: 500px;
  @media (max-width: 960px) { margin: 0 auto 30px; }
`;

const Icons = styled(motion.div)`
  display: flex;
  gap: 20px;
  position: relative; 
  z-index: 100; 

  @media (max-width: 960px) { justify-content: center; }

  a {
    background: rgba(255,255,255,0.05);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
    color: var(--text-color);
    border: 1px solid rgba(255,255,255,0.1);
    transition: 0.3s;
    
    cursor: pointer;

    &:hover {
      background: var(--accent-color);
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(138, 79, 255, 0.4);
      border-color: var(--accent-color);
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) { width: 300px; height: 300px; }
`;

const GlowBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--accent-color);
  filter: blur(80px);
  opacity: 0.4;
  z-index: 0;
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
`;

const ProfileImage = styled.img`
  position: relative;
  z-index: 1;
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255,255,255,0.1);
  animation: ${float} 5s ease-in-out infinite;
  @media (max-width: 768px) { width: 280px; height: 280px; }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <ContentLeft>

         <Greeting 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
        👋 Olá, Bem Vindo!
        </Greeting>
        
        <Title
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          Maria Eduarda
        </Title>
        
        <JobTitle
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Desenvolvedora de Software.
        </JobTitle>
        
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Transformo ideias em interfaces bonitas e funcionais. 
          Focado em performance, animações e experiência do usuário.
        </Description>
        
        <Icons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
            <a href="https://github.com/MaduSantoss" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/maria-eduarda-santos-silva-868298300/" target="_blank"><FaLinkedin /></a>
            <a href="https://w.app/skvpmi" target="_blank"><FaWhatsapp /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=madusantoss1510@gmail.com&su=Contato%20do%20Site&body=Olá!%20Gostaria%20de%20conversar." 
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaEnvelope />
          </a>
        </Icons>
      </ContentLeft>

      <ImageWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GlowBackground />
        <ProfileImage src={heroImg} alt="Foto de Perfil de Maria Eduarda" />
      </ImageWrapper>
    </HeroSection>
  );
};

export default Hero;