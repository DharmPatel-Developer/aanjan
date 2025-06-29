import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import EventItem from '../components/EventItem';

const Events = () => {
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
        <title>Events - Aanjan Samaj</title>
        <meta name="description" content="Discover upcoming spiritual events, workshops, and community gatherings at Aanjan Samaj. Join us for meditation, service, and spiritual growth." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Spiritual Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for transformative spiritual gatherings, workshops, and community events 
              designed to nurture your spiritual growth and strengthen our community bonds.
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-spiritual-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'past'
                    ? 'bg-spiritual-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'upcoming' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
                <p className="text-gray-600">Mark your calendar and join us for these spiritual gatherings</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'past' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Past Events</h2>
                <p className="text-gray-600">Relive the beautiful moments from our previous gatherings</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Event Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important details about attending our events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Most events are held at our Main Temple Complex. 
                Specific locations are mentioned in each event description.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎫</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Registration</h3>
              <p className="text-gray-600 text-sm">
                Most events are free and open to all. Some workshops may require 
                advance registration for proper planning.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👕</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">What to Bring</h3>
              <p className="text-gray-600 text-sm">
                Comfortable clothing, a meditation cushion if you have one, 
                and an open heart ready for spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-16 bg-spiritual-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Events?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Feel free to reach out to us for more information about any of our spiritual gatherings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-spiritual-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
