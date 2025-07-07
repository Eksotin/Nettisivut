import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Users, Trophy, Heart } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Calendar, label: t('about.stats.since'), value: "2020" },
    { icon: Users, label: t('about.stats.members'), value: "10K+" },
    { icon: Trophy, label: t('about.stats.clips'), value: "50+" },
    { icon: Heart, label: t('about.stats.passion'), value: "∞" }
  ];

  const platforms = [
    {
      name: "YouTube",
      description: "Long-form content, tutorials, and highlight compilations",
      focus: "Educational content and epic gaming moments"
    },
    {
      name: "Twitch",
      description: "Live streaming, real-time chat interaction, and community building",
      focus: "Interactive gameplay and viewer engagement"
    },
    {
      name: "TikTok",
      description: "Short-form viral content and quick entertainment",
      focus: "Trending challenges and bite-sized highlights"
    },
    {
      name: "Discord",
      description: "Community hub for fans to connect and chat",
      focus: "Building lasting friendships and connections"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span dangerouslySetInnerHTML={{ __html: t('about.hero.title') }} />
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('about.story.title')}</h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    What started as a hobby quickly became my passion. I began creating content 
                    because I wanted to share the excitement and joy I found in gaming and 
                    digital entertainment. Over the years, I've built an amazing community 
                    of viewers who've become friends.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    My content spans multiple platforms because I believe in meeting my audience 
                    where they are. Whether you prefer the long-form storytelling of YouTube, 
                    the interactive nature of Twitch streams, or the quick entertainment of TikTok, 
                    there's something for everyone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The most rewarding part of content creation isn't the views or followers – 
                    it's the connections I've made and the positive impact I can have on people's days. 
                    Every message, every laugh shared during a stream, every moment of community 
                    makes it all worthwhile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Focus */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('about.platforms.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{platform.name}</h3>
                  <p className="text-muted-foreground mb-3">{platform.description}</p>
                  <p className="text-sm text-accent font-medium">{platform.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.connect.title')}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            {t('about.connect.description')}
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default About;
