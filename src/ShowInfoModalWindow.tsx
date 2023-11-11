import React from "react";
import Button from "./Button";
import ModalWindow from "./ModalWindow";

interface DeleteAccountModalWindowProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountModalWindow: React.FC<DeleteAccountModalWindowProps> = ({
  showModal,
  setShowModal,
}) => {
  const header = (
    <div className="flex items-start justify-between p-5 rounded-t">
      <h3 className="text-2xl text-letter-color font-semibold">
        Are you sure you want to delete the account permanently?
      </h3>
      <button className="bg-transparent" onClick={() => setShowModal(false)}>
        <span className="bg-transparent text-letter-color text-2xl">×</span>
      </button>
    </div>
  );

  const body = (
    <div className="relative p-6 flex">
      <p className="w-1/2 my-4 text-letter-color text-lg leading-relaxed">
        This action cannot be undone and all your data will be lost.
      </p>
    </div>
  );

  const footer = (
    <div className="flex items-center justify-end p-6 rounded-b">
      <Button
        className="w-1/6 text-secondary-color background-mark-color font-bold uppercase px-6 py-2 text-sm border-secondary-color mr-1 mb-1 ease-linear transition-all"
        onClick={() => setShowModal(false)}
      >
        Close
      </Button>
    </div>
  );

  return (
    <>
      <ModalWindow
        showModal={showModal}
        content={
          <>
            {header}
            {body}
            {footer}
          </>
        }
      />
    </>
  );
};

export default DeleteAccountModalWindow;
