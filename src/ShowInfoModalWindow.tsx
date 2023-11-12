import React, { useEffect, useState } from "react";
import Button from "./Button";
import ModalWindow from "./ModalWindow";
import ProductsTable from "./ProductsTable";

interface DeleteAccountModalWindowProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCSVInfo: string;
}

const DeleteAccountModalWindow: React.FC<DeleteAccountModalWindowProps> = ({
  showModal,
  setShowModal,
  setCSVInfo,
}) => {

  const header = (
    <div className="flex items-start justify-between p-3 rounded-t">
      <h3 className="text-2xl text-letter-color font-semibold">
        Prediction for hospital {setCSVInfo}
      </h3>
    </div>
  );

  const body = (
    <div className="relative p-2 w-[700px]">
      <ProductsTable csvInfo={setCSVInfo} />
    </div>
  );

  const footer = (
    <div className="flex items-center justify-end rounded-b p-3">
      <Button
        className="w-1/6 text-green-300 font-bold uppercase px-6 py-2 text-sm border-green-300 mr-1 mb-1 ease-linear transition-all"
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
