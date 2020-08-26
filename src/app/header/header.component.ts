import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  telephone = '+7 (000) 123-45-76';
  telegram = 'https://t.me/SoltercomBot';
  whatsapp = 'https://api.whatsapp.com/send?phone=' + this.telephone;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'telegram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/telegram.svg'));
    iconRegistry.addSvgIcon(
      'whatsapp',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'));
  }

  ngOnInit(): void {
  }

}
