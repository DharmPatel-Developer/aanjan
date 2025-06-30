import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('about_us_title')}</title>
        <meta name="description" content={t('about_us_description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-spiritual-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('about_aanjan_samaj')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about_aanjan_samaj_subtitle')}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('our_mission')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('our_mission_text')}
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('our_vision')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('our_vision_text')}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('our_history')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('our_history_subtitle')}
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('foundation')}</h3>
                    <p className="text-gray-600">
                      {t('foundation_text')}
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('community_growth')}</h3>
                    <p className="text-gray-600">
                      {t('community_growth_text')}
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('global_outreach')}</h3>
                    <p className="text-gray-600">
                      {t('global_outreach_text')}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('our_team')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('our_team_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card>
              <div className="p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" 
                  alt="Spiritual Leader" 
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{t('spiritual_leader')}</h3>
                <p className="text-spiritual-500 font-semibold mb-2">Spiritual Guide</p>
                <p className="text-gray-600">
                  {t('spiritual_leader_description')}
                </p>
              </div>
            </Card>

            {/* Team Member 2 */}
            <Card>
              <div className="p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1556742212-5999572c12b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Community Coordinator" 
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{t('community_coordinator')}</h3>
                <p className="text-spiritual-500 font-semibold mb-2">Community Manager</p>
                <p className="text-gray-600">
                  {t('community_coordinator_description')}
                </p>
              </div>
            </Card>

            {/* Team Member 3 */}
            <Card>
              <div className="p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Service Director" 
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{t('service_director')}</h3>
                <p className="text-spiritual-500 font-semibold mb-2">Service Lead</p>
                <p className="text-gray-600">
                  {t('service_director_description')}
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
