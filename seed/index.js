import admin from 'firebase-admin';
import serviceAccount from '../georgegracie-com-firebase-adminsdk-7zsvw-3c4129ce73.json';
import data from '../src/api/data/fights.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const collection = db.collection('fights');
const message = 'Added document with ID: ';
const callback = ref => console.log(message, ref.id);

const create = (fight, index) => collection.add({...fight, order: index + 1}).then(callback);
//const create = (item, index) => console.log(index, {...item, order: index + 1});

data.forEach(create);

// node --experimental-modules --experimental-json-modules seed/index.js