from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import os
from typing import Optional

class Database:
    client: Optional[AsyncIOMotorClient] = None
    database: Optional[AsyncIOMotorDatabase] = None

db = Database()

async def get_database() -> AsyncIOMotorDatabase:
    return db.database

async def connect_to_mongo():
    """Create database connection"""
    db.client = AsyncIOMotorClient(os.environ['MONGO_URL'])
    db.database = db.client[os.environ['DB_NAME']]
    print("Connected to MongoDB")

async def close_mongo_connection():
    """Close database connection"""
    if db.client:
        db.client.close()
        print("Disconnected from MongoDB")

# Collections
async def get_contacts_collection():
    database = await get_database()
    return database.contacts

async def get_blog_posts_collection():
    database = await get_database()
    return database.blog_posts

async def get_newsletter_collection():
    database = await get_database()
    return database.newsletter_subscriptions