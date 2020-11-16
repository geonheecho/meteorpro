import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Link } from "react-router-dom";
import { BoardDetails } from './BoardDetails';


export const Board = ({ _id, no, title, category, dictionary, language, word, onCheckboxClick, onDeleteClick }) => {
    return <TableRow>
        <Link to={"/BoardDetails/:_id" + _id}>
            <TableCell>{_id}</TableCell>
        </Link>
        <TableCell>{title}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{dictionary}</TableCell>
        <TableCell>{language}</TableCell>
        <TableCell>{word}</TableCell>
        <br></br>
        <input type="checkbox" checked={_id.isChecked} onClick={() => onCheckboxClick(_id)} readOnly />
        <button onClick={() => onDeleteClick(_id)}>&times;</button>
    </TableRow >
};
