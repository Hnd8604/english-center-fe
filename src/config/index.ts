/**
 * Application configuration loaded from environment variables.
 * All env variables must be defined in .env (see .env.example).
 */

const requiredEnv = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const config = {
  apiUrl: requiredEnv('VITE_API_URL'),
} as const;

export default config;
