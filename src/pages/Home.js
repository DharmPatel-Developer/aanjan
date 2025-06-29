import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import EventItem from '../components/EventItem';
import BlogItem from '../components/BlogItem';

const Home = () => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekly Satsang',
      description: 'Join us for our weekly spiritual gathering with prayers, bhajans, and discourse.',
      date: '2025-07-05',
      time: '18:00',
      location: 'Main Temple Hall',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    },
    {
      id: 2,
      title: 'Spiritual Workshop',
      description: 'Learn about meditation techniques and spiritual practices for daily life.',
      date: '2025-07-12',
      time: '10:00',
      location: 'Community Center',
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      isPast: false
    }
  ];

  // Sample blog posts
  const featuredBlogs = [
    {
      id: 1,
      title: 'The Path to Inner Peace',
      excerpt: 'Discover the ancient wisdom and practices that lead to lasting inner peace and spiritual fulfillment.',
      author: 'Spiritual Guide',
      date: '2025-06-25',
      category: 'Spirituality',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Community Service and Compassion',
      excerpt: 'Learn how serving others becomes a path to spiritual growth and understanding.',
      author: 'Community Leader',
      date: '2025-06-20',
      category: 'Service',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Home - Aanjan Samaj</title>
        <meta name="description" content="Welcome to Aanjan Samaj - A spiritual community dedicated to growth, service, and enlightenment." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Aanjan Samaj
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A spiritual community dedicated to fostering inner growth, compassion, and service to humanity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-white text-spiritual-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spiritual Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the core values and practices that guide our spiritual community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Meditation & Mindfulness</h3>
                <p className="text-gray-600">
                  Practice ancient meditation techniques to find inner peace and clarity in daily life.
                </p>
              </div>
            </Card>
            
            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Service</h3>
                <p className="text-gray-600">
                  Serve others with compassion and contribute to the betterment of our community.
                </p>
              </div>
            </Card>
            
            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Spiritual Learning</h3>
                <p className="text-gray-600">
                  Study sacred texts and teachings to deepen your spiritual understanding.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-gray-600">Join us for our spiritual gatherings and community events</p>
            </div>
            <Link
              to="/events"
              className="text-spiritual-600 hover:text-spiritual-700 font-medium"
            >
              View All Events →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Spiritual Insights</h2>
              <p className="text-gray-600">Read our latest articles on spirituality and personal growth</p>
            </div>
            <Link
              to="/blogs"
              className="text-spiritual-600 hover:text-spiritual-700 font-medium"
            >
              View All Blogs →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
