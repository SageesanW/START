from fastapi import APIRouter, HTTPException
from typing import List
from models import Contact, ContactCreate, SuccessResponse
from database import get_contacts_collection

router = APIRouter(prefix="/contacts", tags=["contacts"])

@router.post("", response_model=SuccessResponse)
async def create_contact(contact_data: ContactCreate):
    """Create a new contact form submission"""
    collection = await get_contacts_collection()
    
    # Create contact
    contact = Contact(
        name=contact_data.name,
        email=contact_data.email,
        company=contact_data.company,
        message=contact_data.message
    )
    
    # Insert into database
    result = await collection.insert_one(contact.dict())
    
    return SuccessResponse(
        message="Contact form submitted successfully. We'll get back to you within 24 hours.",
        id=contact.id
    )

@router.get("", response_model=List[Contact])
async def get_contacts():
    """Get all contacts (admin functionality)"""
    collection = await get_contacts_collection()
    
    cursor = collection.find().sort("created_at", -1)
    contacts = await cursor.to_list(length=1000)  # Limit to 1000 for performance
    
    return [Contact(**contact) for contact in contacts]

@router.get("/{contact_id}", response_model=Contact)
async def get_contact(contact_id: str):
    """Get a specific contact by ID"""
    collection = await get_contacts_collection()
    
    contact = await collection.find_one({"id": contact_id})
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    return Contact(**contact)

@router.put("/{contact_id}/status")
async def update_contact_status(contact_id: str, status: str):
    """Update contact status (admin functionality)"""
    collection = await get_contacts_collection()
    
    result = await collection.update_one(
        {"id": contact_id},
        {"$set": {"status": status, "updated_at": contact.updated_at}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    return SuccessResponse(message="Contact status updated successfully")