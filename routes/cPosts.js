// var express = require('express');
// var router = express.Router();
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');
//
// // firebase Admin 초기화
// const firebaseAdmin = admin.initializeApp({
//     credential: admin.credential.cert({
//         "type": "service_account",
//         "project_id": "awesome-19ca7",
//         "private_key_id": "07dab6370ff3d77e80bb80d8fe0ecb0f22aaf408",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtfgaSI822YUrp\nEm64OfuYrfBuHZUn0MnZYYdvGrpwhVnDR+vf7RZ51zzWETcYWwHEmTX7MpBVeOk3\nhmQzvxUaJnU1Urh5j2pMgV4CEZo5kHFwzAc8/K32WN+ll8lvCmBPJBMe5xttcR7l\nMqFCbt/D1nkZS4n+HYPk4Kr8hZT43kuEFghyaqOpNKk4mXjd4ZQ9ZhI2o6Uqg/UR\n65PTlHHOciKLvByrLJMqeHEftWac/+mg+L78zakLBc37zKWFw9ACRhWlos02X/J7\nwvVdVId2OyTPJ93p9Crubew6WfvHPzL+V93SjH5G+OEgQYMxzW9yfbcI3oCdFCa4\nrHWve3b7AgMBAAECggEAEE09NNIkbDSsI0ZWHP1lxKzjYJVrBHi73q8pWKk8R4Jg\nMtc5NKtEZ2JwFvU7JhC3E9AJoHbZ1Q4ta8g29h3IT9K5RK9nIhT1ugaV3L/mq+4E\nmsKxE2vytKkZKqgeh06ESitrmIXCr//nFUYynNlqMS6f5l6Qss33LLRnnJ64psGk\nwGnBKSd1kQoV/xOuZTlJbmIvh18qWp69CI+8j3xtweeUt0EE/tw5PtP4W9+0pLnf\nUc3+6eFg2pF29ermPV2sPEAXB/hHXFmBi7nKF9+1XUqZzIUtMQz45GX0K6huAsgQ\nZnN9efrOWDNeQKw7WG/8kHszZ7bVtatDAv9SGAuDIQKBgQDkDK+MKkIsG351+Ma6\nRcsdFgzAAyZljOJKkJjDxPtbVBzcmSPbWKWLtGa1yd0f/BiGM9J2ylBWKU2W7DZs\nkEcNFnCTMiI2LqmejSjrQPKqBqAQJtlNGJwIyoBidWPoTJ/gwZxIJcALp9GCUGiH\np+WjSvXXKifdk4L6dk+9t8pAOQKBgQDCwYsrbaFUB8gIdwtN5YIGwcNVS70IAFxr\n7UudnvpQf5lCVnYn4qX0S12tCoOH4Oc4Xwslspok58aeWexaXyq3COu9JfUvfWht\nKBTvBRw42kfkOJqnga+FG5QNPGn+D4eoxMK88OG4Fo9ymTOxGNuIn0SIXVTiNK2p\ntmrOxnzI0wKBgD+024WIeJvhwl4qdTmsLaWed0lcl+lehgjWhBaMfLtyr+1gSogI\nJ5bzeo3mKoO45RD4gR72PaMUPryemEWTuIWLcz9rjesc9f146alup1ugJi7c62+C\nJHTAPUVEDfjjDva2n3X4NcILy5df5xOeb6RCWJMXD7PydXCKhJQ3N6ThAoGBALiF\ngaMy6rBf8wE6MQar1acrPDP7X21OUkKbgJIlhwpv6rg0jRw7HHs6UNXbaUV7K/d3\n7WrZLjybMM7lag8xrZnfpOMALK7DBgat/C9+Sv/+qDCuBLGCKNdXis2DmPTyp9ia\nG9vB6kptbZnpV1WKtK1cISWGMB9mQ8fRIp8o5h+rAoGAORijFCvdP8+HueoIa5aY\n288Qa4CDAn281FBoU+kgB74W3s4gZ2zLv115sQPDvfwr7N1v+90kjCB89pCSLEyP\nt+1+5zRd1btatS2c7SXB5kSt+K+yeaJogKWkksOABCJ+bmykaqKdU56C7ku488bR\nKNFRYDfEd8zKGXC7et9pwdY=\n-----END PRIVATE KEY-----\n",
//         "client_email": "firebase-adminsdk-dbzht@awesome-19ca7.iam.gserviceaccount.com",
//         "client_id": "108259750759620172053",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dbzht%40awesome-19ca7.iam.gserviceaccount.com"
//     }),
//     databaseUrl : "https://awesome-19ca7.firebaseio.com",
//     storageBucket : "awesome-19ca7.appspot.com"
// }, "cposts");
//
// const dateFormat = require('dateformat');
//
// router.get('/List', function(req, res, next) {
//     firebaseAdmin.firestore().collection('posts').orderBy("postsdate", "desc").get().
//     then((snapshot) => {
//         var rows = [];
//
//         snapshot.forEach(function(childSnapshot){
//             var childData = element.data();
//
//             childData.postsdate = dateFormat(childData.postsdate, "yyyy-mm-dd");
//             rows.push(childData);
//         });
//
//         res.render('cPosts/List', { rows: rows});
//         return;
//     }).catch((err) => {
//         console.log(err);
//     });
// });
//
// router.get('/Read', function(req, res, next) {
//     firebaseAdmin.firestore().collection('posts').doc(req.query.postsno).get()
//         .then((snapshot) => {
//             var childData = snapshot.data();
//
//             res.render('cPosts/Read', {row:childData});
//             return;
//         }).catch((err) => {
//         console.log(err);
//     });
// });
//
// router.get('/Write', function(req, res, next) {
//     if(!req.query.postsno) {
//         res.render('cPosts/Write', {row:""});
//         return;
//     }
//
//     firebaseAdmin.firestore().collection('posts').doc(req.body.postsno).get()
//         .then((snapshot) => {
//             var childData = snapshot.data();
//
//             res.render('cPosts/Write', {row:childData});
//             return;
//         }).catch((err) => {
//         console.log(err);
//     });
// });
//
// router.post('/Save', function(req, res, next) {
//     var postData = req.body;
//
//     if (!postData.postsno)
//     {
//         postData.postsdate = Date.now();
//         doc = firebaseAdmin.firestore().collection('posts').doc();
//         postData.postsno = doc.id;
//         doc.set(postData);
//     }
//     else {
//         doc = firebaseAdmin.firestore().collection('posts').doc(postData.postsno);
//         doc.update(postData);
//     }
//
//     res.redirect('List');
//     return;
// });
//
// router.get('/Delete', function(req, res, next) {
//     firebaseAdmin.firestore().collection('posts').doc(req.query.postsno).delete();
//
//     res.redirect('List');
//     return;
// });
//
// module.exports = router;
// // 'posts' 컬렉션의 전체 데이터를 'postsdate'을 기준으로 내림차순 정렬 한 후 가지고 온다.
// firebaseAdmin.firestore().collection('posts').orderBy("postsdate", "desc").get()
//
// // 'posts' 컬렉션에서 특정 key 값(req.query.postsno) 를 가진 데이터를 가지고 온다.
// firebaseAdmin.firestore().collection('posts').doc(req.query.postsno).get()
//
// // 'posts' 컬렉션에서 새로운 key 값을 생성 후
// var doc = firebaseAdmin.firestore().collection('posts').doc();
// postData.postsno = doc.id;
// // 새로운 데이터를 넣는다.
// doc.set(postData);
//
// // 'posts' 컬렉션에서 기존 key 값(postData.postsno)의 데이터를
// doc = firebaseAdmin.firestore().collection('posts').doc(postData.postsno);
// // 수정한다.
// doc.update(postData);
//
