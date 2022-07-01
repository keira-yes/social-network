import classes from "./Pgination.module.css";

const Pagination = ({ total, pageLimit, currentPage, handlePageChange }) => {
    const pages = [];
    const pagesCount = Math.ceil(total / pageLimit);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page => (
                <button
                    type="button"
                    key={page}
                    className={page === currentPage ? classes.active : ''}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}

export default Pagination;