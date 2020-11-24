import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BoardCollection } from '/imports/db/BoardCollection';
import { Link } from 'react-router-dom'
import { BoardUpdate } from './BoardUpdate';
//axios를 사용하려 했으나 server랑 주고받는것도 없고 view에서 디비도 접속하고, 쿼리를 만들어주는게 정상인가(?) 생각이든다....
//nosql이라 가능한건가..? 미티어라 가능한건가..? 아직까지도 왜 나는 프론트에서 다 만들고있는건지 도통 이해할수가없네 허허...
//axios를 써보려고 한 이유는 server와 연습할겸 비동기 통신으로 호출을 하기 위해사용하려했는데 일단은 나는 view에서 다 처리하고 있기때문에
//할 수있는 방법이 없다고 생각했다....
//그러면 나는 view에서 디비를 접속을해서 해야하는건데 리스트 처럼 모든 게시물들을 가져온는게 아니기 때문에 ..
//어떻게 한 데이터만 가져올지 모르게뙁...
export const BoardDetails = ({ history, location, match }) => {
    const { _id } = match.params;
    console.log(_id);

    const data = useTracker(() =>

        BoardCollection.findOne({ _id })
    );

    console.log(data);

    const title = data ? data.title : ""
    const category = data ? data.category : ""
    const language = data ? data.language : ""
    const dictionary = data ? data.dictionary : ""
    const word = data ? data.word : ""
    return (
        <div>
            <h2 align="center">게시글 상세정보</h2>
            <div className="post-view-wrapper">

                <div className="post-view-row">
                    <label>제목 :</label>
                    <label>{title}</label>
                </div>
                <div className="post-view-row">
                    <label>카테고리 :</label>
                    <label>{category}</label>
                </div>
                <div className="post-view-row">
                    <label>언어</label>
                    <label>{language}</label>
                </div>
                <div className="post-view-row">
                    <label>사전이름 :</label>
                    <label>{dictionary}</label>
                </div>
                <div className="post-view-row">
                    <label>?? :</label>
                    <label>{word}</label>
                </div>


                {/* <label><BoardUpdate title={title} category={category} language={language} dictionary={dictionary} word={word} /> </label> */}

                <div>
                    <button className="post-view-go-list-btn" align="center" onClick={() => history.goBack()}>돌아가기</button>
                    <Link to={`/BoardUpdate/${_id, title, category, language, dictionary, word}`}>
                        {/* <Link to={`/BoardUpdate/${_id, title, category, language, dictionary, word}`}> */}
                        <button className="post-view-go-list-btn" align="center">수정</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// BoardCollection.findOne({ _id })
// BoardCollection.find({ _id }, { sort: { createAt: -1 } }).fetch()
 // const tasks1 = useTracker(() =>
    //     BoardCollection.find({}, { sort: { createAt: -1 } }).fetch()
    // );

    // console.log(tasks1);

    // const data = BoardCollection.findOne({ _id })
    // console.log(data);

    // const [title, setTitle] = useState('');
    // const [category, setCategory] = useState('');
    // const [dictionary, setDictionary] = useState('');
    // const [language, setLanguage] = useState('');
    // const [word, setWord] = useState('');
