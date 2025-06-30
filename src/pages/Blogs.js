import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import BlogItem from '../components/BlogItem';

const Blogs = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('all_articles') },
    { id: 'spirituality', name: t('spirituality') },
    { id: 'meditation', name: t('meditation') },
    { id: 'service', name: t('service') },
    { id: 'wisdom', name: t('wisdom') },
    { id: 'community', name: t('community') }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Path to Inner Peace',
      excerpt: 'Discover the ancient wisdom and practices that lead to lasting inner peace and spiritual fulfillment. Learn how meditation, mindfulness, and compassion can transform your daily life.',
      author: 'Spiritual Guide',
      date: '2025-06-25',
      category: 'spirituality',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Community Service and Compassion',
      excerpt: 'Learn how serving others becomes a path to spiritual growth and understanding. Explore the connection between selfless service and personal transformation.',
      author: 'Community Leader',
      date: '2025-06-20',
      category: 'service',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Daily Meditation Practices for Beginners',
      excerpt: 'A comprehensive guide to starting your meditation journey. Simple techniques and practical tips to establish a regular meditation practice in your busy life.',
      author: 'Meditation Teacher',
      date: '2025-06-15',
      category: 'meditation',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      title: 'Ancient Wisdom for Modern Living',
      excerpt: 'How timeless spiritual teachings can guide us through contemporary challenges. Practical applications of ancient wisdom in today\'s fast-paced world.',
      author: 'Wisdom Keeper',
      date: '2025-06-10',
      category: 'wisdom',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 5,
      title: 'Building Spiritual Community in Digital Age',
      excerpt: 'Exploring how technology can enhance rather than hinder our spiritual connections. Creating meaningful bonds in virtual and physical spaces.',
      author: 'Community Builder',
      date: '2025-06-05',
      category: 'community',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    },
    {
      id: 6,
      title: 'The Science of Mindfulness',
      excerpt: 'Understanding the scientific research behind mindfulness practices. How meditation affects the brain and contributes to mental and physical well-being.',
      author: 'Research Scholar',
      date: '2025-05-30',
      category: 'meditation',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 7,
      title: 'Compassionate Leadership in Action',
      excerpt: 'How spiritual principles can transform leadership styles. Leading with empathy, wisdom, and authentic care for others in various contexts.',
      author: 'Leadership Mentor',
      date: '2025-05-25',
      category: 'wisdom',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 8,
      title: 'Gratitude as a Spiritual Practice',
      excerpt: 'The transformative power of gratitude in spiritual development. Simple practices to cultivate appreciation and abundance in daily life.',
      author: 'Spiritual Counselor',
      date: '2025-05-20',
      category: 'spirituality',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 9,
      title: 'Environmental Stewardship and Spirituality',
      excerpt: 'Our sacred responsibility to care for the Earth. How environmental consciousness aligns with spiritual values and practical actions we can take.',
      author: 'Eco-Spiritual Advocate',
      date: '2025-05-15',
      category: 'service',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    }
  ];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div>
      <Helmet>
        <title>{t('blogs_title')}</title>
        <meta name="description" content={t('blogs_description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('spiritual_insights')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('spiritual_insights_subtitle_blog')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-spiritual-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-spiritual-100 hover:text-spiritual-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-spiritual-100 text-spiritual-800 mb-4">
                Featured Article
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Spiritual Insights</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-spiritual-100 text-spiritual-800 mr-3">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime} read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-spiritual-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-medium">
                          {blogPosts[0].author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <button className="bg-spiritual-500 hover:bg-spiritual-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'All Articles' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(selectedCategory === 'all' ? 1 : 0).map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Writing Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Wisdom</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have insights to share with our community? We welcome contributions from fellow seekers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="font-semibold mb-2">Write</h3>
                <p className="text-sm text-gray-600">Share your spiritual experiences and insights</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📤</span>
                </div>
                <h3 className="font-semibold mb-2">Submit</h3>
                <p className="text-sm text-gray-600">Send your articles for review and publication</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-semibold mb-2">Inspire</h3>
                <p className="text-sm text-gray-600">Help others on their spiritual journey</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-spiritual-500 hover:bg-spiritual-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Submit Your Article
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
