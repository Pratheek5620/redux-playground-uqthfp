import React from 'react';
import { createRoot } from 'react-dom/client';
import TicketBookingApp from './TicketBookingApp';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(<TicketBookingApp />);
