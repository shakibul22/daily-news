import { Send, MapPin, Phone, Mail, MessageCircle, Globe, Calendar, MessageSquare } from "lucide-react";

const Footer = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Luxury Travels Alternative",
      date: "25 Dec, 2016",
      comments: 20,
      image: '/news1.jpg'
    },
    {
      id: 2,
      title: "Luxury Travels Alternative",
      date: "25 Dec, 2016",
      comments: 20,
      image: '/news2.jpg'
    },
    {
      id: 3,
      title: "Luxury Travels Alternative",
      date: "25 Dec, 2016",
      comments: 20,
      image: '/news3.jpg'
    },
    {
      id: 4,
      title: "Luxury Travels Alternative", 
      date: "25 Dec, 2016",
      comments: 20,
      image:'/news4.jpg'
    }
  ];

  const quickLinks = [
    "Criminal or other Practice",
    "united kingdom news",
    "Government Announced",
    "New technology"
  ];

  const popularTags = [
    "Html5", "Bootstrap", "Css3", "Technology", 
    "Development", "Bootstrap", "Jquery"
  ];

  const flickerImages = [
    '/news1.jpg', '/news2.jpg', '/news3.jpg', '/news4.jpg',
    '/news1.jpg', '/news2.jpg', '/news3.jpg', '/news4.jpg',
  ];

  return (
    <footer className="bg-black text-gray-300 py-12 border-t-8 border-t-red-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                News<span className="text-red-600">Times</span>
              </h2>
            </div>
            
            <div className="space-y-4 ">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm">1600 Elizabeth St, Melbourneis</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">( +98 ) 88-11-22-888</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">info@crizalpress.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Skype +1 33-476-927</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm">www.crizalpress.com</span>
              </div>
            </div>

            <div className="pt-4">
              <div
           
                className="bg-gray-400 hover:bg-gray-400/90 text-white"
              >
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Recent Post
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3 group cursor-pointer">
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-300 group-hover:text-gray-400 transition-colors duration-200 mb-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-4 text-xs text-footer-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Popular Tags Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-footer-muted group-hover:text-gray-400 transition-colors duration-200">
                    {link}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <div
                  key={index}
             
                  className="border-footer-border text-footer-muted hover:border-gray-400 hover:text-gray-400 cursor-pointer transition-colors duration-200"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Flicker Widget & Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Flicker Widget
            </h3>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {flickerImages.map((image, index) => (
                <div key={index} className="aspect-square rounded overflow-hidden cursor-pointer group">
                  <img 
                    src={image} 
                    alt={`Flicker ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm text-footer-muted mb-4">
              Enter your email here
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Your Email"
                className="bg-footer border-footer-border text-gray-300 placeholder:text-footer-muted focus:border-gray-400"
              />
              <button
               
                className="bg-gray-400 hover:bg-gray-400/90 text-white px-3"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-footer-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-footer-muted">
              crizal press © 2015, All Rights Reserved
            </p>
            <nav className="flex gap-6">
              {["Home", "About", "Blog", "Contact Us"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-sm text-footer-muted hover:text-gray-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;