import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  BarChart3, 
  FolderOpen, 
  CheckSquare, 
  FileText, 
  Users, 
  HelpCircle, 
  Settings,
  Search,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: BarChart3, label: 'Dashboard', href: '/dashboard', badge: '10' },
  { icon: FolderOpen, label: 'Projects', href: '/projects' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  { icon: FileText, label: 'Reporting', href: '/reporting' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: HelpCircle, label: 'Support', href: '/support' },
  { icon: Settings, label: 'Settings', href: '/settings', active: true },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-sidebar bg-card border-r border-border z-50 transform transition-transform duration-300 ease-custom",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
                </div>
                <span className="font-semibold text-foreground">Untitled UI</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Olivia Rhye"
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4">
            <ul className="space-y-1">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        item.active
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Feature announcement */}
          <div className="p-4 border-t border-border">
            <div className="bg-accent rounded-lg p-4">
              <p className="text-sm font-medium text-accent-foreground mb-2">
                New features available!
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                Check out the new dashboard view. Pages now load faster.
              </p>
              <div className="flex  items-center flex-col space-x-3">
                <div className="w-32     bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/assets/images/feature.png"
                    alt="Feature preview"
                    className="w-full  h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
                    Dismiss
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs p-0 h-auto ml-3 text-primary">
                    What's new?
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* User info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-muted rounded-full overflow-hidden">
                <img
                  src="/assets/images/Avatar.png"
                  alt="Olivia Rhye"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Olivia Rhye
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  olivia@untitledui.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};