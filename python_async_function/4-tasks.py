#!/usr/bin/env python3
"""
The code is nearly identical to wait_n
except task_wait_random is being called
"""
wait_random = __import__('0-basic_async_syntax').wait_random
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n, max_delay):
    list_delay = [await task_wait_random(max_delay) for _ in range(n)]
    return list_delay
