import ipc from 'node-ipc';

import * as SettingsActions from '../../common/actions/settings';
import * as OpenVPNActions from '../../common/actions/openvpn';

export const reducer = (action: SettingsActions.SettingsTypes | OpenVPNActions.OpenVPNTypes) => {
    return ipc.server.emit(
        {
            address: '127.0.0.1',
            port: 3000,
        },
        'message',
        action,
    );
}