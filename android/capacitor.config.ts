import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.adocao.app',
  appName: 'adocao',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
