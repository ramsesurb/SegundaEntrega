import  fs  from 'fs';
import admin from 'firebase-admin';


const serviceAccount = JSON.parse(fs.readFileSync('./backend-19f88-firebase-adminsdk-9l3nu-4ac08ade84.json', 'utf8'));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://backend-19f88.firebaseio.com'
  })
  
  console.log('base firebase conectada');

  const db = admin.firestore();

  export default db