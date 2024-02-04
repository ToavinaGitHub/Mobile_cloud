import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Bonokany',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "splashScreen": {
      "launchAutoHide": false,
      "launchShowDuration": 0,
      "backgroundColor": "#ffffff",
      "androidScaleType": "CENTER_CROP",
      "androidSpinnerStyle": "large",
      "androidSpinnerColor": "#000000",
      "showSpinner": true,
      "splashFullScreen": true,
      "splashImmersive": true
    },
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"],
    }
  }
};

export default config;
