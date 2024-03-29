// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyDH3hRYKcUS5UZRuMY08jiK0bYL1QdgUK0',
    appId: '1:275057155439:web:3223f042507d3574b2dc9a',
    messagingSenderId: '275057155439',
    projectId: 'animelist-2bb6a',
    authDomain: 'animelist-2bb6a.firebaseapp.com',
    storageBucket: 'animelist-2bb6a.appspot.com',
    measurementId: 'G-ZSN8ZMQC7S',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyAAJi3ju6R2mC0nWCwiueit_OXijkm7XIE',
    appId: '1:275057155439:android:a5f96a9f97614d77b2dc9a',
    messagingSenderId: '275057155439',
    projectId: 'animelist-2bb6a',
    storageBucket: 'animelist-2bb6a.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyBoT2BcTJMujNS3HNAauQ4jzOYr5fffnBo',
    appId: '1:275057155439:ios:b9b89dccfca81145b2dc9a',
    messagingSenderId: '275057155439',
    projectId: 'animelist-2bb6a',
    storageBucket: 'animelist-2bb6a.appspot.com',
    iosClientId: '275057155439-nsjf6a8kmn55llrorfqauvli696615sl.apps.googleusercontent.com',
    iosBundleId: 'com.list.anime.flutterAnime',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyBoT2BcTJMujNS3HNAauQ4jzOYr5fffnBo',
    appId: '1:275057155439:ios:b9b89dccfca81145b2dc9a',
    messagingSenderId: '275057155439',
    projectId: 'animelist-2bb6a',
    storageBucket: 'animelist-2bb6a.appspot.com',
    iosClientId: '275057155439-nsjf6a8kmn55llrorfqauvli696615sl.apps.googleusercontent.com',
    iosBundleId: 'com.list.anime.flutterAnime',
  );
}
