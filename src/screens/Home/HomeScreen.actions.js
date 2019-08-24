import { ipcRenderer } from 'electron';
import { GET_MANIFEST_FILE } from './HomeScreen.constants';

export const readManifestFile = (email) => dispatch => {
    ipcRenderer.send(GET_MANIFEST_FILE, email);
    ipcRenderer.on('GOT_MANIFEST_FILE', (event, data) => {
        dispatch({ type: 'EMAIL_ADDRESS', email: data});
    });
};
