import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Weekly Satsang Gathering',
      description: 'Community members gathered for weekly spiritual discourse',
      category: 'events'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Meditation Session',
      description: 'Peaceful meditation in our temple hall',
      category: 'spiritual'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Spiritual Music Evening',
      description: 'Devotional music and chanting session',
      category: 'events'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Community Service Day',
      description: 'Volunteers serving the local community',
      category: 'service'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      title: 'Youth Spiritual Circle',
      description: 'Young adults exploring spirituality together',
      category: 'events'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Sacred Texts Study',
      description: 'Group study of ancient wisdom texts',
      category: 'spiritual'
    },
    {
      id: 7,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
      title: 'Annual Spiritual Conference',
      description: 'Highlights from our annual gathering',
      category: 'events'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Mindfulness Practice',
      description: 'Outdoor mindfulness and nature connection',
      category: 'spiritual'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Community Leadership',
      description: 'Leadership training and development',
      category: 'service'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      title: 'Environmental Stewardship',
      description: 'Community garden and eco-spiritual practices',
      category: 'service'
    },
    {
      id: 11,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Spiritual Teachings',
      description: 'Weekly wisdom teachings and discussions',
      category: 'spiritual'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Festival Celebration',
      description: 'Traditional spiritual festival celebration',
      category: 'events'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'events', name: 'Events' },
    { id: 'spiritual', name: 'Spiritual Practices' },
    { id: 'service', name: 'Community Service' }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const imageCount = filteredItems.filter(item => item.type === 'image').length;
  const videoCount = filteredItems.filter(item => item.type === 'video').length;

  return (
    <div>
      <Helmet>
        <title>Gallery - Aanjan Samaj</title>
        <meta name="description" content="Explore our photo and video gallery showcasing spiritual events, community service, meditation sessions, and temple activities at Aanjan Samaj." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the beauty of our spiritual community through photos and videos. 
              Experience the joy, peace, and unity that defines our gatherings and service activities.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-spiritual-600">{imageCount}</div>
              <div className="text-sm text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-spiritual-600">{videoCount}</div>
              <div className="text-sm text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-spiritual-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
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
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category.id
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {categories.find(cat => cat.id === activeTab)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Videos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch highlights from our spiritual gatherings and community events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Video 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Weekly Satsang Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weekly Satsang Highlights</h3>
                <p className="text-gray-600 mb-4">
                  Experience the peaceful atmosphere of our weekly spiritual gatherings with 
                  meditation, discourse, and community bonding.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">📅 June 2025</span>
                  <span>👁️ 1.2K views</span>
                </div>
              </div>
            </div>

            {/* Featured Video 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Community Service Impact"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Service Impact</h3>
                <p className="text-gray-600 mb-4">
                  See how our community service initiatives are making a positive difference 
                  in the lives of local families and neighborhoods.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">📅 May 2025</span>
                  <span>👁️ 890 views</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-spiritual-500 hover:bg-spiritual-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Visit Our YouTube Channel
            </button>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-spiritual-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Moments</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have beautiful moments from our events or spiritual practices? Share them with our community!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="font-semibold mb-2">High Quality</h3>
                <p className="text-sm text-gray-600">Submit high-resolution photos and clear videos</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Relevant Content</h3>
                <p className="text-sm text-gray-600">Focus on spiritual and community activities</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Permission</h3>
                <p className="text-sm text-gray-600">Ensure consent from all individuals featured</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-spiritual-500 hover:bg-spiritual-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Submit Your Photos/Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-spiritual-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay connected and see daily moments from our spiritual community
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348S9.746 16.988 8.449 16.988zM16.988 8.449c0 1.297-1.051 2.348-2.348 2.348S12.292 9.746 12.292 8.449s1.051-2.348 2.348-2.348S16.988 7.152 16.988 8.449z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
