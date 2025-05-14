import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

// Styled components (same as yours, shortened here for brevity)
const ContactSection = styled.section`
  padding: 6rem 0;
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: "Andada Pro", serif;
`;
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ContactInfo = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
const ContactFormContainer = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
const ContactInfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
`;
const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(67, 97, 238, 0.1);
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
`;
const ContactDetail = styled.div`
  h4 {
    margin-bottom: 0.3rem;
  }
`;
const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;
const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
`;
const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  min-height: 150px;
  resize: vertical;
`;
const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
const FormMessage = styled.p`
  margin-top: 1rem;
  color: ${({ error, theme }) => (error ? theme.error : theme.success)};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: "", isError: false, isSubmitting: true });

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzcPgbWreYmr6MQ_B5xCombWGjFMyoR4EC3LwfiD5ZDCDL8ixGuIm3WrPwcTa5lv3Mteg/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          message: "Your message has been sent successfully!",
          isError: false,
          isSubmitting: false,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(
          () => setFormStatus((prev) => ({ ...prev, message: "" })),
          5000
        );
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({
        message: "There was an error sending your message. Please try again.",
        isError: true,
        isSubmitting: false,
      });
    }
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
              <FaLinkedin />
            </ContactIcon>
            <ContactDetail>
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/vasudev--</p>
            </ContactDetail>
          </ContactInfoItem>
        </ContactInfo>

        <ContactFormContainer>
          <form onSubmit={handleSubmit}>
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
              disabled={formStatus.isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            </SubmitButton>
            {formStatus.message && (
              <FormMessage error={formStatus.isError}>
                {formStatus.message}
              </FormMessage>
            )}
          </form>
        </ContactFormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
