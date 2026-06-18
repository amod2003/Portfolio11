import portfolio from '/public/image/portfolio.gif';
import screen from '/public/image/screen.png';

export const projectsData = [
    {
        id: 1,
        name: 'InvoiceHub — Multi-Tenant SaaS Invoice & Billing Platform',
        description: "Built a full-stack invoice management application with isolated data scoping per user and role-based access control. Implemented a complete invoicing workflow with line items, taxes, discounts, automated PDF generation, email delivery, and Stripe payment integration with webhook-based status updates. Deployed with frontend on Vercel, backend on Railway, and database on MongoDB Atlas.",
        tools: ['React', 'Vite', 'FastAPI', 'MongoDB', 'Stripe', 'JWT', 'Vercel', 'Railway'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://invoice-hub-two.vercel.app',
        image: portfolio,
    },
    {
        id: 2,
        name: 'Live Collaborative Whiteboard',
        description: "Built a real-time multi-user whiteboard application where users can draw together simultaneously in shared rooms. Features include room-based sessions, freehand drawing, eraser, canvas clear, PNG export, and instant link sharing. Powered by FastAPI WebSockets for low-latency real-time sync across all connected clients.",
        tools: ['React', 'FastAPI', 'WebSockets', 'Canvas API', 'Railway'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://live-collaborative-whiteboard-production.up.railway.app',
        image: screen,
    },
];
