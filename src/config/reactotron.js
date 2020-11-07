// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.20.103' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
