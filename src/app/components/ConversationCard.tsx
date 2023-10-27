import ProfilePicture from './ProfilePicture';

interface ConversationCardProps {
  src: string;
  name: string;
  surname: string;
  lastMessage: string;
  lastMessageTime: string;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  src,
  name,
  surname,
  lastMessage,
  lastMessageTime
}) => {
  return (
    <button className="flex w-full items-center gap-4 hover:bg-gray-200 focus:bg-gray-200 px-4 py-2 rounded-md">
      {/* Profile pic */}
      <div className="flex-3">
        <ProfilePicture src={src} alt={`${name} ${surname} profile picture`} />
      </div>

      {/* User info */}
      <div className="flex-1">
        {/* Imie nazwisko // godzina*/}
        <div className="flex items-center justify-between text-left">
          <h1 className="text-blue text-xl font-bold text-left">{`${name} ${surname}`}</h1>
          <p className="text-sm text-gray-500 ">{lastMessageTime}</p>
        </div>
        {/* wiadomosc */}
        <p className="text-gray-500 text-sm w-3/5 text-left">
          {lastMessage.substring(0, 57) + '...'}
        </p>
      </div>
    </button>
  );
};

export default ConversationCard;
