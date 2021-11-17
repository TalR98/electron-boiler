export const OPENVPN_START = '[OpenVPN] Start';
export const OPENVPN_STOP = '[OpenVPN] Stop';

export interface Start {
    channel: typeof OPENVPN_START;
}

export interface Stop {
    channel: typeof OPENVPN_STOP;
}

export type OpenVPNTypes = Start | Stop;

export type OpenVPNActionsTypes = typeof OPENVPN_START | typeof OPENVPN_STOP;