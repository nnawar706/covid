import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
    '/',
    '/upcoming-meetings',
    '/meeting(.*)',
    '/previous-meetings',
    '/recordings',
    '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
    if (protectedRoute(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};