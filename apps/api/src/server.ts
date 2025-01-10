import { server } from '@config/config';

import app from './app';

app.listen(server.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${server.SERVER_PORT}`);
});
