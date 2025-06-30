import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import EventItem from '../components/EventItem';

const Events = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekly Satsang',
      description: 'Join us for our weekly spiritual gathering with prayers, bhajans, and discourse on spiritual topics. A time for community bonding and spiritual nourishment.',
      date: '2025-07-05',
      time: '18:00',
      location: 'Main Temple Hall',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    },
    {
      id: 2,
      title: 'Spiritual Workshop: Meditation Techniques',
      description: 'Learn about various meditation techniques and spiritual practices for daily life. Suitable for beginners and experienced practitioners.',
      date: '2025-07-12',
      time: '10:00',
      location: 'Community Center',
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    },
    {
      id: 3,
      title: 'Community Service Day',
      description: 'Join our volunteers for a day of community service. We will be helping local families and contributing to neighborhood improvement projects.',
      date: '2025-07-19',
      time: '09:00',
      location: 'Community Center',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    },
    {
      id: 4,
      title: 'Youth Spiritual Circle',
      description: 'A special program designed for young adults to explore spirituality in the modern world. Interactive discussions and group activities.',
      date: '2025-07-26',
      time: '16:00',
      location: 'Youth Hall',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      isPast: false
    },
    {
      id: 5,
      title: 'Monthly Spiritual Retreat',
      description: 'A day-long retreat focusing on deep meditation, spiritual teachings, and personal reflection. Includes vegetarian meals and guided sessions.',
      date: '2025-08-02',
      time: '08:00',
      location: 'Retreat Center',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    },
    {
      id: 6,
      title: 'Spiritual Music Evening',
      description: 'An evening of devotional music, bhajans, and chanting. Experience the transformative power of spiritual music and community singing.',
      date: '2025-08-09',
      time: '19:00',
      location: 'Main Temple Hall',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Annual Spiritual Conference 2025',
      description: 'Our annual conference brought together spiritual teachers and seekers from around the region for three days of intensive learning and fellowship.',
      date: '2025-06-15',
      time: '09:00',
      location: 'Main Temple Complex',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
      isPast: true
    },
    {
      id: 8,
      title: 'Charity Drive for Local Families',
      description: 'A successful charity drive that collected food, clothing, and essentials for families in need. Over 200 families were supported.',
      date: '2025-05-20',
      time: '10:00',
      location: 'Community Center',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: true
    },
    {
      id: 9,
      title: 'Spring Spiritual Festival',
      description: 'A beautiful celebration of spring with spiritual performances, community feast, and cultural programs celebrating our traditions.',
      date: '2025-04-10',
      time: '11:00',
      location: 'Temple Gardens',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: true
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{t('events_title')}</title>
        <meta name="description" content={t('events_description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('our_events')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('our_events_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 rounded-full p-1 flex space-x-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeTab === 'upcoming' ? 'bg-spiritual-500 text-white' : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                {t('upcoming_events')}
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeTab === 'past' ? 'bg-spiritual-500 text-white' : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                {t('past_events')}
              </button>
            </div>
          </div>

          <div>
            {activeTab === 'upcoming' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            )}

            {activeTab === 'past' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
