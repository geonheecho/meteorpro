import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BoardCollection } from '/imports/db/BoardCollection';


export const BoardUpdate = ({ match }) => {

    const { _id } = match.params;
    console.log(_id);

    const data = useTracker(() =>
        BoardCollection.findOne({ _id })
    );

    console.log("data", data);

    const title1 = data ? data.title : ""
    const category1 = data ? data.category : ""
    const language1 = data ? data.language : ""
    const dictionary1 = data ? data.dictionary : ""
    const word1 = data ? data.word : ""

    const state = {
        title1: '',
        category1: '',
        language1: '',
        dictionary1: '',
        word1: '',
    }

    const [title, setTitle] = useState('');
    console.log("title", title1);
    const [category, setCategory] = useState('');
    console.log("category", category1);
    const [dictionary, setDictionary] = useState('');
    console.log("dictionary", dictionary1);
    const [language, setLanguage] = useState('');
    console.log("language", language1);
    const [word, setWord] = useState('');
    console.log("word", word1);

    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        setTitle(title1);
        setCategory(category1);
        setDictionary(dictionary1);
        setLanguage(language1);
        setWord(word1);
    }, [title1, category1, dictionary1, language1, word1]);

    const updateSubmit = e => {
        e.preventDefault();
        Meteor.call('tasks.updateOne', _id, title, category, dictionary, language, word, function (error) {
            console.log("_id", _id);

            if (!error) {
                console.log('업데이트 성공');
            } else {
                console.log(error);
                console.log('업데이트 실패');
            }
        })
        history.go(-1);

        // setTitle(data.title);
        // setCategory(data.category);
        // setDictionary(data.dictionary);
        // setLanguage(data.language);
        // setWord(data.word);
    };

    return (
        <form className="board-form" onSubmit={updateSubmit}>

            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <br></br><br></br>

            <input type="text" value={category}
                onChange={e => setCategory(e.target.value)} />
            <br></br><br></br>
            <input type="text" value={dictionary}
                onChange={e => setDictionary(e.target.value)} />
            <br></br><br></br>
            <input type="text" value={language}
                onChange={e => setLanguage(e.target.value)} />
            <br></br><br></br>
            <input type="text" value={word}
                onChange={e => setWord(e.target.value)} />

            <br></br><br></br>
            <button type="submit">사전 추가하기</button>
        </form>
    );
}