import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('weekly_satsang_gathering'),
      description: t('weekly_satsang_gathering_desc'),
      category: 'events'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('meditation_session'),
      description: t('meditation_session_desc'),
      category: 'spiritual'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('spiritual_music_evening'),
      description: t('spiritual_music_evening_desc'),
      category: 'events'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('community_service_day'),
      description: t('community_service_day_desc'),
      category: 'service'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      title: t('youth_spiritual_circle'),
      description: t('youth_spiritual_circle_desc'),
      category: 'events'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('sacred_texts_study'),
      description: t('sacred_texts_study_desc'),
      category: 'spiritual'
    },
    {
      id: 7,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
      title: t('annual_spiritual_conference'),
      description: t('annual_spiritual_conference_desc'),
      category: 'events'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('mindfulness_practice'),
      description: t('mindfulness_practice_desc'),
      category: 'spiritual'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('community_leadership'),
      description: t('community_leadership_desc'),
      category: 'service'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      title: t('environmental_stewardship'),
      description: t('environmental_stewardship_desc'),
      category: 'service'
    },
    {
      id: 11,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('spiritual_teachings'),
      description: t('spiritual_teachings_desc'),
      category: 'spiritual'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: t('festival_celebration'),
      description: t('festival_celebration_desc'),
      category: 'events'
    }
  ];

  const categories = [
    { id: 'all', name: t('all_articles') },
    { id: 'events', name: t('event_photos') },
    { id: 'spiritual', name: t('spiritual_moments') },
    { id: 'service', name: t('community_activities') }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const imageCount = filteredItems.filter(item => item.type === 'image').length;
  const videoCount = filteredItems.filter(item => item.type === 'video').length;

  return (
    <div>
      <Helmet>
        <title>{t('gallery_title')}</title>
        <meta name="description" content={t('gallery_description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('our_gallery')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('our_gallery_subtitle')}
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
              <div className="text-sm text-gray-600">{t('photos')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-spiritual-600">{videoCount}</div>
              <div className="text-sm text-gray-600">{t('videos')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-spiritual-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">{t('categories')}</div>
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
              {filteredItems.length} {t('items_in_category', {count: filteredItems.length})}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('featured_videos')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('featured_videos_description')}
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
                <h3 className="text-xl font-semibold mb-2">{t('weekly_satsang_highlights')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('weekly_satsang_description')}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">📅 {t('june_2025')}</span>
                  <span>👁️ {t('views_count', {count: '1.2K'})}</span>
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
                <h3 className="text-xl font-semibold mb-2">{t('community_service_impact')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('community_service_impact_description')}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">📅 {t('may_2025')}</span>
                  <span>👁️ {t('views_count', {count: '890'})}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-spiritual-500 hover:bg-spiritual-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              {t('visit_youtube_channel')}
            </button>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-spiritual-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('share_your_moments')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('share_moments_description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="font-semibold mb-2">{t('high_quality')}</h3>
                <p className="text-sm text-gray-600">{t('high_quality_description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">{t('relevant_content')}</h3>
                <p className="text-sm text-gray-600">{t('relevant_content_description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">{t('permission')}</h3>
                <p className="text-sm text-gray-600">{t('permission_description')}</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-spiritual-500 hover:bg-spiritual-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                {t('submit_photos_videos')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-spiritual-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('follow_social_media')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('follow_social_media_description')}
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
