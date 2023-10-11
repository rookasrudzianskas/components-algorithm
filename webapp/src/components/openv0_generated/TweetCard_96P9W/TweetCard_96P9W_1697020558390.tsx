"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import React from 'react';

const TweetCard_96P9W: React.FC = () => {
  return (
    <Card className="bg-gray-100 dark:bg-black rounded-xl shadow-md overflow-hidden font-mono">
      <CardHeader className="bg-gray-200 dark:bg-black p-4">
        <CardTitle className="text-red-600 dark:text-red-400">
          @MonospaceUser
        </CardTitle>
        <Label className="text-blue-600 dark:text-blue-400">
          10 mins ago
        </Label>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-green-600 dark:text-green-400">
          Monospace font makes everything look like a typewriter - so vintage, so chic!
        </p>
      </CardContent>
    </Card>
  );
};

export default TweetCard_96P9W;