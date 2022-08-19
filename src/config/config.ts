export type Config = {
  cachePeopleList: boolean,
}

const config: Config = {
  cachePeopleList: true
}

export function getConfig(): Config {
  return config;
}