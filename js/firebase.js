const admin = require("firebase-admin");
//  acessing Cloud Firestore using the admin SDK locally
let serviceAccount = require("serviceAccountKey.json.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-firebase-7d509.firebaseio.com"
});
