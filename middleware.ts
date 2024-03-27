import { stackMiddlewares } from './lib/middlewares';
import { withRedirect } from './lib/middlewares/with-redirect';

const middlewares = [withRedirect];

export default stackMiddlewares(middlewares);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};