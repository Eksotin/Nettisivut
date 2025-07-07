import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Play, Users, MessageCircle } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const contentTypes = [
    {
      icon: Play,
      title: t('home.content.streams'),
      description: t('home.content.streamsDesc')
    },
    {
      icon: MessageCircle,
      title: t('home.content.clips'),
      description: t('home.content.clipsDesc')
    },
    {
      icon: Users,
      title: t('home.content.community'),
      description: t('home.content.communityDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span dangerouslySetInnerHTML={{ __html: t('home.hero.title') }} />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link to="/about">{t('home.hero.learnMore')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/support">{t('home.hero.showSupport')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('home.content.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <type.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.social.title')}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            {t('home.social.description')}
          </p>
          <SocialLinks />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              {t('home.cta.description')}
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link to="/support">{t('home.cta.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;