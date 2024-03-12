import { stackMiddlewares } from './lib/middlewares';
import { withRedirect } from './lib/middlewares/with-redirect';

const middlewares = [withRedirect];

export default stackMiddlewares(middlewares);
