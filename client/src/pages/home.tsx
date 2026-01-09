import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Track Verse | Home</title>
      </Helmet>
              
      <main className="flex h-screen flex-col items-center justify-center">
        <Button>
          Get Started
        </Button>
      </main>
    </>
  )
}