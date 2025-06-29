import React from 'react';
import { Helmet } from 'react-helmet';
import Card from '../components/Card';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Aanjan Samaj</title>
        <meta name="description" content="Learn about Aanjan Samaj's mission, vision, and history. Discover our commitment to spiritual growth and community service." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Aanjan Samaj</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A spiritual organization dedicated to fostering inner growth, promoting spiritual values, 
              and serving humanity with compassion and wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To create a spiritual community that nurtures the soul, promotes ethical living, 
                  and serves as a beacon of hope and compassion. We strive to provide guidance and 
                  support for individuals on their spiritual journey while contributing positively 
                  to society through service and selfless action.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To establish a harmonious world where spiritual wisdom guides human actions, 
                  where compassion overcomes conflict, and where every individual realizes their 
                  highest potential. We envision communities united by love, understanding, and 
                  shared commitment to the greater good.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A journey of spiritual growth and community service spanning decades
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-spiritual-500 rounded-full flex items-center justify-center text-white font-bold">
                  1985
                </div>
                <Card className="flex-1">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation</h3>
                    <p className="text-gray-600">
                      Aanjan Samaj was founded by a group of spiritual seekers with a vision to create 
                      a community based on ancient wisdom and modern understanding. The organization 
                      began with humble gatherings focused on meditation and spiritual discourse.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-spiritual-500 rounded-full flex items-center justify-center text-white font-bold">
                  1995
                </div>
                <Card className="flex-1">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Growth</h3>
                    <p className="text-gray-600">
                      The community expanded significantly, establishing regular programs for spiritual 
                      education, community service initiatives, and cultural preservation activities. 
                      Our first temple was built to accommodate the growing number of devotees.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-spiritual-500 rounded-full flex items-center justify-center text-white font-bold">
                  2010
                </div>
                <Card className="flex-1">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Outreach</h3>
                    <p className="text-gray-600">
                      Embracing technology to reach more souls, we launched our digital platforms, 
                      online spiritual courses, and virtual satsangs. This allowed us to connect 
                      with devotees worldwide and share our teachings globally.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-spiritual-500 rounded-full flex items-center justify-center text-white font-bold">
                  2025
                </div>
                <Card className="flex-1">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Present Day</h3>
                    <p className="text-gray-600">
                      Today, Aanjan Samaj continues to thrive as a beacon of spiritual wisdom and 
                      community service. We operate multiple centers, conduct regular programs, 
                      and maintain our commitment to serving humanity with love and compassion.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our actions and define our character
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Compassion</h3>
                <p className="text-gray-600 text-sm">
                  Showing kindness and understanding to all beings
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧘</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Wisdom</h3>
                <p className="text-gray-600 text-sm">
                  Seeking truth and understanding through spiritual practice
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Service</h3>
                <p className="text-gray-600 text-sm">
                  Selflessly serving others and contributing to society
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">☮️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Peace</h3>
                <p className="text-gray-600 text-sm">
                  Promoting harmony and tranquility in all aspects of life
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated spiritual guides and community leaders committed to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-spiritual-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-spiritual-700">SG</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Spiritual Guide</h3>
                <p className="text-spiritual-600 mb-3">Founder & Spiritual Director</p>
                <p className="text-gray-600 text-sm">
                  With over 40 years of spiritual practice and teaching, our founder continues 
                  to guide the community with wisdom and compassion.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-spiritual-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-spiritual-700">CL</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Leader</h3>
                <p className="text-spiritual-600 mb-3">Program Director</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to organizing community events and ensuring our programs 
                  serve the spiritual needs of all members.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-spiritual-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-spiritual-700">ST</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Team</h3>
                <p className="text-spiritual-600 mb-3">Outreach Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Leading our community service initiatives and coordinating 
                  humanitarian efforts in the local community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
