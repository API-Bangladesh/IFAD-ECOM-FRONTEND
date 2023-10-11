import { FacebookProvider, CustomChat } from "react-facebook";

const MessengerChatBot = () => {
  return (
    <FacebookProvider appId="993515795277852" chatSupport>
      <CustomChat pageId="136575169542672" minimized={true} />
    </FacebookProvider>
  );
};

export default MessengerChatBot;
