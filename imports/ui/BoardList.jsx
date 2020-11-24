import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Board } from './Board';
import { useTracker } from 'meteor/react-meteor-data';
import { BoardCollection } from '/imports/db/BoardCollection';

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


export const BoardList = () => {

  const tasks = useTracker(() =>
    BoardCollection.find({}, { sort: { createAt: -1 } }).fetch()
  );

  const deleteBoard = (_id) => {
    if (window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.') == true) {
    } else {
      return;
    }
    Meteor.call('tasks.remove', _id)
  }

  const toggleChecked = ({ _id, isChecked }) =>
    Meteor.call('tasks.setIsChecked', _id, isChecked);
  return (

    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> 번호</TableCell>
            <TableCell> 카테고리</TableCell>
            <TableCell> 사전이름</TableCell>
            <TableCell> 언어</TableCell>
            <TableCell> 단어수</TableCell>
            <TableCell> 등록일</TableCell>
            <TableCell> 동작</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tasks.map(board => (<Board key={board._id} {...board} onCheckboxClick={toggleChecked} onDeleteClick={deleteBoard} />))
          }
        </TableBody>
      </Table>
    </div >
  );
};