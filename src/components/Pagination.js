import React, { useEffect, useState } from "react";

export default function Pagination({
  totalData,
  dataPerPage,
  currentPage,
  setCurrentPage,
}) {
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalData.length / dataPerPage); i++) {
      pages.push(i);
    }

    setPageList(pages);
  }, [totalData, dataPerPage]);

  return (
    <div className="pagination_flex">
      {pageList.map((page, index) => (
        <button
          className={page === currentPage ? "active" : ""}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
