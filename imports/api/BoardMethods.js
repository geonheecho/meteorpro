import { check } from 'meteor/check';
import { BoardCollection } from '/imports/db/BoardCollection';

//오픈채팅방에서 도와주신 분이 계신데 그분이 main.js에서 사용하시는 방법이랑 이 방법이랑 차이점.
Meteor.methods({
    'tasks.insert'(_id, title, category, dictionary, language, word) {

        check(title, String);
        console.log(title, "<<title")
        check(category, String);
        console.log(category, "<<category")
        check(dictionary, String);
        console.log('dictionary>>', dictionary)
        check(language, String);
        console.log('language>>', language)
        check(word, String);
        console.log('word>>>', word)
        // if (!this.userId) {
        //     throw new Meteor.Error('Not authorized.');
        // }

        BoardCollection.insert({
            _id:
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
        check(boardId, String);
        // const board = BoardCollection.findOne({ _id: boardId, userId: this.userId });

        BoardCollection.remove(boardId);
    }
})