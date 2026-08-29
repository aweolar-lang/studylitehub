// app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Study Hub',
    short_name: 'S-Hub',
    description: 'The ultimate academic hub and research library.',
    start_url: '/dashboard',
    display: 'standalone', 
    background_color: '#f4f4d4',
    theme_color: '#3f3357', 
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}