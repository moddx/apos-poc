import dotenv from 'dotenv';
import apostrophe from 'apostrophe';

dotenv.config();

apostrophe({
  shortName: 'failing-publish-poc',
  modules: {
    //asset: {},
    //'default-page': {},
    'mypiece': {},
  }
});
