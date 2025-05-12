import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  font-family: "Andada Pro", serif;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 4px;
    background-color: ${props => props.theme.primary};
  }
`;

const ContactContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
`;

const ContactForm = styled.form`
  border-radius: 10px;
  padding: 2rem;
  background-color: ${props => props.theme.card};
  box-shadow: ${props => props.theme.shadow};
`;

const ContactInfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(67, 97, 238, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ContactDetail = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: ${props => props.theme.text};
    font-family: "Andada Pro", serif;
  }
  
  p {
    font-size: 1rem;
    color: ${props => props.theme.text};
    font-family: "Andada Pro", serif;
    opacity: 0.8;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: "Andada Pro", serif;
  font-size: 1rem;
  color: ${props => props.theme.text};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.primary};
  color: white;
  font-family: "Andada Pro", serif;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const FormSuccess = styled.p`
  color: #10B981;
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSuccess, setFormSuccess] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log(formData);
    setFormSuccess('Your message has been sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormSuccess('');
    }, 5000);
  };
  
  return (
    <ContactSection id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      
      <ContactContainer>
        <ContactInfo>
          <ContactInfoItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactDetail>
              <h4>Phone</h4>
              <p>+91-8847279783</p>
            </ContactDetail>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactDetail>
              <h4>Email</h4>
              <p>vasudev.8847@gmail.com</p>
            </ContactDetail>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactDetail>
              <h4>Location</h4>
              <p>704/7 Vijay Nagar, Patiala, Punjab</p>
            </ContactDetail>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaLinkedin />
            </ContactIcon>
            <ContactDetail>
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/vasudev--</p>
            </ContactDetail>
          </ContactInfoItem>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Your Name</FormLabel>
            <FormInput 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Your Email</FormLabel>
            <FormInput 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Subject</FormLabel>
            <FormInput 
              type="text" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Message</FormLabel>
            <FormTextarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
          
          {formSuccess && <FormSuccess>{formSuccess}</FormSuccess>}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;