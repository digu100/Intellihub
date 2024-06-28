import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';

import './App.css';

const App=()=>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height="100vh"
            projectID="54bce392-6ab9-4d01-aec5-35082b0138e6"
            // userName="Zlatan"
            // userSecret="123123"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=>
                <ChatFeed {...chatAppProps} />
            }

        />
    );
}

export default App;

/*
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '54bce392-6ab9-4d01-aec5-35082b0138e6';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;

*/




