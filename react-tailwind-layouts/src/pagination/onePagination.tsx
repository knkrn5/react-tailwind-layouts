import { useState } from "react";

const PER_PAGINATION = 5;

export default function OnePaginaton() {
  const [currentPage, setCurrentPage] = useState<number>(3);//Default is 3
  const [startPagination, setStartPagination] = useState<number>(0);

  const totalPages = 30;

  const handleBlogPagination = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.currentTarget as HTMLElement).id;

    if (id === "previous") {
      if (currentPage <= 1) return;
      if ((currentPage - 1) % PER_PAGINATION === 0) {
        setStartPagination((prev) => Math.max(prev - PER_PAGINATION, 0));
      }
      setCurrentPage((prev) => prev - 1);
    } else if (id === "next") {
      if (currentPage >= totalPages) return;
      if ((currentPage + 1) % PER_PAGINATION === 1) {
        setStartPagination((prev) => prev + PER_PAGINATION);
      }
      setCurrentPage((prev) => prev + 1);
    } else {
      const pageNumber = parseInt(id, 10);
      setCurrentPage(pageNumber);
    }

    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <nav aria-label="Page navigation example" className="px-2">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li
            id="previous"
            className={`flex items-center justify-center px-4 h-10 leading-tight border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-600  "
                : "text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400 cursor-pointer"
            }`}
            onClick={(e) => {
              handleBlogPagination(e);
            }}
          >
            Previous
          </li>

          {Array.from({ length: totalPages })
            .slice(startPagination, startPagination + PER_PAGINATION)
            .map((_, i: number) => {
              const pageNum = i + startPagination + 1;
              return (
                <li
                  key={pageNum}
                  id={String(pageNum)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-200 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
                    currentPage === pageNum
                      ? "text-black dark:text-white bg-gray-200 dark:bg-gray-700"
                      : "text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400"
                  }`}
                  onClick={handleBlogPagination}
                >
                  {pageNum}
                </li>
              );
            })}

          <li
            id="next"
            className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-e-lg hover:bg-gray-200 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50 bg-white dark:bg-gray-800 dark:text-gray-400  "
                : "text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400 cursor-pointer"
            }`}
            onClick={handleBlogPagination}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
}
