import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { BoardCollection } from '/imports/db/BoardCollection';

export const BoardForm = () => {

    const [title, setTitle] = useState('');
    console.log("title", title);
    const [category, setCategory] = useState('');
    console.log("category", category);
    const [dictionary, setDictionary] = useState('');
    console.log("dictionary", dictionary);
    const [language, setLanguage] = useState('');
    console.log("language", language);
    const [word, setWord] = useState('');
    console.log("word", word);

    const handleSubmit = e => {
        e.preventDefault();

        if (!title) return;
        Meteor.call('tasks.insert', title, category, dictionary, language, word, function (error) {
            if (!error) {
                console.log('글쓰기 성공');
                history.go(-1);
            } else {
                console.log(error);
                console.log('글쓰기 실패');
            }

            BoardCollection.insert({
                // _id: getNextSequence("userid"),
                title: title.trim(),
                category: category.trim(),
                dictionary: dictionary.trim(),
                language: language.trim(),
                word: word.trim(),

                createdAt: new Date(),
            });


            setTitle('');
            setCategory('');
            setDictionary('');
            setLanguage('');
            setWord('');
        })
    };

    return (

        <form className="board-form" onSubmit={handleSubmit}>
            <input

                type="text"
                placeholder="제목"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <br></br><br></br>
            <input
                type="text"
                placeholder="카테고리"
                value={category}
                onChange={e => setCategory(e.target.value)}
            /><br></br><br></br>
            <input
                type="text"
                placeholder="사전이름"
                value={dictionary}
                onChange={e => setDictionary(e.target.value)}
            /><br></br><br></br>
            <input
                type="text"
                placeholder="언어"
                value={language}
                onChange={e => setLanguage(e.target.value)}
            /><br></br><br></br>
            <input
                type="text"
                placeholder="단어 수"
                value={word}
                onChange={e => setWord(e.target.value)}
            /><br></br><br></br>
            {/* <div className="post-view-row">
                <label>?? :</label>
                <label><BoardUpdate title={title} category={category} language={language} dictionary={dictionary} word={word} /> </label>
            </div> */}

            <button type="submit" >사전 추가하기</button>
        </form>
    );
} 