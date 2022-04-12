import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { selectErrorState } from "redux/selectors/error.selectors";

import styles from "./styles.module.css";

const ErrorModal = () => {
  const hasError = useSelector(selectErrorState);

  return (
    <Modal
      basic
      open={hasError}
      size="small"
      trigger={<Button>Basic Modal</Button>}
    >
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

export default memo(ErrorModal);
