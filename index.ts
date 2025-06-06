import { registerRootComponent } from 'expo';

import App from './App';
import HelloWorldApp from './helloWorld';
import LotsOfGreetings from './helloWorldProps';
import Counter from './stateReactNative';
import HelloCat from './helloCat';
import PizzaTranslator from './manejoTextoEntrada';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(PizzaTranslator);
