import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import SplashScreen from './App/Components/SplashComponent/SplashScreen';
import AppIntro from "./App/Components/AppIntro/AppIntro"
import ContactComponent from "./App/Components/ContactComponent/ContactComponent"
import ServicePreferences from "./App/Components/ServicePreferenceComponent/ServicePreferenceComponent"
import ServicePreferencesDecided from "./App/Components/ServicePreferenceComponent/ServiceComponentDecideCompoenent"
import ChildInformationSize from "./App/Components/ChildInformation/ChildInformationSize"
import TalkToUs from "./App/Components/TalkToUs/TalkToUs"
import ChildInformationDob from "./App/Components/ChildInformation/ChildInformationDob"
import ChildInformationEnroll from "./App/Components/ChildInformation/ChildInformationEnrollKids"
import PregnancyAcceptance from "./App/Components/PregnancyComponent/PregnancyAcceptance"
import PregnancyDueDate from "./App/Components/PregnancyComponent/PregnancyDueDateComponent"
import BillingInformationMethod from "./App/Components/BillingInformation/BillingPaymentInformation"
import BillingInformationAddress from "./App/Components/BillingInformation/BillingInformationAddress"
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="SplashScreen" component={SplashScreen}
      hideNavBar={true}
      initial
    />

  <Scene key="appIntro" component={AppIntro}
      hideNavBar={true}
      
    />

   <Scene key="contact" component={ContactComponent}
hideNavBar={true}
/>

    <Scene key="servicePreferences" component={ServicePreferences}
      hideNavBar={true}
  
    />

    <Scene key="servicePreferencesdecided" component={ServicePreferencesDecided}
      hideNavBar={true}
  
    />

     <Scene key="childSizeInformation" component={ChildInformationSize}
      hideNavBar={true} 
    />

     <Scene key="childInfromationDob" component={ChildInformationDob}
      hideNavBar={true}
       />

    <Scene key="childInformationEnroll" component={ChildInformationEnroll}
      hideNavBar={true}
       />
    
    {/* <Scene key="servicePreferenceEnrollKids" component={ServicePreferencesEnrollKids}
      hideNavBar={true}
  
    /> */}

      <Scene key="pregnancyAcceptance" component={PregnancyAcceptance}
      hideNavBar={true}
       />

      <Scene key="pregnancyDueDate" component={PregnancyDueDate}
      hideNavBar={true}
       />

 <Scene key="bilingPaymentInformation" component={BillingInformationMethod}
  hideNavBar={true}
   />

    <Scene key="billingInformationAddress" component={BillingInformationAddress}
      hideNavBar={true}
       />
    <Scene key="talktous" component={TalkToUs}
      hideNavBar={true} 
    />

   </Scene>   
);

export default class App extends Component {

  constructor() {
    super();
    context = this;
    this.state = {
      initLoaded: false,
    };
    // GLOBAL.AppGlobalConfig = AppGlobalConfig;

    // AppGlobalConfig.init().finally(() => {
    //   SplashScreen.hide();
    //   this.setState({
    //     initLoaded: true,
    //   });
    // });
  }

  render() {
    return (
      <Router
        scenes={scenes}
      />
    );
  }
}