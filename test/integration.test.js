import { Application } from 'spectron';
import path from 'path';
import { expect } from 'chai';

describe('Electron Application', function () {
    this.timeout(10000);

    let app;

    before(async () => {
        app = new Application({
            path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
            args: [path.join(__dirname, '..')],
        });

        await app.start();
    });

    after(async () => {
        if (app && app.isRunning()) {
            await app.stop();
        }
    });

    it('should open a window', async () => {
        const count = await app.client.getWindowCount();
        expect(count).to.equal(1);
    });

    it('should load the queue_management.html file', async () => {
        const url = await app.client.getUrl();
        expect(url).to.include('queue_management.html');
    });

    it('should switch to queue_display.html', async () => {
        await app.electron.ipcRenderer.send('switch-page', 'queue_display');
        await app.client.waitUntilTextExists('body', 'Queue Display Content'); // Adjust this selector and text based on your HTML content
        const url = await app.client.getUrl();
        expect(url).to.include('queue_display.html');
    });

    it('should print the queue', async () => {
        await app.electron.ipcRenderer.send('print-queue');
        // Add assertions to verify the print dialog or print action
    });
});