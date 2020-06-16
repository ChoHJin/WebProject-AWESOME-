// var express = require('express');
// var router = express.Router();
// // const firebase = require('firebase');
// const firebase = require('firebase/app');
// const firebaseAdmin = require('firebase-admin');
// const firebaseFunctions = require('firebase-functions');
// require("firebase/auth");
// require("firebase/firestore");
//
// const firebaseConfig = {
//     apiKey: "AIzaSyCSlJebGWkCblHmgDlvjn4ulO4NiyD1vUM",
//     authDomain: "awesome-19ca7.firebaseapp.com",
//     databaseURL: "https://awesome-19ca7.firebaseio.com",
//     projectId: "awesome-19ca7",
//     storageBucket: "awesome-19ca7.appspot.com",
//     messagingSenderId: "90912165169",
//     appId: "1:90912165169:web:add6f2090e04e3971c3410",
//     measurementId: "G-0HVLWXR26R"
// }
//
// //firebase 초기화
// firebase.initializeApp(firebaseConfig);
//
// firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert({
//             "type": "service_account",
//             "project_id": "awesome-19ca7",
//             "private_key_id": "07dab6370ff3d77e80bb80d8fe0ecb0f22aaf408",
//             "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtfgaSI822YUrp\nEm64OfuYrfBuHZUn0MnZYYdvGrpwhVnDR+vf7RZ51zzWETcYWwHEmTX7MpBVeOk3\nhmQzvxUaJnU1Urh5j2pMgV4CEZo5kHFwzAc8/K32WN+ll8lvCmBPJBMe5xttcR7l\nMqFCbt/D1nkZS4n+HYPk4Kr8hZT43kuEFghyaqOpNKk4mXjd4ZQ9ZhI2o6Uqg/UR\n65PTlHHOciKLvByrLJMqeHEftWac/+mg+L78zakLBc37zKWFw9ACRhWlos02X/J7\nwvVdVId2OyTPJ93p9Crubew6WfvHPzL+V93SjH5G+OEgQYMxzW9yfbcI3oCdFCa4\nrHWve3b7AgMBAAECggEAEE09NNIkbDSsI0ZWHP1lxKzjYJVrBHi73q8pWKk8R4Jg\nMtc5NKtEZ2JwFvU7JhC3E9AJoHbZ1Q4ta8g29h3IT9K5RK9nIhT1ugaV3L/mq+4E\nmsKxE2vytKkZKqgeh06ESitrmIXCr//nFUYynNlqMS6f5l6Qss33LLRnnJ64psGk\nwGnBKSd1kQoV/xOuZTlJbmIvh18qWp69CI+8j3xtweeUt0EE/tw5PtP4W9+0pLnf\nUc3+6eFg2pF29ermPV2sPEAXB/hHXFmBi7nKF9+1XUqZzIUtMQz45GX0K6huAsgQ\nZnN9efrOWDNeQKw7WG/8kHszZ7bVtatDAv9SGAuDIQKBgQDkDK+MKkIsG351+Ma6\nRcsdFgzAAyZljOJKkJjDxPtbVBzcmSPbWKWLtGa1yd0f/BiGM9J2ylBWKU2W7DZs\nkEcNFnCTMiI2LqmejSjrQPKqBqAQJtlNGJwIyoBidWPoTJ/gwZxIJcALp9GCUGiH\np+WjSvXXKifdk4L6dk+9t8pAOQKBgQDCwYsrbaFUB8gIdwtN5YIGwcNVS70IAFxr\n7UudnvpQf5lCVnYn4qX0S12tCoOH4Oc4Xwslspok58aeWexaXyq3COu9JfUvfWht\nKBTvBRw42kfkOJqnga+FG5QNPGn+D4eoxMK88OG4Fo9ymTOxGNuIn0SIXVTiNK2p\ntmrOxnzI0wKBgD+024WIeJvhwl4qdTmsLaWed0lcl+lehgjWhBaMfLtyr+1gSogI\nJ5bzeo3mKoO45RD4gR72PaMUPryemEWTuIWLcz9rjesc9f146alup1ugJi7c62+C\nJHTAPUVEDfjjDva2n3X4NcILy5df5xOeb6RCWJMXD7PydXCKhJQ3N6ThAoGBALiF\ngaMy6rBf8wE6MQar1acrPDP7X21OUkKbgJIlhwpv6rg0jRw7HHs6UNXbaUV7K/d3\n7WrZLjybMM7lag8xrZnfpOMALK7DBgat/C9+Sv/+qDCuBLGCKNdXis2DmPTyp9ia\nG9vB6kptbZnpV1WKtK1cISWGMB9mQ8fRIp8o5h+rAoGAORijFCvdP8+HueoIa5aY\n288Qa4CDAn281FBoU+kgB74W3s4gZ2zLv115sQPDvfwr7N1v+90kjCB89pCSLEyP\nt+1+5zRd1btatS2c7SXB5kSt+K+yeaJogKWkksOABCJ+bmykaqKdU56C7ku488bR\nKNFRYDfEd8zKGXC7et9pwdY=\n-----END PRIVATE KEY-----\n",
//             "client_email": "firebase-adminsdk-dbzht@awesome-19ca7.iam.gserviceaccount.com",
//             "client_id": "108259750759620172053",
//             "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//             "token_uri": "https://oauth2.googleapis.com/token",
//             "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//             "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dbzht%40awesome-19ca7.iam.gserviceaccount.com"
//         }
//     ),
//     databaseUrl : "https://awesome-19ca7.firebaseio.com",
//     storageBucket : "awesome-19ca7.appspot.com"
// })
//
// router.get('/login', function(req, res, next) {
// // 구글 로그인 시도
//     res.render('main/login');
// });
//
// router.post('/login_', function(req, res, next) {
//     // 유저가 입력한 정보가 맞는지 체크
//     firebase.auth().signInWithEmailAndPassword(req.body.id, req.body.passwd)
//         .then(function(firebaseUser) {
//             res.render('main/index', {
//                 title : "이메일 로그인 완료!!!"
//             });
//         }).catch(function(err) {
//     // 로그인 실패시 다시 로그인 창으로...
//         console.log(err);
//         res.redirect('main/login');
//         });
//     });
//
// module.exports = router;