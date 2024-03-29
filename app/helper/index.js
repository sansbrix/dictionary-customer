export const consoleErrors = (error, props=null) => {
    if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        if(error.response.status == 401 && props) {
          props.navigation.replace("Login");
        }

        if(error.response.status == 402 && props) {
          props.navigation.replace("Plans", {subscription_expired: true});
        }

      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
}

import { Toast } from 'react-native-popup-confirm-toast';
import Icon from 'react-native-vector-icons/Feather';
export const showToast = (message, error=false) => {
  Toast.show({
    title: message,
    timeColor: 'grey',
    minHeight: 80,
    backgroundColor: '#82A4B7',
    timing: 2000,
    icon: <Icon name={'check'} color={'#fff'} size={31}/>,
    position: 'bottom',
  })
}

import { Popup } from 'react-native-popup-confirm-toast';
export const showPopUp = (message, error=false, callback=null) => {
  if(callback) {
    return Popup.show({
      type: error ? 'danger' : 'success',
      textBody: message,
      buttonText: 'OK',
      callback: callback,
    })
  } else {
    return Popup.show({
      type: error ? 'danger' : 'success',
      textBody: message,
      buttonText: 'OK',
    })
  }
 
}
