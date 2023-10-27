import ProfilePicture from './ProfilePicture';

interface ConversationCardProps {
  src: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  lastMessageUserName: string;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  src,
  name,
  lastMessage,
  lastMessageTime,
  lastMessageUserName
}) => {
  return (
    <button className="flex w-full items-center gap-4 hover:bg-gray-200 focus:bg-gray-200 px-4 py-2 rounded-md">
      {/* Profile pic */}
      <div className="flex-3">
        <ProfilePicture src={src} alt={`${name} profile picture`} />
      </div>

      {/* User info */}
      <div className="flex-1">
        {/* Imie nazwisko // godzina*/}
        <div className="flex items-center justify-between text-left">
          <h1 className="text-green-400 text-xl font-bold text-left">{`${name}`}</h1>
          <p className="text-sm text-gray-500 ">{lastMessageTime}</p>
        </div>
        {/* wiadomosc */}
        <p className="text-gray-500 text-sm w-3/5 text-left">
          <span className="font-semibold">{lastMessageUserName}: </span>
          {lastMessage.substring(0, 57) + '...'}
        </p>
      </div>
    </button>
  );
};

export default ConversationCard;
