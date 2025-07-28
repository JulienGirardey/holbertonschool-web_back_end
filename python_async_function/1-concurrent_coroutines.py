#!/usr/bin/env python3
"""
you’ve written and write an async routine called
wait_n that takes in 2 int arguments
"""
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n, max_delay):
    list_delay = [await wait_random(max_delay) for _ in range(n)]
    return list_delay
