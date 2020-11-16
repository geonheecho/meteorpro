import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { BoardCollection } from '/imports/db/BoardCollection';

export const BoardForm = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [dictionary, setDictionary] = useState('');
    const [language, setLanguage] = useState('');
    const [word, setWord] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!title) return;
        Meteor.call('tasks.insert', title, category, dictionary, language, word);
        BoardCollection.insert({

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


            <button type="submit">사전 추가하기</button>
        </form>
    );
}