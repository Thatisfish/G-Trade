import React, { useState } from "react";
import "../styles/_Pagination.scss";

export default function Pagination({ totalPages = 10, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange && onPageChange(page); // 可選 callback
  };

  return (
    <nav className="y_pagination" aria-label="Page navigation">
      <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
        «
      </button>
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          className={currentPage === num ? "active" : ""}
          onClick={() => goToPage(num)}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        onClick={() => goToPage(totalPages)} 
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </nav>
  );
}
