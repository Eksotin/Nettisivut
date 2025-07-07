import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            HUUDI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/support" 
              className={`transition-colors hover:text-primary ${
                isActive('/support') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.support')}
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/support">{t('nav.supportMe')}</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
