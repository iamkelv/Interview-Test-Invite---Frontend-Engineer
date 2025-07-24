import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Plus, MoreHorizontal, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';



const mockUserRoles = [
  {
    id: 1,
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: 'Jan 1, 2023',
    status: 'Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
      { id: 3, avatar: '/assets/images/feature.png', name: 'User 3' },
      { id: 4, avatar: '/assets/images/feature.png', name: 'User 4' },
      { id: 5, avatar: '/assets/images/feature.png', name: 'User 5' },
    ],
    extraCount: 2
  },
  {
    id: 2,
    name: 'Merchantadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
      { id: 3, avatar: '/assets/images/feature.png', name: 'User 3' },
    ],
    extraCount: 1
  },
  {
    id: 3,
    name: 'supportadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
      { id: 3, avatar: '/assets/images/feature.png', name: 'User 3' },
    ]
  },
  {
    id: 4,
    name: 'sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Mar 1, 2023',
    status: 'Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
    ]
  },
  {
    id: 5,
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Apr 1, 2023',
    status: 'In Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
    ]
  },
  {
    id: 6,
    name: 'Developeradmin',
    type: 'SYSTEM-CUSTOM',
    dateCreated: 'May 1, 2023',
    status: 'Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
    ]
  },
  {
    id: 7,
    name: 'Developer-basic',
    type: 'SYSTEM-CUSTOM',
    dateCreated: 'Jun 1, 2023',
    status: 'Active',
    users: [
      { id: 1, avatar: '/assets/images/feature.png', name: 'User 1' },
      { id: 2, avatar: '/assets/images/feature.png', name: 'User 2' },
    ]
  }
];

const activeRoles = [
  {
    id: 1,
    title: 'Superadmin',
    lastActive: '06/2023',
    isDefault: true
  },
  {
    id: 2,
    title: 'Developeradmin',
    lastActive: '01/2023',
    isDefault: false
  },
  {
    id: 3,
    title: 'Supportadmin',
    lastActive: '10/2022',
    isDefault: false
  }
];

const fetchUserRoles = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockUserRoles;
};

export const UserRolesContent: React.FC = () => {
  const { data: userRoles, isLoading } = useQuery({
    queryKey: ['userRoles'],
    queryFn: fetchUserRoles,
  });

  const renderUserAvatars = (users: any[], extraCount?: number) => {
    const displayUsers = users.slice(0, 4);
    return (
      <div className="flex -space-x-2">
        {displayUsers.map((user, index) => (
          <Avatar key={user.id} className="w-8 h-8 border-2 border-background">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xs">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        ))}
        {extraCount && extraCount > 0 && (
          <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">
              +{extraCount}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">User Roles</h2>
        <p className="text-muted-foreground">
          Update your roles details and information.
        </p>
      </div>

      {/* Email Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="connected-email" className="text-sm font-medium">
            Connected email
          </Label>
          <div className="text-sm text-muted-foreground mb-2">
            Select role account
          </div>
          <div className="text-sm font-medium">
            My account email
          </div>
          <div className="text-sm text-primary">
            olivia@untitledui.com
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-full" />
            </div>
            <span className="text-sm text-muted-foreground">An alternative email</span>
          </div>
          <Input
            type="email"
            placeholder="billing@untitledui.com"
            className="max-w-sm"
          />
        </div>
      </div>

      {/* Active Role */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-foreground">Active Role</h3>
        <p className="text-sm text-muted-foreground">
          Select active role available to the user.
        </p>
        
        <div className="space-y-3">
          {activeRoles.map((role) => (
            <Card key={role.id} className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-custom-md",
              role.isDefault && "ring-2 ring-primary"
            )}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Settings className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{role.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Last active {role.lastActive}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {role.isDefault && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Default
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm">
                      {role.isDefault ? 'Set as default' : 'Edit'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="w-full md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add role to user
        </Button>
      </div>

      {/* User Roles Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-foreground">User Roles</h3>
          <Button variant="outline" size="sm">                        
            <img src="/public/assets/images/download-cloud.svg" alt="" />
            Download all
          </Button>
        </div>

        <div className="rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Type</TableHead>
                <TableHead className="font-medium">Date created</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="font-medium">Role users</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span className="text-muted-foreground">Loading roles...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                userRoles?.map((role) => (
                  <TableRow key={role.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{role.name}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={role.type === 'DEFAULT' ? 'secondary' : role.type === 'CUSTOM' ? 'outline' : 'default'}
                        className={cn(
                          role.type === 'DEFAULT' && "bg-secondary text-secondary-foreground",
                          role.type === 'CUSTOM' && "border-muted-foreground/20",
                          role.type === 'SYSTEM-CUSTOM' && "bg-accent text-accent-foreground"
                        )}
                      >
                        {role.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{role.dateCreated}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={role.status === 'Active' ? 'default' : 'secondary'}
                        className={cn(
                          role.status === 'Active' 
                            ? "bg-success text-success-foreground" 
                            : "bg-warning text-warning-foreground"
                        )}
                      >
                        {role.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {renderUserAvatars(role.users, role.extraCount)}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">                        
                        <span className="w-4 h-4" >
                          <img  src='/public/assets/images/download-cloud.svg'/>
                        </span>
                        
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};