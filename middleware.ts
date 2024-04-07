import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe',
    '/personal-room','/previous-meetings','/upcoming-meetings','/recordings'],
    // Routes that can always be accessed, and have
    // no authentication information
    ignoredRoutes: [
        '/personal-room','previous-meetings','upcoming-meetings','recordings'
    ],
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}