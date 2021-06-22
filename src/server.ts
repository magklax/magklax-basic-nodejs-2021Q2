import { createConnection } from 'typeorm';
import app from './app';
import { PORT } from './common/config';
import config from './common/ormconfig';

(async (): Promise<void> => {
  try {
    await createConnection(config);
    console.log('Successfully connected to DB');

    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('Failed to connected to DB', err);
  }
})();
