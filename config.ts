import { DevConfig } from "./config/development.env";
import { ProdConfig } from "./config/production.env";

function configurationMapper(): any {
  switch (process.env.NODE_ENV) {
    case 'production':
      return ProdConfig;
    case 'development':
    default:
      return  DevConfig;
  }
}
export const Config = configurationMapper();
