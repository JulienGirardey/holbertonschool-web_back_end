#!/usr/bin/env python3
"""
Write an asynchronous coroutine that
takes in an integer argument
"""
import random
import asyncio

async def wait_random(max_delay=10):
    i = random.uniform(0, max_delay)
    await asyncio.sleep(i)
    return i
