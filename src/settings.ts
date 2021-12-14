import { Agent } from 'http';

export const TwitterApiV2Settings = {
  debug: false,
  deprecationWarnings: true,
};

export const RequestOverrideSettings: {
  socketPath?: string;
  auth?: string | null;
  agent?: Agent | boolean;
} = {

};