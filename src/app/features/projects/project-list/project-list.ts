import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { Project } from '../../../core/models/portfolio.models';
import { FormatUtils } from '../../../core/utils/format.utils';

export interface ShipmentMock {
  id: string;
  origin: string;
  destination: string;
  carrier: string;
  status: 'In Transit' | 'Delivered' | 'Delayed' | 'Dispatched';
  eta: string;
  weight: string;
  revenue: number;
}

/**
 * ProjectListComponent displays a grid of featured projects
 * Led by the Angular Enterprise Freight Operations Dashboard
 */
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ParallaxDirective],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: block;
      position: relative;
      background: var(--section-gradient-2);
      backdrop-filter: blur(12px);
      padding-bottom: 4rem;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
  `]
})
export class ProjectListComponent {
  /**
   * List of featured projects, with Angular Admin Dashboard placed FIRST
   */
  readonly projects: readonly Project[] = [
    {
      title: 'Angular Enterprise Admin Dashboard / Freight Operations Hub',
      description: 'A responsive enterprise operations and freight logistics admin portal engineered with Angular 19, TypeScript, RxJS, and modern design systems. Demonstrates production-ready RBAC, reactive stream filtering, and server-mock integration.',
      problemSolved: 'Enterprise freight dispatchers faced fragmented order tracking, non-standardized permissions, and UI latency across high-volume carrier routes.',
      contribution: 'Architected complete frontend architecture from scratch: reactive forms, dynamic permission guards, mock REST API services, and resilient error/loading handling.',
      features: [
        'Role-Based Access Control (RBAC): Dynamic permission-driven UI states switching between Administrator, Dispatcher, and Auditor roles.',
        'Real-Time Search & Multi-Column Filtering: Sub-100ms client search, route status filtering, pagination, and sorting with simulated server delays.',
        'Resilient State & RxJS Transformations: Custom operators with loading skeletons, retry strategies, and alert feedback for failed network states.'
      ],
      tags: ['Angular 19', 'TypeScript', 'RxJS', 'RBAC', 'PrimeNG', 'REST APIs'],
      link: 'https://github.com/prabanjan127/angular_freight_admin_dashboard',
      demo: '#freight-demo',
      image: 'assets/images/projects/angular-freight-dashboard.jpg',
      metrics: '250+ freight items, RBAC roles, sub-100ms client search',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'PrimeNG', 'REST APIs', 'RBAC'],
      isFeaturedPrimary: true
    },
    {
      title: 'Razorpay Payment Gateway Integration',
      description: 'Production-ready payment checkout workflow with instant signature verification, webhook logging, and transaction state synchronization.',
      problemSolved: 'Eliminated checkout abandonment and customer confusion by providing a secure, multi-channel payment modal with automated cryptographic webhook verification.',
      contribution: 'Implemented full checkout lifecycle using TypeScript/Node.js, automated HMAC SHA-256 webhook signature verification, and real-time transaction state feedback.',
      features: [
        'Multi-Option Checkout Modal: Seamless checkout supporting UPI QR code, Credit/Debit cards, and Netbanking via Razorpay SDK.',
        'HMAC SHA-256 Webhook Verification: Cryptographic verification of payment.captured events to prevent replay and forgery.',
        'Order State Synchronization: Real-time UI synchronization with transaction logs, receipt generation, and fallback handling.'
      ],
      tags: ['TypeScript', 'Payment Gateway', 'Webhooks', 'REST APIs', 'Security'],
      link: 'https://github.com/prabanjan127/razorpay_payment_integration',
      demo: 'https://github.com/prabanjan127/razorpay_payment_integration',
      image: 'assets/images/projects/razorpay-integration.jpg',
      metrics: 'Automated HMAC verification, 100% test coverage for checkout states',
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'REST APIs', 'Razorpay SDK', 'Webhooks']
    },
    {
      title: 'Bus Ticket Booking & Fleet Reservation System',
      description: 'Full-stack Java application managing bus schedules, passenger bookings, and real-time seat availability matrix.',
      problemSolved: 'Prevented double-booking errors and manual ticketing delays across bus fleet terminals through ACID-compliant transactional persistence.',
      contribution: 'Engineered relational schema with transactional integrity, concurrency-safe seat allocation, and clean Swing/JDBC client.',
      features: [
        'Concurrency-Safe Seat Allocation: Database transaction locks preventing simultaneous reservation of the same seat.',
        'Normalized Relational Schema: 5+ normalized tables with foreign keys and parameterized SQL queries.',
        'Instant Ticket Generation: Automated receipt and PNR generation upon booking completion.'
      ],
      tags: ['Java', 'MySQL', 'JDBC', 'Desktop App'],
      link: 'https://github.com/prabanjan127/bus_ticket_booking_system',
      image: 'assets/images/projects/bus-booking.jpg',
      metrics: 'Complete CRUD operations, 5+ database tables',
      technologies: ['Java', 'MySQL', 'JDBC', 'Swing UI']
    },
    {
      title: 'TaskFlow Reactive Task Planner',
      description: 'Modern task management web application built with React & TypeScript, featuring category organization and local storage persistence.',
      problemSolved: 'Organizes daily developer workflows with drag-and-drop state, category filters, and robust offline caching.',
      contribution: 'Developed responsive UI with custom state hooks, keyboard shortcuts, and instant optimistic updates.',
      features: [
        'Real-Time Category Filtering: Instant task sorting by priority and status without page reloads.',
        'Persistent Offline Storage: Automatic LocalStorage sync preserving user task boards across browser sessions.',
        'Responsive Mobile Layout: Touch-optimized controls and fluid animations.'
      ],
      tags: ['React', 'TypeScript', 'Web App', 'Productivity'],
      link: 'https://github.com/prabanjan127/to-do-app',
      demo: 'https://prabanjan127.github.io/to-do-app',
      image: 'assets/images/projects/todo-app.jpg',
      metrics: 'Responsive design, offline persistence',
      technologies: ['React', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5']
    },
    {
      title: 'In-Out Calculator & Timesheet Tracker',
      description: 'Cross-platform Flutter mobile application designed for efficient work-hour calculation and shift tracking.',
      problemSolved: 'Solves manual shift tracking errors and overtime miscalculations for contract and shift workers.',
      contribution: 'Designed and built Flutter UI, SQLite persistence layer, and precise time difference calculation algorithms.',
      features: [
        'Automated Time Math: Calculates work duration, overtime, and mandatory break deductions automatically.',
        'Offline SQLite Storage: Full historical logs stored locally with fast query search.',
        'Clean Material UI: Dark mode design with instant day/week visual analytics.'
      ],
      tags: ['Flutter', 'Dart', 'SQLite', 'Mobile App'],
      link: 'https://github.com/prabanjan127/in_out_calculator',
      image: 'assets/images/projects/calculator-app.jpg',
      metrics: 'Cross-platform mobile app with offline SQLite support',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Provider']
    },
    {
      title: 'Full-Stack Web & Security Collection',
      description: 'Curated collection of full-stack web applications implementing authentication, database management, and secure APIs.',
      problemSolved: 'Hands-on implementation of core web security patterns: session management, SQL injection defense, and RESTful API endpoints.',
      contribution: 'Developed end-to-end applications in PHP, MySQL, and Firebase with strict security hygiene.',
      features: [
        'Defensive Backend Patterns: Prepared statements preventing SQL injection and CSRF protection tokens.',
        'Real-Time Data Sync: Firebase database listeners delivering live client-side data updates.',
        'Modular REST Endpoints: Scalable JSON API endpoints connecting client UIs.'
      ],
      tags: ['Full Stack', 'PHP', 'Firebase', 'MySQL'],
      link: 'https://github.com/prabanjan127/web_development_projects',
      image: 'assets/images/projects/web-projects.jpg',
      metrics: '10+ projects, RESTful APIs, Firebase integration',
      technologies: ['PHP', 'MySQL', 'Firebase', 'JavaScript', 'HTML/CSS']
    }
  ];

  // ==========================================
  // Interactive Live Demo Modal State (Freight Hub)
  // ==========================================
  isDemoOpen = signal<boolean>(false);
  activeRole = signal<'Admin' | 'Dispatcher' | 'Viewer'>('Admin');
  searchQuery = signal<string>('');
  selectedStatus = signal<string>('All');
  isRefreshing = signal<boolean>(false);
  demoNotification = signal<string | null>(null);

  readonly allShipments: ShipmentMock[] = [
    { id: 'SHIP-10945', origin: 'Seattle, WA', destination: 'New York, NY', carrier: 'Apex Logistics', status: 'In Transit', eta: 'Oct 24, 14:00', weight: '14,200 lbs', revenue: 4250 },
    { id: 'SHIP-10944', origin: 'Houston, TX', destination: 'Boston, MA', carrier: 'BlueDart Freight', status: 'Delivered', eta: 'Oct 22, 09:30', weight: '8,500 lbs', revenue: 2890 },
    { id: 'SHIP-10943', origin: 'San Diego, CA', destination: 'Seattle, WA', carrier: 'Pacific Carriers', status: 'Delayed', eta: 'Oct 25, 18:00', weight: '22,400 lbs', revenue: 6700 },
    { id: 'SHIP-10942', origin: 'Phoenix, AZ', destination: 'Chicago, IL', carrier: 'Swift Express', status: 'Dispatched', eta: 'Oct 24, 08:00', weight: '11,100 lbs', revenue: 3450 },
    { id: 'SHIP-10941', origin: 'Los Angeles, CA', destination: 'Dallas, TX', carrier: 'Sunbelt Freight', status: 'In Transit', eta: 'Oct 23, 16:30', weight: '18,900 lbs', revenue: 5120 },
    { id: 'SHIP-10940', origin: 'Miami, FL', destination: 'Atlanta, GA', carrier: 'Southeast Express', status: 'Delivered', eta: 'Oct 21, 11:15', weight: '6,200 lbs', revenue: 1950 },
    { id: 'SHIP-10939', origin: 'Chicago, IL', destination: 'Denver, CO', carrier: 'Midwest Haulers', status: 'In Transit', eta: 'Oct 24, 12:00', weight: '15,600 lbs', revenue: 4800 },
    { id: 'SHIP-10938', origin: 'Philadelphia, PA', destination: 'Charlotte, NC', carrier: 'Atlantic Cargo', status: 'Dispatched', eta: 'Oct 23, 20:00', weight: '9,400 lbs', revenue: 2650 }
  ];

  filteredShipments = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const status = this.selectedStatus();

    return this.allShipments.filter(item => {
      const matchesStatus = status === 'All' || item.status === status;
      const matchesQuery = !query ||
        item.id.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query) ||
        item.destination.toLowerCase().includes(query) ||
        item.carrier.toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  });

  openDemo(): void {
    this.isDemoOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeDemo(): void {
    this.isDemoOpen.set(false);
    document.body.style.overflow = '';
  }

  setRole(role: 'Admin' | 'Dispatcher' | 'Viewer'): void {
    this.activeRole.set(role);
    this.showNotification(`Switched role to: ${role}. RBAC permissions updated.`);
  }

  setStatusFilter(status: string): void {
    this.selectedStatus.set(status);
  }

  simulateRefresh(): void {
    this.isRefreshing.set(true);
    setTimeout(() => {
      this.isRefreshing.set(false);
      this.showNotification('Shipment state synchronized via mock RxJS stream.');
    }, 600);
  }

  showNotification(msg: string): void {
    this.demoNotification.set(msg);
    setTimeout(() => {
      if (this.demoNotification() === msg) {
        this.demoNotification.set(null);
      }
    }, 3000);
  }

  /**
   * Formats a number with leading zeros
   * @param num - Number to format
   * @returns Formatted string with leading zeros
   */
  formatNumber(num: number): string {
    return FormatUtils.formatNumber(num);
  }

  /**
   * TrackBy function for ngFor optimization
   * @param index - Index of the item
   * @param project - Project item
   * @returns Unique identifier for the project
   */
  trackByProject(index: number, project: Project): string {
    return project.link;
  }
}
