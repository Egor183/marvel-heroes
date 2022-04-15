import React from "react";
import { Header, Icon, Modal } from "semantic-ui-react";
import { useError } from "hooks/useError.hook";

import styles from "./styles.module.css";

const ErrorModal = () => {
  const isOpen = useError();

  return (
    <Modal basic open={isOpen} size="small">
      <Header icon>
        <Icon name="exclamation triangle" />
        <h1>Something went wrong ...</h1>
      </Header>
      <Modal.Content>
        <p className={styles.description}>
          Try to reload the page or enter later.
        </p>
      </Modal.Content>
    </Modal>
  );
};

export default ErrorModal;
