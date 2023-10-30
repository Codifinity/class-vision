import React from 'react';
import ProfilePicture from './ProfilePicture';
import { CardProps } from '@/lib/interfaces';

interface ConversationCardProps extends CardProps {
  lastMessageUserName: string;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  src,
  name,
  lastMessage,
  lastMessageTime,
  lastMessageUserName,
  click
}) => {
  return (
    <button
      onClick={click}
      className="flex w-full items-center gap-4 hover:bg-gray-200 focus:bg-gray-200 px-4 py-2 rounded-md"
    >
      {/* Profile pic */}
      <div className="flex-3">
        <ProfilePicture src={src} alt={`${name} profile picture`} />
      </div>

      {/* User info */}
      <div className="flex-1">
        {/* Imie nazwisko // godzina*/}
        <div className="flex items-center justify-between text-left">
          <h1 className="text-green-400 text-md lg:text-xl font-bold text-left">{`${name}`}</h1>
          <p className="text-xs lg:text-sm text-gray-500 ">{lastMessageTime}</p>
        </div>
        {/* wiadomosc */}
        <p className="text-gray-500 text-xs lg:text-sm w-4/5 lg:w-3/5 text-left">
          <span className="font-semibold">{lastMessageUserName}: </span>
          {lastMessage.length > 57
            ? lastMessage.substring(0, 57) + '...'
            : lastMessage}
        </p>
      </div>
    </button>
  );
};

export default ConversationCard;
