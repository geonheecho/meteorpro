import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Link } from "react-router-dom";



export const Board = ({ _id, no, title, category, dictionary, language, word, onDeleteClick }) => {
    return <TableRow>
        <Link to={`/BoardDetails/${_id}`}>
            <TableCell>{_id}</TableCell>
        </Link>
        <TableCell>{title}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{dictionary}</TableCell>
        <TableCell>{language}</TableCell>
        <TableCell>{word}</TableCell>

        <br></br>
        <button onClick={() => onDeleteClick(_id)}>&times;</button>
    </TableRow >
};
