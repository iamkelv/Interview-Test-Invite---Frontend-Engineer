import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { SettingsTabs } from '@/components/settings/SettingsTabs';
import { UserRolesContent } from '@/components/settings/UserRolesContent';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const Settings: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('roles');

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main content */}
      <div className="lg:pl-sidebar">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-card">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Settings</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Desktop header */}
        <div className="hidden lg:block p-6 border-b border-border bg-card">
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">Settings</h1>
            <p className="text-muted-foreground">
              Manage your team and preferences here.
            </p>
          </div>
        </div>

        {/* Settings tabs */}
        <div className="bg-card border-b border-border px-6">
          <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'roles' && <UserRolesContent />}
          {activeTab !== 'roles' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-foreground mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
              </h3>
              <p className="text-muted-foreground">
                This section is coming soon. Currently showing the Roles tab.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};