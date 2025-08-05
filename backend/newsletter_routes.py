from fastapi import APIRouter, HTTPException
from models import NewsletterSubscribe, NewsletterSubscription, SuccessResponse
from database import get_newsletter_collection

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

@router.post("/subscribe", response_model=SuccessResponse)
async def subscribe_to_newsletter(subscription_data: NewsletterSubscribe):
    """Subscribe to newsletter"""
    collection = await get_newsletter_collection()
    
    # Check if email already exists
    existing_subscription = await collection.find_one({"email": subscription_data.email})
    if existing_subscription:
        if existing_subscription.get("subscribed", True):
            return SuccessResponse(message="You're already subscribed to our newsletter!")
        else:
            # Reactivate subscription
            await collection.update_one(
                {"email": subscription_data.email},
                {"$set": {"subscribed": True}}
            )
            return SuccessResponse(message="Welcome back! Your subscription has been reactivated.")
    
    # Create new subscription
    subscription = NewsletterSubscription(email=subscription_data.email)
    
    # Insert into database
    await collection.insert_one(subscription.dict())
    
    return SuccessResponse(
        message="Thank you for subscribing! You'll receive our latest updates and insights.",
        id=subscription.id
    )

@router.post("/unsubscribe", response_model=SuccessResponse)
async def unsubscribe_from_newsletter(subscription_data: NewsletterSubscribe):
    """Unsubscribe from newsletter"""
    collection = await get_newsletter_collection()
    
    result = await collection.update_one(
        {"email": subscription_data.email},
        {"$set": {"subscribed": False}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Email not found in our subscription list")
    
    return SuccessResponse(message="You have been unsubscribed from our newsletter.")