import logging
import hashlib
import secrets
import string
from typing import Optional

logger = logging.getLogger(__name__)

def hash_password(password: str) -> str:
    """Hash a password for storing."""
    salt = secrets.token_hex(16)
    hashed_password = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), 100000)
    return f"{salt}:{hashed_password.hex()}"

def verify_password(stored_password: str, provided_password: str) -> bool:
    """Verify a stored password against one provided by user"""
    salt, stored_hash = stored_password.split(":")
    stored_hash = bytes.fromhex(stored_hash)
    new_hash = hashlib.pbkdf2_hmac('sha256', provided_password.encode('utf-8'), salt.encode('utf-8'), 100000)
    return new_hash == stored_hash

def generate_activation_code(length: int = 32) -> str:
    """Generate an activation code with a specified length."""
    characters = string.ascii_letters + string.digits
    return ''.join(secrets.choice(characters) for _ in range(length))

def generate_reset_code(length: int = 32) -> str:
    """Generate a reset code with a specified length."""
    return generate_activation_code(length)