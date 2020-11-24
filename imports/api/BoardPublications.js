import { Meteor } from 'meteor/meteor';
import { BoardCollection } from '/imports/db/BoardCollection';

Meteor.publish('tasks', function publishBoard() {
    return BoardCollection.find({ userId: this.userId });

})


// Meteor.publish: 서버에서 클라이언트로 데이터를 게시 할 수 있습니다.
// Meteor.subscribe: 클라이언트 코드가 클라이언트에 데이터를 요청할 수 있습니다.
