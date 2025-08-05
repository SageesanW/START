from fastapi import APIRouter, HTTPException, Query
from typing import Optional
import re
from models import BlogPost, BlogPostCreate, BlogPostResponse, BlogPostsResponse
from database import get_blog_posts_collection
import math

router = APIRouter(prefix="/blog", tags=["blog"])

def generate_slug(title: str) -> str:
    """Generate URL-friendly slug from title"""
    slug = re.sub(r'[^a-zA-Z0-9\s]', '', title.lower())
    slug = re.sub(r'\s+', '-', slug)
    return slug.strip('-')

def calculate_read_time(content: str) -> str:
    """Calculate estimated read time based on content length"""
    words = len(content.split())
    minutes = max(1, round(words / 200))  # Average reading speed: 200 words/minute
    return f"{minutes} min read"

@router.get("/posts", response_model=BlogPostsResponse)
async def get_blog_posts(
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=50),
    category: Optional[str] = None
):
    """Get blog posts with pagination and optional category filter"""
    collection = await get_blog_posts_collection()
    
    # Build filter
    filter_dict = {"published": True}
    if category and category != "All":
        filter_dict["category"] = category
    
    # Count total documents
    total = await collection.count_documents(filter_dict)
    total_pages = math.ceil(total / limit)
    
    # Get posts
    skip = (page - 1) * limit
    cursor = collection.find(filter_dict).sort("created_at", -1).skip(skip).limit(limit)
    posts = await cursor.to_list(length=limit)
    
    # Convert to response format
    blog_posts = []
    for post in posts:
        blog_posts.append(BlogPostResponse(
            id=post["id"],
            title=post["title"],
            slug=post["slug"],
            excerpt=post["excerpt"],
            author=post["author"],
            category=post["category"],
            tags=post["tags"],
            image=post["image"],
            read_time=post["read_time"],
            created_at=post["created_at"]
        ))
    
    return BlogPostsResponse(
        posts=blog_posts,
        total=total,
        page=page,
        total_pages=total_pages
    )

@router.get("/posts/{slug}", response_model=BlogPost)
async def get_blog_post(slug: str):
    """Get a single blog post by slug"""
    collection = await get_blog_posts_collection()
    
    post = await collection.find_one({"slug": slug, "published": True})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    return BlogPost(**post)

@router.post("/posts", response_model=BlogPost)
async def create_blog_post(post_data: BlogPostCreate):
    """Create a new blog post (admin functionality)"""
    collection = await get_blog_posts_collection()
    
    # Generate slug and read time
    slug = generate_slug(post_data.title)
    read_time = calculate_read_time(post_data.content)
    
    # Check if slug already exists
    existing_post = await collection.find_one({"slug": slug})
    if existing_post:
        # Add number suffix to make it unique
        counter = 1
        while existing_post:
            new_slug = f"{slug}-{counter}"
            existing_post = await collection.find_one({"slug": new_slug})
            if not existing_post:
                slug = new_slug
                break
            counter += 1
    
    # Create blog post
    blog_post = BlogPost(
        title=post_data.title,
        slug=slug,
        content=post_data.content,
        excerpt=post_data.excerpt,
        author=post_data.author,
        category=post_data.category,
        tags=post_data.tags,
        image=post_data.image,
        published=post_data.published,
        read_time=read_time
    )
    
    # Insert into database
    await collection.insert_one(blog_post.dict())
    
    return blog_post