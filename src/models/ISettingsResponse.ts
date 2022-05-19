import { LogLevel } from './Log'


export type ISettingsResponse = {

  PREFECT_HOME: string,
  PREFECT_DEBUG_MODE: boolean,
  PREFECT_TEST_MODE: boolean,
  PREFECT_TEST_SETTING: string,
  PREFECT_API_URL: string,
  PREFECT_API_KEY: string,
  PREFECT_CLOUD_URL: string,
  PREFECT_API_REQUEST_TIMEOUT: number,
  PREFECT_PROFILES_PATH: string,
  PREFECT_LOGGING_LEVEL: LogLevel,
  PREFECT_LOGGING_SERVER_LEVEL: LogLevel,
  PREFECT_LOGGING_SETTINGS_PATH: string,
  PREFECT_LOGGING_EXTRA_LOGGERS: string,
  PREFECT_LOGGING_ORION_ENABLED: boolean,
  PREFECT_LOGGING_ORION_BATCH_INTERVAL: number,
  PREFECT_LOGGING_ORION_BATCH_SIZE: number,
  PREFECT_LOGGING_ORION_MAX_LOG_SIZE: number,
  PREFECT_AGENT_QUERY_INTERVAL: number,
  PREFECT_AGENT_PREFETCH_SECONDS: number,
  PREFECT_ORION_DATABASE_CONNECTION_URL: string,
  PREFECT_ORION_DATABASE_ECHO: boolean,
  PREFECT_ORION_DATABASE_MIGRATE_ON_START: boolean,
  PREFECT_ORION_DATABASE_TIMEOUT: number,
  PREFECT_ORION_DATABASE_CONNECTION_TIMEOUT: number,
  PREFECT_ORION_SERVICES_SCHEDULER_LOOP_SECONDS: number,
  PREFECT_ORION_SERVICES_SCHEDULER_DEPLOYMENT_BATCH_SIZE: number,
  PREFECT_ORION_SERVICES_SCHEDULER_MAX_RUNS: number,
  PREFECT_ORION_SERVICES_SCHEDULER_MAX_SCHEDULED_TIME: number,
  PREFECT_ORION_SERVICES_SCHEDULER_INSERT_BATCH_SIZE: number,
  PREFECT_ORION_SERVICES_LATE_RUNS_LOOP_SECONDS: number,
  PREFECT_ORION_SERVICES_LATE_RUNS_AFTER_SECONDS: number,
  PREFECT_ORION_API_DEFAULT_LIMIT: number,
  PREFECT_ORION_API_HOST: number,
  PREFECT_ORION_API_PORT: number,
  PREFECT_ORION_UI_ENABLED: boolean,
  PREFECT_ORION_UI_API_URL: string,
  PREFECT_ORION_ANALYTICS_ENABLED: boolean,
  PREFECT_ORION_SERVICES_SCHEDULER_ENABLED: boolean,
  PREFECT_ORION_SERVICES_LATE_RUNS_ENABLED: boolean,
}