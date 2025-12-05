import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}