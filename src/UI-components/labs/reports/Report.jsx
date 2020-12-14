import React, {useState} from "react";
import Pagination from "@material-ui/lab/Pagination";
import {Document, Page} from "react-pdf";
import {TypographyImportant} from "../styled";
import {ReportStyled} from "./styled";

export default ({report}) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const handleChangePage = (event, newPage) => {
        debugger
        setPageNumber(newPage)
    }
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <ReportStyled>
            <Pagination
                color="primary"
                count={numPages}
                page={pageNumber}
                onChange={handleChangePage}
            />
            <Document
                file={report}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <TypographyImportant>
                Page <span>{pageNumber}</span> of <span>{numPages}</span>
            </TypographyImportant>
        </ReportStyled>
    )
}