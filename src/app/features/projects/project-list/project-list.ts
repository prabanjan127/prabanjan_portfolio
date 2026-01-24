import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { Project } from '../../../core/models/portfolio.models';
import { FormatUtils } from '../../../core/utils/format.utils';

/**
 * ProjectListComponent displays a grid of featured projects
 * Uses OnPush change detection for better performance
 */
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ParallaxDirective],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  /**
   * List of featured projects to display
   */
  readonly projects: readonly Project[] = [
    {
      title: 'Bus Ticket Booking System',
      description: 'A comprehensive Java-based system for managing bus routes, bookings, and passenger reservations. Features include real-time seat availability, payment processing, and route management.',
      tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
      link: 'https://github.com/prabanjan127/bus_ticket_booking_system',
      image: 'assets/images/projects/bus-booking.jpg',
      metrics: 'Complete CRUD operations, 5+ database tables',
      technologies: ['Java', 'MySQL', 'JDBC', 'Swing UI']
    },
    {
      title: 'In-Out Calculator',
      description: 'A Flutter mobile application designed for efficient time tracking and in/out operation calculations. Features a clean, intuitive interface with data persistence and analytics.',
      tags: ['Flutter', 'Dart', 'SQLite', 'Mobile'],
      link: 'https://github.com/prabanjan127/in_out_calculator',
      image: 'assets/images/projects/calculator-app.jpg',
      metrics: 'Cross-platform mobile app with offline support',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Provider']
    },
    {
      title: 'To-Do App',
      description: 'A modern task management web application built with React, featuring drag-and-drop functionality, category organization, and local storage persistence for seamless task tracking.',
      tags: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
      link: 'https://github.com/prabanjan127/to-do-app',
      demo: 'https://prabanjan127.github.io/to-do-app',
      image: 'assets/images/projects/todo-app.jpg',
      metrics: 'Responsive design, real-time updates',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5']
    },
    {
      title: 'Web Development Projects Collection',
      description: 'A comprehensive collection of full-stack web applications demonstrating proficiency in PHP, MySQL, and Firebase. Includes e-commerce demos, authentication systems, and database-driven applications.',
      tags: ['Full Stack', 'PHP', 'Firebase', 'MySQL'],
      link: 'https://github.com/prabanjan127/web_development_projects',
      image: 'assets/images/projects/web-projects.jpg',
      metrics: '10+ projects, RESTful APIs, Firebase integration',
      technologies: ['PHP', 'MySQL', 'Firebase', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Python Automation Suite',
      description: 'A repository of Python scripts for automation, data analysis, and algorithm practice. Includes web scraping tools, data visualization scripts, and various algorithmic solutions.',
      tags: ['Python', 'Algorithms', 'Automation', 'Data Science'],
      link: 'https://github.com/prabanjan127/python_codes',
      image: 'assets/images/projects/python-suite.jpg',
      metrics: '50+ scripts, automation workflows',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'BeautifulSoup']
    },
    {
      title: 'Car Fun Interactive Experience',
      description: 'An interactive web-based automotive visualization project featuring animated car models, dynamic interactions, and creative web technologies.',
      tags: ['Web', 'Creative', 'Animation', 'JavaScript'],
      link: 'https://github.com/prabanjan127/car_fun',
      image: 'assets/images/projects/car-fun.jpg',
      metrics: 'Interactive animations, responsive design',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Canvas API']
    }
  ];

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
    return project.link; // Use link as unique identifier
  }
}
