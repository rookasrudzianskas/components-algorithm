"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
// import { ArrowUpRight } from 'lucide-react';
// import { HeartPulse } from 'lucide-react';
// import { MessageCircle } from 'lucide-react';

const Tweet_0XHZ1 = () => {
    return (
        <Card className="dark:bg-black">
            <CardHeader className="flex items-center space-x-2 p-4">
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-bold">@Username</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <CardDescription className="text-lg">
                    Here is the Tweet content... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quas ullam quod voluptatum voluptates eius doloremque, iusto minus nam dicta!
                </CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-around p-4 bg-gray-100 dark:bg-gray-800">
                <div className="flex items-center space-x-1">
                   {/*<HeartPulse className="h-5 w-5 text-red-500" />*/}
                   <span className="text-sm">58.3K</span>
                </div>
                <div className="flex items-center space-x-1">
                   {/*<ArrowUpRight className="h-5 w-5 text-blue-500" />*/}
                   <span className="text-sm">7.2K</span>
                </div>
                <div className="flex items-center space-x-1">
                   {/*<MessageCircle className="h-5 w-5 text-gray-700" />*/}
                   <span className="text-sm">2.5K</span>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Tweet_0XHZ1;
