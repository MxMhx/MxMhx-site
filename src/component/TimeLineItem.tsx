interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
  }
  
  const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description }) => {
    return (
      <div className="flex items-center mb-8">
        <div className="w-16 mr-4 text-gray-700">{date}</div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default TimelineItem;