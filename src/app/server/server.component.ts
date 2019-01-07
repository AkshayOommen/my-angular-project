import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p {
            font-weight: bold;
        }
    `]
})
export class ServerComponent {
    serverID: number = 50;
    serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline';

    setBgColor = () => {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}