# API Contracts for QuantumCode AI Website

## Overview
This document outlines the API contracts needed to transform the frontend from mock data to a fully functional backend integration.

## Backend Technology Stack
- **Framework**: FastAPI (Python) - existing setup
- **Database**: MongoDB - for flexible document storage
- **Authentication**: None required for MVP

## API Endpoints Required

### 1. Contact Form Management
```
POST /api/contacts
- Purpose: Store contact form submissions
- Body: { name, email, company?, message }
- Response: { success: true, id: contact_id }

GET /api/contacts
- Purpose: Admin access to view all contacts (future admin panel)
- Response: Array of contact objects
```

### 2. Blog Management
```
GET /api/blog/posts
- Purpose: Get all blog posts with pagination
- Query params: page?, limit?, category?
- Response: { posts: [...], total, page, totalPages }

GET /api/blog/posts/{id}
- Purpose: Get individual blog post details
- Response: Full blog post object with content

POST /api/blog/posts
- Purpose: Create new blog post (admin functionality)
- Body: { title, content, excerpt, author, category, tags, image }
- Response: Created blog post object
```

### 3. Newsletter Subscription
```
POST /api/newsletter/subscribe
- Purpose: Store email subscriptions
- Body: { email }
- Response: { success: true, message }
```

## Data Models

### Contact Model
```
{
  id: ObjectId,
  name: string,
  email: string,
  company: string (optional),
  message: string,
  status: enum('new', 'responded', 'in_progress', 'completed'),
  createdAt: Date,
  updatedAt: Date
}
```

### BlogPost Model
```
{
  id: ObjectId,
  title: string,
  slug: string (generated from title),
  content: string (full blog content),
  excerpt: string,
  author: string,
  category: string,
  tags: [string],
  image: string (URL),
  published: boolean,
  createdAt: Date,
  updatedAt: Date,
  readTime: string
}
```

### Newsletter Model
```
{
  id: ObjectId,
  email: string (unique),
  subscribed: boolean,
  createdAt: Date
}
```

## Frontend Changes Required

### Mock Data Removal
- Remove mock blog posts from mockData.js
- Replace with API calls to backend
- Add loading states and error handling

### New Routes
- Add `/blog/:slug` route for individual blog posts
- Update blog listing to link to individual posts

### Form Integration
- Contact form: Submit to POST /api/contacts
- Newsletter signup: Submit to POST /api/newsletter/subscribe
- Add success/error toast messages

### Button Functionality
- "Schedule Consultation" -> Navigate to /contact
- Remove "Get Started" and "Start Project" buttons
- Remove "Learn More" buttons from services

## Implementation Priority
1. Update frontend content and buttons (current task)
2. Create backend API endpoints
3. Integrate frontend with backend APIs
4. Test full functionality

## Notes
- All API responses should include proper error handling
- Use MongoDB for flexible document storage
- Consider adding basic input validation
- Toast notifications for user feedback