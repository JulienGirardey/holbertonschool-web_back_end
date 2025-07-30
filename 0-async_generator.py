#!/usr/bin/env python3
"""
coroutine called async_generator that takes no arguments
"""
import asyncio
import random

async def async_generator():
    for _ in range(10):
        await asyncio.sleep(1)
        result = random.uniform(0, 10)
        yield result
