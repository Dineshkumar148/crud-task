import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-new',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './client-new.component.html',
  styleUrl: './client-new.component.css'
})
export class ClientNewComponent {

}
