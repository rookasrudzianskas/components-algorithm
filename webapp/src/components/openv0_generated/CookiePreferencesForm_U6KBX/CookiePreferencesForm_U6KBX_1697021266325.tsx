"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const CookiePreferencesForm_U6KBX = () => {
    const [selectedAll, setSelectedAll] = useState(false);

    const handleCheckAll = () => {
        setSelectedAll(!selectedAll);
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Cookie Settings</Button>
        </DialogTrigger>
        <DialogContent className="dark:bg-black bg-white p-4">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Checkbox checked={selectedAll} onChange={handleCheckAll}>
              Select All
            </Checkbox>
            <Checkbox checked={selectedAll}>
              Necessary Cookies
            </Checkbox>
            <p className="text-sm text-gray-500">Necessary cookies enable core functionality. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.</p>
            <Checkbox checked={selectedAll}>
              Performance Cookies
            </Checkbox>
            <p className="text-sm text-gray-500">These cookies help us understand how visitors interact with our website, discover errors and provide a better overall analytics.</p>
            <Checkbox checked={selectedAll}>
              Targeting Cookies
            </Checkbox>
            <p className="text-sm text-gray-500">These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Clear All</Button>
            <Button>Save Preferences</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
};

export default CookiePreferencesForm_U6KBX;