import { PaginationProps } from "@/types/interface";

export default function Pagination({ page, setPage, totalPages }: PaginationProps) {

  return (
      <div className="flex justify-center mt-6 items-center">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-[rgb(var(--selected-green))] text-white rounded-lg disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="mx-4 text-lg text-white">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2  text-white rounded-lg disabled:bg-gray-400 bg-[rgb(var(--selected-green))]"
        >
          Next
        </button>
      </div>
  );
}
