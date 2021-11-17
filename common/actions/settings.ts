export const SETTINGS_COLLECT_LOGS = '[Settings] Collect logs';
export const SETTINGS_FETCH_DATA = '[Settings] Fetch data';

export interface ICollectLogsPayload {
    date: Date;
}

export interface CollectLogs {
    channel: typeof SETTINGS_COLLECT_LOGS;
    payload: ICollectLogsPayload;
}

export interface FetchData {
    channel: typeof SETTINGS_FETCH_DATA;
}

export type SettingsTypes = CollectLogs | FetchData;

export type SettingsActionsTypes = typeof SETTINGS_COLLECT_LOGS | typeof SETTINGS_FETCH_DATA;