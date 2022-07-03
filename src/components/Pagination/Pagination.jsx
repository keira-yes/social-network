import { useState, useEffect } from "react";
import classes from "./Pgination.module.css";

const Pagination = ({ total, pageLimit, paginationLimit = 10, currentPage, handlePageChange }) => {
    const [chunkNumber, setChunkNumber] = useState(1);
    const pages = [];
    const pagesCount = Math.ceil(total / pageLimit);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const chunks = Math.ceil(pagesCount / paginationLimit);
    const leftBorder = (chunkNumber - 1) * paginationLimit + 1;
    const rightBorder = chunkNumber * paginationLimit;

    useEffect(() => {
        setChunkNumber();
    }, [currentPage]);

    return (
        <div>
            {chunkNumber > 1 &&
                <button type="button" onClick={() => setChunkNumber(chunkNumber - 1)}>Prev Page</button>
            }
            {pages
                .filter(page => page >=leftBorder && page <= rightBorder)
                .map(page => (
                    <button
                        type="button"
                        key={page}
                        className={page === currentPage ? classes.active : ''}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            {chunks > chunkNumber &&
                <button type="button" onClick={() => setChunkNumber(chunkNumber + 1)}>Next Page</button>
            }
        </div>
    )
}

export default Pagination;