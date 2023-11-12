import React, { ReactNode } from "react";

interface ModalWindowProps {
  showModal: boolean;
  content: ReactNode;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ showModal, content }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center backdrop-blur-sm items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-primary-color focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="outline-10 outline-green-800 rounded-lg shadow-lg relative flex flex-col bg-neutral-600 outline-none focus:outline-none">
                {content}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalWindow;
