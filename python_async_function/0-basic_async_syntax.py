#!/usr/bin/env python3
"""
Write an asynchronous coroutine that
takes in an integer argument
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
	"""
	Waits for a random delay between 0 and max_delay seconds and returns the delay.

	Args:
		max_delay (int): The maximum delay in seconds.

	Returns:
		float: The actual delay waited.
	"""
	i = random.uniform(0, max_delay)
	await asyncio.sleep(i)
	return i
