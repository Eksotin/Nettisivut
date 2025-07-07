import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Coffee, Gift, Star, Users, MessageCircle } from "lucide-react";

const Support = () => {
  const { t } = useLanguage();

  const supportOptions = [
    {
      icon: Heart,
      title: "One-Time Donation",
      description: "Show support with a one-time contribution via PayPal or Ko-fi",
      action: "Donate Now",
      color: "bg-red-500/10 border-red-500/20 hover:border-red-500/50"
    },
    {
      icon: Coffee,
      title: "Buy Me a Coffee",
      description: "Fuel my late-night content creation sessions",
      action: "Buy Coffee",
      color: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/50"
    },
    {
      icon: Gift,
      title: "Monthly Support",
      description: "Become a monthly supporter through Patreon or similar platforms",
      action: "Support Monthly",
      color: "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/50"
    },
    {
      icon: Star,
      title: "Amazon Wishlist",
      description: "Help with equipment upgrades and content creation tools",
      action: "View Wishlist",
      color: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50"
    }
  ];

  const freeSupport = [
    {
      icon: Users,
      title: "Follow & Subscribe",
      description: "Follow on all platforms and subscribe to help grow the community"
    },
    {
      icon: MessageCircle,
      title: "Engage with Content",
      description: "Like, comment, and share content to help with algorithm visibility"
    },
    {
      icon: Heart,
      title: "Spread the Word",
      description: "Tell friends about the content and help grow the community organically"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span dangerouslySetInnerHTML={{ __html: t('support.hero.title') }} />
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('support.hero.description')}
          </p>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                {t('support.why.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-3">🎮</div>
                  <h3 className="font-semibold mb-2">Better Equipment</h3>
                  <p className="text-muted-foreground text-sm">
                    Upgrade streaming setup for higher quality content
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">⏰</div>
                  <h3 className="font-semibold mb-2">More Content</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicate more time to creating and streaming
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-semibold mb-2">New Projects</h3>
                  <p className="text-muted-foreground text-sm">
                    Fund exciting new content ideas and collaborations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ways to Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className={`${option.color} transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <option.icon className="w-6 h-6 text-primary" />
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Support */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t('support.free.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('support.free.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {freeSupport.map((option, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <option.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('support.thanks.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you support financially, engage with content, or simply watch and enjoy, 
              you're part of what makes this community special. Your support enables me to keep 
              doing what I love and sharing it with amazing people like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Choose Support Option
              </Button>
              <Button size="lg" variant="outline">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;