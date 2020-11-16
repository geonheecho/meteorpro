import Meteor from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { BoardCollection } from '/imports/db/BoardCollection';

//안녕하세요 카이님 질문 하나만 하겠습니다
//지금 현재 구현하고싶은 기능은 해당 게시글을 눌렀을 때 상세보기페이지로 넘어가서 해당 게시글의 데이터들을 보려고 하는 상황입니다.
//보통 mysql에서는 쿼리문을 만들때에는 해당 pk값으로 그 글을 보려고 했었습니다.
// 일단은 이 몽고디비에서도  find를 할 때 _id값을 넣아야 한다고 생각을 해서 id값을 넣고 page.jsx에서도 경로뒤에 :_id 이렇게 코드를선언을 해줬습니다.
//그러고 이 디테일.jsx에도 {_id} 값을 넣어줬는데 .. 계속 언디파인드가 뜨는데 제가 어디서 _id값을 못받아오는걸까요?
//board.jsx에도 혹시나해서 :_id값을 써줬습니다.



export const BoardDetails = ({ _id }) => {
    // console.log(_id);
    // const tasks = useTracker(() =>
    //     BoardCollection.findOne({ _id }).fetch()
    // );
    // console.log(_id);

    BoardCollection.findOne({ _id })
    console.log(_id);
    return (<div>
        <h1>sdasdas이건 들어오나?</h1>

        <tr>
            <th scope="row">category???</th>
            <td>${_id}</td>
        </tr>


        {/* {
            tasks.map(board => (<Board key={board._id} />))
        } */}
    </div>
    )
}
