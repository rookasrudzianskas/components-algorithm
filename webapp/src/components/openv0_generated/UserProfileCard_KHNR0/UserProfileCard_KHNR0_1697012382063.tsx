// @ts-nocheck
"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
// import { Facebook } from 'lucide-react';
// import { Instagram } from 'lucide-react';
// import { Linkedin } from 'lucide-react';
// import { Mail } from 'lucide-react';

export default function UserProfileCard_KHNR0() {
  return (
    <Card className="max-w-sm m-auto shadow-lg rounded-xl overflow-hidden dark:bg-black">
      <CardHeader className="flex items-center justify-center p-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="User"/>
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold text-center mb-2">John Doe</CardTitle>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">Software Engineer at XYZ</p>
        <p className="text-center text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800">
        <Button variant="outline" size="icon">
          {/*<Mail className="h-5 w-5 mr-1" />*/}
          Email
        </Button>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          {/*<Linkedin className="h-5 w-5" />*/}
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          {/*<Facebook className="h-5 w-5" />*/}
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700">
          {/*<Instagram className="h-5 w-5" />*/}
        </a>
      </CardFooter>
    </Card>
  );
}
