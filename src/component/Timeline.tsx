// Timeline.tsx
import React from 'react';
import TimelineItem from './TimeLineItem';

interface TimelineData {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineData[] = [
  {
    date: 'June 2023 - Now',
    title: 'Tamsang-Tamsong',
    description: 'this is Delivery Project as mobile application for rider and shop',
  },
  {
    date: 'June 2023 - Oct 2023',
    title: 'Transline',
    description: 'About Mobile Application to view bus line, track bus location in real time',
  },
  {
    date: '20 Nov 2023 - 26 Nov 2023',
    title: 'TopGun Rally TESA #17',
    description: 'This is about hydrology model for prediction flood at Ubonrachathanee',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;

