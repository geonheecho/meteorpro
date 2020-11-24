import { check } from 'meteor/check';
import { BoardCollection } from '/imports/db/BoardCollection';

//오픈채팅방에서 도와주신 분이 계신데 그분이 main.js에서 사용하시는 방법이랑 이 방법이랑 차이점.
Meteor.methods({
    'tasks.insert'(title, category, dictionary, language, word) {

        check(title, String);
        check(category, String);
        check(dictionary, String);
        check(language, String);
        check(word, String);

        BoardCollection.insert({

            title,
            category,
            dictionary,
            language,
            word,
            createdAt: new Date,
            userId: this.userId,

        })
    },

    'tasks.remove'(boardId) { //boardId,
        console.log("boardId", boardId);
        check(boardId, String);
        // const board = BoardCollection.findOne({ _id: boardId, userId: this.userId });
        BoardCollection.remove(boardId);
    },
    'tasks.updateOne'(boardId, title, category, dictionary, language, word) {
        console.log("boardId", boardId);
        check(boardId, String);
        check(title, String);
        check(category, String);
        check(dictionary, String);
        check(language, String);
        check(word, String);

        BoardCollection.update((boardId), {
            $set: {
                title: title,
                category: category,
                dictionary: dictionary,
                language: language,
                word: word,
                createdAt: new Date(),
                userId: this.userId
            },
        });
    },
})
// { title: title }, { category: category }, { dictionary: dictionary }, { language: language }, { word: word }