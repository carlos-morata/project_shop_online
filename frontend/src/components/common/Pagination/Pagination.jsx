import React from "react";

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {

  if(totalPages <= 1) return null;
  
  return <>
      { totalPages > 1 && (
      <section className="pagination-container">
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-buttons">
           &#8678;
        </button>
        <p className="pagination-text">Página {currentPage} de {totalPages}</p>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-buttons">
            &#8680;
        </button>
      </section>
    )}
  </>;
};

export default Pagination;
