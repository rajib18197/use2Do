import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import styles from "./Pagination.module.css";
import { PAGE_SIZE } from "../utils/constant";

function Pagination({ count, page, onPageChange }) {
  const currentPage = page;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    onPageChange(next);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    onPageChange(prev);
  }

  if (pageCount <= 1) return null;

  return (
    <div className={styles.pagination}>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>

      <div className={styles.buttonContainer}>
        <button
          className={styles.paginationButton}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>

        <button
          className={styles.paginationButton}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
