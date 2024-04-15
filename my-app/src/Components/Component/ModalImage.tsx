import React from 'react';

interface ModalProps {
  imgURL: string;
  aspectRatio?: string;
}

const ModalImage: React.FC<ModalProps> = ({ imgURL, aspectRatio = "16/9" }) => {
  const openModal = () => {
    const modalElement = document.getElementById(`my_modal_${imgURL}`);
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal();
    }
  };

  const divStyle = {
    backgroundImage: `url(${imgURL})`,
    ...(aspectRatio !== 'auto' && { aspectRatio }), 
  };

  return (
    <>
      <div
        className="w-full bg-cover cursor-pointer bg-center"
        style={divStyle}
        onClick={openModal}
      ></div>
      <dialog id={`my_modal_${imgURL}`} className="modal">
        <div className="modal-box max-w-[800px] p-0 bg-[#3d3d3d]">
            <img src={imgURL} className='w-full bg-white' />
          <p className="py-4 text-center text-white">description</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => {
            const modalElement = document.getElementById(`my_modal_${imgURL}`);
            if (modalElement) {
              (modalElement as HTMLDialogElement).close();
            }
          }}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalImage;
