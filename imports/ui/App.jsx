import React, { Fragment } from 'react';
import { Pages } from './Pages';
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm';

export const App = () => {

  const user = useTracker(() => Meteor.user());
  const handler = Meteor.subscribe('tasks');


  return (
    <div className="main">
      {user ? (
        <Fragment>
          <Pages />
        </Fragment>
      ) : (
          <LoginForm />

        )}
    </div>

  );
}


