import React from 'react';

interface ModalProps {
  imgURL: string;
}

const ModalImage: React.FC<ModalProps> = ({ imgURL }) => {
  const openModal = () => {
    const modalElement = document.getElementById(`my_modal_${imgURL}`);
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal(); 
    }
  };

  return (
    <>
      <div
        className="w-full aspect-[16/9] bg-cover cursor-pointer bg-center"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
        onClick={openModal}
      ></div>
      <dialog id={`my_modal_${imgURL}`} className="modal">
        <div className="modal-box max-w-[800px] p-0 bg-[#3d3d3d]">
            <img src={imgURL} className='w-full' />
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
