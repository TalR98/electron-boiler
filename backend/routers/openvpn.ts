import ipc from 'node-ipc';

import * as OpenVPNActions from '../../common/actions/openvpn';
import {
    start,
    stop,
} from '../controllers/openvpn';

ipc.server.on('message', (data: OpenVPNActions.OpenVPNTypes) => {
    switch (data.channel) {
        case OpenVPNActions.OPENVPN_START:
            return start();
        case OpenVPNActions.OPENVPN_STOP:
            return stop();
        default:
            return;
    }
});