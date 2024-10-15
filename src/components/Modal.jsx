import { Dialog } from "primereact/dialog";
import React from "react";

export default function Modal({ title, state, setState, children }) {
  return (
    <Dialog
      header={title}
      draggable={false}
      visible={state}
      style={{ maxWidth: "45rem", width: "100%", margin: "1rem" }}
      onHide={() => {
        if (!state) return;
        setState(false);
      }}
    >
      {children}
    </Dialog>
  );
}
