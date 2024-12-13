import { expect } from 'chai';
import { BrowserWindow } from 'electron';

describe('Main Process', () => {
    it('should create a BrowserWindow instance', () => {
        const win = new BrowserWindow({
            width: 800,
            height: 1100,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            },
            resizable: true,
            autoHideMenuBar: true,
        });

        expect(win).to.be.an.instanceof(BrowserWindow);
        expect(win.getBounds().width).to.equal(800);
        expect(win.getBounds().height).to.equal(1100);
    });

    it('should set zoom factor to 0.7', (done) => {
        const win = new BrowserWindow({
            width: 800,
            height: 1100,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            },
            resizable: true,
            autoHideMenuBar: true,
        });

        win.webContents.on('did-finish-load', () => {
            win.webContents.setZoomFactor(0.7);
            expect(win.webContents.getZoomFactor()).to.equal(0.7);
            done();
        });

        win.loadFile('queue_management.html').catch(done);
    });
});