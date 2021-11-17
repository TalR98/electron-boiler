import { ICollectLogsPayload } from '../../common/actions/settings';

const collectLogs = (payload: ICollectLogsPayload) => {
    console.log('Collect logs');
}

const fetchData = () => {
    console.log('fetchData');
}

export {
    collectLogs,
    fetchData,
};