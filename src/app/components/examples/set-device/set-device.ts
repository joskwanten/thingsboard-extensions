import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-set-device',
  templateUrl: './set-device.html',
  styleUrl: './set-device.css'
})
export class SetDevice {
kwartierNaarTijd(kwartierIndex: number | undefined): String {
    if (kwartierIndex === undefined) return '00:00';
    const seconds = 3600 * 12 + kwartierIndex * 15 * 60; // 12 uur basis + kwartierIndex * 15 minuten
    const secondsInADay = 24 * 3600;
    const adjustedSeconds = seconds % secondsInADay; // Zorg dat we binnen een dag
    const uren = Math.floor(adjustedSeconds / 3600);
    const minuten = Math.floor((adjustedSeconds % 3600) / 60);
    const tijdString = `${String(uren).padStart(2, '0')}:${String(minuten).padStart(2, '0')}`;
    return tijdString;  
  }

  tijdNaarKwartier(tijd: String | undefined): number {
    if (!tijd) return 0;

    const [uren, minuten] = tijd.split(':').map(Number);
    const totalMinutes = (uren * 60 + minuten) - (12 * 60); // Trek 12 uur af om te beginnen bij 12:00
    const totalMinutesAdjusted = totalMinutes < 0 ? totalMinutes + 24 * 60 : totalMinutes; // Zorg dat we binnen een dag blijven
    const kwartierIndex = Math.floor(totalMinutesAdjusted / 15);
    return kwartierIndex;
  }

  _setDevice: any;

  @Input() 
  set setDevice(value: any) {
    console.log('setDevice', value);
    this._setDevice = value;
    if (this._setDevice && this._setDevice.schedules) {
      this._setDevice.schedules = this._setDevice.schedules.filter((s: any) => s.day === 'DEFAULT');
      if (!this._setDevice.schedules.length) {
        this._setDevice.schedules.push({
          day: 'DEFAULT',
          entries: [
            { quarter: 60, glowLevel: 100, dimLevel: 80 }
          ]
        });
      }

      this._setDevice.schedules.forEach((schedule: any) => {
        schedule.entries.forEach((entry: any) => {
          entry.time = this.kwartierNaarTijd(entry.quarter);
        });
      });
    }
  };
  get setDevice(): any {
    return this._setDevice;
  }

  emitSetDevice() {
    if (this._setDevice && this._setDevice.schedules) {
      this._setDevice.schedules.forEach((schedule: any) => {
        schedule.entries.forEach((entry: any) => {
          entry.quarter = this.tijdNaarKwartier(entry.time);
        });
      });
    }
    console.log('emitSetDevice', this._setDevice);
    this.setDeviceChange.emit(this._setDevice);
  }

  @Output() setDeviceChange = new EventEmitter<any>();
}


