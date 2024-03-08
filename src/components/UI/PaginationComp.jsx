import React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComp({ pageTotalCount, page, setPage }) {

  return (
    <div>
      <Pagination
        page={page}
        onChange={(e, p) => setPage(p)}
        count={pageTotalCount}
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
}
