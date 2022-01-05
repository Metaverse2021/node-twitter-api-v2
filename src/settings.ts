import { Agent } from 'http';

export const TwitterApiV2Settings: {
  debug: boolean
  logger: (message?: any, ...optionalParams: any[]) => void
  deprecationWarnings: boolean
} = {
  debug: false,
  logger: console.log,
  deprecationWarnings: true,
};

export const RequestOverrideSettings: {
  socketPath?: string;
  auth?: string | null;
  agent?: Agent | boolean;
} = {

};