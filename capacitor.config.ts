import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'adocaopet',
  webDir: 'dist/adocaopet',
  server: {
    androidScheme: 'https'
  }
};

export default config;
