import React from "react";
import BasicButton from "../../forms/BasicButton";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import theme from "../../theme";


const ConfirmModal = ({children, title, confirm_click, cancel_click, confirm_text = "Yes", cancel_text = "No", submitting,  size = "lg", centered = true }) => {
  

  return (
    <Modal isOpen={true} toggle={cancel_click} size={size} centered={centered}>
      {title &&            
        <ModalHeader toggle={cancel_click}>{title}</ModalHeader>
      }
      {children &&
        <ModalBody>{children}</ModalBody>
      }
      <ModalFooter>
        <BasicButton 
          type="button" 
          bgColor={theme.colors.white}  
          borderColor={theme.colors.base_500}  
          color={theme.colors.body}  
          margin=".25rem"
          paddingX="1rem"
          width="175px"
          text={cancel_text}          
          onClick={cancel_click} 
        />
        <BasicButton
          type="button" 
          bgColor={theme.colors.base_800}
          borderColor={theme.colors.base_800} 
          margin=".25rem 0 .25rem 0.25rem"
          paddingX="1rem"
          width="175px"
          text={confirm_text} 
          onClick={confirm_click} 
          submitting={submitting}
        />                
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;
