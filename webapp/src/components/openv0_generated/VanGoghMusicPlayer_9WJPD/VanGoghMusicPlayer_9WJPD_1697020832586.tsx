"use client";

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
// import { Pause } from 'lucide-react';
// import { PlayCircle } from 'lucide-react';
// import { SkipBack } from 'lucide-react';
// import { SkipForward } from 'lucide-react';
// import { Volume2 } from 'lucide-react';
import { useState } from 'react';

export default function VanGoghMusicPlayer_9WJPD() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const decreaseVolume = () => {
    setVolume(volume - 10 > 0 ? volume - 10 : 0);
  };

  const increaseVolume = () => {
    setVolume(volume + 10 < 100 ? volume + 10 : 100);
  };

  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600 dark:bg-black">
      <div className="w-auto h-64 bg-cover" style={{backgroundImage: "url('https://example.com/cover.jpg')"}}></div>
      <div className="my-4">
        <h3 className="text-lg font-bold">Song Title</h3>
        <p>Album Name</p>
      </div>
      <div className="flex justify-between items-center">
        <Button onClick={() => setPlaying(false)}>
          {/*<SkipBack className="h-4 w-4" />*/}
        </Button>
        <Button onClick={togglePlay}>
          {/*{playing ? <Pause className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}*/}
        </Button>
        <Button onClick={() => setPlaying(true)}>
          {/*<SkipForward className="h-4 w-4" />*/}
        </Button>
      </div>
      <Progress value={33} className="my-4" />
      <div className="flex justify-between items-center">
        {/*<Volume2 className="h-4 w-4 mr-2" />*/}
        <Button onClick={decreaseVolume} variant="outline">-</Button>
        <Progress value={volume} className="w-60 mx-2" />
        <Button onClick={increaseVolume} variant="outline">+</Button>
      </div>
    </div>
  );
}
