#!/usr/bin/env python3
"""
you’ve written and write an async routine called
wait_n that takes in 2 int arguments
"""
wait_random = __import__('0-basic_async_syntax').wait_random
from typing import List
import asyncio


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified
    max_delay and returns the list of delays.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): Maximum delay for wait_random.

    Returns:
        List[float]: List of delays.
    """
    list_delay = [wait_random(max_delay) for _ in range(n)]
    result = [await list_delay for list_delay
              in asyncio.as_completed(list_delay)]
    return result
