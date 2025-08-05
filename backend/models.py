from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
from enum import Enum
import uuid

# Enums
class ContactStatus(str, Enum):
    new = "new"
    responded = "responded"
    in_progress = "in_progress"
    completed = "completed"

# Contact Models
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=1000)

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    message: str
    status: ContactStatus = ContactStatus.new
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        use_enum_values = True

# Blog Models
class BlogPostCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    content: str = Field(..., min_length=100)
    excerpt: str = Field(..., max_length=500)
    author: str = Field(..., max_length=100)
    category: str = Field(..., max_length=50)
    tags: List[str] = Field(default_factory=list)
    image: str = Field(..., description="Image URL")
    published: bool = Field(default=True)

class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str  # Generated from title
    content: str
    excerpt: str
    author: str
    category: str
    tags: List[str]
    image: str
    published: bool
    read_time: str  # e.g., "5 min read"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BlogPostResponse(BaseModel):
    id: str
    title: str
    slug: str
    excerpt: str
    author: str
    category: str
    tags: List[str]
    image: str
    read_time: str
    created_at: datetime

class BlogPostsResponse(BaseModel):
    posts: List[BlogPostResponse]
    total: int
    page: int
    total_pages: int

# Newsletter Models
class NewsletterSubscribe(BaseModel):
    email: EmailStr

class NewsletterSubscription(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Response Models
class SuccessResponse(BaseModel):
    success: bool = True
    message: str
    id: Optional[str] = None