import React, { useRef } from 'react';
import { MenuGallery } from './MenuGallery';
import manJumping from '../../assets/gallery/manJumping.avif';
import { StartGallery } from './StartGallery';
import { HeaderGallery } from './HeaderGallery';

export const Gallery: React.FC = () => {


  return (
    <div className="flex w-full h-auto flex-col m-0 p-0 relative bg-darkVery">
        <MenuGallery />
        <HeaderGallery/>
        <StartGallery/>
        <HeaderGallery/>
    </div>
  )
}