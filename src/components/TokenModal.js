import React from "react";

const Modal = ({ isOpen, onClose }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    // This is the backdrop for the modal which covers the entire screen
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* This is the actual modal box */}
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">Important Notice</p>
          <button className="modal-close cursor-pointer z-50" onClick={onClose}>
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M12.41 5.89L11 4.47 7.59 7.88 4.18 4.47 2.77 5.89 6.18 9.3 2.77 12.71 4.18 14.12 7.59 10.71 11 14.12 12.41 12.71 9 9.3z" />
            </svg>
          </button>
        </div>
        {/* Modal Content */}
        <p className="text-left mb-1 md:mx-0 mx-1">
          In the ongoing Initial Coin Offering (ICO), you are acquiring
          <span className="font-semibold"> $wVXLP</span> tokens subject to a
          vesting period of three months per phase. Upon completion of your
          purchase, the
          <span className="font-semibold"> $wVXLP</span> will be sent to your
          wallet. Once the ICO concludes and we launch the
          <span className="font-bold text-purple-600"> $VXLP</span> tokens, you
          can exchange your <span className="font-semibold"> $wVXLP</span>{" "}
          tokens for
          <span className="font-bold text-purple-600"> $VXLP</span>.
        </p>
        {/* Modal Footer */}
        <div className="flex justify-end pt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md hover:bg-gray-700 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#7d4daf] hover:bg-[#513074] text-white text-base font-medium rounded-md "
            onClick={onClose}
          >
            Yes, I accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
