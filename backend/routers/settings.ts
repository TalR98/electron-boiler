import ipc from 'node-ipc';

import * as SettingsActions from '../../common/actions/settings';
import {
    collectLogs,
    fetchData,
} from '../controllers/settings';

ipc.server.on('message', (data: SettingsActions.SettingsTypes) => {
    switch (data.channel) {
        case SettingsActions.SETTINGS_COLLECT_LOGS:
            return collectLogs(data.payload);
        case SettingsActions.SETTINGS_FETCH_DATA:
            return fetchData();
        default:
            return;
    }
});