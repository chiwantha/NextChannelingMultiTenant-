// middleware.js
import { withAuth } from "next-auth/middleware";

export const config = {
  matcher: ["/admin/:path*"],
};

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET,
});
