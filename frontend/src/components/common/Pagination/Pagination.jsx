import React from "react";

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {

  if(totalPages <= 1) return null;
  
  return <>
      { totalPages > 1 && (
      <section className="pagination-container">
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn-pagination">
           &#8678;
        </button>
        <p>Página {currentPage} de {totalPages}</p>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn-pagination">
            &#8680;
        </button>
      </section>
    )}
  </>;
};

export default Pagination;
