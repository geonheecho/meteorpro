import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { BoardCollection } from '/imports/db/BoardCollection';
import '/imports/api/BoardMethods';
import '/imports/api/BoardPublications';

//로그인
const SEED_USERNAME = '조건희';
const SEED_PASSWORD = '123';

//오픈채팅방 분께서 도와주심
const initializeBoard = () => {

  for (let data of dummyDataSet) {
    BoardCollection.insert(data);
  }

}


// const insertBoard = (_id, no, title, category, dictionary, language, word, user) => {
//   BoardCollection.insert({
//     no: no,
//     title: title,
//     category: category,
//     dictionary: dictionary,
//     language: language,
//     word: word,
//     userId: user._id,
//     create: new Date(),
//   })
// }
//계정을 찾는듯
const user = Accounts.findUserByUsername(SEED_USERNAME);

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  //오픈채팅방 분께서 도와주심
  // 초기 보드 데이터 생성
  BoardCollection.find().count()
    ? null
    : initializeBoard(user)

});

